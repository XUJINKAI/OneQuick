import { defineConfig } from 'vitepress'
import { zhConfig } from './locale/zh'
import { enConfig } from './locale/en'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  srcDir: 'docs',
  cleanUrls: true,
  title: "OneQuick",
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
    ['meta', { name: 'keywords', content: 'OneQuick, Windows, Hotkey Tool, 热键工具' }],
    ['meta', { name: 'author', content: 'xujinkai' }],
  ],
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
  themeConfig: {
    logo: '/logo.svg',
    socialLinks: [
        { icon: 'github', link: 'https://github.com/OneQuick/Feedback' },
    ],
    docFooter: {
      prev: false,
      next: false,
    },
    footer: {
      copyright: 'Copyright © 2016-2023 OneQuick.org'
    },
  },
})
