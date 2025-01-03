---
title: 更新日志
---

说明：网页信息会先更新，应用商店需要1到3天的审核时间。

## 10.5.0 (即将发布)

#### 新增：
- 屏幕边缘：MacOS风格**触发角**功能 (Pro版)
- 实用工具：系统配置：在系统托盘显示星期选项

注：触发角为新增配置，如果您使用了同步配置功能，需要将所有OneQuick更新到10.5.0之后，否则触发角配置会被覆盖。

## 10.4.0 (2024/12/1)

#### 新增：
- 执行项：增加保持唤醒功能
- 实用工具：新增输入监控面板（屏幕按键显示工具）
- 实用工具：新增应用列表面板（查看UWP应用的启动命令）
- 设置：可设置全局禁用的应用列表（Pro版）
- 设置：可对鼠标滚轮的触发频率进行限制
- 核心：热键输入的右键菜单增加组合键选项
- 多步热键：可手动运行项目

#### 优化：
- 更新到dotnet 9
- 修复若干bug

### 10.4.1 (2024/12/12)
- 更新应用图标🌟

### 10.4.2 (2024/12/16)
- 修复发送热键的一个问题

## 10.3.0 (2024/11/22)

#### 新增：
- 核心：支持管理员权限启动程序
- 核心：支持对鼠标按键的模拟🖱
- 核心：热键输入框可通过右键菜单选择输入
- 复制搜索：工具栏增加常用网址的预设列表
- 复制搜索：支持分号分隔一次执行多个网址（Pro版）
- 复制搜索：支持`%s`和`OneQuick`两种剪贴板替换符
- 复制搜索：列表条目右键菜单增加复制链接的选项
- Flags：修改SendTextMethod选项可支持短语替换输出换行符

#### 优化：
- 优化界面卡顿问题
- 翻译托盘图标菜单
- 点击开始页面的版本号可检测更新
- [fix.workaround] 输入某些语种的音调符号时错误的问题，可通过`DisableCharsListener`选项规避(Dead key problem)

## 10.2.0 (2024/9/26)

#### 新增：
- 短语替换可使用`dt:`开头的字符串输出当前时间
- 设置中新增**许可证**面板，可查看订阅详情，限免促销信息等

#### 优化：
- 优化各个页面的帮助信息，优化屏幕边缘九宫格显示效果
- 修复显示器配置中图示错误的问题
- 不再检测v1.x旧版本的配置文件，用户可手动导入

### 10.2.1 (2024/9/28)
- 修复短语替换中`dt:`输出时间不正确的问题

### 10.2.2 (2024/10/8)
- 修复管理员用户无法购买专业版的问题

### 10.2.3 (2024/10/12)
- 在此版本之后，程序更新后，可自动重启

## 10.1.0 (2024/9/10)

#### 新增：
- 多步热键新增**触发条件**栏位。
- 新增设置面板（通用、配置管理、Flags）。
- 新增**配置同步**功能。（pro版功能）
- 可对配置进行导出/导入/清空等操作，也可手动导入旧版配置。
- 新增**屏幕配置**面板，可记忆当前屏幕设置并快速切换，有多块外接屏时的好帮手。（beta阶段）

#### 优化：
- 优化窗口显示，关闭再打开时可以记住上次关闭的页面。
- 修复前端若干问题。

注：此版本修改了配置文件所在路径，通过设置中的“打开日志目录”即可访问。

## 10.0.0 (2024/8/20) ❤️

久等了，最新的10.0版本终于来了。

本次完全抛弃了老代码，从头开始构建，性能和扩展性都有提升。

本次更新优先带回了老版本的功能，后续会逐渐加入新功能。

此外，将港区价格调整为和国区一致。

## 1.2.0 (2018/5/9)

全新的关于页面和更新提示改进。  
重构与改进，重做多语言、更新、联网、日志模块。  
桌面版可选择获取预览版。  

### 1.2.2 (2018/5/13)

优化商店版订阅体验。  
去掉工具栏的升级提示。  
修复闪退问题(again)。  
修复复制搜索Url转码的一个bug。  
在日志中记录崩溃信息。  

### 1.2.3 (2018/5/16)  

优化UI、托盘菜单及图标。  
修复一个导致崩溃的bug。  
完善崩溃时日志的记录。  

### 1.2.5 (2018/8/19)

尝试修复弹窗bug。

## 1.1.2 (下载版未推送)

更改Lite/Pro双版本为免费/订阅模式。

**注意**：配置目录从文档的OneQuick Lite变为了OneQuick，您可能需要手动删除OneQuick Lite目录。

新增：  
窗口透明度调节（不一定对所有窗口有效）  
订阅标签（可从关于页面进入）  

改进：  
关于页面  

修复：  
闪退bug  

## 1.0.0 (2018/4/21)

新增大量功能、修复巨量bug。  
**功能限制**：自定义热键、按键映射功能仅有一条能生效。配置文件切换功能不可用。

## 0.11.4 (2017/10/2)

上架Windows应用商店！

## 0.1.0 (2016/4/20) 

AHK版发布。
