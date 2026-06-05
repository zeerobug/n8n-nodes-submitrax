"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitraxTrigger = void 0;
const n8n_workflow_1 = require("n8n-workflow");
class SubmitraxTrigger {
    constructor() {
        this.description = {
            displayName: 'SubmitraX Trigger',
            name: 'submitraxTrigger',
            icon: { light: 'file:submitrax.svg', dark: 'file:submitrax.dark.svg' },
            group: ['trigger'],
            version: 1,
            subtitle: '={{$parameter["formId"]}}',
            description: 'Starts the workflow when a SubmitraX form receives a submission',
            defaults: {
                name: 'SubmitraX Trigger',
            },
            inputs: [],
            outputs: [n8n_workflow_1.NodeConnectionTypes.Main],
            credentials: [
                {
                    name: 'submitraxApi',
                    required: true,
                },
            ],
            webhooks: [
                {
                    name: 'default',
                    httpMethod: 'POST',
                    responseMode: 'onReceived',
                    path: 'webhook',
                },
            ],
            properties: [
                {
                    displayName: 'Form ID',
                    name: 'formId',
                    type: 'string',
                    required: true,
                    default: '',
                    description: 'The ID of the form to listen to',
                },
            ],
        };
        this.webhookMethods = {
            default: {
                async checkExists() {
                    return false;
                },
                async create() {
                    const webhookUrl = this.getNodeWebhookUrl('default');
                    const formId = this.getNodeParameter('formId');
                    const endpoint = `https://s.submitrax.com/api/forms/${formId}/webhooks`;
                    const options = {
                        method: 'POST',
                        body: {
                            url: webhookUrl,
                        },
                        url: endpoint,
                        json: true,
                    };
                    await this.helpers.httpRequestWithAuthentication.call(this, 'submitraxApi', options);
                    return true;
                },
                async delete() {
                    const webhookUrl = this.getNodeWebhookUrl('default');
                    const formId = this.getNodeParameter('formId');
                    const endpoint = `https://s.submitrax.com/api/forms/${formId}/webhooks`;
                    const options = {
                        method: 'DELETE',
                        body: {
                            url: webhookUrl,
                        },
                        url: endpoint,
                        json: true,
                    };
                    await this.helpers.httpRequestWithAuthentication.call(this, 'submitraxApi', options);
                    return true;
                },
            },
        };
    }
    async webhook() {
        const req = this.getRequestObject();
        return {
            workflowData: [
                this.helpers.returnJsonArray(req.body),
            ],
        };
    }
}
exports.SubmitraxTrigger = SubmitraxTrigger;
//# sourceMappingURL=SubmitraxTrigger.node.js.map