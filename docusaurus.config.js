import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Steely Wing Note',
  tagline: '夜羽筆記',
  url: 'https://steelywing.github.io',
  baseUrl: '/note/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'steelywing', // GitHub org/user name.
  projectName: 'note', // repo name.
  trailingSlash: true,
  markdown: {
    mermaid: true,
  },
  themeConfig: {
    prism: {
      // https://prismjs.com/#supported-languages
      additionalLanguages: [
        'bash',
        'php',
        'ini',
        'toml',
        'nginx',
        'csharp',
        'powershell',
        'apacheconf',
      ],
    },
    docs: {
      sidebar: {
        hideable: true,
      }
    },
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
          to: 'blog/',
          label: 'Blog',
          position: 'left',
        },
        {
          // type: 'doc',
          // docId: 'Note/README',
          to: '/',
          label: 'Note',
          position: 'left',
          activeBasePath: 'Note',
        },
        {
          // type: 'doc',
          // docId: 'Linux/README',
          to: 'Linux',
          label: 'Linux',
          position: 'left',
        },
        {
          to: 'Windows',
          label: 'Windows',
          position: 'left',
        },
        {
          to: 'Network',
          label: 'Network',
          position: 'left',
        },
        {
          to: 'Programming',
          label: 'Programming',
          position: 'left',
        },
        {
          to: 'Hardware',
          label: 'Hardware',
          position: 'left',
        },
        {
          to: 'Game',
          label: 'Game',
          position: 'left',
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
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/steelywing/note/edit/master/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          blogSidebarCount: 16,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: [
            './src/css/custom.css',
          ]
        },
      },
    ],
  ],
  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        language: ["en", "zh"],
        // language: ["en"],
        indexPages: true,
        indexBlog: true,
        indexDocs: true,
        // docsRouteBasePath: '/',
        // highlightSearchTermsOnTargetPage: true,
      },
    ],
    '@docusaurus/theme-mermaid',
  ],
  plugins: [
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
  stylesheets: [
    {
      href: '/note/katex/katex.min.css',
      type: 'text/css',
    },
  ],
};
