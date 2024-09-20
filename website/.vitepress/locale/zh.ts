import { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import { common } from '../common'

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    description: "Windows热键工具",
    themeConfig: {
        nav: [
            { text: '文档', link: '/docs', activeMatch: '^_$' },
            { text: '专业版', link: '/pro', activeMatch: '^_$' },
            { text: '下载', link: common.url_msstore },
        ],
        sidebar: [
            {
                text: 'OneQuick',
                items: [
                    { text: '欢迎', link: '/docs' },
                    { text: '专业版', link: '/pro' },
                    { text: '更新日志', link: '/change-log' },
                ],
            },
            {
                text: '关于',
                items: [
                    { text: '隐私政策', link: '/privacy-policy' },
                    { text: '感谢', link: '/thanks' },
                ],
            },
        ],
    },
};