# 支持

OneQuick欢迎您提出任何问题、建议、意见。

## 遇到了问题

如果您遇到了BUG/崩溃等问题，可以在GitHub上提Issue。

可以的话，最好能附加相关的日志（可以在设置中调高日志等级），环境信息（程序中可查看），复现步骤等。

GitHub: <https://github.com/XUJINKAI/OneQuick/issues>

## 帮助改进/宣传

帮助改进/宣传可至少获得一年专业版时长，详情查看[促销信息](/pro#促销信息)

## 联系方式

Email: <support@onequick.org>

微博：[@OneQuick工具](https://weibo.com/OneQuick)

## 常见问题

#### 为什么下载大小那么大

OneQuick自带了dotnet运行时，以保证在所有用户电脑上均可用，代价就是占用的体积会大一些。

请放心，OneQuick并没有附带恶意软件，也不会收集用户数据。

#### 占用内存如何？

经过实际测试，在后台运行时，OneQuick只占用25MB左右的内存。

#### 有时候没有效果

由于系统限制，如果当前活动窗口是管理员权限的，OneQuick无法获取按键事件。

#### 购买页面闪退

由于系统限制，如果OneQuick以管理员权限启动，则无法显示购买页面。

#### 我想导入旧版的配置

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
