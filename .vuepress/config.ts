import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  title: "YshのBlog",
  description: "这是使用vuepress-reco进行的第一次配置",
  dest: './.vuepress/dist',  // 打包文件的位置
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
    author: "-Ysh-",
    authorAvatar: "/asstes/index-img/head.png",
    // docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    // docsBranch: "main",
    // docsDir: "example",
    lastUpdatedText: "",
    catalogTitle: '自定义目录标题',
    // series 为原 sidebar
    series: {
      "/docs/": [
         {
          text: "系统集成项目管理工程师",
          collapsible: true,
          children: ["/docs/system-SIPME/home", "/docs/system-SIPME/theme"],
        },
        {
          text: "JavaScript高级程序设计",
          collapsible: true,
          children: ["/docs/JavaScript/home"],
        },
        {
          text: "前端面试题",
          collapsible: true,
          children: ["/docs/web-interview/home"],
        },
      ],
    },
    navbar: [
      { text: "主页", link: "/" },
      { text: "Blog_分类", link: "/categories/jishuwenzhang/1/" },
      { text: "Blog_标签", link: "/tags/WEBqianduanjishu/1/" },
      {
        text: "文档",
        children: [
          { text: "系统集成项目管理工程师", link: "/docs/system-SIPME/home" },
          { text: "JavaScript高级程序设计", link: "/docs/JavaScript/home" },
          { text: "前端面试题", link: "/docs/web-interview/home" },
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
