import {
	IHookFunctions,
	IWebhookFunctions,
	INodeType,
	INodeTypeDescription,
	IWebhookResponseData,
	NodeConnectionTypes,
	IHttpRequestMethods,
	IDataObject,
} from 'n8n-workflow';

export class SubmitraxTrigger implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'SubmitraX Trigger',
		name: 'submitraxTrigger',
		icon: { light: 'file:submitrax.svg', dark: 'file:submitrax.dark.svg' },
		group: ['trigger'],
		version: 1,
		usableAsTool: true,
		subtitle: '={{$parameter["formId"]}}',
		description: 'Starts the workflow when a SubmitraX form receives a submission',
		defaults: {
			name: 'SubmitraX Trigger',
		},
		inputs: [],
		outputs: [NodeConnectionTypes.Main],
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

	webhookMethods = {
		default: {
			async checkExists(this: IHookFunctions): Promise<boolean> {
				const webhookUrl = this.getNodeWebhookUrl('default');
				const formId = this.getNodeParameter('formId') as string;

				const endpoint = `https://s.submitrax.com/api/forms/${formId}/webhooks`;

				const response = await this.helpers.httpRequestWithAuthentication.call(
					this,
					'submitraxApi',
					{ method: 'GET' as IHttpRequestMethods, url: endpoint, json: true },
				) as { webhooks: Array<{ url: string }> };

				return (response.webhooks ?? []).some((w) => w.url === webhookUrl);
			},
			async create(this: IHookFunctions): Promise<boolean> {
				const webhookUrl = this.getNodeWebhookUrl('default');
				const formId = this.getNodeParameter('formId') as string;

				const endpoint = `https://s.submitrax.com/api/forms/${formId}/webhooks`;

				const options = {
					method: 'POST' as IHttpRequestMethods,
					body: {
						url: webhookUrl,
					},
					url: endpoint,
					json: true,
				};

				await this.helpers.httpRequestWithAuthentication.call(this, 'submitraxApi', options);

				return true;
			},
			async delete(this: IHookFunctions): Promise<boolean> {
				const webhookUrl = this.getNodeWebhookUrl('default');
				const formId = this.getNodeParameter('formId') as string;

				const endpoint = `https://s.submitrax.com/api/forms/${formId}/webhooks`;

				const options = {
					method: 'DELETE' as IHttpRequestMethods,
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

	async webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {
		const req = this.getRequestObject();
		return {
			workflowData: [
				this.helpers.returnJsonArray(req.body as unknown as IDataObject),
			],
		};
	}
}
