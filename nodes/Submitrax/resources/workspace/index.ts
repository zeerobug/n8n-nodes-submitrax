import type { INodeProperties } from 'n8n-workflow';

const showForWorkspace = { resource: ['workspace'] };

export const workspaceDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: showForWorkspace },
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create a workspace',
				description: 'Create a new workspace',
				routing: {
					request: {
						method: 'POST',
						url: '/workspaces',
					},
				},
			},
			{
				name: 'Generate Token',
				value: 'generateToken',
				action: 'Generate an API token',
				description: 'Generate a new API token for a workspace (invalidates previous token)',
				routing: {
					request: {
						method: 'POST',
						url: '=/workspaces/{{$parameter.workspaceId}}/token',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many workspaces',
				description: 'Return many workspaces you own or are a member of',
				routing: {
					request: {
						method: 'GET',
						url: '/workspaces',
					},
				},
			},
		],
		default: 'getAll',
	},

	// --- Create ---
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['workspace'], operation: ['create'] } },
		description: 'The name of the new workspace',
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},

	// --- Generate Token ---
	{
		displayName: 'Workspace ID',
		name: 'workspaceId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['workspace'], operation: ['generateToken'] } },
		description: 'The ID of the workspace to generate a token for',
	},
];
