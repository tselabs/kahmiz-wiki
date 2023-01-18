export default {
    // These are app level configs.
    lang: 'zh-CN',
    title: '卡赫米兹',
    description: '欢迎来到卡赫米兹',
    appearance: true,
    ignoreDeadLinks: true,
    lastUpdated: true
    
      themeConfig: {
    
    logo: 'https://alpha-q3.sourcegcdn.com/2023/01/17/VyfhXyJy.png',
    siteTitle: '卡赫米兹',
    sidebar: {
      // This sidebar gets displayed when user is
      // under `guide` directory.
      '/guide/': [
        {
          text: '指南',
            collapsible: true,
          items: [
            { text: '引导', link: '/guide/index' }, // /guide/index.md
            { text: '介绍', link: '/guide/about' }
          ]
        }
      ]
    },
    nav: [
      { text: '指南', link: '/guide' },
      {
        text: '导航',
        items: [
          { text: '新闻快讯', link: 'https://kn.litek.top' },
          { text: '加入群聊', link: 'https://jq.qq.com/?_wv=1027&k=lab8ObGV' }
        ]
      }
        ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/xiaolilab/kahmiz-wiki' }
        ],
    footer: {
      message: '基于 CC BY-NC 4.0 协议分发内容',
      copyright: 'Copyright 版权所有 © 2022-2023 卡赫米兹全体成员'
    },
    editLink: {
      pattern: 'https://github.com/xiaolilab/kahmiz-wiki/edit/main/docs/:path',
      text: '在 GitHub 上编辑本页'
    },
    lastUpdatedText: '本页最后更新于',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
      }
  }
}
  
