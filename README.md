# Search Engine Cleaner - 搜索增强

Search Engine Cleaner 是面向主流搜索引擎的用户脚本，保留原项目的搜索增强与自定义配置能力，并清理与核心功能无关的脚本、页面、推广内容和运行依赖。

## 支持范围

| 搜索引擎 | 页面与能力 |
| --- | --- |
| 百度 | 首页、文字、图片、视频、学术等原匹配范围；重定向、广告清理、拦截、自动翻页、Favicon、编号、布局与主题 |
| Google | 首页、文字、图片、视频、学术等原匹配范围；重定向、广告清理、拦截、自动翻页、Favicon、编号、布局与主题 |
| Bing | 首页、文字、图片、视频等原匹配范围；重定向、广告清理、拦截、自动翻页、Favicon、编号、布局与主题 |
| DuckDuckGo | 原匹配范围；新标签优化、自动翻页、布局、主题和自定义样式 |
| 360 / 好搜 | 原匹配范围；重定向、广告清理、拦截、布局、主题和自定义样式 |

所有站点继续支持基础配置、单双多列、护眼与暗色模式、背景图及自定义 Less.js。配置数据沿用原来的 `ACConfig`，便于从原脚本迁移。

## 安装

1. 安装 [Tampermonkey](https://www.tampermonkey.net/) 或其他兼容的用户脚本管理器。
2. 打开 [Search-Engine-Cleaner.user.js](https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/Search-Engine-Cleaner.user.js) 并确认安装。
3. 访问任一支持的搜索引擎，或从脚本管理器菜单打开配置中心。

脚本发布后也可以直接访问 [在线配置中心](https://lingling225.github.io/search-engine-cleaner/pages/custom/)。配置页需要已启用本脚本，才能读取、预览和保存设置。

## 本地开发

主用户脚本和 Less 资源无需编译。配置站使用 VitePress：

```powershell
cd ac-baidu/doc
npm ci
npm run type-check
npm run docs:dev
```

生成 GitHub Pages 静态文件：

```powershell
npm run docs:build
```

输出目录为 `ac-baidu/doc/docs/.vitepress/dist`。推送到 `main` 后，仓库工作流会自动构建并部署 GitHub Pages。

## 项目来源

本项目基于 [langren1353/GM_script](https://github.com/langren1353/GM_script) 中的 AC-Baidu 用户脚本维护，保留原作者 AC（langren1353）的署名；当前维护与精简工作由 [lingling225](https://github.com/lingling225) 完成。

## 许可证

本项目按 [GNU General Public License v3.0 only](LICENSE) 发布，SPDX 标识为 `GPL-3.0-only`。衍生发布需保留相应版权、来源与许可证说明。
