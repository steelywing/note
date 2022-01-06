/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Steely Wing Note',
  tagline: '夜羽筆記',
  url: 'https://steelywing.github.io',
  baseUrl: '/note/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'steelywing', // Usually your GitHub org/user name.
  projectName: 'note', // Usually your repo name.
  trailingSlash: true,
  themeConfig: {
    prism: {
      additionalLanguages: [
        'ini',
        'csharp',
        'powershell',
        'apacheconf',
      ],
    },
    hideableSidebar: true,
    colorMode: {
      defaultMode: 'dark',
    },
    navbar: {
      title: 'Steely Wing',
      /*logo: {
        alt: 'Steely Wing Note',
        src: 'img/logo.svg',
      },*/
      items: [
        {
          // type: 'doc',
          // docId: 'Note/README',
          to: '/',
          position: 'left',
          label: 'Note',
          activeBasePath: 'Note',
        },
        {
          // type: 'doc',
          // docId: 'Linux/README',
          to: 'Linux',
          position: 'left',
          label: 'Linux',
        },
        {
          to: 'Windows',
          position: 'left',
          label: 'Windows',
        },
        {
          to: 'Network',
          position: 'left',
          label: 'Network',
        },
        {
          to: 'Programming',
          position: 'left',
          label: 'Programming',
        },
        {
          to: 'Game',
          position: 'left',
          label: 'Game',
        },
        {
          href: 'https://github.com/steelywing/note',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        /*{
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/steelywing',
            },
          ],
        },*/
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Steely Wing 夜羽`,
    },
    googleAnalytics: {
      trackingID: 'G-0KG7P5XKJP',
      // anonymizeIP: true, // Should IPs be anonymized?
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/steelywing/note/edit/master/',
          remarkPlugins: [require('remark-math')],
          rehypePlugins: [require('rehype-katex')],
        },
        theme: {
          customCss: [
            require.resolve('./node_modules/katex/dist/katex.min.css'),
          ]
        },
      },
    ],
  ],
  plugins: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        language: ["en", "zh"],
        indexPages: true,
        indexBlog: false,
        indexDocs: true,
        // docsRouteBasePath: '/',
        highlightSearchTermsOnTargetPage: true,
      },
    ],
    /*[
      // require.resolve('../docusaurus-search-local'),
      require.resolve('@cmfcmf/docusaurus-search-local'),
      {
        language: ["en", "zh"],
        // style: "none",
        docsRouteBasePath: '/',
      }
    ]*/
  ],
};
