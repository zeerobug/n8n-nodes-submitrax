import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { workspaceDescription } from './resources/workspace';
import { formDescription } from './resources/form';
import { submissionDescription } from './resources/submission';
import { exportDescription } from './resources/export';
import { memberDescription } from './resources/member';

export class Submitrax implements INodeType {
	description: INodeTypeDescription = {
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
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'submitraxApi',
				required: true,
				displayOptions: {
					hide: {
						resource: ['form'],
						operation: ['getHtml'],
					},
				},
			},
		],
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
			...workspaceDescription,
			...formDescription,
			...submissionDescription,
			...exportDescription,
			...memberDescription,
		],
	};
}
