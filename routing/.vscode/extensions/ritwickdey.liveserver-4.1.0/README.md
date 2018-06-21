# Live Server


**Boom! Big Announcement! Live Server is now supported for dynamic pages like PHP. [Check Here for more details](https://github.com/ritwickdey/live-server-web-extension).**

***[If you're facing 'command not found error', please follow the steps [#78](https://github.com/ritwickdey/vscode-live-server/issues/78)]***

[![VSCode Marketplace](https://img.shields.io/vscode-marketplace/v/ritwickdey.LiveServer.svg?style=flat-square&label=vscode%20marketplace)](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) [![Total Installs](https://img.shields.io/vscode-marketplace/d/ritwickdey.LiveServer.svg?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) [![Avarage Rating](https://img.shields.io/vscode-marketplace/r/ritwickdey.LiveServer.svg?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)  
[![Travis branch](https://img.shields.io/travis/ritwickdey/vscode-live-server/master.svg?style=flat-square&label=travis%20branch)](https://travis-ci.org/ritwickdey/vscode-live-server) [![Appveyor branch](https://img.shields.io/appveyor/ci/ritwickdey/vscode-live-server.svg?style=flat-square&label=appveyor%20branch)](https://ci.appveyor.com/project/ritwickdey/vscode-live-server) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/ritwickdey/vscode-live-server/) 
<br>

**Launch a development local Server with live reload feature for static & dynamic pages.**
<br>

![Live Server Demo VSCode](https://github.com/ritwickdey/vscode-live-server/raw/master/./images/Screenshot/vscode-live-server-animated-demo.gif)

## Shortcuts to Start/Stop Server

**_[NOTE: In case if you don't have any `.html` or `.htm` file in your workspace then you have to follow method no 4 & 5 to start server.]_**

1. Open a project and directly click to `Go Live` from StatusBar to turn on/off the server. 
![Go Live Control Preview](https://github.com/ritwickdey/vscode-live-server/raw/master/./images/Screenshot/vscode-live-server-statusbar-3.jpg)

2. Right click on a `HTML` file from Explorer Window & click to `Open with Live Server`. ![Explorer Window Control](https://github.com/ritwickdey/vscode-live-server/raw/master/./images/Screenshot/vscode-live-server-explorer-menu-demo-1.gif).

3. Open a HTML file and Right click on the editor and choose the options.
![Edit Menu Option Preview](https://github.com/ritwickdey/vscode-live-server/raw/master/./images/Screenshot/vscode-live-server-editor-menu-3.jpg)

4. Hit `(alt+L, alt+O)` to Open the Server and `(alt+L, alt+C)` to Stop the server (You can change the shortcut form keybinding). *[On MAC, `cmd+L, cmd+O` and `cmd+L, cmd+C`]*

5. Press `F1` or `ctrl+shift+P` and type `Live Server: Open With Live Server ` to start a server or type `Live Server: Stop Live Server` to stop a server.


## Features
* A Quick Development Live Server with live browser reload.
* Start or Stop server by a single click from status bar.
* Open a HTML file to browser from Explorer menu.[[Quick Gif Demo](https://github.com/ritwickdey/vscode-live-server/blob/master/./images/Screenshot/vscode-live-server-explorer-menu-demo-1.gif?raw=true)].
* Support for excluding files for change detection. 
* Hot Key control.
* Customizable Port Number, Server Root, default browser.
* Support for any browser _(Eg: Firefox Nightly)_ using advance Command Line.
* Support for Chrome Debugging Attachment (_[More Info](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)_). [[Quick Gif Demo](https://github.com/ritwickdey/vscode-live-server/blob/master/./images/Screenshot/ChromeDebugging.gif?raw=true)].
* Remote Connect through WLAN (E.g.: Connect with mobile) _[Need Help? See FAQ Section]_
* Use preferable host name *(localhost or 127.0.0.1)*.
* Customizable Supporting Tag for Live Reload feature. (Default is `Body` or `head`)
* SVG Support
* `https` Support. 
* Support for proxy.
* CORS Enabled
* Support for any file even dynamic pages through *[Live Server Web Extension](https://github.com/ritwickdey/live-server-web-extension)*.

## Installation
Open VSCode Editor and Press `ctrl+P`, type `ext install ritwickdey.liveserver`.

## Settings
All settings are now listed here  [Settings Docs](https://github.com/ritwickdey/vscode-live-server/blob/master/./docs/settings.md).

## FAQs
*All FAQs are now listed here [FAQ Docs](https://github.com/ritwickdey/vscode-live-server/blob/master/./docs/faqs.md)*

## What's new ?
* ### Version 4.1.0 (05.06.18)
  * Keybinding has been changed to `alt+L, alt+O` & `alt+L, alt+C` for Windows/Linux &  `cmd+L, cmd+O` & `cmd+L, cmd+C` for MAC . [[#121](https://github.com/ritwickdey/vscode-live-server/pull/121)] *(Thanks [Joydip Roy](https://github.com/rjoydip))*

  * `Stop Live Server` options is added in editor-context menu. 
  
  * Live Sever Icon is refreshed [[#144](https://github.com/ritwickdey/vscode-live-server/pull/144)] *(Thanks [Pluwen](https://github.com/pluwen))*
  
  * TypeScript files are now in default ignore list. [[#125](https://github.com/ritwickdey/vscode-live-server/pull/125)] *(Thanks [Ryan Naddy](https://github.com/TheColorRed))*

## Changelog
To check full changelog [click here](https://github.com/ritwickdey/vscode-live-server/blob/master/CHANGELOG.md).


## Special Thanks To Maintainers
A special thanks to [Max Schmitt](https://github.com/mxschmitt)  & [Joydip Roy](https://github.com/rjoydip) for contributing their valueable times on this project.

[![Max Schmitt](https://avatars2.githubusercontent.com/u/17984549?s=64)](https://github.com/mxschmitt)
[![Joydip Roy](https://avatars2.githubusercontent.com/u/15318294?s=64)](https://github.com/rjoydip)


## LICENSE
This extension is licensed under the [MIT License](https://github.com/ritwickdey/vscode-live-server/blob/master/LICENSE)
