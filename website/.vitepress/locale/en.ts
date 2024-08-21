import { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import { common } from './common'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    description: "Windows Hotkey Tool",
    themeConfig: {
        nav: [
            { text: 'Docs', link: '/en/docs' },
            { text: 'Pro', link: '/en/pro' },
            { text: 'Download', link: common.url_msstore },
        ],
        sidebar: [
            {
                text: 'OneQuick',
                items: [
                    { text: 'Welcome', link: '/en/docs' },
                    { text: 'Pro Version', link: '/en/pro' },
                    { text: 'Privacy Policy', link: '/privacy-policy' },
                ],
            },
        ],
    },
};