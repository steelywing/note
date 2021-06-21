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
    navbar: {
      title: 'Steely Wing Note',
      logo: {
        alt: 'Steely Wing Note',
        src: 'img/logo.svg',
      },
      items: [
        /*{
          type: 'doc',
          docId: 'index',
          position: 'left',
          label: 'Note',
        },*/
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
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en", "zh"],
        indexPages: true,
        indexBlog: false,
      },
    ],
  ],
};
