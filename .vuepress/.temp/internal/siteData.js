export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"YshのBlog\",\"description\":\"这是使用vuepress-reco进行的第一次配置\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/asstes/index-img/head.png\"}],[\"meta\",{\"name\":\"keywords\",\"content\":\"Ysh的个人博客网页\"}],[\"meta\",{\"name\":\"description\",\"content\":\"Ysh的个人博客网页\"}],[\"meta\",{\"name\":\"author\",\"content\":\"Ysh\"}],[\"meta\",{\"name\":\"robots\",\"content\":\"all\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
