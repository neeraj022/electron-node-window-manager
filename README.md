# electron-node-window-manager

[node-window-manager](https://github.com/sentialx/node-window-manager) for Electron, with prebuilds.


## Limitations

- It only works for the latest Electron, currently version 15.
- It only works for macOS and windows, no Linux support.
- It only works for 64-bit OS, no 32-bit support.

The limitations above could be worked around, of course. 
Please fork this project and do it yourself. 


## Usage

```ts
import {windowManager} from 'electron-node-window-manager';

const window = windowManager.getActiveWindow();
console.log(window.getBounds());
```


## How to build the latest prebuilds

In any node.js project, install node-window-manager and make sure it works.

Find the prebuilds in ./node_modules/node-window-manager/build/Release/

You need to do it for all your target environment: macOS, Windows...etc.
