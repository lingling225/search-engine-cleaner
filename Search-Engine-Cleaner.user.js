// ==UserScript==
// @name         Search Engine Cleaner - 搜索增强
// @namespace    https://github.com/lingling225/search-engine-cleaner
// @description  保留原版全部配置与功能，增强百度、Google、Bing、DuckDuckGo 和 360 搜索的搜索体验。
// @description:en Enhance Baidu, Google, Bing, DuckDuckGo and 360 Search while preserving all original configuration and features.
// @author       AC; modified by lingling225
// @license      GPL-3.0-only
// @create     2015-11-25
// @run-at     document-start
// @version    1.0.0
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
// @lastmodified  2026-08-14
// @feedback-url  https://github.com/lingling225/search-engine-cleaner/issues
// @note    Source: https://github.com/langren1353/GM_script (GPL-3.0-only)
// @note    1.0.0 保留百度、Google、Bing、DuckDuckGo、360 搜索的完整配置与功能，清理无关内容。
// @resource  baiduCommonStyle   https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/newcss/baiduCommonStyle.less
// @resource  baiduOnePageStyle  https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/newcss/baiduOnePageStyle.less
// @resource  baiduTwoPageStyle  https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/newcss/baiduTwoPageStyle.less
// @resource  googleCommonStyle  https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/newcss/googleCommonStyle.less
// @resource  googleOnePageStyle https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/newcss/googleOnePageStyle.less
// @resource  googleTwoPageStyle https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/newcss/googleTwoPageStyle.less
// @resource  bingCommonStyle    https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/newcss/bingCommonStyle.less
// @resource  bingOnePageStyle   https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/newcss/bingOnePageStyle.less
// @resource  bingTwoPageStyle   https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/newcss/bingTwoPageStyle.less
// @resource  duckCommonStyle    https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/newcss/duckCommonStyle.less
// @resource  duckOnePageStyle   https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/newcss/duckOnePageStyle.less
// @resource  duckTwoPageStyle   https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/newcss/duckTwoPageStyle.less
// @resource  haosouCommonStyle  https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/newcss/haosouCommonStyle.less
// @resource  haosouOnePageStyle https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/newcss/haosouOnePageStyle.less
// @resource  haosouTwoPageStyle https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/newcss/haosouTwoPageStyle.less
// @resource  HuYanStyle         https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/newcss/HuYanStyle.less
// @resource  BgAutoFit          https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/newcss/BgAutoFit.less
// @resource  HuaHua-ACDrakMode  https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/newcss/HuaHua-ACDrakMode.less
// @resource  baiduLiteStyle     https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/newcss/baiduLiteStyle.less
// @require   https://registry.npmmirror.com/less_browser_fix/4.2.2/files/dist/less.min.js
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
        CONST.blockRuleList = JSON.parse(newVal) // 将对象设置到CONST上
        CONST.acpush_acremoveInit()
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
        CounterType: "#content_left>#double>div[srcid] *[class~=t]>a:first-child,[class~=op_best_answer_question],#content_left>div[srcid] *[class~=t]>a:first-child,[class~=op_best_answer_question]",
        BlockType: "h3 a",
        MultiPageType: "#container #content_left, body[news] #container #content_left>div:not([class]):not([id])",
        pager: {
          nextLink: '//div[@id="page"]//a[contains(span/text(), "下一页")]',
          pageElement: "css;div#content_left > *",
          HT_insert: ["css;div#content_left", 2], // 1 = beforebegin; 2 = beforeend
          replaceE: "css;#page",
          stylish: ".autopagerize_page_info, div.sp-separator {margin-bottom: 10px !important;}.c-img-border{display:none}",
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
        MultiPageType: ".srg, #rso, div[two-father], #rso>div:not(.vt6azd), #kp-wp-tab-overview",
        pager: {
          nextLink: "id('pnnext')|id('navbar navcnt nav')//td[span]/following-sibling::td[1]/a|id('nn')/parent::a",
          pageElement: "id('rso')|id('center_col')/style[contains(.,'relative')][id('rso')]",
          HT_insert: ["id('botstuff')", 1], // 1 = beforebegin; 2 = beforeend
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
        CounterType: ".results>div",
        BlockType: "h3 a",
        MultiPageType: ".result li",
        pager: {
          nextLink: "//div[@id='page']//a[text()='下一页>'] | id('snext')",
          pageElement: "//div[@id='container']/div[@id='main']/ul[@class='result']/li",
          HT_insert: ["//div[@id='container']//ul[@class='result']", 2],
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
        CounterType: "#content_left>#double>div[srcid] *[class~=t]>a,[class~=op_best_answer_question],#content_left>div[srcid] *[class~=t]>a,[class~=op_best_answer_question]",
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
      try {
        let res = await GM.getValue("ACConfig", "{}")
        ACConfig = JSON.parse(res);

        res = await GM.getValue("ACBlockRules", "[]")
        this.blockRuleList = JSON.parse(res);
        this.acpush_acremoveInit()
      } catch (e) {
        console.error('出bug了')
        ACConfig = DefaultConfig
      }
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

        leftCommonStyle: '',
        onePageStyle: '',
        twoPageStyle: '',
        multiPageStyle: '',
        expandPageStyle: '',

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
        const renderCSSKeyName = '__AC.RenderCSS__' + styleName
        return await setLocalLessData(renderCSSKeyName, getDebugStyle) // 不带缓存，随时刷新了
        // return await cacheStyle(renderCSSKeyName, getDebugStyle) // 带缓存，随时刷新了
      } else {
        return await cacheStyle(styleName, getRenderStyle)
      }

      async function cacheStyle(styleName, getLessDataFunc) {
        const renderCSSKeyName = '__AC.RenderCSS__' + styleName
        const localData = localStorage.getItem(renderCSSKeyName)
        if (localData) {
          setTimeout(() => {
            console.mylog('*****有缓存了，但是在刷新了：' + styleName)
            setLocalLessData(renderCSSKeyName, getLessDataFunc)
          }, 2000)
          return localData
        } else {
          console.mylog('*****没有缓存' + styleName)
          return await setLocalLessData(renderCSSKeyName, getLessDataFunc)
        }
      }

      async function setLocalLessData(renderCSSKeyName, getLessDataFunc) {
        const { css = '' } = await less.render(await getLessDataFunc());
        localStorage.setItem(renderCSSKeyName, css)
        return css
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

    async loadSiteCSS() {
      console.mylog('CSS加载开始' + +this.curConfig.adsStyleMode)
      const styleSiteName = {
        baidu_xueshu: 'baidu',
        google_scholar: 'google',
      }[this.options.siteName] || this.options.siteName
      // 加载多列
      if (this.curConfig.adsStyleEnable) {
        if (+this.curConfig.adsStyleMode >= 1) {
          this.adsCSSList.leftCommonStyle = await this.loadStyleByName_WithLessCache(styleSiteName + 'CommonStyle') // 单列效果
        }
        if (+this.curConfig.adsStyleMode >= 2) {
          this.adsCSSList.onePageStyle = await this.loadStyleByName_WithLessCache(styleSiteName + 'OnePageStyle') // 单列居中
        }
        if (+this.curConfig.adsStyleMode >= 3) {
          this.adsCSSList.twoPageStyle = await this.loadStyleByName_WithLessCache(styleSiteName + 'TwoPageStyle') // 双列效果
        }
        if (+this.curConfig.adsStyleMode >= 4) {
          this.adsCSSList.multiPageStyle = await this.getMultiPageStyle() // 多列效果
        }
      }
      // 加载百度Lite
      if (this.curConfig.baiduLiteEnable) {
        this.adsCSSList.baiduLiteStyle = await this.loadStyleByName_WithLessCache('baiduLiteStyle')
      }
      // 加载背景图优化
      if (this.curConfig.BgEnable && this.curConfig.BgFit) {
        this.adsCSSList.bgAutoFitStyle = await this.loadStyleByName_WithLessCache('BgAutoFit')
      }
      // 加载护眼样式
      if (this.curConfig.HuYanMode) {
        this.adsCSSList.huyanStyle = await this.getHuyanStyle()
      }

      if (this.curConfig.isDarkModeEnable) {
        this.adsCSSList.darkModeStyle = await this.loadStyleByName_WithLessCache('HuaHua-ACDrakMode')
      }
      // 加载自定义样式
      if (this.curConfig.customStyleEnable) {
        console.mylog('触发custom更新')
        const { css = '' } = await less.render(this.curConfig.customStyleLess);
        this.adsCSSList.customStyle = css
      }
      // 加载其他样式
      if (this.curConfig.commonStyleEnable) {
        console.mylog('触发common更新')
        const { css = '' } = await less.render(this.curConfig.commonStyleLess);
        this.adsCSSList.commonStyle = css
      }
      console.mylog('CSS加载结束')
      // 2秒后再加载
      setTimeout(() => {
        this.loadAllStyle()
      }, 2000)
    }

    getMultiPageStyle() {
      return this.options.useItem.MultiPageType +
        (+this.curConfig.adsStyleMode === 4 ?
          "{grid-template-columns: repeat(3, 33.3%); grid-template-areas:'xmain xmain xmain';}" :
          "{grid-template-columns: repeat(4, 25%); grid-template-areas:'xmain xmain xmain xmain';}")
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
      const styleSiteName = {
        baidu_xueshu: 'baidu',
        google_scholar: 'google',
      }[this.options.siteName] || this.options.siteName
      if (!this.adsCSSList.leftCommonStyle) this.adsCSSList.leftCommonStyle = await this.loadStyleByName_WithLessCache(styleSiteName + 'CommonStyle') // 单列效果
      if (!this.adsCSSList.onePageStyle) this.adsCSSList.onePageStyle = await this.loadStyleByName_WithLessCache(styleSiteName + 'OnePageStyle') // 单列居中
      if (!this.adsCSSList.twoPageStyle) this.adsCSSList.twoPageStyle = await this.loadStyleByName_WithLessCache(styleSiteName + 'TwoPageStyle') // 双列效果
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

          parent.style.width = "auto";
          let userAdiv = document.createElement("div");
          userAdiv.id = "myuser";
          userAdiv.innerHTML = `<input type='submit' class='myuserconfig' value='自定义'/><span class='ac-newversionDisplay' style='background-color: red;float: left;height: 8px;width: 8px;border-radius: 4px;display: none'>&nbsp;</span>`;

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
                    tagName: targetNode.tagName.toLowerCase(),
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

      const cssText = "font-style:normal;position:relative;z-index:1;margin-right:4px;display:inline-block;color:white;font-family:'微软雅黑';font-size:16px;text-align:center;width:22px;line-height:22px;border-radius:50%;";
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
            ele.style = cssText;
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

      if (!CONST.curConfig.enableCSS) {
        MyApi.safeGetNodeFunc('#myuser', node => node.remove())
        CONST.cssAutoInsert.resume()
        return
      }

      console.mylog('即将插入CSS1')
      if (CONST.curConfig.adsStyleEnable) {
        console.mylog('即将插入CSS2')

        if (+CONST.curConfig.adsStyleMode === 1) {
          console.mylog('靠左优化模式')
          CONST.cssAutoInsert.add("expandPageStyle", CONST.adsCSSList.expandPageStyle)
          CONST.cssAutoInsert.add("leftCommonStyle", CONST.adsCSSList.leftCommonStyle)
        } else if (+CONST.curConfig.adsStyleMode === 2) {
          console.mylog('单列居中')
          CONST.cssAutoInsert.add("expandPageStyle", CONST.adsCSSList.expandPageStyle)
          CONST.cssAutoInsert.add("leftCommonStyle", CONST.adsCSSList.leftCommonStyle)
          CONST.cssAutoInsert.add("onePageStyle", CONST.adsCSSList.onePageStyle)
        } else if (+CONST.curConfig.adsStyleMode === 3) {
          console.mylog('双列居中')
          CONST.cssAutoInsert.add("leftCommonStyle", CONST.adsCSSList.leftCommonStyle)
          CONST.cssAutoInsert.add("twoPageStyle", CONST.adsCSSList.twoPageStyle)
        } else if (+CONST.curConfig.adsStyleMode === 4 || +CONST.curConfig.adsStyleMode === 5) {
          console.mylog('N列居中')
          CONST.cssAutoInsert.add("leftCommonStyle", CONST.adsCSSList.leftCommonStyle)
          CONST.cssAutoInsert.add("twoPageStyle", CONST.adsCSSList.twoPageStyle)
          CONST.cssAutoInsert.add("multiPageStyle", CONST.adsCSSList.multiPageStyle)
        }
      }

      CONST.cssAutoInsert.add("styleLogo", ".minidiv #logo img{width: 100px;height: unset;margin-top: 0.3rem;} body.purecss-mode:before{display: none;}")
      CONST.cssAutoInsert.add("specialBAIDU", ".opr-recommends-merge-imgtext{display:none!important;}.res_top_banner{display:none!important;}.headBlock, body>div.result-op{display:none;}")
      CONST.cssAutoInsert.add("animationStyle", `
        @keyframes ani_leftToright {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes ac-bar-fast {
          0%, 100% { transform: scaleY(0.4); opacity: 0.5; }
          50% { transform: scaleY(1.4); opacity: 1; }
        }
        .ac-loading-spinner {
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
        .ac-loading-spinner div {
          width: 4px;
          height: 30px;
          background-color: #4e6ef2;
          border-radius: 2px;
          animation: ac-bar-fast 0.3s ease-in-out infinite;
        }
        .ac-loading-spinner div:nth-child(2) { animation-delay: 0.05s; }
        .ac-loading-spinner div:nth-child(3) { animation-delay: 0.1s; }
        .ac-loading-spinner div:nth-child(4) { animation-delay: 0.15s; }
        .ac-loading-spinner div:nth-child(5) { animation-delay: 0.20s; }
        /* 兜底隐藏（页面整体就绪） */
        .ac-ready .ac-loading-spinner { opacity: 0; transition: opacity 0.3s; pointer-events: none; }
        .ac-entry-ani {
          animation: ani_topTobuttom 0.4s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        #ac-pager-loader {
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
      CONST.cssAutoInsert.add("menuBtn", ".achide{display:none;}.newFuncHighLight{color:red;background-color:yellow;font-weight:600}#sp-ac-container label{display:inline}body:not([baidu]) #u{width:319px}#u #myuser{display:inline-block;margin:13px -10px 0 24px}body[baidu] #u{right:0!important;left:auto!important;width:auto!important;display:flex!important;justify-content:flex-end!important;padding-right:16px!important;pointer-events:none!important}body[baidu] #u>*{pointer-events:auto!important}body[baidu] #u #myuser{position:fixed!important;top:52px!important;right:164px!important;margin:0!important;z-index:100000!important}@media(max-width:1050px){body[baidu] #u #myuser{top:96px!important;right:16px!important}}.site-wrapper #myuser,#gbw #myuser{margin-right:15px}#gb #myuser{margin-top:7px}#myuser,#myuser .myuserconfig{padding:0;margin:0}#myuser .myuserconfig{display:inline-block;line-height:1.5;background:#4e6ef2;color:#fff;font-weight:700;text-align:center;padding:6px;border:2px solid #e5e5e5;box-shadow:0 0 10px 3px rgba(0,0,0,.1);border-radius:6px}#myuser .myuserconfig:hover{background:#4662d9!important;color:#fff;cursor:pointer;border-color:#73a6f8}body[haosou] #myuser{margin-top:-10px}")

      if (CONST.curConfig.baiduLiteEnable) {
        CONST.cssAutoInsert.add("baiduLiteStyle", CONST.adsCSSList.baiduLiteStyle)
      }

      if (CONST.curConfig.HuYanMode) {
        CONST.cssAutoInsert.add("huYanStyle", CONST.adsCSSList.huyanStyle)
      }
      if (CONST.curConfig.adsStyleEnable) {
        CONST.cssAutoInsert.add("adsBlockStyle", "#bottomads{display:none;} #content_left>div:not([id])>div[cmatchid], #content_left>div[id*='300']:not([class*='result']),#content_right td>div:not([id]),#content_right>br{position:absolute;top:-6666px;}")
      }
      if (CONST.curConfig.BgEnable) {
        const imageUrl = CONST.curConfig.BgUseUrl
        if (imageUrl) {
          const bgCSS = `body:before{pointer-events: none;position: fixed;width: 100%;height: 100%;top: 0;left: 0;content: '';background-image: url('${imageUrl}');background-size: 100% auto;opacity: 0.6;}`
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
        const cssText = ".sp-separator{grid-column: 1 / -1; line-height:1.8 !important;opacity:1 !important;position:relative !important;float:none !important;top:0 !important;left:0 !important;min-width:366px;width:auto;text-align:center !important;font-size:14px !important;display:block !important;padding:3px 0 !important;margin:5px 10px 8px;clear:both !important;border-style:solid !important;border-color:#cccccc !important;border-width:1px !important;-moz-border-radius:30px !important;border-radius:30px !important;background-color:#ffffff !important;}.sp-separator:hover{box-shadow:0 0 11px rgba(33,33,33,0.2);}#sp-separator-hover{display:none;}.sp-separator:hover #sp-separator-hover{display:block;}.sp-separator .sp-someinfo{position:absolute !important;right:10px !important;font-size:12px !important;font-style:italic !important;background:none !important;}.sp-separator span{vertical-align: middle;cursor: pointer;padding: 0;margin: 0 5px;display: inline-block; width:22px;height:22px;}.sp-separator a{margin:0 20px 0 -6px !important;display:inline !important;text-shadow:#fff 0 1px 0 !important;background:none !important;color:#595959 !important;}.sp-separator input{padding:0 !important;line-height:23px !important;}.sp-separator .sp-md-span{font-weight:bold !important;margin:0 20px !important;}#sp-sp-md-number{width:6ch !important;vertical-align:middle !important;display:inline-block !important;text-align:left !important;}" +
          `.ac_sp_top{background-image:url('${sepImgs.top}')}` +
          `.ac_sp_pre{background-image:url('${sepImgs.pre}')}` +
          `.ac_sp_next{background-image:url('${sepImgs.next}')}` +
          `.ac_sp_bottom{background-image:url('${sepImgs.bottom}')}` +
          `.ac_sp_next_gray{background-image:url('${sepImgs.next_gray}')}` +
          `.ac_sp_pre_gray{background-image:url('${sepImgs.pre_gray}')}`
        CONST.cssAutoInsert.add("preloadAutoPage", cssText)
      }
      if (CONST.curConfig.isBlockEnable) {
        CONST.cssAutoInsert.add("customBlockStyle", "button.ghhider.ghhb[ac-user-alter='1']::before{content:'取消 - ';}#sp-ac-container .ac-block-item{color:#AAA;margin-left:48px;}#sp-ac-container .ac-block-itemdel{float:right;margin-left:0;padding:0 20px;cursor:pointer;}#sp-ac-container .ac-block-itemdel:hover{color:red;}#sp-ac-container .ac-block-high{color:#000;}.ac-blockList li:hover{background-color:#a3caff;color:white !important;cursor:pointer;} *[ac-needhide] *{display:none} *:not([ac-needhide]) .blockShow{display: none;} *[ac-needhide] .blockShow{display:unset;cursor:pointer;} *[ac-needhide] .blockShow:hover{border:1px solid #DDD}button.ghhider{color:#555;background-color:#fcfcfc;font-family:sans-serif;margin:auto 2px;border:1px solid #ccc;border-radius:4px;padding:2px 3px}button.ghhider{font-size:12px}button.ghhider:hover{color:#006aff;background:#fff} body[haosou] button.ghhider{vertical-align: super;} body[google] button.ghhider{vertical-align: top;}") // 公共自定义样式
      }

      if ((CONST.curConfig.isBlockEnable || CONST.curConfig.isFaviconEnable) && CONST.options.siteName === 'haosou') {
        CONST.cssAutoInsert.add("lineTitleFix", 'body[haosou] .res-title {display: inline-flex;}')
      }

      if (CONST.curConfig.isFaviconEnable) {
        CONST.cssAutoInsert.add("faviconStyle", CONST.adsCSSList.faviconStyle) // 插入Favicon图标
      }

      if (CONST.curConfig.isALineDisable) {
        CONST.cssAutoInsert.add("alinkEnable", "a,a em{text-decoration:none !important}")
      }

      if (CONST.curConfig.isCounterEnable) {
        CONST.cssAutoInsert.add("counterStyle", ".AC-CounterT{background:#FD9999}body  #sp-ac-container{position:fixed;top:3.9vw;right:8.8vw}")
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
                    const pageElems = MyApi.getAllElements(pager.pageElement, newBody, newBody)

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

                      CONST.options.useItem.pageUrl = url
                      loaded = true

                      if (pager.afertPagerAutoCallFunc) {
                        pager.afertPagerAutoCallFunc(pageElems, toElement)
                      }

                      // 替换待替换元素 - 一般是替换翻页的按钮
                      try {
                        if (pager.replaceE) {
                          let oriE = MyApi.getAllElements(pager.replaceE);
                          let repE = MyApi.getAllElements(pager.replaceE, newBody, newBody);
                          if (oriE.length === repE.length) {
                            if (oriE.length === 0) {
                              throw "翻页-替换翻页元素 无 'replaceE' 待替换的";
                            }
                            for (let i = 0; i < oriE.length; i++) {
                              oriE[i].replaceWith(repE[i]);
                            }
                          }
                        }
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
                const needManualLoad = !CONST.curConfig.optimizeDuck || +CONST.curConfig.adsStyleMode >= 3
                const node = needManualLoad ? document.querySelector("#links .result--more a, #more-results, [data-testid='more-results']") : null
                try {
                  node?.click()
                } finally {
                  setTimeout(() => {
                    CONST.lock.pageLoadingLocked = false
                  }, needManualLoad && node ? 1500 : 0)
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
          return new RegExp(one.replace("*", ".*"))
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

        function markFatherChild(child, father) {
          const child_checkedAttr = child.getAttribute('two-checked') || 0
          const father_checkedAttr = father.getAttribute('two-checked') || 0

          const trueChild = child.querySelector('.A6K0A')
          if(trueChild) {
            trueChild.setAttribute('two-child', 1)
            trueChild.setAttribute('two-checked', +child_checkedAttr + 1)
            father.setAttribute('two-father', 1)
            father.setAttribute('two-checked', +father_checkedAttr + 1)
            return father
          } else {
            return null
          }
        }

        // 检查的事preNode 和 curNode
        // 但是需要先判断curNode和fatherNode有没有
        function getTrueFatherChild(preNode, curNode, fatherNode) {
          const minItemHeight = 60
          const father_curPossible = curNode.offsetHeight > minItemHeight && fatherNode.offsetHeight / curNode.offsetHeight > 1.5
          const father_anotherPossible = [...fatherNode.children].some(one => {
            return one !== curNode && one.offsetHeight > minItemHeight && fatherNode.offsetHeight / one.offsetHeight > 5;
          })
          const fatherNotMain = fatherNode.id === "cnt";

          // 先检查当前父节点是否符合要求
          if (!fatherNotMain && father_curPossible && father_anotherPossible) {
            return markFatherChild(curNode, fatherNode)
          } else {
            const now_curPossible = preNode.offsetHeight > minItemHeight && curNode.offsetHeight / preNode.offsetHeight > 1.5
            const now_anotherPossible = [...curNode.children].some(one => {
              return one !== preNode && one.offsetHeight > minItemHeight && curNode.offsetHeight / one.offsetHeight > 5;
            })
            // 父节点不行的话，那么检查子节点是否符合要求
            if (now_curPossible && now_anotherPossible) {
              return markFatherChild(preNode, curNode)
            }
            return null
          }
        }

        // 标记自身
        function MarkMine(curItem) {
          let maxHeight = 9, curHeight = 1
          let preNode = curItem
          while (curHeight < maxHeight) {
            const fatherNode = curItem.parentNode
            let attrV = curItem.getAttribute('two-checked') || 0
            if (!curItem.hasAttribute('two-checked') || +attrV < 8) {
              const node = getTrueFatherChild(preNode, curItem, fatherNode)
              if (node) {
                return node
              }
            }
            curItem.setAttribute('two-checked', +attrV + 1)
            preNode = curItem
            curItem = fatherNode
            curHeight++
          }
          return null
        }

        const gList = document.querySelectorAll(".g:not([two-checked*='8']), .cUnQKe:not([two-checked*='8']), .Ww4FFb:not([two-checked*='8'])")

        return [...gList].filter(one => MarkMine(one))
      }

      const valid = location.href.search(/(&|\?)(q|kw)=/) >= 0 ||
        document.querySelector(".g, div[two-father]")

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
      if (CONST.curConfig.isFaviconEnable && typeof (CONST.options.useItem.FaviconType) !== 'undefined') { // 显示favicon图标
        // 延迟2秒加载，减少可能出现的问题
        PageFunc.addFavicon(document.querySelectorAll(CONST.options.useItem.FaviconType)); // 添加Favicon显示
      } else {
        document.querySelectorAll(CONST.options.useItem.FaviconType || '').forEach((one) => {
          one.removeAttribute("ac_faviconstatus");
        })
      }
      if (CONST.curConfig.isCounterEnable) {
        PageFunc.addCounter(document.querySelectorAll(CONST.options.useItem.CounterType)); // 显示计数器
      } else {
        document.querySelectorAll(".AC-CounterT").forEach(one => {
          one.parentElement?.removeAttribute('SortIndex');
          one.remove()
        })
      }

      // 双列模式下，自动禁用右侧栏
      if (!CONST.curConfig.isRightDisplayEnable || CONST.curConfig.adsStyleMode >= 3) {
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
        const syncOptions = JSON.parse(newVal)
        CONST.renewConfig(syncOptions)
        if (syncOptions.refreshUrl) MyApi.refreshAfter(500)
      })
      PageFunc.dataChangeFireCallback()
      watch(CONST.curConfig, async () => {
        await CONST.loadSiteCSS()
        PageFunc.dataChangeFireCallback()
      })
      watch(CONST.cssFavionList, () => {
        const baseCSS = 'h3::before, h2::before {content: " ";display:inline-block} *[data-favicon-t]:before{width: 16px; height: 16px; margin-right: 4px; background-size: 100% 100%; vertical-align: text-top;}'
        CONST.adsCSSList.faviconStyle = Object.entries(CONST.cssFavionList.list).reduce((preCSS, cur) => {
          const [, { tagName = '', url = '' }] = cur
          let nowCSS = ''
          if (url) {
            //如果地址不正确，那么丢弃
            const imgUrl = "https://favicon.yandex.net/favicon/v2/" + encodeURIComponent(url) + "?size=32"
            nowCSS = tagName + `[data-favicon-t='${url}']:before{background-image: url('${imgUrl}');}`
          }
          return preCSS + nowCSS
        }, baseCSS)
        PageFunc.dataChangeFireCallback()
      })
    }, 20, true)
    MyApi.safeWaitFunc('body', () => {
      const insertName = CONST.curConfig.enableCSS ? CONST.options.siteName : (CONST.options.siteName + '_nocss')
      if (!document.body.hasAttribute(insertName)) {
        document.body.setAttribute(insertName, '1')
        document.body.classList.add(insertName)
        // 添加 ac-ready 类，允许静默样式淡出展示
        setTimeout(() => {
          document.body.classList.add('ac-ready')
        }, 400)
      }
      PageFunc.InsertSettingMenu()
      if (CONST.curConfig.isAutopage) {
        setTimeout(() => {
          PageFunc.pagerBind()
        }, 2000)
      }
    }, 20, true)
  })()
})()
