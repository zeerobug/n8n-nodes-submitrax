"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitraxApi = void 0;
class SubmitraxApi {
    constructor() {
        this.name = 'submitraxApi';
        this.displayName = 'SubmitraX API';
        this.icon = 'file:../nodes/Submitrax/submitrax.svg';
        this.documentationUrl = 'https://github.com/org/n8n-nodes-submitrax?tab=readme-ov-file#credentials';
        this.properties = [
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
        this.authenticate = {
            type: 'generic',
            properties: {
                headers: {
                    Authorization: '=Bearer {{$credentials.apiToken}}',
                },
            },
        };
        this.test = {
            request: {
                baseURL: 'https://s.submitrax.com/api',
                url: '/workspaces',
                method: 'GET',
            },
        };
    }
}
exports.SubmitraxApi = SubmitraxApi;
//# sourceMappingURL=SubmitraxApi.credentials.js.map