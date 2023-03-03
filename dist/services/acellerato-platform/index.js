"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const request_promise_1 = __importDefault(require("request-promise"));
const url_1 = require("url");
const querystring_1 = __importDefault(require("querystring"));
const protocol_1 = require("55tec_integration_lib/model/protocol");
const entity_1 = require("55tec_integration_lib/model/metadata/action/entity");
const response_1 = require("55tec_integration_lib/model/protocol/integrator/response");
class Service {
    constructor(entity) {
        this.env = process.env;
        this.operations = {};
        this.entity = !!entity ? entity : entity_1.Entity.ANY;
        ;
    }
    request(url, method, body) {
        return __awaiter(this, void 0, void 0, function* () {
            if (body && method === "get") {
                let parsed = new url_1.URL(url);
                body = Object.assign(Object.assign({}, querystring_1.default.parse(parsed.search)), body);
                url = `${parsed.origin}${parsed.pathname}?${querystring_1.default.stringify(body)}${parsed.hash}`;
            }
            let result = yield (0, request_promise_1.default)({
                "rejectUnauthorized": true,
                "url": url,
                "method": method,
                "body": method !== "get" ? JSON.stringify(body) : undefined,
                "simple": false,
                "resolveWithFullResponse": true
            });
            if (("" + result.statusCode)[0] !== "2")
                throw new response_1.ResponseError(result.body, result.statusCode);
            if (!result.body)
                return {};
            if (typeof result.body === "string")
                return JSON.parse(result.body.trim() || "{}");
            return result.body;
        });
    }
    supports(action) {
        let [entity, operation] = action.split("/");
        if (entity !== this.entity)
            return false;
        return !!this.operations[operation];
    }
    process(request) {
        return __awaiter(this, void 0, void 0, function* () {
            let { action } = request;
            if (!this.supports(action))
                throw new response_1.ResponseError(`Unsupported action: "${request.action}"`, protocol_1.StatusCode.NOT_FOUND);
            let [, operation] = action.split("/");
            return this.operations[operation](request);
        });
    }
}
exports.default = Service;
//# sourceMappingURL=index.js.map