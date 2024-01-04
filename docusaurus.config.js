// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Procyon',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://procyon.codnect.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'codnect', // Usually your GitHub org/user name.
  projectName: 'procyon', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  customFields: {
    releaseAnnouncement: '1.0.0 is now out!',
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        /*blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },*/
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.png',

      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Procyon',
        logo: {
          alt: 'Procyon Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            label: 'Why Procyon',
            position: 'right',
            to: '/docs/why-procyon',
          },
          {
            type: 'dropdown',
            label: 'Learn',
            position: 'right',
            items: [
              {
                label: 'Quick Start',
                to: '/docs/quick-start',
              },
              {
                label: 'Guides',
                to: '/docs/category/guides',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'GitHub',
            position: 'right',
            items: [
              {
                href: 'https://github.com/codnect/procyon',
                label: 'Repository',
              },
              {
                label: 'Discussions',
                href: 'https://github.com/codnect/procyon/discussions',
              },
            ],
          },
          {
            label: 'Go to Codnect',
            href: 'https://codnect.io',
          },
          //{to: '/blog', label: 'Blog', position: 'right'},
        ],
      },
      footer: {
        links: [
          {
            title: 'Our Open Source Projects',
            items: [
              {
                label: 'Procyon',
                href: 'https://www.procyon.codnect.io',
              },
              {
                label: 'Logy',
                href: 'https://www.logy.codnect.io',
              },
              {
                label: 'Chrono',
                href: 'https://www.chrono.codnect.io',
              },
              {
                label: 'Reflector',
                href: 'https://www.reflector.codnect.io',
              },
            ],
          },
          {
            title: 'Learn',
            items: [
              {
                label: 'Quick Start',
                to: '/docs/quick-start',
              },
              {
                label: 'Guides',
                to: '/docs/category/guides',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub Discussions',
                href: 'https://github.com/codnect/procyon/discussions',
              },
              /*{
                label: 'Discord',
                href: 'https://discordapp.com/invite/',
              },*/
            ],
          },
          {
            title: 'More',
            items: [
              /*{
                label: 'Blog',
                to: '/blog',
              },*/
              {
                label: 'GitHub',
                href: 'https://github.com/codnect/procyon',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Procyon by Codnect`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;