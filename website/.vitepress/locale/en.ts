import { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import { common } from './common'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    description: "Windows Hotkey Tool",
    themeConfig: {
        nav: [
            { text: 'Docs', link: '/en/feedback' },
            { text: 'Pro', link: '/en/pro' },
            { text: 'Download', link: common.url_msstore },
        ],
        sidebar: [
            {
                text: 'OneQuick',
                items: [
                    { text: 'Feedback', link: '/en/feedback' },
                    { text: 'Pro Version', link: '/en/pro' },
                    { text: 'Privacy Policy', link: '/privacy-policy' },
                ],
            },
        ],
    },
};