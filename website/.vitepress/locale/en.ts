import { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import { common } from './common'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    description: "Windows Hotkey Tool, Windows热键工具",
    themeConfig: {
        nav: [
            { text: 'Docs', link: '/getting-started' },
            { text: 'Download', link: common.url_msstore },
        ],
        sidebar: [
            {
                text: 'OneQuick',
                items: [
                    { text: 'Getting Started', link: '/getting-started' },
                ],
            },
            {
                text: '关于',
                items: [
                    { text: 'Privacy Policy', link: '/privacy-policy' },
                ],
            },
        ],
    },
};