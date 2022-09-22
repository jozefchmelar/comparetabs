import * as vscode from 'vscode';
const path = require('path')

let commands = vscode.commands;
let  activeEditor = () => vscode.window.activeTextEditor!;
const compareSep = '↔';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(commands.registerCommand('compare.compareTabs', diffCurrentWithSelected));
	context.subscriptions.push(commands.registerCommand('compare.swapComparedTabs', swapComparedTabs));
}

function diffCurrentWithSelected(eventParams : any, another:any) {
	let uriCurrent = activeEditor()?.document.uri;
	let fileNameCurrent = activeEditor().document.fileName;
	let titleCurrent= title(fileNameCurrent);

	let uriSelected = eventParams;
	let fileNameSelected = eventParams._fsPath;
	let titleSelected = title(fileNameSelected);

	commands.executeCommand('vscode.diff', uriCurrent, uriSelected  );
}

function swapComparedTabs(eventParams : any,ohter:any) {
	const visibleEditors = vscode.window.visibleTextEditors;
	const opened = visibleEditors.length;
	const uri1 = visibleEditors[0].document.uri;
	const uri2 = visibleEditors[1].document.uri;
	vscode.commands.executeCommand("workbench.action.closeActiveEditor");
	vscode.commands.executeCommand("vscode.diff", uri2, uri1);
}

function title(fileName:String) {
	let splitted = fileName.split(path.sep);
	return splitted[splitted.length-1];
}

export function deactivate() {}