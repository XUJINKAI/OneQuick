# Copy Search

The basic usage is to select a piece of text, copy it twice (Ctrl-C-C), and then press the set hotkey to automatically open the search results page.

![Copy Run](/shot/en-copy.png){ data-zoomable .img-shadow}

## Adding Custom Items

You can add URLs through the `Preset` dropdown menu or manually add them by following these steps.

The pre-key (Ctrl-C-C) is fixed, and the subsequent keys can be customized.

In `Operation`, the second item Label is just a display label for easy viewing in the list.

To get the URL content for the first item, you can follow these steps:

1. Open the browser and visit the required page (e.g. https://google.com)

2. Search `OneQuick`, and the browser's address bar will change, Copy this address as executable URL (e.g., https://www.google.com/search?q=OneQuick)

Note: Some websites do not change the address bar after searching (the address does not contain OneQuick), so these websites cannot pass parameters through the link and cannot use this feature.

![Copy Run Editor](/shot/en-copy-editor.png){ data-zoomable .editor .img-shadow}

## Batch Searching (Pro)

You can open multiple websites at once by adding semicolon-separated URLs.

For example: To search Google and Baidu simultaneously, you can enter the following URLs:

```
https://google.com/search?q=OneQuick; https://www.baidu.com/s?wd=OneQuick
```

tip: Right-click the item to quickly copy the URL of this item.

## Reference

What OneQuick does is replace `%s` or `OneQuick` in the URL with the clipboard content, and then execute the result.

If you want to open a copied URL, you can directly enter `%s` in the execution URL.

<style>
.editor {
  max-width: 400px;
}
</style>
