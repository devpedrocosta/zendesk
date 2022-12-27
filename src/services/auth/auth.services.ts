
import "reflect-metadata";
import { injectable } from 'inversify';

import { Body as RequestBody } from "55tec_integration_lib/model/protocol/integrator/request";
import { Credential, Type as CredentialType } from '55tec_integration_lib/model/protocol/integrator/credential';
@injectable()
export class AuthService {

    public requestBody: RequestBody = {};

    public setRequest(requestBody: RequestBody) {
        this.requestBody = requestBody;
    };

    public getToken(): any {
        return this.parserCredentials(this.requestBody?.credentials || []);
    }

    private parserCredentials = (credentials: Credential[]): string => {
        const credential = credentials?.find(c => c.type === CredentialType.BASIC);
        if (!credential) return '';
        return Buffer.from(`${credential.value.id}:${credential.value.secret}`).toString('base64')
      }

}