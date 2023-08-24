import { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import { common } from './common'

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    description: "Windows热键工具",
    themeConfig: {
        nav: [
            { text: '文档', link: '/getting-started', activeMatch: '^_$' },
            { text: '下载', link: common.url_msstore },
        ],
        sidebar: [
            {
                text: '介绍',
                items: [
                    { text: '开始', link: '/getting-started' },
                    { text: '专业版', link: '/pro' },
                    { text: '支持', link: '/support' },
                ],
            },
            {
                text: '使用说明',
                items: [
                    { text: '基础概念', link: '/usage/' },
                    { text: '热键的触发和模拟', link: '/usage/hotkey' },
                    { text: '执行动作', link: '/usage/actions' },
                    { text: '机制说明', link: '/usage/mechanism' },
                ],
            },
            {
                text: '关于',
                items: [
                    { text: '感谢', link: '/thanks' },
                    { text: '更新日志', link: '/change-log' },
                    { text: '隐私政策', link: '/privacy-policy' },
                ],
            },
        ],
    },
};