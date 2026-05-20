import type { INodeProperties } from 'n8n-workflow';

const showForExport = { resource: ['export'] };

export const exportDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: showForExport },
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create an export',
				description: 'Generate an export file for a form\'s submissions',
				routing: {
					request: {
						method: 'POST',
						url: '=/exports/form/{{$parameter.formId}}',
					},
				},
			},
		],
		default: 'create',
	},

	// --- Create ---
	{
		displayName: 'Form ID',
		name: 'formId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['export'], operation: ['create'] } },
		description: 'The ID of the form to export submissions from',
	},
	{
		displayName: 'Format',
		name: 'format',
		type: 'options',
		required: true,
		default: 'csv',
		displayOptions: { show: { resource: ['export'], operation: ['create'] } },
		options: [
			{
				name: 'CSV',
				value: 'csv',
				description: 'Export as a CSV file (opens in Excel or Google Sheets)',
			},
			{
				name: 'JSON',
				value: 'json',
				description: 'Export as a JSON file',
			},
		],
		description: 'The file format for the export',
		routing: {
			send: {
				type: 'body',
				property: 'format',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: { show: { resource: ['export'], operation: ['create'] } },
		options: [
			{
				displayName: 'End Date',
				name: 'endDate',
				type: 'string',
				default: '',
				placeholder: 'YYYY-MM-DD',
				description: 'Only include submissions on or before this date',
				routing: {
					send: {
						type: 'body',
						property: 'end_date',
					},
				},
			},
			{
				displayName: 'Start Date',
				name: 'startDate',
				type: 'string',
				default: '',
				placeholder: 'YYYY-MM-DD',
				description: 'Only include submissions on or after this date',
				routing: {
					send: {
						type: 'body',
						property: 'start_date',
					},
				},
			},
		],
	},
];
