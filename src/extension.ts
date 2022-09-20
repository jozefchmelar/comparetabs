// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
const path = require('path')

let commands = vscode.commands;
let activeEditor = vscode.window.activeTextEditor;

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(commands.registerCommand('compare.compareTabs',  diffCurrentWithSelected));
	context.subscriptions.push(commands.registerCommand('compare.swapComparedTabs',  swapComparedTabs));
}

function diffCurrentWithSelected(eventParams : any) {
	let uriCurrent = activeEditor?.document.uri;
	let fileNameCurrent = activeEditor!.document.fileName ;
	let titleCurrent= title(fileNameCurrent);

	let uriSelected = eventParams;
	let fileNameSelected = eventParams._fsPath;
	let titleSelected = title(fileNameSelected);

	commands.executeCommand('vscode.diff', uriCurrent, uriSelected , titleCurrent + '↔' + titleSelected );
}

function swapComparedTabs(eventParams : any) {
//todo	
}

function title(fileName:String) {
	let splitted = fileName.split(path.sep);
	return splitted[splitted.length-1];
}

export function deactivate() {}