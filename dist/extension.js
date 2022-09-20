/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 1:
/***/ ((module) => {

module.exports = require("vscode");

/***/ }),

/***/ 7:
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = __webpack_require__(1);
const path = __webpack_require__(7);
let commands = vscode.commands;
let activeEditor = vscode.window.activeTextEditor;
function activate(context) {
    context.subscriptions.push(commands.registerCommand('compare.compareTabs', diffCurrentWithSelected));
    context.subscriptions.push(commands.registerCommand('compare.swapComparedTabs', swapComparedTabs));
}
exports.activate = activate;
function diffCurrentWithSelected(eventParams) {
    let uriCurrent = activeEditor?.document.uri;
    let fileNameCurrent = activeEditor.document.fileName;
    let titleCurrent = title(fileNameCurrent);
    let uriSelected = eventParams;
    let fileNameSelected = eventParams._fsPath;
    let titleSelected = title(fileNameSelected);
    commands.executeCommand('vscode.diff', uriCurrent, uriSelected, titleCurrent + '↔' + titleSelected);
}
function swapComparedTabs(eventParams) {
    //todo	
}
function title(fileName) {
    let splitted = fileName.split(path.sep);
    return splitted[splitted.length - 1];
}
function deactivate() { }
exports.deactivate = deactivate;

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=extension.js.map