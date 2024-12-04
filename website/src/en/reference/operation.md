---
title: Operation
---

Here list supported operation in OneQuick

## Simulate Hotkey

Use this operation to simulating hotkeys.

In OneQuick, the `Hotkey` has been enhanced, and the combination of keyboard and mouse is also a valid hotkey, such as the `Ctrl+Left Mouse Button` combination, which can also be simulated or listened to.

On the hotkey setting control, left click enters the input mode, and pressing the keyboard or mouse combination records the key; right click pops up the selection menu, where you can manually select the key.

## Run Command

Here you can set the command to execute, parameters, startup directory, and whether to run as an administrator.

With this option, you can integrate OneQuick with other programs.

## Send Text

This option allows you to output specified text to the current active window.

The `Input Phrase` feature is implemented using this function.

## Window Operation

These are operations on the **current active window**.

- Open App Location

    Open the program's location using File Explorer.

- Show App Info

    Display program information, including process ID, window title, program path, class name, version information, startup time, etc.

- Topmost: Toggle

    Toggle the current window to be always on top or not.

- Opacity: Increase/Decrease

    Increase or decrease the opacity of the current window.

    Note: Some windows may not support this feature, depending on the implementation of the target window.

- Window Maximize/Minimize/Close

- App Exit

## System Operation

Note that due to different operating system configurations, the behavior may vary. This is not a bug.

For example, on some laptops, the lock screen effect is the same as sleep, and some systems do not have a hibernate option.

- Keep Awake

    Keep the monitor on and prevent the system from entering sleep mode.

    When this feature is activated, a topmost prompt box will appear. To disable this feature, simply close the prompt box.

- Monitor Off
- Lock Screen
- Sleep
- Hibernate
- Reboot
- Shutdown

## Others

- \<Default>

Selecting this option is the same as not configuring anything. This option is for convenience in debugging and maintaining compatibility.

- Block (Do Nothing)

Selecting this option will capture the corresponding hotkey but will not perform any action, effectively blocking other programs from responding to this hotkey.

- Show OneQuick

Show or hide the OneQuick interface.
