module.exports = {
  dest: 'dist',

  title: 'Hello VuePress',
  description: 'Just playing around',
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' }],
  ],

  themeConfig: {
    sidebar: [
      '/',
      {
        title: 'Group 1',
        collapsable: false,
        children: [
          ['/group1/page1', '페이지 1'],
          ['/group1/page2', '페이지 2'],
        ],
      },
      {
        title: 'Group 2',
        collapsable: false,
        children: [
          ['/group2/page3', '페이지 3'],
          ['/group2/page4', '페이지 4'],
        ],
      },
    ],
  },

  markdown: {
    lineNumbers: true,
  },

  plugins: {
    '@vuepress/back-to-top': {},
    '@vuepress/medium-zoom': {
      selector: '.theme-default-content img',
      options: {
        background: '#26262B',
        margin: 16,
      },
    },
  },
};
