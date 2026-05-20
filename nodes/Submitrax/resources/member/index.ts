import type { INodeProperties } from 'n8n-workflow';

const showForMember = { resource: ['member'] };

export const memberDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: showForMember },
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many members',
				description: 'Get many members of a workspace',
				routing: {
					request: {
						method: 'GET',
						url: '=/members/{{$parameter.workspaceId}}/members',
					},
				},
			},
			{
				name: 'Invite',
				value: 'invite',
				action: 'Invite a member',
				description: 'Invite a new user to a workspace',
				routing: {
					request: {
						method: 'POST',
						url: '=/members/{{$parameter.workspaceId}}/members/invite',
					},
				},
			},
		],
		default: 'getAll',
	},

	// --- Get Many ---
	{
		displayName: 'Workspace ID',
		name: 'workspaceId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['member'], operation: ['getAll'] } },
		description: 'The ID of the workspace to list members for',
	},

	// --- Invite ---
	{
		displayName: 'Workspace ID',
		name: 'workspaceId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['member'], operation: ['invite'] } },
		description: 'The ID of the workspace to invite the member to',
	},
	{
		displayName: "Invitee's Name",
		name: 'theirName',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['member'], operation: ['invite'] } },
		description: 'Full name of the person being invited',
		routing: {
			send: {
				type: 'body',
				property: 'theirName',
			},
		},
	},
	{
		displayName: "Invitee's Email",
		name: 'theirEmail',
		type: 'string',
		required: true,
		default: '',
		placeholder: 'name@email.com',
		displayOptions: { show: { resource: ['member'], operation: ['invite'] } },
		description: 'Email address of the person being invited',
		routing: {
			send: {
				type: 'body',
				property: 'theirEmail',
			},
		},
	},
	{
		displayName: 'Your Name',
		name: 'yourName',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['member'], operation: ['invite'] } },
		description: 'Your name as it will appear in the invitation email',
		routing: {
			send: {
				type: 'body',
				property: 'yourName',
			},
		},
	},
];
