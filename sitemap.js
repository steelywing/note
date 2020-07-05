const fs = require('fs');
const path = require('path');
const md = require('markdown-it')();
const glob = require('glob');
const HOSTNAME = 'https://steelywing.github.io/';
const BASE_URL = '/note/#/';
let sidebars = [];

function getMarkdownLinks(tokens) {
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
            links = links.concat(getMarkdownLinks(token.children));
        }
    });
    return links;
}

function loadSidebar(sidebar) {
    sidebar = path.resolve(sidebar);
    let dir = path.dirname(sidebar);
    let links = [];

    let file = fs.readFileSync(sidebar, { encoding: 'utf8' });
    let tokens = md.parse(file);
    links = getMarkdownLinks(tokens);
    console.log(links);
    return links.map((link) => {
        return path.relative('', path.resolve(dir, link));
    });

    return links;
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
        links = loadSidebar(sidebar);
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
