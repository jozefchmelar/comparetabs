// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	context.globalState.get("accessor");
 	let compareTabs = vscode.commands.registerCommand(  'compare.compareTabs',  async (eventParams) => {
		var uriCurrent = vscode.window.activeTextEditor?.document.uri;
		var uriSelected = eventParams
        vscode.commands.executeCommand('vscode.diff', uriCurrent, uriSelected , 'diff');
	});
	context.subscriptions.push(compareTabs);
}

// this method is called when your extension is deactivated
export function deactivate() {}
