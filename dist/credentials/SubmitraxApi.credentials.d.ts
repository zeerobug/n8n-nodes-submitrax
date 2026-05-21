import type { IAuthenticateGeneric, ICredentialTestRequest, ICredentialType, INodeProperties } from 'n8n-workflow';
export declare class SubmitraxApi implements ICredentialType {
    name: string;
    displayName: string;
    icon: "file:../nodes/Submitrax/submitrax.svg";
    documentationUrl: string;
    properties: INodeProperties[];
    authenticate: IAuthenticateGeneric;
    test: ICredentialTestRequest;
}
