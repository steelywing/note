const glob = require('glob');
const path = require('path');
const fs = require('fs');
const HOSTNAME = 'https://steelywing.github.io/';
const BASE_URL = '/note/#/';

class Sidebar {
    constructor(file) {
        if (typeof file === 'string') {
            this.load(file);
        }
    }

    load(file) {
        const md = require('markdown-it')();

        this.file = path.resolve(file);
        this.dir = path.dirname(this.file);

        this.tokens = md.parse(
            fs.readFileSync(this.file, { encoding: 'utf8' })
        );
    }

    static extractLinks(tokens) {
        let links = [];

        tokens.forEach((token) => {
            if (Array.isArray(token.attrs)) {
                token.attrs.forEach((attr) => {
                    if (attr[0] === 'href') {
                        links.push(attr[1]);
                    }
                })
            }
            if (Array.isArray(token.children)) {
                links = links.concat(this.extractLinks(token.children));
            }
        });

        return links;
    }

    getLinks() {
        if (!Array.isArray(this.tokens)) {
            return [];
        }

        let links = this.constructor.extractLinks(this.tokens);

        return links.map((link) => {
            return path.relative('', path.resolve(this.dir, link));
        });
    }
}

new Promise((resolve, reject) => {
    glob('**/_sidebar.md', (error, sidebars) => {
        if (error) {
            reject(error);
        } else {
            resolve(sidebars);
        }
    });
}).then((sidebars) => {
    const { SitemapStream, streamToPromise } = require('sitemap')
    const stream = new SitemapStream({ hostname: HOSTNAME })
    sidebars.forEach((sidebar) => {
        console.log('Reading ' + sidebar);
        links = (new Sidebar(sidebar)).getLinks();
        console.log(links);
        links.forEach(link => {
            link = link.replace(/\\/g, '/');
            stream.write({ url: BASE_URL + link })
        });
    });
    stream.end()
    streamToPromise(stream).then(
        data => {
            console.log('Writing sitemap.xml');
            fs.writeFileSync('sitemap.xml', data.toString())
            // console.log(data.toString());
        }
    );
});
