import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  title: "YshのBlog",
  description: "这是使用vuepress-reco进行的第一次配置",
  dest: './dist',  // 打包文件的位置
  // port: 9074,  // 运行端口号
  // 添加到html的head顶部的东西
  head: [
    ['link', { rel: 'icon', href: '/asstes/index-img/head.png' }],
    ['meta', { name: 'keywords', content: 'Ysh的个人博客网页' }],  
    ['meta', { name: 'description', content: 'Ysh的个人博客网页' }],  
    ['meta', { name: 'author', content: 'Ysh' }],  
    ['meta', { name: 'robots', content: 'all' }],  
  ],

  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/asstes/index-img/logo.gif",
    author: "Ysh",
    authorAvatar: "/asstes/index-img/head.png",
    docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",
    // series 为原 sidebar
    series: {
      "/docs/theme-reco/": [
        {
          text: "module one",
          children: ["home", "theme"],
        },
        {
          text: "module two",
          children: ["api", "plugin"],
        },
      ],
    },
    navbar: [
      { text: "主页", link: "/" },
      { text: "Categories", link: "/categories/reco/1/" },
      { text: "Tags", link: "/tags/tag1/1/" },
      {
        text: "Docs",
        children: [
          { text: "vuepress-reco", link: "/docs/theme-reco/theme" },
          { text: "vuepress-theme-reco", link: "/blogs/other/guide" },
        ],
      },
    ],
    // valineConfig 配置与 1.x 一致
    // valineConfig: {
    //   appId: 'xxx',
    //   appKey: 'xxx',
    //   placeholder: '填写邮箱可以收到回复提醒哦！',
    //   verify: true, // 验证码服务
    //   // notify: true,
    //   recordIP: true,
    //   // hideComments: true // 隐藏评论
    // },
  }),
  // debug: true,
});
