import { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import { common } from './common'

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    description: "Windows Hotkey Tool, Windows热键工具",
    themeConfig: {
        nav: [
            { text: '文档', link: '/getting-started' },
            { text: '下载', link: common.url_msstore },
        ],
        sidebar: [
            {
                text: 'OneQuick',
                items: [
                    { text: '开始', link: '/getting-started' },
                ],
            },
            {
                text: '关于',
                items: [
                    { text: '隐私政策', link: '/privacy-policy' },
                ],
            },
        ],
    },
};