---
title: 支持
outline: [2, 4]
---

## 支持

OneQuick欢迎您提出任何问题、建议、意见。

帮助改进/宣传可至少获得一年专业版时长，详情查看[促销信息](/pro#促销信息)，你在应用商店的评价也很重要！

### 遇到了问题?

您可以首先查阅[常见问题](#常见问题)，或者在Github上提Issue。

如果是反馈BUG，请说明复现步骤，必要的话附上相关的日志（可以在设置中调高日志等级），环境信息（程序中可查看）。

GitHub: <https://github.com/XUJINKAI/OneQuick/issues>

### 联系方式

Email: <support@onequick.org>

微博：[@OneQuick工具](https://weibo.com/OneQuick)

## 常见问题

### 安装

#### 下载有点大

OneQuick自带了dotnet运行时，以保证在所有用户电脑上均可用，代价就是占用的体积会大一些。

请放心，OneQuick并没有附带恶意软件，也不会收集用户数据。

#### 内存占用大吗？

经过实际测试，在后台运行时，OneQuick只占用25MB左右的内存。

### 购买

#### 购买闪退

由于系统限制，如果OneQuick以管理员权限启动，则无法显示购买页面。

#### 购买后没有变化

请稍等片刻（1分钟）、到许可证页面点击刷新按钮，或重启应用后尝试。

### 使用

#### 没有效果

由于系统限制，如果当前活动窗口是管理员权限的，OneQuick无法获取按键事件。

您可以在应用中设置以管理员权限启动程序。

#### 导入旧版配置

在程序的**设置**->**配置管理**->**高级**中，可以找到导入配置的选项。

当前版本的配置文件路径为：

```ps
<Users>\AppData\Local\Packages\55774JinkaiXu.252258CF1F9E6_p5dcp4q3yn5jt\LocalState\profile\profile.json
```

如果您是老版本升级用户，可以在以下目录找到旧的配置文件：

```ps
# v1.x版本
<我的文档>\OneQuick\OneQuick.config
# v10.0版本
<Users>\AppData\Local\Packages\55774JinkaiXu.252258CF1F9E6_p5dcp4q3yn5jt\LocalCache\Local\OneQuick\profile.json
<Users>\AppData\Local\OneQuick\profile.json
```

### 待改进

#### 文字输出换行符

可在**设置**->**Flags**中，修改`Send Text Method`的值为1或3。

这会让输出文字的方法变为通过剪贴板进行。

#### 音调符号

如果你需要输入西语中的音调符号(Dead key), 可在**设置**->**Flags**中，修改`Disable Chars Listener`的值True。

同时，这会导致短语替换功能失效，相关Issue：[#104](https://github.com/XUJINKAI/OneQuick/issues/104)
