# 复制搜索

基础用法是，选中一段文字，复制两次（Ctrl-C-C），然后按设定的热键，则自动打开搜索结果页。

![复制执行](/shot/cn-copy.png){ data-zoomable .img-shadow}

## 添加自定义项

通过`预设`下拉菜单可添加常用的网址，或通过以下步骤手动添加。

`触发`中的前置按键（Ctrl-C-C）是固定的，之后的按键可以自定义。

`执行`中，第二项Label只是一个显示标签，方便在列表中查看。

要获取第一项URL内容，可以通过以下步骤：

1. 打开浏览器，访问需要的页面（例如百度 https://baidu.com ）

2. 搜索`OneQuick`，此时浏览器的地址栏会发生改变，复制这个地址就是可执行的URL （例如 https://www.baidu.com/s?wd=OneQuick ）

注：某些网站在搜索后地址栏没有改变（地址中没有包含OneQuick），这样的网站无法通过链接传递参数，也就无法使用此功能。

![复制执行编辑器](/shot/cn-copy-editor.png){ data-zoomable .editor .img-shadow}

## 同时搜索多个网址 (Pro)

你可以通过添加分号分隔的网址，一次性打开多个网址。

例如：同时使用Google和百度搜索，可以在URL中填入：

```
https://google.com/search?q=OneQuick; https://www.baidu.com/s?wd=OneQuick
```

tip：在项目上使用右键菜单可以快速复制此项的链接。

## 参考

OneQuick所作的事情，就是用剪贴板的内容，替换执行命令中`%s`和`OneQuick`，然后执行结果。

如果想打开一个复制的网址，可以直接在执行命令中填入`%s`。

<style>
.editor {
  max-width: 400px;
}
</style>
