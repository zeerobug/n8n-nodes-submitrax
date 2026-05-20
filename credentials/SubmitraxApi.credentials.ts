import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class SubmitraxApi implements ICredentialType {
	name = 'submitraxApi';

	displayName = 'SubmitraX API';

	icon = 'file:../nodes/Submitrax/submitrax.svg' as const;

	documentationUrl = 'https://github.com/org/n8n-nodes-submitrax?tab=readme-ov-file#credentials';

	properties: INodeProperties[] = [
		{
			displayName: 'API Token',
			name: 'apiToken',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
			placeholder: 'sk_a1b2c3d4e5f6...',
			description: 'API token generated from your SubmitraX workspace settings',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.apiToken}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://s.submitrax.com/api',
			url: '/workspaces',
			method: 'GET',
		},
	};
}
