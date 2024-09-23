import { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import { common } from '../common'
import type { HomeData } from '../theme/MyHomeLayout.vue';

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    description: "Windows Hotkey Tool",
    themeConfig: {
        nav: [
            { text: 'Docs', link: '/en/start' },
            { text: 'Pro', link: '/en/pro' },
            { text: 'Support', link: '/en/support' },
            { text: 'Download', link: common.url_msstore },
        ],
        sidebar: [
            {
                items: [
                    { text: 'Welcome', link: '/en/start' },
                    { text: 'Pro Version', link: '/en/pro' },
                    { text: 'Support', link: '/en/support' },
                ],
            },
            {
                text: 'Guides',
                items: [
                    { text: 'Screen Border', link: '/en/guide/screen' },
                    { text: 'Copy Run', link: '/en/guide/copy' },
                    { text: 'Input Phrase', link: '/en/guide/phrase' },
                    { text: 'Multi-Hotkey', link: '/en/guide/hotkey' },
                    { text: 'Display Config', link: '/en/guide/display' },
                    { text: 'Misc', link: '/en/guide/misc' },
                ],
            },
            {
                text: 'Reference',
                items: [
                    { text: 'Operation', link: '/en/reference/operation' },
                ],
            },
            {
                text: 'Links',
                items: [
                    { text: 'Change Log', link: '/change-log' },
                    { text: 'Privacy Policy', link: '/privacy-policy' },
                ],
            },
        ],
    },
};

export const homeData: HomeData = {
    hero: {
        name: {
            text: 'OneQuick',
            suffix: 'Hotkey Tool',
        },
        description: 'More than just hotkeys',
        tagline: 'Ready to use, intuitive, simple and efficient',
        actions: {
            url: common.url_msstore,
            image_src: '/en-ws-dl.svg',
            image_width: 200,
            alt: [],
        },
        tip: '*Website under construction, if you have any questions, feel free to raise an issue on GitHub'
    },
    features: [
        {
            title: 'How to quickly adjust the volume?',
            content: [
                'Watching a movie, playing a game, giving a presentation, and suddenly startled by a loud sound? How to quickly adjust the volume?',
                {
                    text: 'Move the mouse to the top left corner of the screen and scroll the wheel, press down to mute.',
                    emphasis: true,
                },
                'With OneQuick, the functions of the mouse at the edges of the screen are all adjustable.',
            ],
            image: {
                src: '/feature/screen-volume.gif',
            },
        },
        {
            title: 'How to quickly search for a piece of text?',
            content: [
                'Before: Select the text, copy it, open the browser to the desired search site, paste it in the search box, and finally press Enter...',
                'If you want to search and compare on multiple websites, you have to repeat, repeat, and repeat again…',
                {
                    text: 'Now: Select the text, press Ctrl-C twice (or Ctrl-C-C), then press one key to go directly to the search results',
                    emphasis: true,
                },
                'OneQuick has built-in support for various commonly used websites. By combining different URLs, you can also convert text to QR codes or perform more operations.',
            ],
            image: {
                src: '/feature/copy-search.gif',
            },
        },
        {
            title: 'Do you have to go to settings every time to adjust the extended screen?',
            content: [
                'Different screen settings for work and gaming, Win+P is not enough, how to switch quickly?',
                {
                    text: 'OneQuick can remember the current screen configuration and switch with one key when needed.',
                    emphasis: true,
                },
            ],
            image: {
                src: '/shot/en-display.png',
            },
        },
        {
            title: 'How to...',
            content: [
                'Want to pin the current window to work with other windows...',
                'Want to make the browser semi-transparent to slack off...',
                'Want to find the location of the current program\'s exe...',
                'Want to change the key bindings of a game...',
                'Want to quickly run commands...',
                {
                    text: 'All can be easily done in OneQuick.',
                    emphasis: true,
                },
            ],
            image: {
                src: '/shot/en-hotkey.png',
            },
        },
    ],
    review: {
        title: 'Reviews:',
        image: {
            src: '/social/comments.png',
        },
    },
};
