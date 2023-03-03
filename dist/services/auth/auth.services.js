"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
require("reflect-metadata");
const inversify_1 = require("inversify");
const credential_1 = require("55tec_integration_lib/model/protocol/integrator/credential");
let AuthService = class AuthService {
    constructor() {
        this.requestBody = {};
        this.parserCredentials = (credentials) => {
            const credential = credentials === null || credentials === void 0 ? void 0 : credentials.find(c => c.type === credential_1.Type.BASIC);
            if (!credential)
                return '';
            return Buffer.from(`${credential.value.id}:${credential.value.secret}`).toString('base64');
        };
    }
    setRequest(requestBody) {
        this.requestBody = requestBody;
    }
    ;
    getToken() {
        var _a;
        return this.parserCredentials(((_a = this.requestBody) === null || _a === void 0 ? void 0 : _a.credentials) || []);
    }
};
AuthService = __decorate([
    (0, inversify_1.injectable)()
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.services.js.map