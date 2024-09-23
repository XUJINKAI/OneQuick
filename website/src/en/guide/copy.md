# Copy Run

> Perhaps "Quick Search" is a more suitable name

The basic usage is to select a piece of text, copy it twice (Ctrl-C-C), and then press the set hotkey to automatically open the search results page.

![Copy Run](/shot/en-copy.png){ data-zoomable .img-shadow}

## Adding Custom Items

The pre-key (Ctrl-C-C) is fixed, and the subsequent keys can be customized.

In `Operation`, the second item Label is just a display label for easy viewing in the list.

To get the URL content for the first item, you can follow these steps:

1. Open the browser and visit the required page (e.g. https://google.com)

2. Search for a term, such as `OneQuick`, and the browser's address bar will change. Copy this address (e.g., https://www.google.com/search?q=OneQuick)

3. Replace `OneQuick` with `%s` to get the executable URL (e.g., https://www.google.com/search?q=%s)

![Copy Run Editor](/shot/en-copy-editor.png){ data-zoomable .editor .img-shadow}

## Reference

What OneQuick does is replace `%s` in the execution command with the clipboard content, and then execute the result as a command line.

For example, if you set the execution command to `%s` and copy a command line, you can quickly execute this command.

<style>
.editor {
  max-width: 400px;
}
</style>
