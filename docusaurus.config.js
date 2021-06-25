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
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
    },
    navbar: {
      title: 'Steely Wing Note',
      logo: {
        alt: 'Steely Wing Note',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'Note/index',
          position: 'left',
          label: 'Note',
        },
        {
          type: 'doc',
          docId: 'Linux/Bash',
          position: 'left',
          label: 'Linux',
        },
        {
          type: 'doc',
          docId: 'Network/index',
          position: 'left',
          label: 'Network',
        },
        {
          type: 'doc',
          docId: 'Programming/C-Sharp',
          position: 'left',
          label: 'Programming',
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
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        language: ["en", "zh"],
        indexPages: true,
        indexBlog: false,
      },
    ],
  ],
};
