"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formDescription = void 0;
const showForForm = { resource: ['form'] };
exports.formDescription = [
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
                name: 'Get HTML',
                value: 'getHtml',
                action: 'Get form HTML',
                description: 'Fetch the public HTML of a form by its key (no credential required)',
                routing: {
                    request: {
                        method: 'GET',
                        url: '=/forms/public/{{$parameter.formKey}}/html',
                        json: false,
                    },
                    output: {
                        postReceive: [
                            async function (_items, response) {
                                return [{ json: { html: response.body } }];
                            },
                        ],
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
            {
                name: 'Update',
                value: 'update',
                action: 'Update a form',
                description: 'Update an existing form',
                routing: {
                    request: {
                        method: 'PATCH',
                        url: '=/forms/{{$parameter.formId}}',
                    },
                },
            },
        ],
        default: 'getAll',
    },
    {
        displayName: 'Form ID',
        name: 'formId',
        type: 'string',
        required: true,
        default: '',
        displayOptions: { show: { resource: ['form'], operation: ['get', 'update'] } },
        description: 'The ID of the form',
    },
    {
        displayName: 'Form Key',
        name: 'formKey',
        type: 'string',
        required: true,
        default: '',
        displayOptions: { show: { resource: ['form'], operation: ['getHtml'] } },
        description: 'The public key of the form',
    },
    {
        displayName: 'Update Fields',
        name: 'updateFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions: { show: { resource: ['form'], operation: ['update'] } },
        options: [
            {
                displayName: 'Custom HTML',
                name: 'customHtml',
                type: 'string',
                typeOptions: { rows: 5 },
                default: '',
                description: 'Custom HTML content for the form',
                routing: {
                    send: {
                        type: 'body',
                        property: 'custom_html',
                    },
                },
            },
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
            {
                displayName: 'Name',
                name: 'name',
                type: 'string',
                default: '',
                description: 'The name of the form',
                routing: {
                    send: {
                        type: 'body',
                        property: 'name',
                    },
                },
            },
        ],
    },
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
                displayName: 'Custom HTML',
                name: 'customHtml',
                type: 'string',
                typeOptions: { rows: 5 },
                default: '',
                description: 'Custom HTML content for the form',
                routing: {
                    send: {
                        type: 'body',
                        property: 'custom_html',
                    },
                },
            },
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
//# sourceMappingURL=index.js.map