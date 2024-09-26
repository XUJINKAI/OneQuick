# Input Phrase

> Perhaps it should be renamed to "Quick Input"

If you have some content that you frequently need to input, such as email, addresses, technical terms, fixed phrases, or AI prompts, then this feature is perfect for you.

Simply type the set `input item` on the keyboard, and the program will automatically replace it with the `output item`.

![Phrase](/shot/en-phrase.png){ data-zoomable .img-shadow }

For example, in the settings shown above, typing `,,g` will automatically be replaced with `your-email-address@gmail.com`.

<!-- ![Old Interface](/feature/replace-phrase.gif){ data-zoomable .img-shadow } -->

### Output Item Rules

Output items can be any characters, including Chinese, Emoji, etc.

However, it currently cannot output newline characters.

In addition to outputting fixed text, there are some advanced usages:

- Text starting with `dt:` will be formatted using the current time.
- Text starting with `::` will output the subsequent text as is.

For example:
- `dt:` will output `2024/9/26 Thursday 11:39:41`
- `dt:yyyy-MM-dd HH:mm:ss.fff` will output `2024-09-26 11:43:31.140`
- `dt:Today is yyyy-MM-dd` will output `Today is 2024-09-26`

The formatting string after `dt:` can refer to [DateTime.ToString](https://learn.microsoft.com/en-us/dotnet/standard/base-types/custom-date-and-time-format-strings).

### Input Limitations

OneQuick can infer which English symbols are pressed based on your keystrokes, but it cannot obtain information you input through an IME (Input Method Editor) for Chinese or other languages.

Therefore, input items can only be English characters.

Additionally, input items cannot contain special characters such as newline or tab characters.
