"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.submissionDescription = void 0;
const showForSubmission = { resource: ['submission'] };
exports.submissionDescription = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: { show: showForSubmission },
        options: [
            {
                name: 'Get Many',
                value: 'getAll',
                action: 'Get many submissions',
                description: 'Get many submissions for a specific form',
                routing: {
                    request: {
                        method: 'GET',
                        url: '=/submissions/form/{{$parameter.formId}}',
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
        displayOptions: { show: { resource: ['submission'], operation: ['getAll'] } },
        description: 'The ID of the form whose submissions to retrieve',
    },
];
//# sourceMappingURL=index.js.map