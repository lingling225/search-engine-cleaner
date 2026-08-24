// ==UserScript==
// @name         Search Engine Cleaner - 搜索增强
// @namespace    https://github.com/lingling225/search-engine-cleaner
// @description  保留原版全部配置与功能，增强百度、Google、Bing、DuckDuckGo 和 360 搜索的搜索体验。
// @description:en Enhance Baidu, Google, Bing, DuckDuckGo and 360 Search while preserving all original configuration and features.
// @author       AC; modified by lingling225
// @license      GPL-3.0-only
// @create     2015-11-25
// @run-at     document-start
// @version    1.0.25
// @connect    baidu.com
// @connect    google.com
// @connect    google.com.hk
// @connect    google.com.jp
// @connect    bing.com
// @connect    duckduckgo.com
// @connect    so.com
// @connect    *
// @include    *://ipv6.baidu.com/*
// @include    *://www.baidu.com/*
// @include    *://www1.baidu.com/*
// @include    *://m.baidu.com/*
// @include    *://xueshu.baidu.com/s*
// @include    *://www.so.com/s?*
// @include    *://*.bing.com/*
// @include    /^https?:\/\/(?:(?:www|encrypted|images|video)\.)?(?:google\.com\.af|google\.com\.ag|google\.com\.ar|google\.com\.au|google\.com\.bd|google\.com\.bh|google\.com\.bn|google\.com\.bo|google\.com\.br|google\.com\.bz|google\.com\.co|google\.com\.cu|google\.com\.cy|google\.com\.do|google\.com\.ec|google\.com\.eg|google\.com\.et|google\.com\.fj|google\.com\.gh|google\.com\.gi|google\.com\.gt|google\.com\.hk|google\.com\.jm|google\.com\.kh|google\.com\.kw|google\.com\.lb|google\.com\.ly|google\.com\.mm|google\.com\.mt|google\.com\.mx|google\.com\.my|google\.com\.na|google\.com\.ng|google\.com\.ni|google\.com\.np|google\.com\.om|google\.com\.pa|google\.com\.pe|google\.com\.pg|google\.com\.ph|google\.com\.pk|google\.com\.pr|google\.com\.py|google\.com\.qa|google\.com\.sa|google\.com\.sb|google\.com\.sg|google\.com\.sl|google\.com\.sv|google\.com\.tj|google\.com\.tr|google\.com\.tw|google\.com\.ua|google\.com\.uy|google\.com\.vc|google\.com\.vn|google\.co\.ao|google\.co\.bw|google\.co\.ck|google\.co\.cr|google\.co\.id|google\.co\.il|google\.co\.in|google\.co\.jp|google\.co\.ke|google\.co\.kr|google\.co\.ls|google\.co\.ma|google\.co\.mz|google\.co\.nz|google\.co\.th|google\.co\.tz|google\.co\.ug|google\.co\.uk|google\.co\.uz|google\.co\.ve|google\.co\.vi|google\.co\.za|google\.co\.zm|google\.co\.zw|google\.cat|google\.com|google\.ad|google\.ae|google\.al|google\.am|google\.as|google\.at|google\.az|google\.ba|google\.be|google\.bf|google\.bg|google\.bi|google\.bj|google\.bs|google\.bt|google\.by|google\.ca|google\.cd|google\.cf|google\.cg|google\.ch|google\.ci|google\.cl|google\.cm|google\.cn|google\.cv|google\.cz|google\.de|google\.dj|google\.dk|google\.dm|google\.dz|google\.ee|google\.es|google\.fi|google\.fm|google\.fr|google\.ga|google\.ge|google\.gg|google\.gl|google\.gm|google\.gr|google\.gy|google\.hn|google\.hr|google\.ht|google\.hu|google\.ie|google\.im|google\.iq|google\.is|google\.it|google\.je|google\.jo|google\.kg|google\.ki|google\.kz|google\.la|google\.li|google\.lk|google\.lt|google\.lu|google\.lv|google\.md|google\.me|google\.mg|google\.mk|google\.ml|google\.mn|google\.mu|google\.mv|google\.mw|google\.ne|google\.nl|google\.no|google\.nr|google\.nu|google\.pl|google\.pn|google\.ps|google\.pt|google\.ro|google\.rs|google\.ru|google\.rw|google\.sc|google\.se|google\.sh|google\.si|google\.sk|google\.sm|google\.sn|google\.so|google\.sr|google\.st|google\.td|google\.tg|google\.tl|google\.tm|google\.tn|google\.to|google\.tt|google\.vu|google\.ws)\/(?:search|webhp)(?:[/?#].*)?$/
// @include    *://scholar.google.com/scholar*
// @include    *://duckduckgo.com/*
// @include    *://*.duckduckgo.com/*
// @include    https://lingling225.github.io/search-engine-cleaner/pages/custom/
// @include    https://lingling225.github.io/search-engine-cleaner/pages/custom/index.html
// @exclude    https://zhidao.baidu.com/*
// @exclude    https://*.zhidao.baidu.com/*
// @exclude    https://www.baidu.com/img/*
// @exclude    https://lens.google.com/*
// @supportURL  https://github.com/lingling225/search-engine-cleaner/issues
// @home-url   https://github.com/lingling225/search-engine-cleaner
// @homepageURL  https://github.com/lingling225/search-engine-cleaner
// @downloadURL https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/Search-Engine-Cleaner.user.js
// @updateURL   https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/Search-Engine-Cleaner.user.js
// @copyright  2015-2026, AC; modifications 2026, lingling225
// @lastmodified  2026-08-24
// @feedback-url  https://github.com/lingling225/search-engine-cleaner/issues
// @note    Source: https://github.com/langren1353/GM_script (GPL-3.0-only)
// @note    1.0.25 修复加载动画无法结束，并保持浏览器脚本初始化可见。
// @note    1.0.19 强制刷新布局资源缓存，修复 Google 结果根节点动态网格命中范围。
// @note    1.0.18 隔离五个搜索引擎的六种布局，修复自动分页重复结果容器。
// @note    1.0.17 解除 Google 分类导航外层固定宽度和偏移，自适应结果区域居中。
// @note    1.0.12 修复百度三列、四列网格轨道塌陷导致的卡片重叠。
// @note    1.0.10 调整 Bing 搜索框和导航栏居中宽度，避免顶部控件拥挤。
// @note    1.0.9 修复 Bing 顶部右侧账号和自定义按钮被居中布局挤下。
// @note    1.0.8 修复百度和 360 搜索开启 Favicon、编号后的标题重叠。
// @note    1.0.7 统一百度、DuckDuckGo 和 360 搜索结果的单列到四列布局宽度。
// @note    1.0.6 修复 DuckDuckGo 单列居中模式结果列表仍偏左。
// @note    1.0.5 修复百度 AI 总结卡片内层边框溢出。
// @note    1.0.4 修复百度百科知识卡片内容区溢出与错位。
// @note    1.0.3 修复百度、Google 和 360 搜索结果的宽度、对齐与多列布局问题。
// @note    1.0.1 重构百度响应式布局，修复宽屏溢出、顶部错位和登录按钮被裁切。
// @note    1.0.0 保留百度、Google、Bing、DuckDuckGo、360 搜索的完整配置与功能，清理无关内容。
// @resource  baiduCommonStyle   https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/newcss/baiduCommonStyle.less?v=1.0.25
// @resource  baiduOnePageStyle  https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/newcss/baiduOnePageStyle.less?v=1.0.25
// @resource  baiduTwoPageStyle  https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/newcss/baiduTwoPageStyle.less?v=1.0.25
// @resource  baiduThreePageStyle https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/newcss/baiduThreePageStyle.less?v=1.0.25
// @resource  baiduFourPageStyle  https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/newcss/baiduFourPageStyle.less?v=1.0.25
// @resource  googleCommonStyle  https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/newcss/googleCommonStyle.less?v=1.0.25
// @resource  googleOnePageStyle https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/newcss/googleOnePageStyle.less?v=1.0.25
// @resource  googleTwoPageStyle https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/newcss/googleTwoPageStyle.less?v=1.0.25
// @resource  googleThreePageStyle https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/newcss/googleThreePageStyle.less?v=1.0.25
// @resource  googleFourPageStyle  https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/newcss/googleFourPageStyle.less?v=1.0.25
// @resource  bingCommonStyle    https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/newcss/bingCommonStyle.less?v=1.0.25
// @resource  bingOnePageStyle   https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/newcss/bingOnePageStyle.less?v=1.0.25
// @resource  bingTwoPageStyle   https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/newcss/bingTwoPageStyle.less?v=1.0.25
// @resource  bingThreePageStyle  https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/newcss/bingThreePageStyle.less?v=1.0.25
// @resource  bingFourPageStyle   https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/newcss/bingFourPageStyle.less?v=1.0.25
// @resource  duckCommonStyle    https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/newcss/duckCommonStyle.less?v=1.0.25
// @resource  duckOnePageStyle   https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/newcss/duckOnePageStyle.less?v=1.0.25
// @resource  duckTwoPageStyle   https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/newcss/duckTwoPageStyle.less?v=1.0.25
// @resource  duckThreePageStyle  https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/newcss/duckThreePageStyle.less?v=1.0.25
// @resource  duckFourPageStyle   https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/newcss/duckFourPageStyle.less?v=1.0.25
// @resource  haosouCommonStyle  https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/newcss/haosouCommonStyle.less?v=1.0.25
// @resource  haosouOnePageStyle https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/newcss/haosouOnePageStyle.less?v=1.0.25
// @resource  haosouTwoPageStyle  https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/newcss/haosouTwoPageStyle.less?v=1.0.25
// @resource  haosouThreePageStyle https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/newcss/haosouThreePageStyle.less?v=1.0.25
// @resource  haosouFourPageStyle  https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/newcss/haosouFourPageStyle.less?v=1.0.25
// @resource  HuYanStyle         https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/newcss/HuYanStyle.less?v=1.0.25
// @resource  BgAutoFit          https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/newcss/BgAutoFit.less?v=1.0.25
// @resource  HuaHua-ACDrakMode  https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/newcss/HuaHua-ACDrakMode.less?v=1.0.25
// @resource  baiduLiteStyle     https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/newcss/baiduLiteStyle.less?v=1.0.25
// @require   https://cdn.jsdelivr.net/npm/less@4.2.2/dist/less.min.js
// @require   https://registry.npmmirror.com/vue/3.5.26/files/dist/vue.runtime.global.prod.js
// @noframes
// @grant    GM_getValue
// @grant    GM.getValue
// @grant    GM_setValue
// @grant    GM.setValue
// @grant    GM_addStyle
// @grant    GM_getResourceURL
// @grant    GM_listValues
// @grant    GM.getResourceUrl
// @grant    GM_xmlhttpRequest
// @grant    GM_getResourceText
// @grant    GM_registerMenuCommand
// @grant    GM_addValueChangeListener
// @grant    GM_info
// @grant    unsafeWindow
// ==/UserScript==
~(async () => {
  Object.defineProperty(console, 'mylog', {
    value: function () {
      if (CONST && CONST.curConfig) {
        if (CONST.curConfig.isDevMode) {
          const error = new Error();
          const stackTrace = error.stack.split('\n')[2].trim(); // 获取调用栈信息
          try {
            const [targetLink] = /chrome-extension:\/\/(.*)/.exec(stackTrace) // 提取文件名和行号
            const data = [...arguments].join(' ').padEnd(60, ' ')
            console.log(data, `\t\t ${targetLink}`); // 结合自定义输出和调用栈信息
          } catch (e) {
            // console.error(error.stack)
            console.log('[log] -', ...arguments); // 如果没有匹配到文件名和行号，则只输出自定义信息
          }
        }
      } else {
        console.log.apply(this, arguments);
      }
    },
  })

  const { reactive, watch } = Vue;

  // Tampermonkey may finish the userscript before a failed @require is
  // surfaced. Fail explicitly so the page is never left with a spinner and
  // no usable configuration bridge.
  if (typeof less === 'undefined' || !less || typeof less.render !== 'function') {
    console.error('[Search Engine Cleaner] Less runtime is unavailable; disable/re-enable the script or update it to v1.0.24.')
    return
  }

  const normalizeLayoutMode = (mode) => {
    const numericMode = Number(mode)
    if (Number.isNaN(numericMode)) return 0
    if (numericMode === Number.POSITIVE_INFINITY) return 5
    if (numericMode === Number.NEGATIVE_INFINITY) return 0
    return Math.max(0, Math.min(5, Math.trunc(numericMode)))
  }

  // Layout resources are deliberately selected, never accumulated. Keeping this
  // map as a pure function makes mode changes auditable and prevents stale CSS
  // from a previous engine or column count from being re-used.
  const getLayoutStylePlan = (siteName, mode) => {
    const site = {
      baidu_xueshu: 'baidu',
      google_scholar: 'google',
    }[siteName] || siteName
    const normalizedMode = Math.max(0, Math.min(5, Math.trunc(Number(mode)) || 0))
    if (normalizedMode === 0 || !['baidu', 'google', 'bing', 'duck', 'haosou'].includes(site)) return []
    const suffix = {
      1: ['Common'],
      2: ['Common', 'OnePage'],
      3: ['Common', 'TwoPage'],
      4: ['Common', 'ThreePage'],
      5: ['Common', 'FourPage'],
    }[normalizedMode]
    return suffix.map(name => site + name + 'Style')
  }

  const MyApi = (() => {
    /**
     * @param cssText CSS的内容，如果是less的话，需要编译后的
     * @param className 新增的类名，或者是一堆类名（空格隔开）
     */
    function addStyle(cssText, className = '', dataName) { // 添加CSS代码，不考虑文本载入时间，带有className
      if (className) {
        const selectorName = (' ' + className).split(' ').join('.')

        let oldNode = document.querySelector(selectorName)
        if (!oldNode) {
          oldNode = document.createElement("style");
          oldNode.className = className;
          oldNode.dataset.name = dataName
          MyApi.safeFunc(() => {
            document.children[0].appendChild(oldNode);
          })
        }
        oldNode.innerHTML = cssText;
      }
    }

    /**
     * 脚本一般来说只需要插入一次的，所以不加入重载功能
     * @param scriptText 新增的脚本的名字
     */
    function addScript(scriptText) {
      const scriptNode = document.createElement('script')
      scriptNode.innerText = scriptText
      document.head.appendChild(scriptNode)
    }

    /**
     * 安全脚本执行
     * @param callback 回调函数
     * @param catchCallback 异常的回调函数
     */
    const safeFunc = (callback, catchCallback = () => {
    }) => {
      try {
        return callback()
      } catch (e) {
        console.mylog(e)
        return catchCallback()
      }
    }

    const safeGetNodeFunc = (selector, callbackFunc) => {
      const node = document.querySelector(selector)
      if (node) {
        callbackFunc(node)
      }
    }

    /**
     * 等待元素后，执行的函数
     * @param selector 选择器 | 选择的函数
     * @param callbackFunc 回调函数
     * @param findTick 查询周期，默认200
     * @param clearAfterFind 查询完成后自动结束？
     * @param timeout 查询超时，超时后停止
     * @param errCallback 查询超时后，回调
     */
    const safeWaitFunc = async (selector, callbackFunc = node => {
    }, findTick = 200, clearAfterFind = true, timeout = 20000 * 1000, errCallback) => {
      if (findTick < 20) findTick = 20
      let count = timeout / findTick
      let t_id = null
      const firstSuccess = await mainRunFunc()
      if (!clearAfterFind || !firstSuccess) {
        t_id = setInterval(mainRunFunc, findTick);
      }

      async function strRun() {
        let hasFind = false
        let selectRes = document.querySelectorAll(selector);
        if (selectRes.length <= 0) {
          hasFind = false
        }
        if (selectRes.length >= 1) {
          selectRes = selectRes[0];
          hasFind = true
        }

        if (clearAfterFind && hasFind) {
          clearId();
          await callbackFunc(selectRes)
        }
        return hasFind
      }

      async function funcRun() {
        let hasFind = false
        const res = selector()
        if (res && res.length > 0) {
          hasFind = true
          if (clearAfterFind && hasFind) clearId();
          await callbackFunc(selector()[0]);
        } else if (res) {
          hasFind = true
          if (clearAfterFind && hasFind) clearId();
          await callbackFunc();
        }
        return hasFind
      }

      async function mainRunFunc() {
        if (count-- < 0) {
          clearId()
          errCallback && errCallback()
        }

        if ((typeof (selector) == "string")) {
          return await strRun()
        } else if (typeof (selector) === "function") {
          return await funcRun()
        }
      }

      function clearId() {
        if (t_id) clearInterval(t_id)
      }
    }

    /**
     * 提取URL参数数据
     * @param attribute 参数Key
     * @param needDecode 是否需要解码，默认解码
     * @param baseUrl 默认网址来源
     * @returns {string} 变量结果Value
     */
    function getUrlAttribute(baseUrl = location.href, attribute, needDecode = true) {
      try {
        const value = new URL(baseUrl, location.href).searchParams.get(attribute)
        if (value === null) return
        return needDecode ? value : encodeURIComponent(value)
      } catch (e) {
        console.mylog('无法解析URL参数', baseUrl)
      }
    }

    const http = {
      async get(url) {
        return new Promise((resolve, reject) => {
          const timeout = 10000
          GM_xmlhttpRequest({
            url,
            fetch: true,
            method: 'GET',
            timeout: timeout,
            onload: resp => {
              resolve([null, resp.responseText, resp.responseHeaders])
            },
            onerror: resp => {
              reject([resp, '', {}])
            }
          })
        })
      },
      async post(url, data) {
        return new Promise((resolve, reject) => {
          GM_xmlhttpRequest({
            url,
            data,
            method: 'POST',
            timeout: 10000,
            onload: resp => resolve([null, resp.responseText, resp.responseHeaders]),
            onerror: resp => reject([resp, {}])
          })
        })
      }
    }

    /**
     * 等待多久后，重新加载网页
     * @param timeout
     */
    const refreshAfter = () => {
      let id = null
      return (timeout) => {
        clearTimeout(id)
        id = setTimeout(() => {
          location.reload()
        }, timeout)
      }
    }

    /**
     * 等待多少ms后执行
     * @param ms 毫秒
     * @returns {Promise<unknown>}
     */
    const waitTime = (ms) => {
      return new Promise(resolve => {
        setTimeout(resolve, ms);
      });
    }

    const debounce = (fn, delay) => {
      let timer = null;

      return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
          fn.apply(this, arguments);
        }, delay);
      };
    }

    const throttle = (fn, delay) => {
      let timer = null;
      let startTime = Date.now();

      return function () {
        const curTime = Date.now();
        const remaining = delay - (curTime - startTime);

        clearTimeout(timer);

        if (remaining <= 0) {
          fn.apply(this, arguments);
          startTime = Date.now();
        } else {
          timer = setTimeout(() => {
            fn.apply(this, arguments);
            startTime = Date.now();
          }, remaining);
        }
      };
    }

    /**
     *
     * @param callback 回调函数
     * @param timeout 定时周期
     * @param mustWaitEnd 必须等待上次执行结束？true = 等待；false=标准Interval
     * @constructor
     */
    const setIntervalRun = (callback, timeout, mustWaitEnd = true) => {
      let isLocked = false
      return setInterval(async () => {
        if (mustWaitEnd && isLocked) return
        isLocked = true
        try {
          await callback()
        } finally {
          isLocked = false
        }
      }, timeout)
    }

    function Reg_Get(HTML, reg) {
      let RegE = new RegExp(reg);
      try {
        return RegE.exec(HTML)[1];
      } catch (e) {
        return "";
      }
    }

    function getElementByXpath(e, t, r = document) {
      t = t || r;
      try {
        return r.evaluate(e, t, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      } catch (t) {
        return void console.error("无效的xpath");
      }
    }

    function getAllElementsByXpath(xpath, contextNode, doc = document) {
      contextNode = contextNode || doc;
      const result = [];

      try {
        const query = doc.evaluate(xpath, contextNode, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

        for (let i = 0; i < query.snapshotLength; i++) {
          const node = query.snapshotItem(i); //if node is an element node

          if (node.nodeType === 1) result.push(node);
        }
      } catch (err) {
        throw new Error(`Invalid xpath: ${xpath}`);
      }
      return result;
    }

    // 翻页用的获取器
    const getAllElements = (selector, contextNode, doc = document, win = window, _cplink = undefined) => {
      if (!selector) return []; //@ts-ignore

      contextNode = contextNode || doc;

      if (typeof selector === 'string') {
        if (selector.search(/^css;/i) === 0) {
          return contextNode.querySelectorAll(selector.slice(4))
        } else {
          return getAllElementsByXpath(selector, contextNode, doc);
        }
      } else {
        const query = selector(doc, win, _cplink);

        if (!Array.isArray(query)) {
          throw new Error('Wrong type is returned by getAllElements');
        } else {
          return query;
        }
      }
    }

    function hideNode(node) {
      if (node.hasAttribute('ac-ad-hide')) return
      node.setAttribute('ac-ad-hide', '1')
      node.style = 'display: none !important;'
    }

    function safeRemove_xpath(xpathSelector, useHide) {
      safeFunc(() => {
        let removeNodes = getAllElements(xpathSelector);
        if (useHide) {
          for (let i = 0; i < removeNodes.length; i++) {
            hideNode(removeNodes[i])
          }
        } else {
          for (let i = 0; i < removeNodes.length; i++) {
            removeNodes[i].remove() // 避免卡顿现象
          }
        }
      })
    }

    function safeRemoveAd(selector) {
      [...document.querySelectorAll(selector)].map(one => safeFunc(() => one.remove()))
    }

    return {
      addStyle,
      addScript,
      safeFunc,
      safeGetNodeFunc,
      safeWaitFunc,
      getUrlAttribute,
      http,
      refreshAfter: refreshAfter(),
      waitTime,
      debounce,
      throttle,
      setIntervalRun,
      Reg_Get,
      getElementByXpath,
      getAllElementsByXpath,
      getAllElements,
      safeRemoveAd,
      safeRemove_xpath
    }
  })()

  const splitCssSelectorList = (selectorList) => {
    const selectors = []
    let start = 0
    let depth = 0
    let quote = ''
    for (let index = 0; index < selectorList.length; index++) {
      const char = selectorList[index]
      if (quote) {
        if (char === quote && selectorList[index - 1] !== '\\') quote = ''
        continue
      }
      if (char === '"' || char === "'") quote = char
      else if (char === '(' || char === '[') depth++
      else if (char === ')' || char === ']') depth--
      else if (char === ',' && depth === 0) {
        selectors.push(selectorList.slice(start, index).trim())
        start = index + 1
      }
    }
    selectors.push(selectorList.slice(start).trim())
    return selectors.filter(Boolean)
  }

  const getLayoutStyleScope = (styleName) => {
    const match = /^(baidu|google|bing|duck|haosou)(Common|OnePage|TwoPage|ThreePage|FourPage)Style$/.exec(styleName)
    if (!match) return ''
    const [, site, layout] = match
    const mode = { Common: '', OnePage: '2', TwoPage: '3', ThreePage: '4', FourPage: '5' }[layout]
    return `body[${site}]${mode ? `[ac-layout-mode='${mode}']` : ''}`
  }

  const scopeCompiledCSS = (cssText, scope) => {
    if (!cssText || !scope) return cssText || ''
    const site = scope.match(/^body\[(\w+)\]/)?.[1] || ''
    const aliases = {
      baidu: ['baidu', 'baidu_xueshu'],
      google: ['google', 'google_scholar'],
      bing: ['bing'],
      duck: ['duck'],
      haosou: ['haosou'],
    }[site] || []
    const bodySelectors = aliases.map(name => `body[${name}]`)
    const prefixSelector = (selector) => {
      const value = selector.trim()
      if (!value) return value
      for (const bodySelector of bodySelectors) {
        if (value === bodySelector || value.startsWith(bodySelector + ' ') || value.startsWith(bodySelector + '.')) {
          return scope + value.slice(bodySelector.length)
        }
      }
      if (value === 'body') return scope
      if (value.startsWith('body ')) return scope + value.slice(4)
      if (value.startsWith(':root')) return scope + value.slice(5)
      return `${scope} ${value}`
    }
    const findClosingBrace = (text, openIndex) => {
      let depth = 1
      let quote = ''
      let comment = false
      for (let index = openIndex + 1; index < text.length; index++) {
        const char = text[index]
        const next = text[index + 1]
        if (comment) {
          if (char === '*' && next === '/') {
            comment = false
            index++
          }
          continue
        }
        if (char === '/' && next === '*') {
          comment = true
          index++
          continue
        }
        if (quote) {
          if (char === quote && text[index - 1] !== '\\') quote = ''
          continue
        }
        if (char === '"' || char === "'") quote = char
        else if (char === '{') depth++
        else if (char === '}' && --depth === 0) return index
      }
      return text.length - 1
    }
    const processRules = (text) => {
      let result = ''
      let cursor = 0
      while (cursor < text.length) {
        const openIndex = text.indexOf('{', cursor)
        if (openIndex < 0) {
          result += text.slice(cursor)
          break
        }
        const closeIndex = findClosingBrace(text, openIndex)
        const rawPrelude = text.slice(cursor, openIndex)
        const prelude = rawPrelude.trim()
        const leading = rawPrelude.slice(0, rawPrelude.indexOf(prelude))
        const body = text.slice(openIndex + 1, closeIndex)
        if (!prelude || prelude.startsWith('@keyframes') || prelude.startsWith('@-webkit-keyframes')) {
          result += rawPrelude + '{' + body + '}'
        } else if (prelude.startsWith('@media') || prelude.startsWith('@supports') || prelude.startsWith('@container') || prelude.startsWith('@layer')) {
          result += rawPrelude + '{' + processRules(body) + '}'
        } else if (prelude.startsWith('@')) {
          result += rawPrelude + '{' + body + '}'
        } else {
          const scoped = splitCssSelectorList(prelude).map(prefixSelector).join(', ')
          result += leading + scoped + '{' + body + '}'
        }
        cursor = closeIndex + 1
      }
      return result
    }
    return processRules(cssText)
  }

  const setHostBind = () => {
    // 避免多个脚本，重复执行
    if (unsafeWindow.isACBaiduInit) {
      throw new Error('已经有脚本在运行了，疑似重复安装')
    } else {
      unsafeWindow.isACBaiduInit = true
    }
    GM_addValueChangeListener('ACBlockRules', (key, oldVal, newVal = '{}', remote) => {
      if (unsafeWindow.webInterface) {
        unsafeWindow.webInterface.update()
      } else {
        try {
          const blockRules = JSON.parse(newVal)
          if (!Array.isArray(blockRules) || blockRules.some(rule => typeof rule !== 'string')) {
            throw new TypeError('ACBlockRules 必须是字符串数组')
          }
          CONST.blockRuleList = blockRules // 将对象设置到CONST上
          CONST.acpush_acremoveInit()
        } catch (error) {
          console.error('忽略损坏的 ACBlockRules', error)
        }
      }
    })
    if (location.hostname === 'lingling225.github.io' && /^\/search-engine-cleaner\/pages\/custom(?:\/|\/index\.html)?$/.test(location.pathname)) {
      let bridgeQueue = Promise.resolve()
      let syncRevision = 0
      const bridgeSectionKeys = new Map([
        ['op_common', 'common'],
        ['op_baidu', 'baidu'],
        ['op_google', 'google'],
        ['op_bing', 'bing'],
        ['op_duckduckgo', 'duck'],
        ['op_haosou', 'haosou'],
      ])
      const allowedBridgeKeys = new Set([...bridgeSectionKeys.keys(), 'ACBlockRules'])
      const styleApprovalStorageKey = 'ACApprovedStyleOrigins'
      const approvedStyleOrigins = new Set([
        'https://raw.githubusercontent.com',
        'https://gist.githubusercontent.com',
        'https://cdn.jsdelivr.net',
        'https://lingling225.github.io',
      ])
      let styleApprovalsLoaded = false
      const nativeConfirm = window.confirm.bind(window)

      const assertBridgeKey = (key) => {
        if (typeof key !== 'string' || !allowedBridgeKeys.has(key)) {
          throw new Error('配置页请求了不受支持的存储项')
        }
      }
      const getBridgeSection = (key) => {
        const section = bridgeSectionKeys.get(key)
        if (!section) throw new Error('该操作仅支持站点配置项')
        return section
      }

      const parseStoredJSON = (value, fallback, label) => {
        if (value === undefined || value === null || value === '') return fallback
        if (typeof value === 'object') return value
        if (typeof value !== 'string') throw new TypeError(`${label} 不是有效的 JSON 数据`)
        try {
          return JSON.parse(value)
        } catch (error) {
          throw new Error(`${label} 已损坏，请重置脚本配置`, { cause: error })
        }
      }
      const enqueueBridgeWrite = (callback) => {
        const result = bridgeQueue.then(callback)
        bridgeQueue = result.catch(() => {})
        return result
      }
      const sanitizeSection = (section, data) => {
        if (!data || typeof data !== 'object' || Array.isArray(data)) {
          throw new TypeError(`${section} 配置必须是对象`)
        }
        const defaults = getConfigDefaults()[section]
        if (!defaults || typeof defaults !== 'object') {
          throw new Error(`不支持的配置分区：${section}`)
        }
        const allowedKeys = new Set(Object.keys(defaults))
        const result = Object.fromEntries(Object.entries(data).filter(([key]) => allowedKeys.has(key)))
        const invalidPrefix = section === 'common' ? 'customStyle' : 'commonStyle'
        delete result[`${invalidPrefix}Enable`]
        delete result[`${invalidPrefix}Link`]
        delete result[`${invalidPrefix}Less`]
        return result
      }
      const validateSectionLess = async (section, data) => {
        const prefix = section === 'common' ? 'commonStyle' : 'customStyle'
        if (data?.[`${prefix}Enable`]) {
          await less.render(String(data[`${prefix}Less`] || ''))
        }
      }
      const publishSync = async (data) => {
        await GM.setValue('SyncConfig', JSON.stringify({
          ...data,
          __bridgeRevision: `${Date.now()}-${++syncRevision}-${Math.random().toString(36).slice(2)}`,
        }))
      }

      unsafeWindow.AC_GM_Interface = {
        async get(key, dataStr) {
          await bridgeQueue
          assertBridgeKey(key)
          const fallback = parseStoredJSON(dataStr, {}, `${key} 默认配置`)
          if (bridgeSectionKeys.has(key)) {
            const trueKey = getBridgeSection(key)
            const config = parseStoredJSON(await GM.getValue('ACConfig', '{}'), {}, 'ACConfig')
            const defaults = getConfigDefaults()[trueKey] || fallback
            let res = { ...defaults, ...sanitizeSection(trueKey, config[trueKey] || fallback) }
            if (key.includes('common')) {
              res.version = GM_info.script.version
            }
            return res
          } else {
            return parseStoredJSON(await GM.getValue(key, dataStr), fallback, key)
          }
        },
        async save(key, dataObj) {
          return enqueueBridgeWrite(async () => {
            assertBridgeKey(key)
            if (bridgeSectionKeys.has(key)) {
              const trueKey = getBridgeSection(key)
              await validateSectionLess(trueKey, dataObj)
              const config = parseStoredJSON(await GM.getValue('ACConfig', '{}'), {}, 'ACConfig')
              const storedSection = config[trueKey] && typeof config[trueKey] === 'object' ? config[trueKey] : {}
              config[trueKey] = {
                ...sanitizeSection(trueKey, storedSection),
                ...sanitizeSection(trueKey, dataObj),
              }
              await GM.setValue('ACConfig', JSON.stringify(config))
              await publishSync({ refreshUrl: true })
            } else {
              if (!Array.isArray(dataObj) || dataObj.some(rule => typeof rule !== 'string')) {
                throw new TypeError('拦截规则必须是字符串数组')
              }
              await GM.setValue('ACBlockRules', JSON.stringify(dataObj))
            }
          })
        },
        async change(key, dataObj) {
          return enqueueBridgeWrite(async () => {
            const trueKey = getBridgeSection(key)
            await validateSectionLess(trueKey, dataObj)
            // 只广播当前分区，避免未保存的其他分区被持久化快照回滚。
            await publishSync({ [trueKey]: sanitizeSection(trueKey, dataObj) })
          })
        },
        async requestText(url) {
          let parsedUrl
          try {
            parsedUrl = new URL(url)
          } catch (error) {
            throw new Error('样式地址格式无效')
          }
          if (parsedUrl.protocol !== 'https:') {
            throw new Error('远程样式地址仅支持 HTTPS')
          }
          if (parsedUrl.username || parsedUrl.password) {
            throw new Error('样式地址不能包含登录凭据')
          }

          const hostname = parsedUrl.hostname.toLowerCase().replace(/^\[|\]$/g, '')
          const ipv4 = hostname.split('.').map(Number)
          const isValidIpv4 = ipv4.length === 4 && ipv4.every((part) => Number.isInteger(part) && part >= 0 && part <= 255)
          const isPrivateIpv4 = isValidIpv4 && (
            ipv4[0] === 0 || ipv4[0] === 10 || ipv4[0] === 127 ||
            (ipv4[0] === 100 && ipv4[1] >= 64 && ipv4[1] <= 127) ||
            (ipv4[0] === 169 && ipv4[1] === 254) ||
            (ipv4[0] === 172 && ipv4[1] >= 16 && ipv4[1] <= 31) ||
            (ipv4[0] === 192 && ipv4[1] === 168) ||
            (ipv4[0] === 198 && ipv4[1] >= 18 && ipv4[1] <= 19) ||
            ipv4[0] >= 224
          )
          const isIpv6 = hostname.includes(':')
          const ipv6Prefix = Number.parseInt(hostname.split(':')[0] || '0', 16)
          const isPrivateIpv6 = isIpv6 && (
            hostname === '::' || hostname === '::1' ||
            hostname.startsWith('::ffff:') ||
            (Number.isInteger(ipv6Prefix) && (ipv6Prefix & 0xfe00) === 0xfc00) ||
            (Number.isInteger(ipv6Prefix) && (ipv6Prefix & 0xffc0) === 0xfe80) ||
            (Number.isInteger(ipv6Prefix) && (ipv6Prefix & 0xff00) === 0xff00)
          )
          const isPrivateHostname = (!hostname.includes('.') && !isIpv6) ||
            hostname === 'localhost' || hostname.endsWith('.localhost') ||
            hostname.endsWith('.local') || hostname.endsWith('.internal') || hostname.endsWith('.lan')
          if (isPrivateIpv4 || isPrivateIpv6 || isPrivateHostname) {
            throw new Error('远程样式地址不能指向本机或局域网')
          }

          if (!styleApprovalsLoaded) {
            try {
              const storedOrigins = await GM.getValue(styleApprovalStorageKey, '[]')
              const parsedOrigins = Array.isArray(storedOrigins) ? storedOrigins : JSON.parse(storedOrigins)
              if (Array.isArray(parsedOrigins)) {
                parsedOrigins.forEach((origin) => {
                  if (typeof origin === 'string') approvedStyleOrigins.add(origin)
                })
              }
            } catch (error) {
              console.warn('[AC-Script] 远程样式授权列表读取失败', error)
            }
            styleApprovalsLoaded = true
          }
          if (!approvedStyleOrigins.has(parsedUrl.origin)) {
            const approved = nativeConfirm(`Search Engine Cleaner 将匿名读取远程 Less 样式：\n${parsedUrl.origin}\n\n仅在你信任该来源时允许。`)
            if (!approved) throw new Error('已取消远程样式请求')
            approvedStyleOrigins.add(parsedUrl.origin)
            await GM.setValue(styleApprovalStorageKey, JSON.stringify([...approvedStyleOrigins]))
          }

          return new Promise((resolve, reject) => {
            GM_xmlhttpRequest({
              method: 'GET',
              url: parsedUrl.href,
              anonymous: true,
              timeout: 10000,
              onload(response) {
                if (response.status >= 200 && response.status < 300) {
                  let finalUrl
                  try {
                    finalUrl = new URL(response.finalUrl || response.responseURL || parsedUrl.href)
                  } catch (error) {
                    reject(new Error('远程样式响应地址无效'))
                    return
                  }
                  if (finalUrl.origin !== parsedUrl.origin) {
                    reject(new Error('远程样式请求被重定向到未授权域名'))
                    return
                  }
                  const responseText = response.responseText || ''
                  if (responseText.length > 1024 * 1024) {
                    reject(new Error('远程样式超过 1 MiB 限制'))
                  } else {
                    resolve(responseText)
                  }
                } else {
                  reject(new Error(`远程服务器返回 ${response.status}`))
                }
              },
              ontimeout() {
                reject(new Error('远程样式请求超时'))
              },
              onerror() {
                reject(new Error('远程样式请求失败'))
              },
            })
          })
        }
      }

      function getConfigDefaults() {
        return {
          common: {
            isDevMode: false, isLocalDevMode: false, localDebugBaseUrl: '',
            isRedirectEnable: false, isAdsEnable: false, isFaviconEnable: true,
            isAutopage: true, isBlockEnable: true, isBlockResultDisplay: true,
            isBlockBtnDisplay: false, isRightDisplayEnable: true, isCounterEnable: false,
            isALineDisable: false, isDarkModeEnable: false, commonStyleEnable: true,
            commonStyleLink: '', commonStyleLess: '',
          },
          baidu: engineDefaults({ doRemoveSug: true, doRemoveAIGen: false, baiduLiteEnable: false }),
          google: engineDefaults({ useBaiduLogo: false }),
          bing: engineDefaults({ optimizeBing: true }),
          duck: engineDefaults({ optimizeDuck: true }),
          haosou: engineDefaults({ optimizeHaosou: true }),
        }
      }

      function engineDefaults(extra) {
        return {
          ...extra, adsStyleEnable: true, adsStyleMode: '3', HuYanMode: false,
          HuYanMode_Color: '#ffffff', BgEnable: false, BgUseUrl: '', BgFit: true,
          BgBase64Image: '', customStyleEnable: false, customStyleLink: '', customStyleLess: '',
        }
      }

      throw new Error('设置页只需加载配置桥接，不执行搜索页逻辑')
    }
  }

  try {
    setHostBind()
  } catch (e) {
    // 不再执行后续函数，停在这里了
    return;
  }

  class SiteOptions {
    constructor(_gmInstance) {
      this.gmInstance = _gmInstance
      // 名字自动映射的
      this.siteName = this.gmInstance._getSiteName()
      this.useItem = {
        SiteTypeID: 0,
        MainType: "",
        Stype_Normal: "",
        FaviconType: "",
        FaviconAddTo: "",
        CounterType: "",
        BlockType: "",
        MultiPageType: "",
        pager: {
          nextLink: "",
          pageElement: "",
          HT_insert: ["", 2], // 1 = beforebegin; 2 = beforeend
          replaceE: "",
          stylish: "",
          afertPagerAutoCallFunc: (pageElements, scriptElements) => {
          } // 执行完脚本后，执行这个函数
        }
      }

      if (this['_s_' + this.siteName]) {
        this.useItem = Object.assign({
          pageNum: 1, // 页码
          pageUrl: '', // 下一页的地址
        }, this['_s_' + this.siteName]())
      } else {
        this.siteName = ''
      }

      // 作为静态参数用
      this.baidu = this._s_baidu()
      this.google = this._s_google()
      this.bing = this._s_bing()
      this.haosou = this._s_haosou()
      this.duck = this._s_duck()
      this.baidu_xueshu = this._s_baidu_xueshu()
      this.google_scholar = this._s_google_scholar()
    }

    _s_baidu() {
      if (this.useItem.SiteTypeID === 1) {
        if (location.href.search(/(&|\?)(wd|word)=/) < 0) {
          console.mylog('禁用CSS的')
          this.gmInstance.curConfig.enableCSS = false
        }
      }

      return {
        SiteTypeID: 1,
        MainType: "#content_left>.c-container",
        Stype_Normal: "h3.t>a, .c-container article a",
        FaviconType: "h3 a",
        FaviconAddTo: "h3",
        CounterType: "#content_left>#double>div[srcid] h3[class~=t],#content_left>div[srcid] h3[class~=t],#content_left>div[srcid] [class~=op_best_answer_question]",
        BlockType: "h3 a",
        MultiPageType: "#container #content_left, body[news] #container #content_left>div:not([class]):not([id])",
        pager: {
          nextLink: '//div[@id="page"]//a[contains(span/text(), "下一页")]',
          pageElement: "css;div#content_left > .c-container, div#content_left > .result, div#content_left > article",
          HT_insert: ["css;div#content_left", 2], // 1 = beforebegin; 2 = beforeend
          replaceE: "css;#page",
          stylish: "body[baidu] .autopagerize_page_info, body[baidu] div.sp-separator {margin-bottom: 10px !important;} body[baidu] .c-img-border{display:none}",
        }
      }
    }

    _s_bing() {
      // 图片站 、地图站、购物站
      if (this.useItem.SiteTypeID === 5) {
        if (location.href.search(/images\/search/) > 0) {
          console.mylog("特殊站,不加载样式，不添加menu");
          this.gmInstance.curConfig.enableCSS = false
        } else if (location.href.search(/search/) > 0) {
          this.gmInstance.curConfig.enableCSS = true // 仅在搜索结果页，展示背景图即可
        } else {
          this.gmInstance.curConfig.enableCSS = false
        }
      }

      return {
        SiteTypeID: 5,
        MainType: "#b_results>li",
        Stype_Normal: "h2>a",
        FaviconType: ".b_attribution>cite",
        FaviconAddTo: "h2",
        CounterType: "#b_results>li[class~=b_ans] h2,#b_results>li[class~=b_algo] h2",
        BlockType: "h2 a",
        MultiPageType: "#b_content #b_results",
        pager: {
          nextLink: "//a[contains(@class,\"sb_pagN\")]",
          pageElement: "id(\"b_results\")/li[not(contains(@class,\"b_pag\") or contains(@class,\"b_ans b_top\"))]",
          HT_insert: ["id(\"b_results\")/li[contains(@class,\"b_pag\")]", 1], // 1 = beforebegin; 2 = beforeend
          replaceE: "id(\"b_results\")//nav[@role=\"navigation\"]",
        }
      }
    }

    _s_google() {
      // 图片站 、地图站、购物站
      if (this.useItem.SiteTypeID === 4) {
        if (location.href.search(/tbm=(isch|lcl|shop|flm)/) > 0) {
          console.mylog("特殊站,不加载样式，不添加menu");
          this.gmInstance.curConfig.enableCSS = false
        }
      }

      return {
        SiteTypeID: 4,
        MainType: "#rso .vt6azd, div[data-micp-id='rso'] .vt6azd",
        FaviconType: ".zReHs",
        FaviconAddTo: "h3",
        CounterType: "#rso .vt6azd h3:not(table h3),._yE>div[class~=_kk] h3",
        BlockType: ".vt6azd h3", // 修复block翻页的问题
        // Google keeps one authoritative result stream. Nested modules are
        // cards inside #rso, never independent layout roots.
        MultiPageType: "#rso",
        pager: {
          nextLink: "id('pnnext')|id('navbar navcnt nav')//td[span]/following-sibling::td[1]/a|id('nn')/parent::a",
          // Only move result children. Copying the fetched #rso shell creates
          // duplicate IDs and a second grid root after automatic pagination.
          pageElement: (doc) => {
            const root = doc?.querySelector?.('#rso, [data-micp-id="rso"]')
            if (!root) return []
            return [...root.children].filter(node => !node.matches('style, script, nav, #topstuff, #botstuff'))
          },
          HT_insert: ["css;#rso, [data-micp-id='rso']", 2], // append into the sole existing result stream
          replaceE: '//div[@id="navcnt"] | //div[@id="rcnt"]//div[@role="navigation"]'
        }
      }
    }

    _s_haosou() {
      return {
        SiteTypeID: 3,
        MainType: ".res-list",
        Stype_Normal: "h3>a",
        FaviconType: "cite",
        FaviconAddTo: "h3",
        CounterType: ".results .res-title",
        BlockType: "h3 a",
        MultiPageType: "#container #main .result",
        pager: {
          nextLink: "//div[@id='page']//a[text()='下一页>'] | id('snext')",
          pageElement: "//div[@id='container']/div[@id='main']/ul[contains(concat(' ', normalize-space(@class), ' '), ' result ')]/li",
          HT_insert: ["//div[@id='container']//ul[contains(concat(' ', normalize-space(@class), ' '), ' result ')]", 2],
          replaceE: "id('page')",
          afertPagerAutoCallFunc: () => {
            if (unsafeWindow.So?.web?.lazyLoad?.init) unsafeWindow.So.web.lazyLoad.init()
          },
        },
      }
    }

    _s_duck() {
      return {
        SiteTypeID: 10,
        MainType: "#react-layout li",
        FaviconType: ".nrn-react-div .result__url__domain",
        FaviconAddTo: "h2",
        CounterType: "#react-layout li h2 a",
        BlockType: "h2 a",
        MultiPageType: "#react-layout .react-results--main",
      }
    }

    _s_baidu_xueshu() {
      if (this.useItem.SiteTypeID === 8) {
        console.warn('启动百度学术特殊设置')
        this.gmInstance.curConfig.adsStyleMode = 2
      }

      return {
        SiteTypeID: 8,
        MainType: "#content_left .result",
        Stype_Normal: "h3.t>a, #results .c-container>.c-blocka",
        FaviconType: "h3",
        FaviconAddTo: "h3",
        CounterType: "#content_left>#double>div[srcid] h3[class~=t],#content_left>div[srcid] h3[class~=t],#content_left>div[srcid] [class~=op_best_answer_question]",
        BlockType: "h3 a",
      }
    }

    _s_google_scholar() {
      if (this.useItem.SiteTypeID === 4.1) {
      }

      return {
        SiteTypeID: 4.1,
        MainType: "#rso .g, div[data-micp-id='rso'] .g",
        FaviconType: ".iUh30",
        FaviconAddTo: "h3",
        CounterType: "#rso .g h3:not(table h3),._yE>div[class~=_kk] h3",
        BlockType: "a:not([href*='translate.google.com'])", // 修复block翻页的问题
        pager: {
          nextLink: '//a[./span[@class="gs_ico gs_ico_nav_next"]]',
          pageElement: '//div[@class="gs_r gs_or gs_scl"]',
          HT_insert: null, // 1 = beforebegin; 2 = beforeend
          replaceE: '//div[@id="navcnt"] | //div[@id="rcnt"]//div[@role="navigation"]',
        }
      }
    }
  }

  class BaseConfig {
    constructor() {
      this.adsStyleEnable = true // 是否开启默认效果优化
      this.adsStyleMode = '3' // 0-不带css；1-单列靠左；2-单列居中；3-双列居中
      this.HuYanMode = false // 护眼模式
      this.HuYanMode_Color = '#ffffff' // 护眼模式-颜色

      this.BgEnable = false // 背景图-是否启用
      this.BgUseUrl = '' // 默认背景图
      this.BgFit = true // 背景图-是否适应
      this.BgBase64Image = '' // 这个KEY暂时不使用

      this.customStyleEnable = false
      this.customStyleLink = ''
      this.customStyleLess = ''
    }
  }

  class CSSAutoInsert {
    constructor() {
      this.hasChanged = false
      this.cssInsertSet = {}
      this.isUpdating = false; // 是否已经调度了更新
      this.isFirstRun = true;  // 标记是否为首次运行
      this.updatePaused = false; // 是否暂停更新（用于批量原子更新）
    }

    _requestUpdate() {
      if (this.isUpdating || this.updatePaused) return;

      // 如果是首次运行，同步执行首次完整注入
      if (this.isFirstRun) {
        this.isFirstRun = false;
        this.hasChanged = false;
        this.doInsert();
        return;
      }

      this.isUpdating = true;
      requestAnimationFrame(() => {
        if (this.hasChanged) {
          this.hasChanged = false;
          this.doInsert();
        }
        this.isUpdating = false;
      });
    }

    pause() {
      this.updatePaused = true;
    }

    resume() {
      this.updatePaused = false;
      if (this.hasChanged) {
        this._requestUpdate();
      }
    }

    add(uniqueName, cssText) {
      uniqueName = 'AC-' + uniqueName // 加上特殊前缀，标志关键词

      // 如果有，并且数据还一模一样，那么跳过；如果数据不一样，那么覆盖
      if (this.cssInsertSet[uniqueName] && this.cssInsertSet[uniqueName] === cssText) {
        return
      }
      console.mylog('--->插入样式表:' + uniqueName)
      this.cssInsertSet[uniqueName] = `\n/************${uniqueName}*********/\n` + cssText
      this.hasChanged = true
      this._requestUpdate();
    }

    remove(uniqueName) {
      uniqueName = 'AC-' + uniqueName // 加上特殊前缀，标志关键词
      if (this.cssInsertSet[uniqueName]) {
        console.mylog('--->移除样式表:' + uniqueName)
        delete this.cssInsertSet[uniqueName]
        this.hasChanged = true
        this._requestUpdate();
      }
    }

    clear() {
      this.cssInsertSet = {}
      this.hasChanged = true
      this._requestUpdate();
    }

    doInsert() {
      const cssText = Object.values(this.cssInsertSet).join('\n')
      MyApi.addStyle(cssText, 'AC-CSSAutoInsertBase', Object.keys(this.cssInsertSet).join(' ')) // 方便排查css插入
      console.mylog('插入CSS完成')
    }
  }

  class ACGM {
    constructor() {
      this.initGM()
      this.bindGM()
    }

    async initACGM() {

      let ACConfig = {}
      this.blockRuleList = []
      const DefaultConfig = {
        common: {
          version: '', // 从代码中动态拉取，丢弃任何值
          isDevMode: false, // 是否为调试模式，从页面给出来的
          isLocalDevMode: false, // 是否为本地调试模式，从页面给出来的，用于加载本地CSS
          localDebugBaseUrl: '', // 本地调试模式，本地CSS的入口地址
          isRedirectEnable: false, // 是否开启重定向功能
          isAdsEnable: false, // 是否开启去广告模式
          isFaviconEnable: true, // 是否开启Favicon图标
          isAutopage: true, // 是否开启自动翻页功能

          isBlockEnable: true, // 是否开启去拦截模式
          isBlockResultDisplay: true, // 是否删除已拦截的条目
          isBlockBtnDisplay: false, // 是否显示block按钮

          isRightDisplayEnable: true, // 是否开启右侧边栏
          isCounterEnable: false, // 是否显示计数器
          isALineDisable: false, // 是否禁止下划线
          isDarkModeEnable: false, // 是否加载暗黑模式
          commonStyleEnable: true,
          commonStyleLink: '',
          commonStyleLess: '',
        },
        baidu: {
          doRemoveSug: true, // 删除移动预测
          doRemoveAIGen: false, // 移除百度AI搜索结果
          baiduLiteEnable: false, // 启用百度Lite样式表
          ...new BaseConfig()
        },
        google: {
          useBaiduLogo: false, // 默认不使用百度logo
          ...new BaseConfig()
        },
        bing: {
          optimizeBing: true,
          ...new BaseConfig()
        },
        duck: {
          optimizeDuck: true,
          ...new BaseConfig()
        },
        haosou: {
          optimizeHaosou: true,
          ...new BaseConfig()
        }
      };
      const parseStoredConfig = async () => {
        try {
          const parsed = JSON.parse(await GM.getValue("ACConfig", "{}"))
          return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {}
        } catch (error) {
          console.error('忽略损坏的 ACConfig', error)
          return {}
        }
      }
      const parseBlockRules = async () => {
        try {
          const parsed = JSON.parse(await GM.getValue("ACBlockRules", "[]"))
          return Array.isArray(parsed) ? parsed.filter(rule => typeof rule === 'string') : []
        } catch (error) {
          console.error('忽略损坏的 ACBlockRules', error)
          return []
        }
      }
      ACConfig = await parseStoredConfig()
      this.blockRuleList = await parseBlockRules()
      this.acpush_acremoveInit()
      // 随便给一个值初始化，这个值，只是临时的值，如果需要写入，也是从另一端拉取，不是这个值来覆盖的
      this.curConfig = {
        ...DefaultConfig.common,
        ...DefaultConfig.baidu
      }

      // 增加加载动画元素 - 5档极速模式
      const loader = document.createElement('div')
      loader.className = 'ac-loading-spinner'
      loader.innerHTML = '<div></div><div></div><div></div><div></div><div></div>';
      // 改为等待 body 出现后注入，以此保证合法的 DOM 结构，且 20ms 的频率足以保证加载速度
      MyApi.safeWaitFunc('body', (bodyNode) => {
        bodyNode.insertBefore(loader, bodyNode.firstChild);
      }, 20, true);

      this.sortIndex = 1
      this.bingScrollPos = 0
      const mergeConfig = (defaults, stored = {}) => {
        const storedObject = stored && typeof stored === 'object' && !Array.isArray(stored) ? stored : {}
        const merged = { ...storedObject }
        Object.entries(defaults).forEach(([key, value]) => {
          const storedValue = storedObject[key]
          const isObject = value && typeof value === 'object' && !Array.isArray(value)
          merged[key] = isObject ? mergeConfig(value, storedValue) : (storedValue ?? value)
        })
        return merged
      }
      const migrateLegacyConfig = (stored) => {
        if (!stored || typeof stored !== 'object' || Array.isArray(stored)) return {}
        const migrated = { ...stored }
        migrated.common = { ...(stored.common || {}) }

        const legacyCommonKeys = [
          'isDevMode', 'isRedirectEnable', 'isAdsEnable', 'isFaviconEnable', 'isAutopage',
          'isBlockEnable', 'isRightDisplayEnable', 'isCounterEnable', 'isALineDisable',
          'isDarkModeEnable', 'commonStyleEnable', 'commonStyleLink', 'commonStyleLess',
        ]
        legacyCommonKeys.forEach(key => {
          if (migrated.common[key] === undefined && stored[key] !== undefined) migrated.common[key] = stored[key]
        })
        if (migrated.common.isBlockResultDisplay === undefined && stored.isBlockDisplay !== undefined) {
          migrated.common.isBlockResultDisplay = stored.isBlockDisplay
        }
        if (migrated.common.isBlockBtnDisplay === undefined && stored.isBlockBtnNotDisplay !== undefined) {
          migrated.common.isBlockBtnDisplay = !stored.isBlockBtnNotDisplay
        }

        for (const siteName of ['baidu', 'google', 'bing', 'duck', 'haosou']) {
          const source = stored[siteName] && typeof stored[siteName] === 'object' ? stored[siteName] : {}
          const site = { ...source }
          if (site.adsStyleMode === undefined && source.AdsStyleMode !== undefined) site.adsStyleMode = String(source.AdsStyleMode)
          if (site.BgUseUrl === undefined && source.defaultBgUrl !== undefined) site.BgUseUrl = source.defaultBgUrl
          migrated[siteName] = site
        }
        return migrated
      }
      this.ACConfig = mergeConfig(DefaultConfig, migrateLegacyConfig(ACConfig))
      // 27.x 曾把全局 Less 字段复制进站点配置，运行时应始终以 common 分区为准。
      for (const siteName of ['baidu', 'google', 'bing', 'duck', 'haosou']) {
        delete this.ACConfig[siteName].commonStyleEnable
        delete this.ACConfig[siteName].commonStyleLink
        delete this.ACConfig[siteName].commonStyleLess
      }
      // this.enableCSS = true
      this.cssAutoInsert = new CSSAutoInsert()
      this.cssFavionList = reactive({
        list: []
      })

      this.adsCSSList = {
        baiduLiteStyle: '',

        layoutStyle: '',

        customStyle: '', // 自定义样式表
        commonStyle: '', // 全局样式表

        huyanStyle: '',
        bgAutoFitStyle: '',
        darkModeStyle: '', // 暗黑护眼色

        faviconStyle: '', // 动态插入的favicon的数据
      }

      this.lock = {
        bodyLocked: true,
        headLocked: true,
        pageLoadingLocked: false,
        isBlockChecking: false,
        isFaviconChecking: false,
        isCounterChecking: false,
        afterBlockChangeChecked: true, // 数据刷新后，是否检查过了，用于减少reg判定
      }
      this.styleLoadRevision = 0
      this.styleCacheRefreshTimers = new Map()
      this.loadAllStyleTimer = null
      // 数据先初始化
      this.curConfig = reactive({
        enableCSS: true,
        ...this.ACConfig.common,
        ...this.ACConfig[this.getConfigSiteName()]
      })
      // 再得到真实options，并调整config
      this.options = new SiteOptions(this)
      await this.loadSiteCSS()
      this.waitBodyHead()
      this.openSettingsUrl = 'https://lingling225.github.io/search-engine-cleaner/pages/custom/#' + this.getSettingsSiteName()
    }

    initGM() {
      if (typeof (GM) === "undefined") {
        // 这个是ViolentMonkey的支持选项
        GM = {};
        GM.setValue = GM_setValue;
        GM.getValue = GM_getValue;
      }
      if (typeof GM_getResourceText === 'undefined') {
        GM_getResourceText = async function (aResourceName) {
          // 如果没有这个接口，那就是没办法缓存这个数据，所以只能用本地的数据进行缓存了
          let res = await (await fetch(await GM.getResourceUrl(aResourceName))).text();
          let saveRes = await GM.getValue(aResourceName);
          if (typeof (saveRes) === 'undefined') {
            GM.setValue(aResourceName, res);
          } else {
            return saveRes;
          }
          return res;
        }
      }
    }

    bindGM() {
      GM_registerMenuCommand('Search Engine Cleaner - 打开配置', function () {
        window.open(CONST.openSettingsUrl)
      });
      GM_registerMenuCommand('Search Engine Cleaner - 重置配置', function () {
        GM.setValue('ACConfig', '{}');
        location.reload();
      });
    }

    getSettingsSiteName() {
      const configSiteName = this.getConfigSiteName()
      return configSiteName === 'duck' ? 'duckduckgo' : configSiteName
    }

    getConfigSiteName() {
      return {
        baidu_xueshu: 'baidu',
        google_scholar: 'google'
      }[this.options?.siteName || this._getSiteName()] || (this.options?.siteName || this._getSiteName())
    }

    saveConfig() {
      const commonConfig = this.ACConfig['common']
      const siteConfig = this.ACConfig[this.getConfigSiteName()]
      for (const key in siteConfig) {
        siteConfig[key] = this.curConfig[key]
      }
      for (const key in commonConfig) {
        commonConfig[key] = this.curConfig[key]
      }
      GM.setValue('ACConfig', JSON.stringify(this.ACConfig));
    }

    saveBlockRule() {
      GM.setValue('ACBlockRules', JSON.stringify(this.blockRuleList));
    }

    renewConfig(newConfig) {
      const chooseCfg = newConfig[this.getConfigSiteName()]
      const commonCfg = newConfig['common']
      if (chooseCfg) {
        Object.assign(this.curConfig, chooseCfg)
      }
      if (commonCfg) {
        Object.assign(this.curConfig, commonCfg)
      }
    }

    async loadStyleByName_WithLessCache(styleName) {
      if (CONST.curConfig.isDevMode && CONST.curConfig.isLocalDevMode && CONST.curConfig.localDebugBaseUrl) {
        const renderCSSKeyName = '__AC.RenderCSS__' + GM_info.script.version + ':' + styleName
        return await setLocalLessData(renderCSSKeyName, getDebugStyle) // 不带缓存，随时刷新了
        // return await cacheStyle(renderCSSKeyName, getDebugStyle) // 带缓存，随时刷新了
      } else {
        return await cacheStyle(styleName, getRenderStyle)
      }

      async function cacheStyle(styleName, getLessDataFunc) {
        const renderCSSKeyName = '__AC.RenderCSS__' + GM_info.script.version + ':' + styleName
        const localData = localStorage.getItem(renderCSSKeyName)
        if (localData) {
          if (!CONST.styleCacheRefreshTimers.has(renderCSSKeyName)) {
            const refreshTimer = setTimeout(async () => {
              try {
                console.mylog('*****有缓存了，但是在刷新了：' + styleName)
                await setLocalLessData(renderCSSKeyName, getLessDataFunc)
              } catch (error) {
                console.error('样式缓存刷新失败', styleName, error)
              } finally {
                CONST.styleCacheRefreshTimers.delete(renderCSSKeyName)
              }
            }, 2000)
            CONST.styleCacheRefreshTimers.set(renderCSSKeyName, refreshTimer)
          }
          return localData
        } else {
          console.mylog('*****没有缓存' + styleName)
          return await setLocalLessData(renderCSSKeyName, getLessDataFunc)
        }
      }

      async function setLocalLessData(renderCSSKeyName, getLessDataFunc) {
        const { css = '' } = await less.render(await getLessDataFunc());
        const scopedCSS = scopeCompiledCSS(css, getLayoutStyleScope(styleName))
        localStorage.setItem(renderCSSKeyName, scopedCSS)
        return scopedCSS
      }

      async function getDebugStyle() {
        const dataUrl = `${CONST.curConfig.localDebugBaseUrl}${styleName}.less`
        const [err, text] = await MyApi.http.get(dataUrl)
        if (!err) {
          return text
        } else {
          console.error('加载失败', dataUrl)
        }
        return ''
      }

      async function getRenderStyle() {
        return GM_getResourceText(styleName)
      }
    }

    async renderLessSafely(source, label, previous = '') {
      try {
        const { css = '' } = await less.render(source || '')
        return css
      } catch (error) {
        console.error(`${label} Less 编译失败，保留上一次有效样式`, error)
        return previous
      }
    }

    async loadSiteCSS() {
      const revision = ++this.styleLoadRevision
      console.mylog('CSS加载开始' + +this.curConfig.adsStyleMode)
      const nextCSSList = { ...this.adsCSSList, layoutStyle: '' }
      const layoutPlan = this.curConfig.adsStyleEnable
        ? getLayoutStylePlan(this.options.siteName, this.curConfig.adsStyleMode)
        : []
      if (layoutPlan.length) {
        const layoutParts = []
        for (const styleName of layoutPlan) {
          layoutParts.push(await this.loadStyleByName_WithLessCache(styleName))
        }
        const mode = normalizeLayoutMode(this.curConfig.adsStyleMode)
        if (mode === 4 || mode === 5) layoutParts.push(this.getMultiPageStyle(mode))
        nextCSSList.layoutStyle = layoutParts.filter(Boolean).join('\n')
      }
      // 加载百度Lite
      if (this.curConfig.baiduLiteEnable) {
        nextCSSList.baiduLiteStyle = await this.loadStyleByName_WithLessCache('baiduLiteStyle')
      }
      // 加载背景图优化
      if (this.curConfig.BgEnable && this.curConfig.BgFit) {
        nextCSSList.bgAutoFitStyle = await this.loadStyleByName_WithLessCache('BgAutoFit')
      }
      // 加载护眼样式
      if (this.curConfig.HuYanMode) {
        nextCSSList.huyanStyle = await this.getHuyanStyle()
      }

      if (this.curConfig.isDarkModeEnable) {
        nextCSSList.darkModeStyle = await this.loadStyleByName_WithLessCache('HuaHua-ACDrakMode')
      }
      // 加载自定义样式
      if (this.curConfig.customStyleEnable) {
        console.mylog('触发custom更新')
        nextCSSList.customStyle = await this.renderLessSafely(this.curConfig.customStyleLess, 'customStyle', this.adsCSSList.customStyle)
      }
      // 加载其他样式
      if (this.curConfig.commonStyleEnable) {
        console.mylog('触发common更新')
        nextCSSList.commonStyle = await this.renderLessSafely(this.curConfig.commonStyleLess, 'commonStyle', this.adsCSSList.commonStyle)
      }
      if (revision !== this.styleLoadRevision) return false
      Object.assign(this.adsCSSList, nextCSSList)
      console.mylog('CSS加载结束')
      // 2秒后再加载
      clearTimeout(this.loadAllStyleTimer)
      this.loadAllStyleTimer = setTimeout(() => {
        if (revision === this.styleLoadRevision) this.loadAllStyle().catch(error => {
          console.error('补充样式加载失败', error)
        })
      }, 2000)
      return true
    }

    getMultiPageStyle() {
      const mode = normalizeLayoutMode(arguments[0] || this.curConfig.adsStyleMode)
      const columns = mode === 4 ? 3 : 4
      const siteName = this.options.siteName
      const site = {
        baidu_xueshu: 'baidu',
        google_scholar: 'google',
      }[siteName] || siteName
      const scope = `body[${site}][ac-layout-mode='${mode}']`
      const modeVars = {
        baidu: `body[baidu][ac-layout-mode='${mode}'].pc-fresh-wrapper-con{--ac-search-layout-columns:${columns} !important;--ac-baidu-multi-results-width:min(${columns === 3 ? 1500 : 1760}px,calc(100vw - var(--ac-baidu-page-gutter) - var(--ac-baidu-page-gutter))) !important;}`,
        duck: `${scope}{--ac-search-layout-columns:${columns};--ac-duck-wide-results-width:min(${columns === 3 ? 1440 : 1760}px,calc(100vw - var(--ac-duck-page-gutter) * 2));}`,
        haosou: `${scope}{--ac-search-layout-columns:${columns};--ac-haosou-grid-width:min(${columns === 3 ? 1440 : 1760}px,calc(100vw - 2 * var(--ac-haosou-page-gutter)));}`,
        google: `${scope}{--ac-search-layout-columns:${columns};}`,
      }[site] || `${scope}{--ac-search-layout-columns:${columns};}`

      const targetSelector = {
        baidu: '#container #content_left',
        google: '#rso',
        bing: '#b_content #b_results',
        duck: '#react-layout .react-results--main',
        haosou: '#container #main .result',
      }[site] || this.options.useItem.MultiPageType
      const target = targetSelector
        .split(',')
        .map(selector => selector.trim())
        .filter(Boolean)
        .map(selector => `${scope} ${selector}`)
        .join(',')
      return modeVars + target +
        `{grid-template-columns: repeat(${columns}, minmax(0, 1fr)); grid-template-areas:'${Array(columns).fill('xmain').join(' ')}';}`
    }

    async getHuyanStyle() {
      function Lighter(oriRGB, deltaY) {
        function clip255(value) {
          if (value > 255) return 255;
          if (value < 0) return 0;
          return value;
        }

        // 按比例缩放 + 1/deltaY
        // HEX 2 RGB
        let rgb = oriRGB.replace("#", "");
        let R = parseInt("0x" + rgb.substr(0, 2));
        let G = parseInt("0x" + rgb.substr(2, 2));
        let B = parseInt("0x" + rgb.substr(4, 2));
        // RGB 2 YUV
        let Y = ((66 * R + 129 * G + 25 * B + 128) >> 8) + 16;
        let U = ((-38 * R - 74 * G + 112 * B + 128) >> 8) + 128;
        let V = ((112 * R - 94 * G - 18 * B + 128) >> 8) + 128;
        Y = Y * (1 + 1.0 / deltaY);// 提高亮度
        // YUV 2 RGB
        R = clip255((298 * (Y - 16) + 409 * (V - 128) + 128) >> 8);
        G = clip255((298 * (Y - 16) - 100 * (U - 128) - 208 * (V - 128) + 128) >> 8);
        B = clip255((298 * (Y - 16) + 516 * (U - 128) + 128) >> 8);
        return "#" + ((R << 16) + (G << 8) + B).toString(16);
      }

      let HuyanStyle = await this.loadStyleByName_WithLessCache('HuYanStyle')
      const huyanColor = this.curConfig.HuYanMode_Color

      return HuyanStyle
        .replace(/#aaa(a*)/igm, huyanColor)
        .replace(/#bbb(b*)/igm, Lighter(huyanColor, -40))
        .replace(/#ccc(c*)/igm, Lighter(huyanColor, 45));
    }

    async loadAllStyle() {
      if (!this.adsCSSList.baiduLiteStyle) this.adsCSSList.baiduLiteStyle = await this.loadStyleByName_WithLessCache('baiduLiteStyle')
      if (!this.adsCSSList.bgAutoFitStyle) this.adsCSSList.bgAutoFitStyle = await this.loadStyleByName_WithLessCache('BgAutoFit')
      if (!this.adsCSSList.darkModeStyle) this.adsCSSList.darkModeStyle = await this.loadStyleByName_WithLessCache('HuaHua-ACDrakMode')
    }

    waitBodyHead() {
      // 永远执行
      MyApi.safeWaitFunc(() => {
        return document.head
      }, () => {
        console.mylog('解锁head')
        this.lock.headLocked = false
      })
      MyApi.safeWaitFunc(() => {
        return document.body
      }, () => {
        console.mylog('解锁body')
        this.lock.bodyLocked = false
      })
    }

    addIntervalTrigger(site = '', waitAt = 'now', callback, interval_time = 0, runTimes = 1) {
      console.mylog('addIntervalTrigger', site, "------------", this.options.siteName)
      if (site !== 'all' && this.options.siteName !== site) return

      let count = runTimes
      const intId = MyApi.setIntervalRun(async () => {
        if (
          !((waitAt === 'now') ||
            (waitAt === 'body' && !this.lock.bodyLocked) ||
            (waitAt === 'head' && !this.lock.headLocked))
        ) {
          return
        }
        count--
        if (count >= 0) {
          await callback(count)
        } else {
          clearInterval(intId)
        }
      }, interval_time)
    }

    acpush_acremoveInit() {
      function acpush(data = "") {
        this.hasEdit = true
        data = data.trim()
        // 如果是垃圾数据，那么可以丢弃的
        if (!data) return '无效内容';
        // 如果数据中有回车，那数据也是无效的正文而已
        if (data.search(/(,|：|。|\n)/) >= 0) return '格式不符合要求';
        if (this.findIndex(m => m === data) < 0) {
          this.push(data);
          dataChangeCallback()
        } else {
          return "已存在相同项"
        }
      }

      function acremove(data) {
        this.hasEdit = true
        let delId = this.findIndex(m => m === data);
        if (delId >= 0) {
          this.splice(delId, 1);
          dataChangeCallback()
          return delId
        }
        return -1
      }

      function dataChangeCallback() {
        CONST.lock.afterBlockChangeChecked = false
        PageBlockFunc._updateRegListRule()
      }

      Object.defineProperty(CONST.blockRuleList, 'acpush', { value: acpush })
      Object.defineProperty(CONST.blockRuleList, 'acremove', { value: acremove })
    }

    _getSiteName() {
      const hostname = location.hostname.toLowerCase().replace(/\.$/, '')
      const matchesDomain = (domain) => hostname === domain || hostname.endsWith(`.${domain}`)
      if (hostname === 'xueshu.baidu.com') return 'baidu_xueshu'
      if (hostname === 'scholar.google.com') return 'google_scholar'
      if (matchesDomain('so.com')) return 'haosou'
      if (matchesDomain('baidu.com')) return 'baidu'
      if (matchesDomain('bing.com')) return 'bing'
      if (matchesDomain('duckduckgo.com')) return 'duck'
      if (hostname.split('.').includes('google')) return 'google'
      return ''
    }
  }

  const CONST = new ACGM()
  await CONST.initACGM()

  class PageFuncClass {
    constructor() {
      this.removeAds = this.removeAdFunc()
    }

    GoogleInBaiduMode() {
      MyApi.safeGetNodeFunc("#logo img, #logocont img", function (node) {
        let faNode = node.parentNode?.parentNode;
        if (!faNode) return
        if (faNode.hasAttribute('xchanged')) return
        faNode.classList.add("baidu");
        faNode.setAttribute('xchanged', 1)
        node.removeAttribute("src");
        node.src = "https://www.baidu.com/img/flexible/logo/pc/result.png";
        node.width = "125";
        node.removeAttribute("height");
      });
      MyApi.safeGetNodeFunc("a#logo", function (node) {
        let faNode = node.parentNode?.parentNode;
        if (!faNode) return
        if (faNode.hasAttribute('xchanged')) return
        faNode.classList.add("baidu");
        faNode.setAttribute('xchanged', 1)
        const svgNode = node.querySelector('svg')
        if (svgNode) svgNode.style.display = 'none'
        const newImage = document.createElement('img')
        newImage.src = "https://www.baidu.com/img/flexible/logo/pc/result.png"
        newImage.width = "125"
        node.appendChild(newImage)
      });
      MyApi.safeGetNodeFunc("img[alt='Google']", function (node) {
        if (node.hasAttribute('xchanged')) return
        node.setAttribute('xchanged', 1)
        node.removeAttribute("srcset");
        node.src = "https://www.baidu.com/img/flexible/logo/pc/result.png";
        node.style.height = '72px'
        // node.style.marginTop = '-10px'
      });
      MyApi.safeGetNodeFunc("form[role='search'] .logo img", function (node) {
        if (node.hasAttribute('xchanged')) return
        node.setAttribute('xchanged', 1)
        node.removeAttribute("srcset");
        node.src = "https://www.baidu.com/img/flexible/logo/pc/result.png";
        node.setAttribute("height", "30");
        // node.style.marginTop = '-10px'
      });
      if (!document.title.includes('百度')) {
        document.title = document.title.replace(/^Google/, "百度一下，你就知道")
          .replace(/ - Google 搜索/, "_百度搜索")
          .replace(/ - Google Search/, "_百度搜索");
      }
      MyApi.safeGetNodeFunc("head", function () {
        let linkTarget = document.querySelector("link[type='image/x-icon']");
        if (linkTarget && linkTarget.href.includes('baidu')) {
          return
        }
        linkTarget = document.createElement('link')
        linkTarget.type = 'image/x-icon';
        linkTarget.rel = 'shortcut icon';
        linkTarget.href = 'https://www.baidu.com/favicon.ico';
        document.head.appendChild(linkTarget);
        const iconNode = document.querySelector('link[rel="icon"]')
        if (iconNode) iconNode.href = 'https://www.baidu.com/favicon.ico'
      })
    }

    removeAdFunc() {
      function removeBaiduAd() {
        // 移除右侧栏广告
        MyApi.safeRemove_xpath("id('content_right')/div[.//a[starts-with(text(), '广告')]]");
        // 移除标准广告
        MyApi.safeRemove_xpath("id('content_left')/div[.//span[contains(@class, 'tuiguang') or contains(@class, 'brand')][contains(text(), '广告')]]");
        // 移除标准广告 - 新
        MyApi.safeRemove_xpath("id('content_left')/div[.//a[text()='广告']]");
        // 移除右侧栏顶部-底部无用广告
        MyApi.safeRemove_xpath("id('content_right')/br");
        MyApi.safeRemove_xpath("id('content_right')/div[not(@id)]");
        // 移除顶部可能出现的 "为您推荐"
        MyApi.safeRemove_xpath("id('content_left')//div[contains(@class, '_rs')]");

        /****移除Mobile模式上的部分广告****/
        MyApi.safeRemove_xpath("id('page-bd')/div[not(contains(@class, 'result'))]");
        MyApi.safeRemove_xpath("id('page-bd')/div[not(@class)]");
        MyApi.safeRemove_xpath("//div[@class='na-like-container']");
      }

      function removeGoogleAd() {
        MyApi.safeRemoveAd("#bottomads");
        MyApi.safeRemoveAd('div[aria-label="广告"]');
        MyApi.safeRemoveAd('div[aria-label="Ads"]');
      }

      function removeBingAd() {
        MyApi.safeRemoveAd(".b_ad");
        MyApi.safeRemove_xpath("id('b_results')/li[./div[@class='ad_fls']]");

        // 移除特殊tag，带url标记的广告类 -- 新版的bing似乎比较特殊，无法判定了
        const resList = [...document.querySelectorAll("ol>li")].filter(one => one.querySelector('p')) // 定位到所有包含p标签的li
        const removeWith = [
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAALCAYAAAAunZ4gAAAAAXNSR0IArs4c6QAAAl5JREFUSEvlVrtuE0EUPXdW8lqWgA8A8QHJByBBTZDShiiUSMmu3FhRSB9IPgAKd7t2T2SgjAw9rz5AD/kBQLLWtnYOuquZ1cTYMpQGV+ur2fs459wzK/hPfuLnTJJkS0ReBHOfZln2YJVw6HQ6V4uiOAPwLM/zl2Hv1aDtdvu6tfYdyUd6IPjfz/P8ZFWGXTpomqa3RGRAcjvLso/hYDo0ySHJ1wAOAXwHcE/P+cQicsfH4zj+MplMzkheANjRXCTvK4BaB4DmuRbm8cACuAngqzHmtntP634DsK4xkrskj11/teLSNH2utUTknKTWezKXUX0xSZIjEamSkHzsmQyaeK9S1nMANprN5uZ4PM70vIur9J8qCCR7InIx7zzJz5rb1VuL4zh1cnvj45pfRPYUFJKVqnS1ABxoXa3pJarPWleBsNbecO/sLhzUsxiiq0xEUfTBMbqnLDr2e8q+iPSstdU+eOZFZJ/kibXWN75ljDloNBqbRVHcdT5QqyJQzKX8xpiHZVm+8usUEhH6iH9WUJdKd94OesSNMYfW2iGAuhEAPQDbypxffAfQ0BizX5al7nU9qGei2+3+CNVD8q1jbjCbP4qieYOuzRqkk22lqqWDOsft+93zzRhjVBZ9Z1ReQkfGmA1laJF0HdO/MarnSQ5UAVpTmW61Wjuj0eg0UECVn6SXbmWQYY/eBxRMa+2nv5Kul4Yus0hlxtWyBw78U0TW/8SMZnau3q3pdHpFQXOmc0m+Qbw2o/Am8OADOA7707g3IwDnzmMWm9GiK2T26lmVq2a2z/qD4V8f9BciyTQqHtmLjAAAAABJRU5ErkJggg==',
          // ''
        ]
        const adList = resList.filter(one => {
          const url = window.getComputedStyle(one.querySelector('p'), '::before').getPropertyValue('content')
          return removeWith.some(remove => url.includes(remove))
        }) // 检查每一个p标签，里面存在before伪元素，且伪元素中是链接的，均为广告
        adList.forEach(one => one.remove())
      }

      function removeHaosouAd() {
        MyApi.safeRemoveAd("#so_kw-ad")
        MyApi.safeRemoveAd("#m-spread-left")
        MyApi.safeRemoveAd("#m-spread-bottom")
        MyApi.safeRemoveAd("#so_top")
        MyApi.safeRemoveAd(".res-recommend-tag-cover")
        MyApi.safeRemove_xpath("id('righttop_box')//li[.//span[contains(text(), '广告')]]")
      }

      return {
        removeBaiduAd,
        removeGoogleAd,
        removeBingAd,
        removeHaosouAd,
      }
    }

    InsertSettingMenu() {
      if (document.querySelector("#myuser") === null) {
        MyApi.safeWaitFunc("#u, #gb, #b_header>#id_h, #header_wrapper .js-hl-butto, .header--aside, #header .inner .menu", parent => {

          let userAdiv = document.createElement("div");
          userAdiv.id = "myuser";
          userAdiv.innerHTML = `<button type='button' class='myuserconfig'>自定义</button><span class='ac-newversionDisplay' style='background-color: red;float: left;height: 8px;width: 8px;border-radius: 4px;display: none'>&nbsp;</span>`;

          parent.insertBefore(userAdiv, parent.childNodes[0]);
          document.querySelector("#myuser .myuserconfig").addEventListener("click", function (e) {
            window.open(CONST.openSettingsUrl)
          }, true);
        }, 300)
      }
    }

    RedirectHandle() {
      // 处理主重定向
      if (CONST.options.useItem.SiteTypeID < 0) return;
      if (CONST.curConfig.isRedirectEnable) {

        if (CONST.options.useItem.Stype_Normal) { // 如果定义了，那么就去处理重定向
          resetURLNormal();
        }
        if (CONST.options.useItem.SiteTypeID === CONST.options.google.SiteTypeID) removeOnMouseDownFunc(); // 移除onMouseDown事件，谷歌去重定向
        if (location.host.includes('m.baidu.com')) removeMobileBaiduDirectLink(); // 处理百度手机版本的重定向地址
        remove_xueshuBaidu(); // 百度学术重定向问题
        MyApi.safeRemoveAd(".res_top_banner"); // 移除百度可能显示的劫持
      }

      function removeMobileBaiduDirectLink() {
        let nodes = document.querySelectorAll("#page #page-bd #results .result:not([ac_redirectStatus])");
        for (let i = 0; i < nodes.length; i++) {
          let curNode = nodes[i];
          MyApi.safeFunc(function () {
            let curData = JSON.parse(curNode.dataset.log.replace(/'/gm, "\""));
            let trueLink = curData.mu;
            const articleNode = curNode.querySelector("article")
            if (articleNode) articleNode.setAttribute("rl-link-href", trueLink);
            curNode.querySelectorAll("a").forEach(function (per) {
              per.setAttribute("href", trueLink);
            });
          });
          curNode.setAttribute("ac_redirectStatus", "1");
        }
      }

      function removeOnMouseDownFunc() {
        MyApi.safeFunc(() => {
          let resultNodes = document.querySelectorAll("#rso a[href], #bres a[href]");
          for (let i = 0; i < resultNodes.length; i++) {
            let one = resultNodes[i];
            one.removeAttribute("onmousedown"); // 仅移除重定向事件，不改写真实 href
            one.setAttribute("target", "_blank"); // 谷歌链接新标签打开
            one.removeAttribute("data-jsarwt");
          }
        })
      }

      function remove_xueshuBaidu() {
        if (CONST.options.useItem.SiteTypeID === CONST.options.baidu_xueshu.SiteTypeID) {
          let xnodes = document.querySelectorAll("a[href*='sc_vurl=http']");
          for (let j = 0; j < xnodes.length; j++) {
            let xurl = MyApi.getUrlAttribute(xnodes[j].href, "sc_vurl", true);
            xnodes[j].href = xurl;
          }
        }
      }

      function DealRedirect(request, curNodeHref, respText, RegText, hrefType) {
        if (respText === null || typeof (respText) === "undefined") return;
        let resultResponseUrl = "";
        if (RegText != null) {
          resultResponseUrl = MyApi.Reg_Get(respText, RegText);
        } else {
          resultResponseUrl = respText;
        }
        if (resultResponseUrl !== null && resultResponseUrl !== "" && !resultResponseUrl.includes("www.baidu.com/link")) {
          try {
            let host = PageFunc.getTextHost(resultResponseUrl);

            document.querySelectorAll("*[href*='" + curNodeHref + "']").forEach(per => {
              let changeNode = per;

              changeNode.setAttribute("ac_redirectStatus", "2");
              changeNode.href = resultResponseUrl;
              // changeNode.setAttribute("data-orihref", changeNode.href);
              if (changeNode.hasAttribute("meta")) {
                changeNode.setAttribute("meta", host);
                changeNode.dataset.host = host;
              }

              if (hrefType === null || hrefType === undefined || hrefType === "title") {
                if (changeNode.text && changeNode.text.length < 10 && !changeNode.text.includes(host)
                  // 不能是redirect url 不能是h2\h3下直属链接
                  && !changeNode.parentElement.tagName.toLowerCase().includes("h")) {
                  changeNode.appendChild(document.createTextNode(` - ${host}`));
                }
              }
            })
            request && request.abort();
          } catch (e) {
          }
        }
      }

      function resetURLNormal() {
        const mainList = document.querySelectorAll(CONST.options.useItem.MainType)

        // 注意有重复的地址，尽量对重复地址进行去重
        var hasDealHrefSet = new Set();
        for (let i = 0; i < mainList.length; i++) {
          // 此方法是异步，故在结束的时候使用i会出问题-严重!
          // 采用闭包的方法来进行数据的传递
          const curNode = mainList[i];

          if (curNode !== null && curNode.getAttribute("ac_redirectStatus") === null) {
            curNode.setAttribute("ac_redirectStatus", "0");

            const linkNode = curNode.querySelector(CONST.options.useItem.Stype_Normal);
            if (linkNode === null) {
              continue
            }

            // 跳过特殊链接的处理
            if (linkNode.href && (linkNode.href.startsWith('javascript') || linkNode.href.startsWith('#'))) {
              continue
            }

            let linkHref = linkNode.href;
            let len1 = hasDealHrefSet.size;
            hasDealHrefSet.add(linkHref);
            let len2 = hasDealHrefSet.size;
            if (len1 === len2) continue; // 说明数据已经处理过，存在相同的记录
            // 处理Bing重定向
            const handleBingRedirect = () => {
              if (linkHref.search("bing.com/(ck|a|aclick)") > 0) {
                const urlObj = new URL(linkHref);
                const uParam = urlObj.searchParams.get('u');
                if (uParam) {
                  // 去掉前缀a1，并解码Base64
                  const base64Str = uParam.substring(2).replace(/-/g, '+').replace(/_/g, '/');
                  const trueUrl = atob(base64Str);
                  DealRedirect(null, linkHref, trueUrl);
                  return true;
                }
              }
            }
            const isLinkNeedDeal = () => {
              // 如果当前节点存在mu参数，或者link节点存在data-mdurl，那么就算直接成功，不用重新请求一遍了
              let trueLink = curNode.getAttribute('mu') || linkNode.getAttribute('data-mdurl')
              if (trueLink && !trueLink.includes('nourl')) {
                trueLink = getBaiduEncodingHandle(trueLink)
                DealRedirect(null, linkHref, trueLink);
                return true
              }
            }
            const getBaiduEncodingHandle = (linkUrl) => {
              let resLink = linkUrl
              if (CONST.options.useItem.SiteTypeID === CONST.options.baidu.SiteTypeID && linkUrl.includes('baidu.com')) {
                const [, first = ''] = /(ie=[^&]+)/.exec(location.search) || []
                resLink = linkUrl.replace(/(ie=[^&]+)/, first)
              }
              return resLink
            }
            // 如果不需要处理，那么跳过后续逻辑
            if (handleBingRedirect() || isLinkNeedDeal()) {
              continue
            }
            // 走接口重定向处理
            if (linkHref.includes("www.baidu.com/link") ||
              linkHref.includes("m.baidu.com/from") ||
              linkHref.includes("so.com/link") ||
              linkHref.search("bing.com/(ck|a|aclick)") > 0 ||
              linkHref.search("e.so.com/(search|eclk)") > 0
            ) {
              (async function (c_curnode, c_curhref) {
                let url = c_curhref.replace(/^http:/, "https:");
                if (CONST.options.useItem.SiteTypeID === CONST.options.baidu.SiteTypeID && !url.includes("eqid")) {
                  // 如果是百度，并且没有带有解析参数，那么手动带上
                  url = url + "&wd=&eqid=";
                }

                let gmRequestNode = GM_xmlhttpRequest({
                  url: url,
                  headers: { "Accept": "*/*", "Referer": c_curhref.replace(/^http:/, "https:") },
                  method: "GET",
                  timeout: 8000,
                  onload: function (response) { // MARK 有时候这个函数根本不进来 - 调试的问题 - timeout
                    if (response.responseText || response.responseHeaders) {
                      // 百度重定向页可能通过脚本变量返回真实地址
                      DealRedirect(gmRequestNode, c_curhref, response.responseText, "URL='([^']+)'")
                      // 这个是在上面无法处理的情况下，备用的 tm-finalurldhdg  tm-finalurlmfdh

                      if (response.responseHeaders.includes("tm-finalurl")) {
                        let relURL = Reg_Get(response.responseHeaders, "tm-finalurl\\w+: ([^\\s]+)");
                        if (relURL === null || relURL === "" || relURL.includes("www.baidu.com/search/error")) return;
                        DealRedirect(gmRequestNode, c_curhref, relURL);
                      }
                    }
                  }
                });
              })(curNode, linkHref); //传递旧的网址过去，读作c_curhref
            }
          }
        }
        if (hasDealHrefSet.size > 0 && mainList.length - hasDealHrefSet.size > 0) console.mylog("丢弃掉", mainList.length - hasDealHrefSet.size, "个重复链接");
      }
    }

    getTextHost(sbefore) {
      sbefore = (sbefore && sbefore.trim()).replace(/\s-\s\d{4}-\d{1,2}-\d{1,2}/, "") || "";
      let send;
      let result = sbefore.split('-');
      // 百度结果中第一个片段是中文时，地址通常位于第二个片段
      if ((result.length > 1 && new RegExp("[\\u4E00-\\u9FFF]+", "g").test(sbefore)) && CONST.options.useItem.SiteTypeID === CONST.options.baidu.SiteTypeID) {
        sbefore = result[1];
      } else {
        result = sbefore.split('\n');
        if (result.length > 1 && CONST.options.useItem.SiteTypeID === CONST.options.google.SiteTypeID) {
          sbefore = result[1];
        }
      }
      // 此时sbefore几乎是等于网址了，但是有时候会有多的空格，多的内容，多的前缀http，多余的路径
      let res = new RegExp(/(https?:\/\/)?([^/\s]+)/i).exec(sbefore);
      send = (res && res[2].trim()) || "";
      // send = sbefore.replace(/(\/[^/]*|\s*)/, "").replace(/<[^>]*>/g, "").replace(/https?:\/\//g, "").replace(/<\/?strong>/g, "").replace(/<\/?b>/g, "").replace(/<?>?/g, "").replace(/( |\/).*/g, "").replace(/\.\..*/, "");
      if (send === "") return null;
      if (send.indexOf(".") < 0) return null;
      if (send.indexOf("↵") >= 0) return null;
      return send.trim();
    }

    getNodeHost(sitetpNode) {
      if (!sitetpNode) return {}
      if (CONST.options.useItem.SiteTypeID === CONST.options.baidu.SiteTypeID) {
        const href = sitetpNode.getAttribute("href");
        if (href != null && !href.includes("baidu.com/link")) {
          // 已经解析出来了
          return { curHost: this.getTextHost(href), curUrl: href };
        } else {
          const host = this.getTextHost(sitetpNode.innerText || sitetpNode.textContent)
          return { curHost: host, curUrl: host, isBaiduLink: true }; // 未被解密
        }
      } else if (sitetpNode instanceof HTMLAnchorElement) {
        return { curHost: sitetpNode.host, curUrl: sitetpNode.href };
      } else {
        const host = this.getTextHost(sitetpNode.innerText || sitetpNode.textContent)
        return { curHost: host, curUrl: host };
      }
    }

    addFavicon(citeList) {
      if (CONST.options.useItem.SiteTypeID !== null) {
        if (CONST.lock.isFaviconChecking) return;
        CONST.lock.isFaviconChecking = true;

        const batchSize = 10; // 每一帧处理的数量，避免长时间锁定主线程
        let currentIndex = 0;

        const processBatch = () => {
          const limit = Math.min(currentIndex + batchSize, citeList.length);
          for (; currentIndex < limit; currentIndex++) {
            if (null === citeList[currentIndex].getAttribute("ac_faviconStatus")) {
              let curNode = citeList[currentIndex];
              let targetNode = curNode;
              let { curHost, curUrl = '' } = this.getNodeHost(targetNode);
              if (!curHost) continue; // 跳过解不出来的地址

              let II = 0;
              for (; II <= 5; II++) {
                targetNode = targetNode.parentNode;
                if (targetNode != null && targetNode.querySelector(CONST.options.useItem.FaviconAddTo) != null) {
                  break;
                }
              }
              if (targetNode?.parentNode?.hasAttribute('tpl') && targetNode.parentNode.getAttribute('tpl').includes('stock')) {
                curNode.setAttribute("ac_faviconStatus", "-3");
                continue
              }
              //console.mylog(index+"."+faviconUrl+"--"+II);
              if (II <= 5) {
                // 先用父节点判断一下是否存在img
                const tmpHTML = targetNode?.innerHTML || '';
                const hasNativeFavicon = [
                  "fav-url", "wr_fav", "favurl", "tit-ico", "img_fav rms_img",
                  "c-tool-", "span class=\"c-icon c-icon-", "img class=\"xA33Gc", "img class=\"XNo5Ab\""
                ].some(marker => tmpHTML.includes(marker));
                //他自己已经做了favicon了
                if (hasNativeFavicon) {
                  curNode.setAttribute("ac_faviconStatus", "-2");
                  continue;
                }
                targetNode = targetNode?.querySelector(CONST.options.useItem.FaviconAddTo);
                let faviconHost = ''
                try {
                  const parsedHost = new URL(/^https?:\/\//i.test(curHost) ? curHost : `https://${curHost}`)
                  faviconHost = parsedHost.hostname.toLowerCase().replace(/\.$/, '')
                } catch (e) {
                }

                if (targetNode && !targetNode.hasAttribute("data-favicon-t") && faviconHost.includes('.')) {
                  targetNode.setAttribute('data-favicon-t', faviconHost)
                  CONST.cssFavionList.list.push({
                    url: faviconHost
                  })
                }
              }
              citeList[currentIndex].setAttribute("ac_faviconStatus", "1");
            }
          }
          if (currentIndex < citeList.length) {
            requestAnimationFrame(processBatch);
          } else {
            CONST.lock.isFaviconChecking = false;
          }
        };
        requestAnimationFrame(processBatch);
      } else {
        CONST.lock.isFaviconChecking = false;
      }
    }

    addCounter(citeList) {
      if (CONST.lock.isCounterChecking) return;
      CONST.lock.isCounterChecking = true;

      const batchSize = 20;
      let currentIndex = 0;

      const processBatch = () => {
        const limit = Math.min(currentIndex + batchSize, citeList.length);
        for (; currentIndex < limit; currentIndex++) {
          let cur = citeList[currentIndex];
          const index = cur.getAttribute('SortIndex');
          if (index === null || typeof (index) === "undefined") {
            cur.setAttribute('SortIndex', CONST.sortIndex);
            let ele = document.createElement('em');
            ele.className = 'AC-CounterT';
            ele.innerText = CONST.sortIndex;
            let child = cur.firstElementChild;
            if (child && child.nodeName === 'DIV') {
              let emNode = child.querySelector('em');
              if (emNode) emNode.parentNode.insertAdjacentElement('afterBegin', ele)
            } else {
              cur.insertAdjacentElement('afterBegin', ele);
            }
            CONST.sortIndex++;
          } else {
            const curCounter = cur.querySelector(".AC-CounterT")
            if (!curCounter) continue
            const oriIndex = curCounter.innerText
            const checkValue = (currentIndex + 1) % 100;
            // 数据值不同
            // 数据没有被翻译
            if (+index !== checkValue && !/^\d+$/.test(oriIndex)) { // 按需更新
              curCounter.innerText = checkValue;
              cur.setAttribute('SortIndex', checkValue);
            }
          }
        }
        if (currentIndex < citeList.length) {
          requestAnimationFrame(processBatch);
        } else {
          CONST.lock.isCounterChecking = false;
        }
      };
      requestAnimationFrame(processBatch);
    }

    acSetCookie(cname, cvalue, domain, exdays) {
      MyApi.safeFunc(() => {
        exdays = exdays || 30;
        let d = new Date();
        domain = (domain ? "domain=" + domain : "") + ";";
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + domain + expires + ";path=/;SameSite=None;Secure";
      })
    }

    dataChangeFireCallback() {
      // 数据有变更，暂停自动注入，开启批量原子更新
      CONST.cssAutoInsert.pause()
      CONST.cssAutoInsert.clear()

      const activeSite = CONST.options.siteName
      const siteScope = `body[${activeSite}]`
      const normalizedMode = normalizeLayoutMode(CONST.curConfig.adsStyleMode)
      if (document.body) {
        document.body.setAttribute(activeSite, '1')
        const canonicalSite = { baidu_xueshu: 'baidu', google_scholar: 'google' }[activeSite]
        if (canonicalSite) document.body.setAttribute(canonicalSite, '1')
        document.body.setAttribute('ac-layout-mode', String(normalizedMode))
      }

      if (!CONST.curConfig.enableCSS) {
        MyApi.safeGetNodeFunc('#myuser', node => node.remove())
        CONST.cssAutoInsert.resume()
        return
      }

      console.mylog('即将插入CSS1')
      if (CONST.curConfig.adsStyleEnable) {
        console.mylog('插入当前布局样式', getLayoutStylePlan(CONST.options.siteName, CONST.curConfig.adsStyleMode))
        CONST.cssAutoInsert.add("layoutStyle", CONST.adsCSSList.layoutStyle)
      } else {
        CONST.cssAutoInsert.remove("layoutStyle")
      }

      CONST.cssAutoInsert.add("styleLogo", `${siteScope} .minidiv #logo img{width: 100px;height: unset;margin-top: 0.3rem;} ${siteScope}.purecss-mode:before{display: none;}`)
      if (activeSite === 'baidu') {
        CONST.cssAutoInsert.add("specialBAIDU", `${siteScope} .opr-recommends-merge-imgtext,${siteScope} .res_top_banner,${siteScope} .headBlock,${siteScope}>div.result-op{display:none!important;}`)
      }
      CONST.cssAutoInsert.add("animationStyle", `
        @keyframes ani_leftToright {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes ac-bar-fast {
          0%, 100% { transform: scaleY(0.4); opacity: 0.5; }
          50% { transform: scaleY(1.4); opacity: 1; }
        }
        ${siteScope} .ac-loading-spinner {
          position: fixed;
          top: 220px; /* 避开搜索栏，对齐结果区上方 */
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 100000;
          pointer-events: none;
        }
        ${siteScope} .ac-loading-spinner div {
          width: 4px;
          height: 30px;
          background-color: #4e6ef2;
          border-radius: 2px;
          animation: ac-bar-fast 0.3s ease-in-out infinite;
        }
        ${siteScope} .ac-loading-spinner div:nth-child(2) { animation-delay: 0.05s; }
        ${siteScope} .ac-loading-spinner div:nth-child(3) { animation-delay: 0.1s; }
        ${siteScope} .ac-loading-spinner div:nth-child(4) { animation-delay: 0.15s; }
        ${siteScope} .ac-loading-spinner div:nth-child(5) { animation-delay: 0.20s; }
        /* 兜底隐藏（页面整体就绪） */
        ${siteScope}.ac-ready .ac-loading-spinner { opacity: 0; transition: opacity 0.3s; pointer-events: none; }
        ${siteScope} .ac-entry-ani {
          animation: ani_topTobuttom 0.4s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        ${siteScope} #ac-pager-loader {
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          padding: 8px 16px;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          border-radius: 20px;
          font-size: 12px;
          backdrop-filter: blur(5px);
          z-index: 99999;
          transition: opacity 0.3s;
          pointer-events: none;
        }
      `)
      CONST.cssAutoInsert.add("menuBtn", `
        ${siteScope} .achide { display: none; }
        ${siteScope} .newFuncHighLight { color: red; background-color: yellow; font-weight: 600; }
        ${siteScope} #sp-ac-container label { display: inline; }
        ${siteScope} #u #myuser { display: inline-flex; align-items: center; margin: 13px -10px 0 24px; }
        body[baidu] #u {
          right: 24px !important;
          left: auto !important;
          width: auto !important;
          display: flex !important;
          align-items: center !important;
          justify-content: flex-end !important;
          padding-right: 0 !important;
          pointer-events: auto !important;
        }
        body[baidu] #u #myuser {
          position: static !important;
          flex: 0 0 auto;
          margin: 0 18px 0 0 !important;
          z-index: auto !important;
        }
        ${siteScope} .site-wrapper #myuser, ${siteScope} #gbw #myuser { margin-right: 15px; }
        ${siteScope} #gb #myuser { margin-top: 7px; }
        ${siteScope} #myuser, ${siteScope} #myuser .myuserconfig { margin: 0; }
        ${siteScope} #myuser .myuserconfig {
          min-height: 30px;
          padding: 3px 10px;
          border: 1px solid #4e6ef2;
          border-radius: 4px;
          background: #4e6ef2;
          color: #fff;
          font: 600 13px/22px Arial, sans-serif;
          text-align: center;
          white-space: nowrap;
          box-shadow: none;
          cursor: pointer;
        }
        ${siteScope} #myuser .myuserconfig:hover {
          border-color: #315dcc;
          background: #315dcc !important;
          color: #fff;
        }
        body[haosou] #myuser { margin-top: -10px; }
      `)

      if (CONST.curConfig.baiduLiteEnable) {
        CONST.cssAutoInsert.add("baiduLiteStyle", CONST.adsCSSList.baiduLiteStyle)
      }

      if (CONST.curConfig.HuYanMode) {
        CONST.cssAutoInsert.add("huYanStyle", CONST.adsCSSList.huyanStyle)
      }
      if (CONST.curConfig.adsStyleEnable) {
        const adsBlockCSS = activeSite === 'baidu'
          ? `${siteScope} #bottomads,${siteScope} #content_left>div:not([id])>div[cmatchid],${siteScope} #content_left>div[id*='300']:not([class*='result']),${siteScope} #content_right td>div:not([id]),${siteScope} #content_right>br{position:absolute;top:-6666px;}`
          : activeSite === 'google'
            ? `${siteScope} #bottomads,${siteScope} #content_right>div{position:absolute;top:-6666px;}`
            : ''
        if (adsBlockCSS) CONST.cssAutoInsert.add("adsBlockStyle", adsBlockCSS)
      }
      if (CONST.curConfig.BgEnable) {
        const imageUrl = CONST.curConfig.BgUseUrl
        if (imageUrl) {
          const escapedImageUrl = String(imageUrl).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/[\r\n]/g, '')
          const bgCSS = `${siteScope}{background-image:linear-gradient(rgba(255,255,255,.4),rgba(255,255,255,.4)),url('${escapedImageUrl}')!important;background-position:center top!important;background-size:cover!important;background-repeat:no-repeat!important;background-attachment:fixed!important;}`
          CONST.cssAutoInsert.add("backGroundImage", bgCSS)
        }
        if (CONST.curConfig.BgFit) {
          CONST.cssAutoInsert.add("bgFitStyle", CONST.adsCSSList.bgAutoFitStyle)
        }
      }
      if (CONST.curConfig.isDarkModeEnable) {
        CONST.cssAutoInsert.add("darkModeStyle", CONST.adsCSSList.darkModeStyle)
      }
      if (CONST.curConfig.isAutopage) {
        const sepImgs = {
          top: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAWtJREFUeNrclE0rRGEUx8c1GUpRJIVIZGdhZCVr38GGhaI0ZXwCkliglChZEcvJxhdgYWOjLEUpm/EyiLzze+o8dTzdO3PljoVTv7rPc8/5d+6555xYrEhWop6boda5+6l9wjWcWpF+WIbqCJJ9hFRcDr3QAIkIhKugz5PDfkSixkphz5aiAnqgE8rgWRxGoSOPyBkswQuUwyscw4HrmFCZL8Kt/JAg7mEFPEmo4FdPwk0BUcsdzIap0TQ8qMAPuICcEjLnd+VjSjcfJNgIc/DkZGSymYGsnK9EZMrxe4MFaNGiZjC2fT5zQ3p7QDK1dR2GSljziclAvRUe8nHYVA4jjvC43NfAuk/smB2QNqcsWxKcLbAKTFnS0hWD6n27Fd6FLqiDI5iQmQ9jpiVT0sNJ6aYd7dAE3QHBbinSAX5JWWaxuLo8F35jh/bBK9Y+/r/Cl6pLcnna8NvuDGMnslpbZRpXZYT/3r4EGACZL3ZL2afNFAAAAABJRU5ErkJggg==",
          bottom: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAXFJREFUeNrM1c8rBGEcx/FdtCEkLqYtpdwkKSUHUhxwITdK+Z3yM2cOLnJ39Cc44SgHScmJwlFxsIdlCScO6/2t76Onp52dXTtbnno1M8+Pz84+zzMzkcg/KA3oRTzM0A4cI4VTdIUVPIM3pPGO5aABJTkGx1BqjYmFFZxW7nnBwXmXogWX6bEGc2jEIU7+kNWDUSSwZyqndSvJ3N1g2Bm0oLtB2j+w7rQP4MpqXzRT0YRaPW/BthMedYLs60HsoE2vq9BsPwAJa8XFLUa0fUrvROo/saT1Q9adGimdlt8yj6TT6Q6d2vaida9YRbtP6EqmBZC5fHA6X+AAz1bwEc6cfk9+oaZM4NoZJL70+J2hTaZtNpet041zK8yP/Mgl+rOF1emr0UM1xnAfEPyISd0Jno6vtx+QuM6PZ22lpO7dbEV2Siv6rPeIjNs1HdYC7ixfG+YBqdTVDqPIv6iIWvO7iXGUFxAqi72PraJ9IH8EGACQcYjYRd5GHwAAAABJRU5ErkJggg==",
          pre: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAASlJREFUeNpiYBjOoBiIrwJxFRAzUsvQViD+CMT/gfgTEPdRy9BPUENh+AsQ91JiaAuSS9HxZ3INb8Hi0v+UurwF6qL/ROBvQNxDrKFfkTT+A+JnQPwBKfJA/L9Ian7ic7kMEHcC8Q80F3UAcRsQv4by30INaUJT9weaWhSQDRUB4uVYvLkYiAWAOBopvEFBlArEPEA8G4ue9UAsATM4EYuCJUgKMtAMLoSKCwPxXCx6c1igClTQgmUZVPNrHMEGy3mgYCkCYiYgTkCSV4UZvA2IjYBYDIgvQbPvOyJTECid5wHxbyA2BuL3QLwRWYEsEJvg0IweFEU41IEMlgcxWJAEH0MxJeAsjMFEq6Jw+Br8BimVfMCTDEkG7EBcA8T3oWUJx4DVYwABBgCannnSzbgwIQAAAABJRU5ErkJggg==",
          next: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAT1JREFUeNrc1b1KA0EYheEl/iARFFEkKl6D0UK8CrEVrCwEexFCtBIlRWIjsfEiLL0FKzs7QUWxM2piFMUkvhPOwLAs2TGuCn7wkNll5jC7+w0Jgv9avdjAObbQn1TwCu7QwhWW4xakPIOHMKzxGCaSCm6ioXHLZ0Hqpz7KrwRPIvvNvBlM2zYyNY8cMjhDHo9fCBzErnIqKNjgRSxpvIABbOLes2MKWHfuXdhXcR2avKrJ4zGhI9gLhQbq9XaZgGO1kutIOzIHpKp7NawhjYOINSeY6lFwHacw17P6NTWHd4xqnNbcS83LObtsaCPbEW+gXUW8ODswC27xoOsn3ODDmfOGss9XLuE54jGjvPqGuuG1mFDzZIfdNHynnde7DbW1r5DwTstJHP2iE55YqD36ebXZDvr+7L/sU4ABAIpVZWnoA5GkAAAAAElFTkSuQmCC",
          next_gray: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAtxJREFUeNrclc9L2mEcx7/6NbVZqRVj7pIOlIUuZ1HMgv0BDcqT7JrskH13ELPBF7eTvz10HznWQBlBRIfBXIfBLmqXscvYZWPKrMNIU9Apmrr34/w6i0ovMZjw+H0+z/N8Xt+Pn/fn80hR/+WHYRhBIpFwRKPRz/F4/KnD4RB28xH0Ah4cHHyoUCjsIpFIIZPJHkml0m9Yfn2ZD78XcL1eH6rValIMCmMUtqKbD7/HbNQxaq15oxcH/lXpcmXgtnh2u/2mXC6/DqE+sSxLlUqlniE0TVPBYJAqFot6+GV9Pt+PJthms80sLS2xEonkhlgs/jgwMOBcXV3N5fP5rlCcp9bX1yWLi4uecrk8U6lUshDY3wRbLJYFGKZsNksq4N78/LwY9hOn05k5Ojqi+PzTGePxeFwZUl6vd8hkMvkPDg6sZJ2M5eXlr1wqUu2kA5JOpy2IAO+oO9fW1n5mMpk2nDjmcjkKNU25XC652Wx2pVIp65mXJ2nyjUPpqakpNZxuA8Y5T87OzsobjcYHpVKpGhsbe1CtVkXYqxQKhTdqtfqL1Wr1JpPJxxyU5Lq/vz8aCoX8TTDatYiFhF6vxx5tAJwm8OPj48m5ubmKSqUaAWwSa9eQw6JGo/luNBoNh4eHbAe0JhAINsLh8LNAIJCiudhxB+Qh2ludTifDAQLvI3AIch+Rkl8jJlrhCbOqgfoLmDepOF/BfGNra2sFFZFtvqgzMbFYjAiyp9Vqh4VC4cTJyYmQ90epIQJtHRO1bA5aRhAvdnZ2GI/H87cEz5YPgeOS2RsfHx9B7u+gOi68yQAtYX9zd3eXgZCna/s8By5ypGUUzhOISHgO9BfWXwG6chZ6IbiVc6LwnsFgGIVAepLzjk4rYW1ze3ubcbvd53fjZV2FaqGQ63fT09PDMO9i9BEoon0J9Rm/339xm3dr2f39fVLX7wFvoMVvoYWfRyIRFndD/Z/8nf0WYAA8EC1Z/ZNm4gAAAABJRU5ErkJggg==",
          pre_gray: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAslJREFUeNrclTtMWmEUxz/uvTzlIUhpNMR0aGNjrNHSmHTqRJyadujQDbSGRwJUaYCmDizqUEw6ODVNGgbpYCfSpFINCQzFR9oyMXRsXFCsAXkIKNL/R7gGWxOsSdPEk5zc3O+e87vn+59zv0vIpbSJiQmyubn5LBKJpNbX11+4XC5Buxy2XYDNZiMOh2OW4ziPTCbTi8XikeHh4SsSieQTXnIxsN1uJ1ardVYgEDgPDw+V9Xqd1Go1Mcuyg7AuuVy+sra29ndgVEnGx8dnhEKhs1qtKgE/eXZ8fCzC+q3+/n6tSqVaSSQS5wM7nU5iMplmsF1XpVI5BeXt6OhIBFkGAe9SKpV/wNmzKjWbzRT6tFwuK86CUqPrkIVWPjQwMKBWKBSn4Ozv0LGxsRmRSDSFSjua0Do8TRWAS+B5+B68g/IhixCNvQPN1WjuieZsS/f1aNQ0wzBuaCqlUCQRtVr9Es1K4kVDWJNhrQjAIiqMlkqle804FnkjBoOhEzv4vrGxkW2ALRaLFrq+QoAV2nE8tLe3dzEYDE5vb2939vX1PcBkiKVSaQ1jForFYq+NRqMum83ebsYzmJq7sGu4xhkKxsDfB/AxnO860ev1oeXlZU8gEMgmk0kFqmw8o9dUKiWfn58vhMPh54h7S+OpQXNSLBYfejyeR1yzw9dbRon09PS8W11dnfL5fJl8Pk+0Wi3hk5vyCNBY4vV6f0Im9+joKJNOp818o8G70ah4aWnpIzSKYCa/dXd3B+PxuHNycjKzs7NzAms1+qFQy+VydDRz0WjUpdPp3tB8TFM0FAqFGxXPzc19plJrNJqraMoXt9tNt3Suc+Tg4ICeJfmFhQVLoVAwoKG7fr//B8cHAL6Fy9ZFDinaG/r5w77ya8y/OhEvKRhjtIup2YMTeBb3mXY53HnAmNkP+/v7NzHTTwAO4f79f/ud/RJgAOLcRNZqLojMAAAAAElFTkSuQmCC",
        };
        const cssText = `
          ${siteScope} .sp-separator{line-height:1.8!important;opacity:1!important;position:relative!important;min-width:0;max-width:100%;box-sizing:border-box;text-align:center!important;font-size:14px!important;display:block!important;padding:3px 0!important;border:1px solid #ccc!important;border-radius:30px!important;background-color:#fff!important;}
          ${siteScope} .sp-separator:hover{box-shadow:0 0 11px rgba(33,33,33,.2);}
          ${siteScope} #sp-separator-hover{display:none;}
          ${siteScope} .sp-separator:hover #sp-separator-hover{display:block;}
          ${siteScope} .sp-separator .sp-someinfo{position:absolute!important;right:10px!important;font-size:12px!important;font-style:italic!important;background:none!important;}
          ${siteScope} .sp-separator span{vertical-align:middle;cursor:pointer;padding:0;margin:0 5px;display:inline-block;width:22px;height:22px;}
          ${siteScope} .sp-separator a{margin:0 20px 0 -6px!important;display:inline!important;text-shadow:#fff 0 1px 0!important;background:none!important;color:#595959!important;}
          ${siteScope} .sp-separator input{padding:0!important;line-height:23px!important;}
          ${siteScope} .sp-separator .sp-md-span{font-weight:bold!important;margin:0 20px!important;}
          ${siteScope} #sp-sp-md-number{width:6ch!important;vertical-align:middle!important;display:inline-block!important;text-align:left!important;}
          ${siteScope} .ac_sp_top{background-image:url('${sepImgs.top}')}
          ${siteScope} .ac_sp_pre{background-image:url('${sepImgs.pre}')}
          ${siteScope} .ac_sp_next{background-image:url('${sepImgs.next}')}
          ${siteScope} .ac_sp_bottom{background-image:url('${sepImgs.bottom}')}
          ${siteScope} .ac_sp_next_gray{background-image:url('${sepImgs.next_gray}')}
          ${siteScope} .ac_sp_pre_gray{background-image:url('${sepImgs.pre_gray}')}
        `
        CONST.cssAutoInsert.add("preloadAutoPage", cssText)
      }
      if (CONST.curConfig.isBlockEnable) {
        CONST.cssAutoInsert.add("customBlockStyle", `${siteScope} button.ghhider.ghhb[ac-user-alter='1']::before{content:'取消 - ';}${siteScope} #sp-ac-container .ac-block-item{color:#AAA;margin-left:48px;}${siteScope} #sp-ac-container .ac-block-itemdel{float:right;margin-left:0;padding:0 20px;cursor:pointer;}${siteScope} #sp-ac-container .ac-block-itemdel:hover{color:red;}${siteScope} #sp-ac-container .ac-block-high{color:#000;}${siteScope} .ac-blockList li:hover{background-color:#a3caff;color:white !important;cursor:pointer;}${siteScope} *[ac-needhide] *{display:none}${siteScope} *:not([ac-needhide]) .blockShow{display: none;}${siteScope} *[ac-needhide] .blockShow{display:unset;cursor:pointer;}${siteScope} *[ac-needhide] .blockShow:hover{border:1px solid #DDD}${siteScope} button.ghhider{color:#555;background-color:#fcfcfc;font-family:sans-serif;margin:auto 2px;border:1px solid #ccc;border-radius:4px;padding:2px 3px}${siteScope} button.ghhider{font-size:12px}${siteScope} button.ghhider:hover{color:#006aff;background:#fff;}`) // 公共自定义样式
      }

      if (CONST.curConfig.isFaviconEnable) {
        CONST.cssAutoInsert.add("faviconStyle", CONST.adsCSSList.faviconStyle) // 插入Favicon图标
      } else {
        CONST.cssAutoInsert.remove("faviconStyle")
      }

      if (CONST.curConfig.isALineDisable) {
        CONST.cssAutoInsert.add("alinkEnable", `${siteScope} a,${siteScope} a em{text-decoration:none !important}`)
      }

      if (CONST.curConfig.isCounterEnable) {
        CONST.cssAutoInsert.add("counterStyle", `${siteScope} .AC-CounterT{position:relative;z-index:1;display:inline-flex!important;align-items:center;justify-content:center;box-sizing:border-box;flex:0 0 auto;min-width:20px;height:20px;margin:0 6px 0 0!important;padding:0 5px!important;border-radius:10px;background:#FD9999;color:#fff;font:600 12px/20px Arial,sans-serif;text-align:center;vertical-align:middle;white-space:nowrap}`)
      } else {
        CONST.cssAutoInsert.remove("counterStyle")
      }

      // if(CONST.options.useItem.SiteTypeID === CONST.options.google.SiteTypeID && CONST.curConfig.useBaiduLogo) {
      //   CONST.cssAutoInsert.add("useBaiduLogo", "") // 谷歌使用百度LOGO
      // }

      /*****自定义样式最后加载*****/
      if (CONST.curConfig.commonStyleEnable) {
        CONST.cssAutoInsert.add("commonStyle", CONST.adsCSSList.commonStyle) // 公共自定义样式
      }
      if (CONST.curConfig.customStyleEnable) {
        CONST.cssAutoInsert.add("customStyle", CONST.adsCSSList.customStyle) // 站点自定义样式
      }

      // 批量处理完成，恢复并触发一次性同步/异步注入
      CONST.cssAutoInsert.resume()
    }

    pagerBind() {
      const that = this;
      const ShowPager = {
        getFullHref: function (e) {
          if (e === null) return '';
          "string" != typeof e && (e = e.getAttribute("href"));
          var t = this.getFullHref.a;
          return t || (this.getFullHref.a = t = document.createElement("a")), t.href = e, t.href;
        },
        createDocumentByString: function (str) {
          // string转为DOM
          if (!str) {
            console.error("[AC-Script]", 'No string found to be converted to DOM');
            return;
          }

          if (document.documentElement.nodeName !== 'HTML') {
            return new DOMParser().parseFromString(str, 'application/xhtml+xml');
          }
          var doc;

          MyApi.safeFunc(() => {
            // firefox and chrome 30+，Opera 12 会报错
            doc = new DOMParser().parseFromString(str, 'text/html');
            if (doc) {
              return doc;
            }
          })

          if (document.implementation.createHTMLDocument) {
            doc = document.implementation.createHTMLDocument('superPreloader');
          } else {
            MyApi.safeFunc(() => {
              doc = document.cloneNode(false);
              doc.appendChild(doc.importNode(document.documentElement, false));
              doc.documentElement.appendChild(doc.createElement('head'));
              doc.documentElement.appendChild(doc.createElement('body'));
            })
          }

          if (!doc) return;
          var range = document.createRange();
          range.selectNodeContents(document.body);
          var fragment = range.createContextualFragment(str);
          doc.body.appendChild(fragment);
          var headChildNames = {
            TITLE: true,
            META: true,
            LINK: true,
            STYLE: true,
            BASE: true
          };
          var child;
          var body = doc.body;
          var bchilds = body.childNodes;

          for (let i = bchilds.length - 1; i >= 0; i--) {
            // 移除head的子元素
            child = bchilds[i];
            if (headChildNames[child.nodeName]) body.removeChild(child);
          }

          return doc;
        },
        sanitizeFetchedDocument: function (doc) {
          if (!doc?.querySelectorAll) return doc
          doc.querySelectorAll('script, iframe, object, embed, base, meta[http-equiv="refresh"], link[rel="import"]').forEach((node) => node.remove())
          const urlAttributes = new Set(['href', 'src', 'xlink:href', 'action', 'formaction'])
          doc.querySelectorAll('*').forEach((element) => {
            Array.from(element.attributes || []).forEach((attribute) => {
              const attributeName = attribute.name.toLowerCase()
              if (attributeName.startsWith('on') || attributeName === 'srcdoc') {
                element.removeAttribute(attribute.name)
                return
              }
              if (urlAttributes.has(attributeName) && /^\s*(?:javascript|vbscript):/i.test(attribute.value)) {
                element.removeAttribute(attribute.name)
              }
            })
          })
          return doc
        },
        normalizeInsertedPageElements: function (pageElems, pageNum) {
          const usedIds = new Set([...document.querySelectorAll('[id]')].map(node => node.id).filter(Boolean))
          const isGoogle = CONST.options.siteName === 'google' || CONST.options.siteName === 'google_scholar'
          return [...pageElems].filter(node => node?.nodeType === 1).map(node => {
            const stripDuplicateIds = (element) => {
              const id = element.getAttribute('id')
              if (id && (id === 'rso' || id === 'center_col' || usedIds.has(id))) {
                element.removeAttribute('id')
              } else if (id) {
                usedIds.add(id)
              }
              element.querySelectorAll('[id]').forEach(stripDuplicateIds)
            }
            stripDuplicateIds(node)
            node.dataset.acPage = String(pageNum)
            if (isGoogle) node.classList.add('ac-google-page-result')
            return node
          })
        },
        prepareInsertedPageLayout: function (pageElems, target) {
          const isGoogle = CONST.options.siteName === 'google' || CONST.options.siteName === 'google_scholar'
          const mode = normalizeLayoutMode(CONST.curConfig.adsStyleMode)
          if (!isGoogle || mode < 3 || !target) return

          target.setAttribute('data-ac-layout-root', '1')
          target.setAttribute('two-father', '1')
          pageElems.forEach((node) => {
            node.querySelectorAll(':scope > .A6K0A, :scope > .MjjYud > .A6K0A')
              .forEach((card) => {
                card.setAttribute('data-ac-layout-card', '1')
                card.setAttribute('two-child', '1')
              })
          })
        },
        processInsertedPageFeatures: function () {
          if (CONST.curConfig.isFaviconEnable && CONST.options.useItem.FaviconType) {
            PageFunc.addFavicon(document.querySelectorAll(CONST.options.useItem.FaviconType))
          }
          if (CONST.curConfig.isCounterEnable && CONST.options.useItem.CounterType) {
            PageFunc.addCounter(document.querySelectorAll(CONST.options.useItem.CounterType))
          }
          if (CONST.curConfig.isBlockEnable && CONST.curConfig.isRedirectEnable) {
            PageBlockFunc.start().catch(error => console.error('分页结果拦截处理失败', error))
          }
        },
        replacePagerNavigation: function (pager, newBody) {
          if (!pager.replaceE) return
          const current = [...MyApi.getAllElements(pager.replaceE)]
          const fetched = [...MyApi.getAllElements(pager.replaceE, newBody, newBody)]
          const hasNextLink = (node) => Boolean(node?.querySelector?.('#pnnext, .sb_pagN, #snext, a[href*="pn="]'))
          const currentNav = current.find(hasNextLink) || current.at(-1)
          const fetchedNav = fetched.find(hasNextLink) || fetched.at(-1)

          if (currentNav && fetchedNav) {
            currentNav.replaceWith(fetchedNav)
          } else if (currentNav && !fetchedNav) {
            currentNav.remove()
          }
        },
        loadMorePage: async function () {
          const pager = CONST.options.useItem.pager
          if (!pager) return false

          const curPageEle = MyApi.getElementByXpath(pager.nextLink)
          let url = this.getFullHref(curPageEle)
          if (!url || CONST.options.useItem.pageUrl === url) {
            console.mylog('没有可加载的下一页')
            return false
          }
          try {
            const nextUrl = new URL(url, location.href)
            if (nextUrl.origin !== location.origin) {
              throw new Error('拒绝加载跨域翻页地址')
            }
            url = nextUrl.href
          } catch (error) {
            console.warn('[AC-Script]', error)
            return false
          }

          console.log("加载翻页地址：" + url)
          const loader = document.createElement('div')
          loader.id = 'ac-pager-loader'
          loader.innerText = '正在加载下一页...'
          document.body.appendChild(loader)

          return new Promise((resolve) => {
            let settled = false
            const finish = (loaded) => {
              if (settled) return
              settled = true
              CONST.lock.pageLoadingLocked = false
              const activeLoader = document.getElementById('ac-pager-loader')
              if (activeLoader) {
                activeLoader.style.opacity = '0'
                setTimeout(() => activeLoader.remove(), 300)
              }
              resolve(loaded)
            }

            try {
              pager.startFilter && pager.startFilter()
              GM_xmlhttpRequest({
                url,
                method: "GET",
                timeout: 5000,
                onload(response) {
                  let loaded = false
                  try {
                    if (response.status && (response.status < 200 || response.status >= 300)) {
                      throw new Error(`翻页请求失败：HTTP ${response.status}`)
                    }
                    const finalUrl = new URL(response.finalUrl || response.responseURL || url, location.href)
                    if (finalUrl.origin !== location.origin) {
                      throw new Error('翻页请求被重定向到其他站点')
                    }
                    const newBody = ShowPager.sanitizeFetchedDocument(ShowPager.createDocumentByString(response.responseText))
                    if (!newBody) throw new Error('翻页响应无法解析')

                    const [Rule_insertTo = '', Rule_insertMode = 1] = pager.HT_insert || []
                    const rawPageElems = MyApi.getAllElements(pager.pageElement, newBody, newBody)
                    const pageElems = ShowPager.normalizeInsertedPageElements(rawPageElems, CONST.options.useItem.pageNum + 1)

                    let toElement;

                    if (pageElems.length) {
                      const curPageElems = MyApi.getAllElements(pager.pageElement, document, document)
                      const pELast = curPageElems[curPageElems.length - 1];
                      if (pELast) {
                        toElement = pELast.nextSibling ? pELast.nextSibling : pELast.parentNode.appendChild(document.createTextNode(' '));
                      }
                    }
                    if (Rule_insertTo) {
                      toElement = MyApi.getAllElements(Rule_insertTo)[0];
                    }
                    if (pageElems.length > 0 && toElement) {
                      ShowPager.prepareInsertedPageLayout(pageElems, toElement)
                      // 处理最后一个翻页按钮
                      let nextEs = document.querySelectorAll("#sp-sp-gonext");
                      if (nextEs.length > 0) {
                        let lastE = nextEs[nextEs.length - 1];
                        lastE.classList.replace("ac_sp_next_gray", "ac_sp_next");
                      }
                      // 插入翻页按钮元素
                      CONST.options.useItem.pageNum++;
                      let addTo = "beforeend";
                      if (Rule_insertMode === 1) addTo = "beforebegin";

                      const insertPager = document.createElement('div')
                      insertPager.id = "sp-separator-ACX".replace(/ACX/gm, CONST.options.useItem.pageNum)
                      insertPager.className = "sp-separator AC"
                      insertPager.innerHTML = `
                          <a class='sp-sp-nextlink' target='_blank'><b>第 <span style='color:#595959!important;'>ACX</span> 页</b></a>
                          <span id="sp-sp-gotop" class='ac_sp_top' title='去到顶部'></span>
                          <span id="sp-sp-gopre" class='${CONST.options.useItem.pageNum <= 2 ? "ac_sp_pre_gray" : "ac_sp_pre"}' title='上滚一页' ></span>
                          <span id="sp-sp-gonext" class='ac_sp_next_gray' title='下滚一页'></span>
                          <span id="sp-sp-gobottom" class='ac_sp_bottom' title='去到底部' ></span>`
                        .replace(/ACX/gm, CONST.options.useItem.pageNum);

                      if (Rule_insertMode === 1) {
                        toElement.parentNode.insertBefore(insertPager, toElement)
                        // 插入新页面元素
                        pageElems.forEach(function (one) {
                          toElement.parentNode.insertBefore(one, toElement)
                        });
                      } else {
                        toElement.appendChild(insertPager)

                        pageElems.forEach(function (one, idx) {
                          one.classList.add('ac-entry-ani');
                          one.style.animationDelay = (idx * 0.05) + 's';
                          toElement.appendChild(one)
                        });
                      }

                      document.querySelectorAll(".sp-separator.AC:not([bind])").forEach(function (per) {
                        per.setAttribute("bind", 1);
                        per.addEventListener("click", that.ac_spfunc.bind(that));
                      });

                      ShowPager.processInsertedPageFeatures()

                      CONST.options.useItem.pageUrl = url
                      loaded = true

                      if (pager.afertPagerAutoCallFunc) {
                        pager.afertPagerAutoCallFunc(pageElems, toElement)
                      }

                      // 替换待替换元素 - 一般是替换翻页的按钮
                      try {
                        ShowPager.replacePagerNavigation(pager, newBody)
                      } catch (e) {
                        console.log(e);
                      }
                    }
                  } catch (e) {
                    console.log(e);
                  } finally {
                    finish(loaded)
                  }
                },
                onerror() {
                  finish(false)
                },
                ontimeout() {
                  finish(false)
                },
                onabort() {
                  finish(false)
                }
              })
            } catch (error) {
              console.log(error)
              finish(false)
            }
          })
        },
      };
      console.mylog('pager已绑定成功')
      this.windowscroll(async (direction, e) => {
        if (direction === "down") { // 下滑才准备翻页
          let spl = document.querySelector("#sp-fw-a_enable");
          // 开启后，且在非（suprepreloader启用）时均可
          if (CONST.curConfig.isAutopage === true && !(spl && spl.checked === true) && document.documentElement) {
            const scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            let scrollDelta = 888;
            if (document.documentElement.scrollHeight <= document.documentElement.clientHeight + scrollTop + scrollDelta && CONST.lock.pageLoadingLocked === false) {
              console.mylog('开始进行翻页')
              CONST.lock.pageLoadingLocked = true;
              if (CONST.options.useItem.SiteTypeID === CONST.options.duck.SiteTypeID) {
                const node = document.querySelector("#links .result--more a, #more-results, [data-testid='more-results']")
                try {
                  if (!node) return
                  const beforeCount = document.querySelectorAll("#react-layout li, #links .result").length
                  await new Promise((resolve) => {
                    let timer
                    let settled = false
                    const finish = () => {
                      if (settled) return
                      settled = true
                      clearTimeout(timer)
                      observer.disconnect()
                      resolve()
                    }
                    const observer = new MutationObserver(() => {
                      const afterCount = document.querySelectorAll("#react-layout li, #links .result").length
                      if (afterCount > beforeCount || !node.isConnected) finish()
                    })
                    observer.observe(document.body, { childList: true, subtree: true })
                    timer = setTimeout(finish, 5000)
                    node.click()
                    const afterCount = document.querySelectorAll("#react-layout li, #links .result").length
                    if (afterCount > beforeCount || !node.isConnected) finish()
                  })
                } finally {
                  CONST.lock.pageLoadingLocked = false
                }
              } else {
                try {
                  await ShowPager.loadMorePage();
                  if (CONST.options.useItem.pager && CONST.options.useItem.pager.stylish) {
                    CONST.cssAutoInsert.add('autoPager', CONST.options.useItem.pager.stylish)
                  }
                } finally {
                  CONST.lock.pageLoadingLocked = false
                }
              }
            }
          }
        }
      });
    }

    windowscroll(fn = () => {
    }) {
      let beforeScrollTop = document.documentElement.scrollTop
      window.addEventListener("scroll", MyApi.throttle(function (e) {
        var afterScrollTop = document.documentElement.scrollTop,
          delta = afterScrollTop - beforeScrollTop;
        if (delta === 0) return false;
        fn(delta > 0 ? "down" : "up", e);
        beforeScrollTop = afterScrollTop;
      }, 50), false);
    }

    ac_spfunc(e) {
      console.error("这里有问题")
      e.stopPropagation();
      var t, r = e.currentTarget;
      const Tween = {
        Linear: function Linear(e, t, r, n) {
          return r * e / n + t;
        },
        Quad: {
          easeIn: function easeIn(e, t, r, n) {
            return r * (e /= n) * e + t;
          },
          easeOut: function easeOut(e, t, r, n) {
            return -r * (e /= n) * (e - 2) + t;
          },
          easeInOut: function easeInOut(e, t, r, n) {
            return (e /= n / 2) < 1 ? r / 2 * e * e + t : -r / 2 * (--e * (e - 2) - 1) + t;
          }
        },
        Cubic: {
          easeIn: function easeIn(e, t, r, n) {
            return r * (e /= n) * e * e + t;
          },
          easeOut: function easeOut(e, t, r, n) {
            return r * ((e = e / n - 1) * e * e + 1) + t;
          },
          easeInOut: function easeInOut(e, t, r, n) {
            return (e /= n / 2) < 1 ? r / 2 * e * e * e + t : r / 2 * ((e -= 2) * e * e + 2) + t;
          }
        },
        Quart: {
          easeIn: function easeIn(e, t, r, n) {
            return r * (e /= n) * e * e * e + t;
          },
          easeOut: function easeOut(e, t, r, n) {
            return -r * ((e = e / n - 1) * e * e * e - 1) + t;
          },
          easeInOut: function easeInOut(e, t, r, n) {
            return (e /= n / 2) < 1 ? r / 2 * e * e * e * e + t : -r / 2 * ((e -= 2) * e * e * e - 2) + t;
          }
        },
        Quint: {
          easeIn: function easeIn(e, t, r, n) {
            return r * (e /= n) * e * e * e * e + t;
          },
          easeOut: function easeOut(e, t, r, n) {
            return r * ((e = e / n - 1) * e * e * e * e + 1) + t;
          },
          easeInOut: function easeInOut(e, t, r, n) {
            return (e /= n / 2) < 1 ? r / 2 * e * e * e * e * e + t : r / 2 * ((e -= 2) * e * e * e * e + 2) + t;
          }
        },
        Sine: {
          easeIn: function easeIn(e, t, r, n) {
            return -r * Math.cos(e / n * (Math.PI / 2)) + r + t;
          },
          easeOut: function easeOut(e, t, r, n) {
            return r * Math.sin(e / n * (Math.PI / 2)) + t;
          },
          easeInOut: function easeInOut(e, t, r, n) {
            return -r / 2 * (Math.cos(Math.PI * e / n) - 1) + t;
          }
        },
        Expo: {
          easeIn: function easeIn(e, t, r, n) {
            return 0 == e ? t : r * Math.pow(2, 10 * (e / n - 1)) + t;
          },
          easeOut: function easeOut(e, t, r, n) {
            return e == n ? t + r : r * (1 - Math.pow(2, -10 * e / n)) + t;
          },
          easeInOut: function easeInOut(e, t, r, n) {
            return 0 == e ? t : e == n ? t + r : (e /= n / 2) < 1 ? r / 2 * Math.pow(2, 10 * (e - 1)) + t : r / 2 * (2 - Math.pow(2, -10 * --e)) + t;
          }
        },
        Circ: {
          easeIn: function easeIn(e, t, r, n) {
            return -r * (Math.sqrt(1 - (e /= n) * e) - 1) + t;
          },
          easeOut: function easeOut(e, t, r, n) {
            return r * Math.sqrt(1 - (e = e / n - 1) * e) + t;
          },
          easeInOut: function easeInOut(e, t, r, n) {
            return (e /= n / 2) < 1 ? -r / 2 * (Math.sqrt(1 - e * e) - 1) + t : r / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
          }
        },
        Elastic: {
          easeIn: function easeIn(e, t, r, n, a, o) {
            return 0 == e ? t : 1 == (e /= n) ? t + r : (o || (o = .3 * n), !a || a < Math.abs(r) ? (a = r,
              i = o / 4) : i = o / (2 * Math.PI) * Math.asin(r / a), -a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * n - i) * (2 * Math.PI) / o) + t);
            var i;
          },
          easeOut: function easeOut(e, t, r, n, a, o) {
            return 0 == e ? t : 1 == (e /= n) ? t + r : (o || (o = .3 * n), !a || a < Math.abs(r) ? (a = r,
              i = o / 4) : i = o / (2 * Math.PI) * Math.asin(r / a), a * Math.pow(2, -10 * e) * Math.sin((e * n - i) * (2 * Math.PI) / o) + r + t);
            var i;
          },
          easeInOut: function easeInOut(e, t, r, n, a, o) {
            return 0 == e ? t : 2 == (e /= n / 2) ? t + r : (o || (o = n * (.3 * 1.5)), !a || a < Math.abs(r) ? (a = r,
              i = o / 4) : i = o / (2 * Math.PI) * Math.asin(r / a), e < 1 ? a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * n - i) * (2 * Math.PI) / o) * -.5 + t : a * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * n - i) * (2 * Math.PI) / o) * .5 + r + t);
            var i;
          }
        },
        Back: {
          easeIn: function easeIn(e, t, r, n, a) {
            return null == a && (a = 1.70158), r * (e /= n) * e * ((a + 1) * e - a) + t;
          },
          easeOut: function easeOut(e, t, r, n, a) {
            return null == a && (a = 1.70158), r * ((e = e / n - 1) * e * ((a + 1) * e + a) + 1) + t;
          },
          easeInOut: function easeInOut(e, t, r, n, a) {
            return null == a && (a = 1.70158), (e /= n / 2) < 1 ? r / 2 * (e * e * ((1 + (a *= 1.525)) * e - a)) + t : r / 2 * ((e -= 2) * e * ((1 + (a *= 1.525)) * e + a) + 2) + t;
          }
        },
        Bounce: {
          easeIn: function easeIn(e, t, r, n) {
            return r - Tween.Bounce.easeOut(n - e, 0, r, n) + t;
          },
          easeOut: function easeOut(e, t, r, n) {
            return (e /= n) < 1 / 2.75 ? r * (7.5625 * e * e) + t : e < 2 / 2.75 ? r * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t : e < 2.5 / 2.75 ? r * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t : r * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t;
          },
          easeInOut: function easeInOut(e, t, r, n) {
            return e < n / 2 ? .5 * Tween.Bounce.easeIn(2 * e, 0, r, n) + t : .5 * Tween.Bounce.easeOut(2 * e - n, 0, r, n) + .5 * r + t;
          }
        }
      };
      const TweenM = ["Linear", "Quad", "Cubic", "Quart", "Quint", "Sine", "Expo", "Circ", "Elastic", "Back", "Bounce"];
      const TweenEase = ["easeIn", "easeOut", "easeInOut"];
      var prefs = {
        s_method: 3,
        s_ease: 2,
        s_FPS: 60,
        s_duration: 333,
      };

      function getRelativeDiv(e) {
        var t = r.id;
        return (t = t.replace(/(sp-separator-)(.+)/, (function (t, r, n) {
          return r + String(Number(n) + ("pre" == e ? -1 : 1));
        }))) ? document.getElementById(t) : null;
      }

      function sp_transition(e, t) {
        var r = sp_transition.TweenF;
        r || (r = (r = Tween[TweenM[prefs.s_method]])[TweenEase[prefs.s_ease]] || r, sp_transition.TweenF = r);
        var n = 1e3 / prefs.s_FPS, a = 0, o = e, i = t - e, s = Math.ceil(prefs.s_duration / n),
          c = window.scrollX;

        function transition() {
          var e = Math.ceil(r(a, o, i, s));
          window.scroll(c, e);
          if (a < s) {
            a++;
            requestAnimationFrame(transition);
          }
        }
        requestAnimationFrame(transition);
      }

      function scrollIt(e, t) {
        sp_transition(e, t);
      }

      switch (e.target.id) {
        case "sp-sp-gotop":
          scrollIt(window.scrollY, 0);
          break;

        case "sp-sp-gopre":
          var n = getRelativeDiv("pre");
          if (!n) return;
          t = window.scrollY;
          var a = n.getBoundingClientRect().top;
          a = t - (r.getBoundingClientRect().top - a);
          scrollIt(t, a);
          break;

        case "sp-sp-gonext":
          var o = getRelativeDiv("next");
          if (!o) return;
          t = window.scrollY;
          var i = o.getBoundingClientRect().top;
          i = t + (-r.getBoundingClientRect().top + i);
          scrollIt(t, i);
          break;

        case "sp-sp-gobottom":
          scrollIt(window.scrollY, Math.max(document.documentElement.scrollHeight, document.body.scrollHeight));
      }
    }

    bingAutoScrollFix() {
      if (document.documentElement.hasAttribute('ac-bing-scroll-bound')) return;
      document.documentElement.setAttribute('ac-bing-scroll-bound', '1')
      document.addEventListener('visibilitychange', function () {
        if (document.visibilityState === 'hidden') {
          CONST.bingScrollPos = document.documentElement.scrollTop;
        } else if (document.visibilityState === 'visible') {
          setTimeout(() => {
            if (CONST.bingScrollPos !== 0 && document.documentElement.scrollTop !== CONST.bingScrollPos) {
              console.error('触发滚动条变更：', CONST.bingScrollPos, document.documentElement.scrollTop)
              document.documentElement.scrollTop = CONST.bingScrollPos
            }
          }, 50)
        }
      });
    }

    bingFaviconPagerFix() {
      document.querySelectorAll('div.rms_iac').forEach(one => {
        const height = one.dataset.height
        const width = one.dataset.width
        const toClass = one.dataset.class
        const imgSrc = one.dataset.src
        const bm = one.dataset.bm
        if (imgSrc) {
          try {
            const imageUrl = new URL(imgSrc, location.href)
            if (!['http:', 'https:', 'data:'].includes(imageUrl.protocol)) return
            if (imageUrl.protocol === 'data:' && !imageUrl.href.startsWith('data:image/')) return

            const image = document.createElement('img')
            image.src = imageUrl.href
            if (height) image.setAttribute('height', height)
            if (width) image.setAttribute('width', width)
            image.dataset.priority = '2'
            image.setAttribute('role', 'presentation')
            if (toClass) image.className = toClass
            if (bm) image.dataset.bm = bm
            one.replaceWith(image)
          } catch (e) {
          }
        }
      })
    }
  }

  const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const createBlockRuleMatcher = (rule) => {
    const source = String(rule || '').trim()
    if (!source) return null
    if (/^(?:[a-z0-9-]+\.)+[a-z]{2,}$/i.test(source)) {
      return new RegExp(`^(?:[^.]+\\.)*${escapeRegExp(source)}$`, 'i')
    }
    return new RegExp(source.replaceAll("*", ".*"), 'i')
  }

  class PageBlockClass {
    constructor() {
      this.curSite = CONST.options.useItem
      this.regListRule = []
      this._updateRegListRule()
    }

    async start() {
      const needCheckClass = (this.curSite.MainType + ',').split(',').join(":not([bhandle]),")
      let checkNodes = document.querySelectorAll(needCheckClass.substring(0, needCheckClass.length - 1));
      let aniIndex = 0;
      for (let i = 0; i < checkNodes.length; i++) {
        let curNode = checkNodes[i];
        try {
          if (curNode.hasAttribute('bhandle')) continue;

          // 增加进入动画类，并错开延迟
          curNode.classList.add('ac-entry-ani');
          curNode.style.animationDelay = (aniIndex * 0.04) + 's';
          aniIndex++;

          let faviconNode = curNode.querySelector(this.curSite.FaviconType);
          let host = PageFunc.getNodeHost(faviconNode).curHost;
          let faNode = curNode.querySelector(this.curSite.BlockType);
          // 避免父节点出现两个block按钮
          if (faNode && !faNode.hasAttribute('hasInsert')) {
            faNode.setAttribute("hasInsert", "1");
            let insertTo = faNode.parentNode
            if (CONST.options.useItem.SiteTypeID === CONST.options.google.SiteTypeID) {
              insertTo = faNode
            }
            const blockButton = document.createElement('button')
            blockButton.style.display = CONST.curConfig.isBlockBtnDisplay ? 'unset' : 'none'
            blockButton.className = 'ghhider ghhb'
            blockButton.setAttribute('href', faviconNode?.href || faviconNode?.innerText || '')
            blockButton.dataset.meta = host
            blockButton.dataset.host = host
            blockButton.title = this._getBlockBtnTitle(host)
            blockButton.textContent = 'block'
            insertTo.appendChild(blockButton)
          }
          curNode.setAttribute("bhandle", "1");
        } catch (e) {
          console.error(e)
          const failed_count = +(curNode.getAttribute('failed_count') || 1)
          curNode.setAttribute('failed_count', failed_count + 1)
          if (failed_count > 3) {
            curNode.setAttribute("bhandle", "1");
          }
        }
      }
      this._initListener();
      await this.renderDisplay()
    }

    async renderDisplay() {
      // 增加checking中的检查，避免多次重复调用，减少cpu消耗
      if (CONST.lock.isBlockChecking) return
      CONST.lock.isBlockChecking = true

      let checkNodes = document.querySelectorAll(this.curSite.MainType);
      if ([...checkNodes].every(one => one.dataset.checked) && CONST.lock.afterBlockChangeChecked) {
        CONST.lock.isBlockChecking = false
        return
      }

      const regList = this.regListRule
      const flag = "ac-needhide";
      const isShowBlocked = CONST.curConfig.isBlockResultDisplay;

      const batchSize = 10;
      let currentIndex = 0;

      const processBatch = () => {
        const limit = Math.min(currentIndex + batchSize, checkNodes.length);
        for (; currentIndex < limit; currentIndex++) {
          try {
            let curNode = checkNodes[currentIndex];
            if (curNode.querySelector("button[ac-user-alter]") != null) continue; // 用户手动点过显示的，那么跳过check

            // 减少数据计算
            let { curHost = "", curUrl = "" } = PageFunc.getNodeHost(curNode.querySelector(this.curSite.FaviconType));
            if (!curHost) continue;

            let BlockBtn = curNode.querySelector(".ghhider.ghhb");
            if (BlockBtn) {
              BlockBtn.dataset.host = BlockBtn.dataset.meta = curHost;
              BlockBtn.title = this._getBlockBtnTitle(curHost);
            }

            // 减少数据计算
            const isBlocked = regList.some(one => {
              try {
                return one.test(curHost || curUrl); // 耗时操作
              } catch (e) {
                return one === curHost;
              }
            });

            if (isBlocked) {
              // 只检查在屏蔽表中的数据
              if (!curNode.hasAttribute(flag)) {
                curNode.setAttribute(flag, "1");
                if (isShowBlocked) { // 对于不显示的数据可以进行移除操作
                  curNode.remove();
                  continue;
                }
                let curTitleNode = curNode.querySelector(this.curSite.BlockType);
                let curTitle = curTitleNode ? (curTitleNode.innerText || curTitleNode.textContent) : "blocked";

                const blockShow = curNode.querySelector(".blockShow");
                if (!blockShow) {
                  const blockMessage = document.createElement('span')
                  blockMessage.className = 'blockShow'
                  blockMessage.title = '如果需要一直显示，请在自定义中DIY目录移除本地址'
                  blockMessage.textContent = `${curTitle}${String.fromCharCode(160).repeat(5)} -block by ${curHost}`
                  curNode.prepend(blockMessage)
                  // 已经屏蔽之后的内容，点击一下显示原始内容
                  curNode.addEventListener("click", function (env) {
                    if (!curNode.querySelector(".blockShow")) return
                    const btn = curNode.querySelector("button.ghhider");
                    if (btn) btn.setAttribute("ac-user-alter", "1"); // 这个属性用于保持在DOM更新时，按钮不变
                    curNode.removeAttribute(flag);
                    delete curNode.dataset.checked
                    const bs = curNode.querySelector(".blockShow");
                    if (bs) bs.remove();
                    env.stopPropagation();
                    env.preventDefault()
                  });
                }
              }
            } else {
              curNode.removeAttribute(flag);
            }
            curNode.dataset.checked = '1'
          } catch (e) { }
        }
        if (currentIndex < checkNodes.length) {
          requestAnimationFrame(processBatch);
        } else {
          CONST.lock.isBlockChecking = false
          CONST.lock.afterBlockChangeChecked = true
        }
      };
      requestAnimationFrame(processBatch);
    }

    _updateRegListRule() {
      this.regListRule = CONST.blockRuleList.filter(one => one).map(one => {
        try {
          return createBlockRuleMatcher(one)
        } catch (e) {
          return one
        }
      })
    }

    _initListener() {
      let checkNodes = document.querySelectorAll("button.ghhider:not([acEnv])");
      checkNodes.forEach(one => {
        one.addEventListener("click", this._doHideEnv);
        one.setAttribute("acEnv", "0");
      })
    }

    _doHideEnv(env) {
      // 先插入数据---记得还要写入存储
      let node = env.sourceTarget || env.target;
      let host = node.dataset.host;
      if (+node.getAttribute("ac-user-alter") === 1) {
        // 已经屏蔽之后，再次点击block应该是取消状态
        node.removeAttribute("ac-user-alter");
        CONST.blockRuleList.acremove(host);
      } else {
        // 正常屏蔽操作
        node.removeAttribute("ac-user-alter");
        CONST.blockRuleList.acpush(host);
      }
      CONST.saveBlockRule()
      env.stopPropagation();
      env.preventDefault()
    }

    _getBlockBtnTitle(host) {
      return `点击即可屏蔽 ${host} 放开，需要在自定义中手动配置放开`;
    }
  }

  const PageFunc = new PageFuncClass()
  const PageBlockFunc = new PageBlockClass()

  await (async function () {
    /***Google双列修复***/
    CONST.addIntervalTrigger('google', 'now', (counter) => {
      function findAndMarkP2Line() {
        const mode = normalizeLayoutMode(CONST.curConfig.adsStyleMode)
        const primaryRoot = document.querySelector('#rso') || document.querySelector('[data-micp-id="rso"]')
        if (!primaryRoot) return []
        if (!document.getElementById('rso')) primaryRoot.id = 'rso'

        // Remove markers left by older script versions. A marker on a nested
        // Google module turns that module into a second grid root.
        primaryRoot.removeAttribute('two-father')
        primaryRoot.removeAttribute('two-checked')
        primaryRoot.querySelectorAll('[two-father], [two-child], [two-checked]').forEach((node) => {
          node.removeAttribute('two-father')
          node.removeAttribute('two-child')
          node.removeAttribute('two-checked')
          node.removeAttribute('data-ac-layout-card')
        })
        primaryRoot.removeAttribute('data-ac-layout-root')
        primaryRoot.removeAttribute('two-father')
        if (mode < 3) return []

        primaryRoot.setAttribute('data-ac-layout-root', '1')
        primaryRoot.setAttribute('two-father', '1')
        primaryRoot.querySelectorAll(':scope > .MjjYud > .A6K0A, :scope > .ULSxyf > .MjjYud > .A6K0A')
          .forEach((card) => {
            card.setAttribute('data-ac-layout-card', '1')
            // Keep the existing card theme selectors working, but only on
            // direct result cards, never on nested modules.
            card.setAttribute('two-child', '1')
          })
        return []
      }

      const valid = location.href.search(/(&|\?)(q|kw)=/) >= 0 ||
        document.querySelector(".g, #rso, [data-micp-id='rso']")

      if (counter % 4 === 0) {
        if (CONST.curConfig.useBaiduLogo) {
          PageFunc.GoogleInBaiduMode()
        }
        if (CONST.curConfig.isAdsEnable) {
          PageFunc.removeAds.removeGoogleAd()
        }
      }

      if (!valid) {
        CONST.curConfig.enableCSS = false
        return
      }
      findAndMarkP2Line()

    }, 150, 10000000)
    /***Baidu***/
    CONST.addIntervalTrigger('baidu', 'body', () => {
      // 没有(百度搜索结果的标志-[存在]百度的内容) return;
      const valid = location.href.search(/(&|\?)(wd|word)=/) >= 0 ||
        document.querySelector("#content_left") || (document.querySelector('.s_form')?.offsetHeight || Infinity) < 100
      if (!valid) {
        console.mylog('无效页面，不存在搜索结构')
        CONST.curConfig.enableCSS = false
        return
      }
      if (CONST.curConfig.isAdsEnable) {
        PageFunc.removeAds.removeBaiduAd()
      }
      if (CONST.curConfig.doRemoveSug) { // 不启用移动预测[默认]
        PageFunc.acSetCookie("ORIGIN", 2, "www.baidu.com");
        PageFunc.acSetCookie("ISSW", 1);
        PageFunc.acSetCookie("ISSW", 1, "www.baidu.com");
      }
      if (location.href.includes("tn=news")) {
        if (!document.body.hasAttribute('news')) document.body.setAttribute("news", "1");
      } else {
        document.body.removeAttribute("news");
      }
    }, 300, 10000000)
    /***Haosou***/
    CONST.addIntervalTrigger('haosou', 'body', () => {
      if (CONST.curConfig.isAdsEnable) {
        PageFunc.removeAds.removeHaosouAd()
      }
    }, 300, 10000000)
    /***Bing***/
    CONST.addIntervalTrigger('bing', 'body', () => {
      if (CONST.curConfig.isAdsEnable) {
        PageFunc.removeAds.removeBingAd()
      }
      PageFunc.bingAutoScrollFix()
      PageFunc.bingFaviconPagerFix()
    }, 300, 10000000)
    /***DuckDuckGo***/
    let duckSettingsApplied = false
    let duckSettingsTimer = null
    CONST.addIntervalTrigger('duck', 'body', () => {
      if (CONST.curConfig.optimizeDuck && !duckSettingsApplied && duckSettingsTimer === null) {
        duckSettingsTimer = setTimeout(() => {
          duckSettingsTimer = null
          if (!CONST.curConfig.optimizeDuck) return
          const settings = unsafeWindow.DDG?.settings
          if (!settings?.set) return
          try {
            settings.set("kn", 1, {
              saveToCloud: true,
              forceTheme: true,
            })
            settings.set("kav", 1, {
              saveToCloud: true,
              forceTheme: true,
            })
            duckSettingsApplied = true
          } catch (error) {
            console.mylog('DuckDuckGo 设置应用失败', error)
          }
        }, 3000)
      }
    }, 300, 10000000)
    /***All***/
      CONST.addIntervalTrigger('all', 'body', () => {
        PageFunc.RedirectHandle()
        const activeSite = CONST.options.siteName
        const siteScope = `body[${activeSite}]`
        if (CONST.curConfig.isFaviconEnable && typeof (CONST.options.useItem.FaviconType) !== 'undefined') { // 显示favicon图标
        // 延迟2秒加载，减少可能出现的问题
        PageFunc.addFavicon(document.querySelectorAll(CONST.options.useItem.FaviconType)); // 添加Favicon显示
      } else {
        document.querySelectorAll(CONST.options.useItem.FaviconType || '').forEach((one) => {
          one.removeAttribute("ac_faviconstatus");
        })
          document.querySelectorAll(`${siteScope} [data-favicon-t]`).forEach((one) => {
          one.removeAttribute('data-favicon-t')
        })
        if (CONST.cssFavionList.list.length) CONST.cssFavionList.list.splice(0)
      }
      if (CONST.curConfig.isCounterEnable) {
        PageFunc.addCounter(document.querySelectorAll(CONST.options.useItem.CounterType)); // 显示计数器
      } else {
        document.querySelectorAll(`${siteScope} .AC-CounterT`).forEach(one => {
          one.parentElement?.removeAttribute('SortIndex');
          one.remove()
        })
      }

      // 双列模式下，自动禁用右侧栏
      if (!CONST.curConfig.isRightDisplayEnable || normalizeLayoutMode(CONST.curConfig.adsStyleMode) > 2) {
        document.body.classList.remove("showRight")
      } else {
        if (!document.body.classList.contains('showRight')) {
          document.body.classList.add("showRight")
        }
      }

      if (CONST.curConfig.isBlockEnable && CONST.curConfig.isRedirectEnable) {
        PageBlockFunc.start()
      }
    }, 300, 10000000)

    // CONST.enableCSS = 如果生效，那么插入样式表，否则跳过样式表插入
    // CONST.curConfig = 网站配置，同步过来的，以及动态被修改的
    // CONST.options.useItem = 网站的静态选择器

    MyApi.safeWaitFunc('html', () => {
      GM_addValueChangeListener('SyncConfig', (key, oldVal, newVal = '{}', remote) => {
        try {
          const syncOptions = JSON.parse(newVal)
          if (!syncOptions || typeof syncOptions !== 'object' || Array.isArray(syncOptions)) throw new TypeError('SyncConfig 必须是对象')
          CONST.renewConfig(syncOptions)
          if (syncOptions.refreshUrl) MyApi.refreshAfter(500)
        } catch (error) {
          console.error('忽略损坏的 SyncConfig', error)
        }
      })
      PageFunc.dataChangeFireCallback()
      watch(CONST.curConfig, async () => {
        try {
          await CONST.loadSiteCSS()
          PageFunc.dataChangeFireCallback()
        } catch (error) {
          console.error('配置变更后的样式加载失败', error)
        }
      })
      watch(CONST.cssFavionList, () => {
        const activeSite = CONST.options.siteName
        const siteScope = `body[${activeSite}]`
        const baseCSS = `${siteScope} *[data-favicon-t]::before{content:"";display:inline-block;flex:0 0 auto;width:16px;height:16px;margin-inline-end:5px;background-size:contain;background-position:center;background-repeat:no-repeat;vertical-align:-3px;}`
        CONST.adsCSSList.faviconStyle = Object.entries(CONST.cssFavionList.list).reduce((preCSS, cur) => {
          const [, { url = '' }] = cur
          let nowCSS = ''
          if (url) {
            //如果地址不正确，那么丢弃
            const imgUrl = "https://favicon.yandex.net/favicon/v2/" + encodeURIComponent(url) + "?size=32"
            nowCSS = `${siteScope} [data-favicon-t='${url}']::before{background-image:url('${imgUrl}');}`
          }
          return preCSS + nowCSS
        }, baseCSS)
        PageFunc.dataChangeFireCallback()
      })
    }, 20, true)
    MyApi.safeWaitFunc('body', () => {
      const activeSite = CONST.options.siteName
      document.body.setAttribute(activeSite, '1')
      const canonicalSite = { baidu_xueshu: 'baidu', google_scholar: 'google' }[activeSite]
      if (canonicalSite) document.body.setAttribute(canonicalSite, '1')
      document.body.setAttribute('ac-layout-mode', String(normalizeLayoutMode(CONST.curConfig.adsStyleMode)))
      const insertName = CONST.curConfig.enableCSS ? CONST.options.siteName : (CONST.options.siteName + '_nocss')
      if (!document.body.hasAttribute(insertName)) {
        document.body.setAttribute(insertName, '1')
      }
      document.body.classList.add(insertName)
      // 添加 ac-ready 类，允许静默样式淡出展示。属性可能已由首轮
      // dataChangeFireCallback 提前设置，不能用属性存在与否作为完成条件。
      if (!document.body.classList.contains('ac-ready')) {
        setTimeout(() => {
          document.body.classList.add('ac-ready')
        }, 400)
      }
      // The initial callback can run while only <html> exists. Re-run once
      // after body creation so scoped layout rules are applied deterministically.
      PageFunc.dataChangeFireCallback()
      PageFunc.InsertSettingMenu()
      if (CONST.curConfig.isAutopage) {
        setTimeout(() => {
          PageFunc.pagerBind()
        }, 2000)
      }
    }, 20, true)
  })()
})()
