---
title: Support
outline: [2, 4]
---

## Support

OneQuick welcomes any questions, suggestions, or feedback.

Your rate and review in the store are very important!

### Have Issues?

If you encounter bugs or crashes, you can first check the [FAQs](#faqs) or submit an issue on GitHub.

For bugs, please provide reproduction steps. If necessary, please attach relevant logs (you can increase the log level in settings), and environment information (viewable in the program).

GitHub: <https://github.com/XUJINKAI/OneQuick/issues>

### Contact

Email: <support@onequick.org>

## FAQs

### Install

#### Download size so large

OneQuick comes with the dotnet runtime to ensure it works on all users' computers, which results in a larger size.

Rest assured, OneQuick does not include malware and does not collect user data.

#### Memory occupy

After actual testing, OneQuick only occupies about 25MB of memory when running in the background.

### Purchase

#### Purchase page crashes

Due to Windows restrictions, if OneQuick is launched with administrator privileges, the purchase page cannot be displayed.

#### No change after purchase

Please wait a moment (1 minute), click the refresh button on the license page, or restart the application and try again.

### Usage

#### NOT work

1. Check if the program state is running and the corresponding features are enabled.

2. For administrative windows, OneQuick must be run with administrator to function properly.

3. Some specific programs (e.g., Remote Desktop mstsc) will capture hotkey inputs, making OneQuick's hotkey simulation ineffective (such as volume control and switch virtual desktops). [#50](https://github.com/XUJINKAI/OneQuick/issues/50)

#### Import Old Config

In the program's **Settings** -> **Profile** -> **Advanced**, you can find the option to import configurations.

The current version's configuration file path is:

```ps
<Users>\AppData\Local\Packages\55774JinkaiXu.252258CF1F9E6_p5dcp4q3yn5jt\LocalState\profile\profile.json
```

If you are an old version upgrade user, you can find the old configuration files in the following directories:

```
# v1.x version
<My Documents>\OneQuick\OneQuick.config
# v10.0 version
<Users>\AppData\Local\Packages\55774JinkaiXu.252258CF1F9E6_p5dcp4q3yn5jt\LocalCache\Local\OneQuick\profile.json
<Users>\AppData\Local\OneQuick\profile.json
```

### Workaround

#### Send line break

In the **Settings** -> **Flags**, Change `Send Text Method` to 1 or 3.

Github Issue: [#93](https://github.com/XUJINKAI/OneQuick/issues/93)

#### Dead Key/Accent mark

If you need enter accent marks (dead key), In the **Settings** -> **Flags**, Change `Disable Chars Listener` to True.

Meanwhile, **Phrase Replace** will be disabled. Github Issue: [#104](https://github.com/XUJINKAI/OneQuick/issues/104)
