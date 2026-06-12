"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Submitrax = void 0;
const n8n_workflow_1 = require("n8n-workflow");
const workspace_1 = require("./resources/workspace");
const form_1 = require("./resources/form");
const submission_1 = require("./resources/submission");
const export_1 = require("./resources/export");
const member_1 = require("./resources/member");
class Submitrax {
    constructor() {
        this.description = {
            displayName: 'SubmitraX',
            name: 'submitrax',
            icon: { light: 'file:submitrax.svg', dark: 'file:submitrax.dark.svg' },
            group: ['output'],
            version: 1,
            subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
            description: 'Manage forms, submissions, workspaces, exports, and members via the SubmitraX API',
            defaults: {
                name: 'SubmitraX',
            },
            usableAsTool: true,
            inputs: [n8n_workflow_1.NodeConnectionTypes.Main],
            outputs: [n8n_workflow_1.NodeConnectionTypes.Main],
            credentials: [{ name: 'submitraxApi', required: false }],
            requestDefaults: {
                baseURL: 'https://s.submitrax.com/api',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            },
            properties: [
                {
                    displayName: 'Resource',
                    name: 'resource',
                    type: 'options',
                    noDataExpression: true,
                    options: [
                        { name: 'Export', value: 'export' },
                        { name: 'Form', value: 'form' },
                        { name: 'Member', value: 'member' },
                        { name: 'Submission', value: 'submission' },
                        { name: 'Workspace', value: 'workspace' },
                    ],
                    default: 'form',
                },
                ...workspace_1.workspaceDescription,
                ...form_1.formDescription,
                ...submission_1.submissionDescription,
                ...export_1.exportDescription,
                ...member_1.memberDescription,
            ],
        };
    }
}
exports.Submitrax = Submitrax;
//# sourceMappingURL=Submitrax.node.js.map