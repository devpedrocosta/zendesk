import "reflect-metadata";
import request from "request-promise";
import { URL } from "url";
import querystring from "querystring";

import { StatusCode } from "55tec_integration_lib/model/protocol";
import { Entity } from "55tec_integration_lib/model/metadata/action/entity";
import { Operation } from "55tec_integration_lib/model/metadata/action/operation";
import { Request} from '55tec_integration_lib/model/protocol/integrator/request';
import { Response, ResponseError } from '55tec_integration_lib/model/protocol/integrator/response';

export type Handler = (req: Request) => Promise<Response>;

export default abstract class Service {
    protected env = process.env;
    protected entity: Entity;
    protected operations: {[op in Operation]?: Handler} = {};

    constructor(entity?: Entity) {
        this.entity = !!entity ? entity : Entity.ANY;;
    }

    async request(url: string, method: "get" | "post" | "put" | "patch", body?: object) {

        if (body && method === "get") {
            let parsed = new URL(url);
            body = {
                ...querystring.parse(parsed.search),
                ...body
            };

            url = `${parsed.origin}${parsed.pathname}?${querystring.stringify(body as any)}${parsed.hash}`;
        }


        let result = await request({
            "rejectUnauthorized": true,
            "url": url,
            "method": method,
            "body": method !== "get" ? JSON.stringify(body) : undefined,
            "simple": false,
            "resolveWithFullResponse": true
        });
     
        if (("" + result.statusCode)[0] !== "2") throw new ResponseError(result.body, result.statusCode);
        if (!result.body) return {};
        if (typeof result.body === "string") return JSON.parse(result.body.trim() || "{}");

        return result.body;
    }

    supports(action: string): boolean {

        let [ entity, operation ] = action.split("/");

        if (entity !== this.entity) return false;

        return !!this.operations[operation as Operation];
    }

    async process(request: Request): Promise<Response> {

        let { action } = request;

        if (!this.supports(action)) throw new ResponseError(`Unsupported action: "${request.action}"`, StatusCode.NOT_FOUND);

        let [ , operation ] = action.split("/");

        return this.operations[operation as Operation]!(request);
    }

}

