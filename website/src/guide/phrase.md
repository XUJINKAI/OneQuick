# 短语替换

> 也许该改名为"便捷输入"

如果你有一些经常要输入的内容，例如邮箱/地址，专业名词，固定的话术，AI的提示语，那么这个功能就很适合你。

只要在键盘上键入设置好的`输入项`，程序会自动帮你替换为`输出项`。

![短语替换](/shot/cn-phrase.png){ data-zoomable .img-shadow }

例如上图中的设置，键入`,,g`后，会被自动替换为`your-email-address@gmail.com`。

<!-- ![旧版界面](/feature/replace-phrase.gif){ data-zoomable .img-shadow } -->

## 输出项规则

输出项可以是任意字符，包括中文，Emoji等。

但目前无法输出换行符。

除了输出固定的文本外，还有一些高级用法：

- `dt:` 开头的文本会使用当前时间进行格式化
- `::` 开头的文本会原样输出后续的文本

例如：  
`dt:` 将会输出 `2024/9/26 星期四 11:39:41`  
`dt:yyyy-MM-dd HH:mm:ss.fff` 将会输出 `2024-09-26 11:43:31.140`  
`dt:今天是yyyy年MM月dd日` 将会输出 `今天是2024年09月26日`  

dt:后面的格式化字符串可以参考[DateTime.ToString](https://learn.microsoft.com/zh-cn/dotnet/standard/base-types/custom-date-and-time-format-strings)。

## 输入项限制

OneQuick可以根据您的按键，推断出哪些英文符号被按下，但OneQuick无法获取您通过输入法输入的中文等信息。

因此，输入项只能是英文字符。

此外，输入项也无法包含换行符、制表符等特殊字符。
