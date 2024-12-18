import { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import { common } from '../common'
import type { HomeData } from '../theme/MyHomeLayout.vue';

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    title: "OneQuick - 热键效率工具 - 开箱即用，符合直觉，简单高效",
    description: "Windows热键效率工具, 触发角, 音量, 虚拟桌面, 聚合搜索, 快速搜索, 便捷输入, 显示器配置, 热键模拟, 运行命令, 窗口置顶, 窗口透明, 屏幕键盘, 保持唤醒",
    themeConfig: {
        outline: {
            label: '页面导航',
            level: [2, 3],
        },
        nav: [
            { text: '文档', link: '/start', activeMatch: '^_$' },
            { text: '专业版', link: '/pro', activeMatch: '^_$' },
            { text: '支持', link: '/support' },
            { text: '下载', link: common.url_msstore(true, 'zh-cn', 'CN') },
        ],
        sidebar: [
            {
                items: [
                    { text: '开始', link: '/start' },
                    { text: '专业版', link: '/pro' },
                    { text: '更新日志', link: '/change-log' },
                    { text: '支持', link: '/support' },
                ],
            },
            {
                text: '指南',
                items: [
                    { text: '屏幕边缘', link: '/guide/screen' },
                    { text: '复制搜索', link: '/guide/copy' },
                    { text: '短语替换', link: '/guide/phrase' },
                    { text: '多步热键', link: '/guide/hotkey' },
                    { text: '显示器配置', link: '/guide/display' },
                    { text: '实用工具', link: '/guide/tool' },
                    { text: '其他', link: '/guide/misc' },
                ],
            },
            {
                text: '参考',
                items: [
                    { text: '执行项', link: '/reference/operation' },
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

export const homeData: HomeData = {
    hero: {
        name: {
            text: 'OneQuick',
            suffix: '热键工具',
        },
        description: '完善Windows使用体验',
        tagline: '开箱即用，符合直觉，简单高效',
        actions: {
            url: common.url_msstore(false, 'zh-cn', 'CN'),
            image_src: '/cn-ws-dl.svg',
            image_width: 200,
            alt: [
                { text: '更新日志', url: '/change-log' },
                { text: '促销信息', url: '/pro#促销信息' },
            ]
        },
    },
    features: [
        {
            title: '扩展鼠标在屏幕边缘的能力',
            content: [
                '无需再去托盘区瞄准音量图标，通过OneQuick，只需要：',
                {
                    text: '把鼠标移动到屏幕左上角，滚动滚轮，即可调整音量。',
                    emphasis: true,
                },
                '屏幕的四条边和四个角都可定义，切换标签页、虚拟桌面、切歌...等等操作都可通过鼠标快速做到。',
            ],
            image: {
                src: '/feature/screen-volume.gif',
            },
        },
        {
            title: '连接复制文字的后续动作',
            content: [
                '复制文字后，无论是想搜索、翻译、转码...，只需要：',
                {
                    text: '复制两次（Ctrl-C-C），再按一个键，直达结果。',
                    emphasis: true,
                },
                'OneQuick内置了各个常用的网站，方便您快速配置。',
            ],
            image: {
                src: '/feature/copy-search-3-cn.gif',
            },
        },
        {
            title: '强大的自定义热键功能',
            content: [
                'OneQuick内置了丰富的动作列表，您可以轻松实现：',
                { text: '修改程序的按键映射、', emphasis: true },
                { text: '快速运行一段命令、', emphasis: true },
                { text: '窗口置顶、窗口透明、打开程序位置、', emphasis: true },
                { text: '保持系统唤醒、关闭显示器、锁定、睡眠...', emphasis: true },
                '无论是摸鱼、工作、游戏，均可满足您的需求。',
            ],
            image: {
                src: '/shot/cn-hotkey.png',
            },
        },
        {
            title: '快速切换显示器配置',
            content: [
                '不同的工作内容、游戏的屏幕设置各不相同，OneQuick可以免去重复的设置工作。',
                'OneQuick可以记住显示器的相对位置、分辨率、刷新率等设置，一键切换。',
            ],
            image: {
                src: '/shot/cn-display.png',
            },
        },
        {
            title: '更多实用工具...',
            content: [
                '短语替换功能可以快速输入文字，你可以通过他输入邮箱，地址，客服话术，专业术语，AI提示语，当前时间戳等等...',
                '输入监控可以显示鼠标和键盘的按键历史，可以用作屏幕键盘显示，作为程序员也可以观察按键注入情况...',
                '当你需要与热键相关的功能时，不妨来试试OneQuick。',
            ],
            image: {
                src: '/feature/phrase-replace-cn.gif',
            },
        },
    ],
    review: {
        title: '大家的评价：',
        image: {
            src: '/social/comments.png',
        },
    }
};
