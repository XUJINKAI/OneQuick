# Multi-Hotkey

Here, you can freely combine key combinations, trigger conditions, and execution actions.

![Multi-Hotkey](/shot/en-hotkey.png){ data-zoomable .img-shadow }

## Trigger Condition

There are three fields for trigger conditions: program name, window title, and computer name.

- The program name can omit the .exe suffix, supports asterisk * wildcard, and is case-insensitive.
- The window title does not need to match completely, as long as it contains the text.
- The computer name must match exactly. You can check it in the system settings, and the program will display it by default.

These three fields have an `AND` relationship, meaning all must be satisfied (leaving them blank means any value is acceptable).  
Each field has an `OR` relationship, which can be separated by a semicolon `;` or enclosed in double quotes for items with spaces.

![Multi-Hotkey Editor](/shot/en-hotkey-editor.png){ data-zoomable .editor .img-shadow }

For example, in the configuration shown, the hotkey will only trigger if the current program is vscode or Visual Studio, and the window title contains `OneQuick`.

## Execution Actions

For a list of executable actions, refer to [Operation](/en/reference/operation).

<style>
.editor {
  max-width: 400px;
}
</style>
