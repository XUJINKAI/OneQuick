import { defineConfig } from 'vitepress'
import { common } from './common'
import { zhConfig } from './locale/zh'
import { enConfig } from './locale/en'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  srcDir: 'src',
  cleanUrls: true,
  title: "OneQuick",
  sitemap: {
    hostname: 'https://onequick.org',
  },
  head: [
    ['link', { rel: 'icon', type: "image/svg+xml", href: '/favicon.svg' }],
    ['meta', { name: 'keywords', content: 'OneQuick, Hotkey Tool, Hot Corner, Wheel, Keyboard, Topmost, Monitor, Keep Awake, 触发角, 热键工具, 快捷键软件, 滚轮, 键盘, 窗口置顶, 屏幕配置, 一键, 运行, 监控, 保持唤醒, AutoHotKey, AHK, uTools, WGestures, Smart Actions, Power Automate, PowerToys' }],
    ['meta', { name: 'author', content: 'xujinkai' }],
    ['script', {
      async: 'true',
      src: 'https://www.googletagmanager.com/gtag/js?id=G-68WQYY77Q7',
    }],
    ['script', {}, `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-68WQYY77Q7');`
    ],
  ],
  transformPageData: (pageData, ctx) => {
    const canonicalUrl = `https://onequick.org/${pageData.relativePath}`
      .replace(/index\.md$/, '')
      .replace(/\.md$/, '');
    const lang = pageData.filePath.startsWith('en/') ? 'en-US' : 'zh-CN';
    const locale_prefix = pageData.filePath.startsWith('en/') ? 'en' : 'root';
    const locale = ctx.siteConfig.site.locales[locale_prefix];

    pageData.frontmatter.head ??= [];
    pageData.frontmatter.head.push(['link', { rel: 'canonical', href: canonicalUrl }]);
    pageData.frontmatter.head.push(['meta', {
      property: 'og:title', content:
        pageData.frontmatter.layout === 'home' ? locale.title
          : pageData.title ? `${pageData.title} | ${locale.title}`
            : locale.title
    }]);
    pageData.frontmatter.head.push(['meta', { property: 'og:description', content: locale.description }]);
    pageData.frontmatter.head.push(['meta', { property: 'og:type', content: 'website' }]);
    pageData.frontmatter.head.push(['meta', { property: 'og:url', content: canonicalUrl }]);
    pageData.frontmatter.head.push(['meta', { property: 'og:locale', content: lang }]);
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      ...zhConfig,
    },
    en: {
      label: 'English',
      lang: 'en-US',
      ...enConfig,
    },
  },
  appearance: false,
  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: 'OneQuick',
    socialLinks: [
      { icon: 'github', link: common.url_github_issues },
    ],
    docFooter: {
      prev: false,
      next: false,
    },
    footer: {
      copyright: 'Copyright © 2016-2024 OneQuick.org'
    },
  },
})
