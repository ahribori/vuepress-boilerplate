module.exports = {
  dest: 'dist',

  title: 'Hello VuePress',
  description: 'Just playing around',

  /**
   * https://vuepress.vuejs.org/default-theme-config/
   */
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
      // medium-zoom options here
      // See: https://github.com/francoischalifour/medium-zoom#options
      options: {
        margin: 16,
      },
    },
  },
};
