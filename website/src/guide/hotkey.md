# 多步热键

在这里，您可以自由搭配按键组合，触发的条件，和执行的动作。

![多步热键](/shot/cn-hotkey.png){ data-zoomable .img-shadow }

## 触发条件

触发条件有三个栏位，分别是程序名、窗口标题，和电脑名。

- 程序名可以省略.exe后缀，支持星号*通配符，且不区分大小写。
- 窗口标题无需完全匹配，只要包含其中的文本即可。
- 计算机名则必须完全匹配，您可以去系统设置中查看，程序也会默认显示。

这三者是`且`的关系，必须同时满足（空着不填代表都行）。  
其中每一项是`或`的关系，可以使用英文分号`;`分隔，或添加双引号包裹含有空格的项目。

![多步热键编辑器](/shot/cn-hotkey-editor.png){ data-zoomable .editor .img-shadow }

以图中配置举例，只有在当前程序是vscode或Visual Studio时，并且窗口标题包含`OneQuick`，才会触发。

## 执行动作

关于可执行动作的列表，可以参考[执行项](/reference/operation)。

<style>
.editor {
  max-width: 400px;
}
</style>
