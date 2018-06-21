import * as fs from 'fs';
import * as path from 'path';
import * as childProcess from 'child_process';
import { commands, window, workspace, ExtensionContext, StatusBarItem } from 'vscode';

import PluginStatus from './PluginStatus';
import PluginSettings from './PluginSettings';
import PluginBuildList from './PluginBuildList';
import Git from './Git';
import { BuildStatus } from './GitBuild';

export default class GitBuildPlugin {
    private engine: ExtensionContext;
    private status: PluginStatus;
    private buildList: PluginBuildList;
    private settings: PluginSettings;
    private git: Git;

    constructor (engine: ExtensionContext) {
        this.engine = engine;
        
        const settingsPath = PluginSettings.findConfigInWorkspaces(workspace.workspaceFolders);

        this.settings = new PluginSettings(settingsPath);
        this.status = new PluginStatus();
        this.buildList = new PluginBuildList();
        this.git = new Git(Git.findRootGithubDir());

        this.settings.onError = (err) => window.showErrorMessage('Configuration file for Git build status plugin could not be parsed. Syntax error?');
        this.settings.onDelete = () => window.showErrorMessage('Configuration file removed. Disabling Git build status plugin.');
        this.settings.onLoaded.then(this.onSettingsLoaded.bind(this));

        commands.registerCommand('githubbuild.listBuilds', () => {
            this.buildList.show();
        });
    }

    private async onSettingsLoaded () {
        const statusUpdate = async (status) => {
            if (status !== this.status.status) {
                this.status.update(status);
            }
        };

        const requestUpdate = async () => {
            statusUpdate(BuildStatus.UNKNOWN);
            const { status, builds } = await this.git.getBuildStatus();

            if (builds.length === 0) {
                statusUpdate(BuildStatus.UNKNOWN);
                this.status.setHint('No builds available. Is the commit pushed to remote?');
            }
            else {
                statusUpdate(status);
                this.status.setHint('See available builds');
            }

            this.buildList.setList(builds);
        };

        if (this.settings.get('strictTls') === false) {
            process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
        }

        this.git.setCredentials({
            username: this.settings.get('username'),
            password: this.settings.get('password')
        });

        requestUpdate();
        
        this.git.onCommitChange = async () => {
            requestUpdate();
        };

        setInterval(requestUpdate, this.settings.get('pooling') * 1000);
    }
}
