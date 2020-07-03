const fs = require('fs');
const path = require('path');
const marked = require('marked');
const cheerio = require('cheerio');
const glob = require('glob');
const HOSTNAME = 'https://steelywing.github.io/';
const BASE_URL = '/note/#/';
let sidebars = [];

function loadSidebar(sidebar) {
    sidebar = path.resolve(sidebar);
    let dir = path.dirname(sidebar);
    let links = [];

    let file = fs.readFileSync(sidebar, { encoding: 'utf8' });
    // console.log(marked(sidebar));
    const $ = cheerio.load(marked(file));
    $('a').each((i, e) => {
        let url = $(e).attr('href');
        links.push(path.relative('', path.resolve(dir, url)));
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
