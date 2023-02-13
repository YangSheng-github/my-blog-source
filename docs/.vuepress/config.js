module.exports = {
    title: 'YshのBlog日常',
    description: '日常一写blog',
    base: '/my-blog/',
    /*
    类型: Array
    默认值: []
    指定额外的需要被监听的文件。
    你可以监听任何想监听的文件，文件变动将会触发 vuepress 重新构建，并实时更新。
    */
    extraWatchFiles: [
        '/docs/.vuepress/config.js',
        '/ode_modules/*',
    ],
    locales: {
        '/': {
          lang: 'zh-CN'
        }
      },
    theme: 'reco',
    themeConfig: {
        nav: [{
                text: '首页',
                link: '/'
            },
            {
                text: 'Ysh的 JavaScript 博客',
                items: [{
                        text: 'Github',
                        link: 'https://github.com/mqyqingfeng'
                    },
                    {
                        text: '掘金',
                        link: 'https://juejin.cn/user/712139234359182/posts'
                    }
                ]
            },
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
        ],
        subSidebar: 'auto',
        logo: '/blog/vuepress/avatar.gif',
        sidebar: [{
                title: '欢迎学习',
                path: '/',
                collapsable: false, // 不折叠
                children: [{
                    title: "学前必读",
                    path: "/"
                }]
            },
            {
                title: "基础学习",
                path: '/handbook/ConditionalTypes',
                collapsable: false, // 不折叠
                children: [{
                        title: "条件类型",
                        path: "/handbook/ConditionalTypes"
                    },
                    {
                        title: "泛型",
                        path: "/handbook/Generics"
                    }
                ],
            }
        ]
    }
}