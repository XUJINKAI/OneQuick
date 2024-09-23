import { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import { common } from '../common'
import type { HomeData } from '../theme/MyHomeLayout.vue';

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    title: "OneQuick - 离不开的热键工具",
    description: "Windows热键工具",
    themeConfig: {
        nav: [
            { text: '文档', link: '/start', activeMatch: '^_$' },
            { text: '专业版', link: '/pro', activeMatch: '^_$' },
            { text: '支持', link: '/support' },
            { text: '下载', link: common.url_msstore },
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
                    { text: '复制执行', link: '/guide/copy' },
                    { text: '短语替换', link: '/guide/phrase' },
                    { text: '多步热键', link: '/guide/hotkey' },
                    { text: '屏幕配置', link: '/guide/display' },
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
            url: common.url_msstore,
            image_src: '/cn-ws-dl.svg',
            image_width: 200,
            alt: [
                { text: '更新日志', url: '/change-log' },
            ]
        },
        tip: '*官网施工中，有问题欢迎到github提issue',
    },
    features: [
        {
            title: '如何最快的修改音量？',
            content: [
                '看电影时，玩游戏时，工作汇报时，被突然的声音吓一跳？如何快速修改音量？',
                {
                    text: '把鼠标移动到屏幕左上角，滚动滚轮即可，按下还可以静音。',
                    emphasis: true,
                },
                '通过OneQuick，鼠标在各个屏幕边缘的功能，都是可调的。',
            ],
            image: {
                src: '/feature/screen-volume.gif',
            },
        },
        {
            title: '如何快速搜索一段文本？',
            content: [
                '以前：选中文字后，复制文字，打开浏览器中想搜索的网站，在搜索框中粘贴，最后回车...',
                '如果想在多个网站搜索比对，还得重复重复再重复...',
                {
                    text: '现在：选中文字后，复制两次（Ctrl-C-C），再按一个键，直达搜索结果',
                    emphasis: true,
                },
                'OneQuick内置了各个常用的网站。通过搭配不同的网址，你还可以把文字转为二维码，或进行更多操作。',
            ],
            image: {
                src: '/feature/copy-search.gif',
            },
        },
        {
            title: '每次调整扩展屏都要去设置里点半天？',
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
