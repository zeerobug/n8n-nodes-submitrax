import type { INodeProperties } from 'n8n-workflow';

const showForForm = { resource: ['form'] };

export const formDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: showForForm },
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create a form',
				description: 'Create a new form in a workspace',
				routing: {
					request: {
						method: 'POST',
						url: '/forms',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a form',
				description: 'Get details of a specific form',
				routing: {
					request: {
						method: 'GET',
						url: '=/forms/{{$parameter.formId}}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many forms',
				description: 'Get many forms across',
				routing: {
					request: {
						method: 'GET',
						url: '/forms',
					},
				},
			},
		],
		default: 'getAll',
	},

	// --- Get ---
	{
		displayName: 'Form ID',
		name: 'formId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['form'], operation: ['get'] } },
		description: 'The ID of the form to retrieve',
	},

	// --- Create ---
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['form'], operation: ['create'] } },
		description: 'The name of the new form',
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
	{
		displayName: 'Workspace ID',
		name: 'workspaceId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['form'], operation: ['create'] } },
		description: 'The ID of the workspace this form belongs to',
		routing: {
			send: {
				type: 'body',
				property: 'workspace_id',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: { show: { resource: ['form'], operation: ['create'] } },
		options: [
			{
				displayName: 'Email To',
				name: 'emailTo',
				type: 'string',
				default: '',
				placeholder: 'alice@example.com,bob@example.com',
				description: 'Comma-separated email addresses to notify on submission',
				routing: {
					send: {
						type: 'body',
						property: 'email_to',
					},
				},
			},
		],
	},
];
