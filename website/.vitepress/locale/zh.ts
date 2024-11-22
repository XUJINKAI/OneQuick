import { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import { common } from '../common'
import type { HomeData } from '../theme/MyHomeLayout.vue';

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    title: "OneQuick - 热键效率工具 - 开箱即用，符合直觉，简单高效",
    description: "Windows热键效率工具，音量，标签页，快速搜索，便捷输入，显示器配置，热键模拟，运行命令，窗口置顶，窗口透明。。。",
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
        description: '不止于热键',
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
            title: '如何最快的修改音量？',
            content: [
                '看电影时，玩游戏时，工作汇报时，被突然的声音吓一跳？如何快速修改音量？',
                {
                    text: '把鼠标移动到屏幕左上角，滚动滚轮就行，按下则静音。',
                    emphasis: true,
                },
                '通过OneQuick，鼠标在各个屏幕边缘的功能，都可以定制。',
            ],
            image: {
                src: '/feature/screen-volume.gif',
            },
        },
        {
            title: '如何快速搜索一段文本？',
            content: [
                '以前：选中文字后，复制文字，打开浏览器中想搜索的网站，在搜索框中粘贴，最后回车...',
                {
                    text: '现在：选中文字后，复制两次（Ctrl-C-C），再按一个键，直达搜索结果',
                    emphasis: true,
                },
                'OneQuick内置了各个常用的网站。通过搭配不同的网址，你还可以把文字转为二维码，或进行更多操作。',
            ],
            image: {
                src: '/feature/copy-search-3-cn.gif',
            },
        },
        {
            title: '如何快速的输入一段文字？',
            content: [
                '邮箱，地址，客服话术，专业术语，AI提示语，当前时间戳...重复的东西，很烦。',
                {
                    text: 'OneQuick可以帮助你减少重复劳动。',
                    emphasis: true,
                },
                '还有配置同步功能帮助你在多台电脑间无缝切换。',
            ],
            image: {
                src: '/feature/phrase-replace-cn.gif',
            },
        },
        {
            title: '每次切换外接屏都要去设置里点半天？',
            content: [
                '工作，游戏的屏幕设置不同，Win+P不够用了，如何快速切换？',
                {
                    text: 'OneQuick可以记住当前屏幕配置，需要的时候一键切换。',
                    emphasis: true,
                },
            ],
            image: {
                src: '/shot/cn-display.png',
            },
        },
        {
            title: '如何...',
            content: [
                '想置顶当前窗口，好搭配其他窗口工作...',
                '想将浏览器变为半透明然后摸鱼...',
                '想找到当前程序的exe位置在哪里...',
                '想修改游戏的键位...',
                '想快速运行命令...',
                {
                    text: '在OneQuick中，都可以方便的做到。',
                    emphasis: true,
                },
            ],
            image: {
                src: '/shot/cn-hotkey.png',
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
