# 复制搜索

基础用法是，选中一段文字，复制两次（Ctrl-C-C），然后按设定的热键，则自动打开搜索结果页。

![复制执行](/shot/cn-copy.png){ data-zoomable .img-shadow}

## 添加自定义项

`触发`中的前置按键（Ctrl-C-C）是固定的，之后的按键可以自定义。

`执行`中，第二项Label只是一个显示标签，方便在列表中查看。

要获取第一项URL内容，可以通过以下步骤：

1. 打开浏览器，访问需要的页面（例如百度 https://baidu.com ）

2. 搜索一个词，例如`OneQuick`，这时浏览器的地址栏会发生改变，复制这个地址 （例如 https://www.baidu.com/s?wd=OneQuick ）

3. 替换其中的`OneQuick`为`%s`，得到的就是可执行的URL （例如 https://www.baidu.com/s?wd=%s ）

![复制执行编辑器](/shot/cn-copy-editor.png){ data-zoomable .editor .img-shadow}

## 参考

OneQuick所作的事情，就是用剪贴板的内容，替换执行命令中`%s`，然后把结果当作一条命令行执行。

例如，如果你把执行的命令设置为`%s`，并复制一行命令行，也可以做到快速执行此命令。

<style>
.editor {
  max-width: 400px;
}
</style>
