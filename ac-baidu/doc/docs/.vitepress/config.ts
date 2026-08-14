import { defineConfig } from "vitepress"
export default defineConfig({
  title: "Search Engine Cleaner",
  description: "百度、Google、Bing、DuckDuckGo 与 360 搜索增强脚本的配置中心",
  lang: "zh-CN",
  head: [
    ["meta", { name: "keywords", content: "Search Engine Cleaner,油猴脚本,搜索增强,搜索结果优化" }]
  ],
  base: "/search-engine-cleaner/",
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    lastUpdatedText: '更新',
    logo: "/favicon.ico",
    siteTitle: "Search Engine Cleaner",
    outline: {
      level: 1,
      label: '页面导航',
    },
    socialLinks: [{ icon: "github", link: "https://github.com/lingling225/search-engine-cleaner" }],
    nav: [
      {
        text: "配置中心",
        link: "/pages/custom/"
      },
      { text: "使用说明", link: "/pages/home/use" },
      { text: "问题反馈", link: "https://github.com/lingling225/search-engine-cleaner/issues", target: "_blank" },
    ],
    sidebar: {
      "/pages": [
        {
          text: "自定义配置",
          items: [
            { text: "基础配置", link: "/pages/custom/#main" },
            { text: "百度配置", link: "/pages/custom/#baidu" },
            { text: "Google 配置", link: "/pages/custom/#google" },
            { text: "Bing 配置", link: "/pages/custom/#bing" },
            { text: "DuckDuckGo 配置", link: "/pages/custom/#duckduckgo" },
            { text: "360 / 好搜配置", link: "/pages/custom/#haosou" },
          ]
        },
        {
          text: "帮助",
          items: [
            { text: "使用说明", link: "/pages/home/use" },
            { text: "常见问题", link: "/pages/articles/problems" },
            { text: "更新日志", link: "/pages/articles/history" },
          ]
        },
      ]
    }
  },
  markdown: {
    headers: {
      level: [0, 0]
    },
    // light: #f9fafb, dark: --vp-code-block-bg
    theme: { light: "github-light", dark: "github-dark" }
  },
  sitemap: {
    hostname: 'https://lingling225.github.io/search-engine-cleaner/'
  }
})
