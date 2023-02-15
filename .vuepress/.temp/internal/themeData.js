export const themeData = JSON.parse("{\"style\":\"@vuepress-reco/style-default\",\"logo\":\"/asstes/index-img/logo.gif\",\"author\":\"Ysh\",\"authorAvatar\":\"/asstes/index-img/head.png\",\"docsRepo\":\"https://github.com/vuepress-reco/vuepress-theme-reco-next\",\"docsBranch\":\"main\",\"docsDir\":\"example\",\"lastUpdatedText\":\"\",\"series\":{\"/docs/\":[{\"text\":\"系统集成项目管理工程师\",\"collapsible\":true,\"children\":[\"/docs/system-SIPME/home\",\"/docs/system-SIPME/theme\"]}]},\"navbar\":[{\"text\":\"主页\",\"link\":\"/\"},{\"text\":\"Categories\",\"link\":\"/categories/reco/1/\"},{\"text\":\"Tags\",\"link\":\"/tags/tag1/1/\"},{\"text\":\"Docs\",\"children\":[{\"text\":\"vuepress-reco\",\"link\":\"/docs/system-SIPME/theme\"},{\"text\":\"vuepress-theme-reco\",\"link\":\"/blogs/other/guide\"}]}]}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
