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
const _55tec_integration_lib_1 = require("55tec_integration_lib");
const protocol_1 = require("55tec_integration_lib/model/protocol");
const container_1 = __importDefault(require("./boot/container"));
const response_1 = require("55tec_integration_lib/model/protocol/integrator/response");
const auth_services_1 = require("./services/auth/auth.services");
const services_1 = __importDefault(require("./services"));
let channel = process;
(0, _55tec_integration_lib_1.listen)(channel, (request) => __awaiter(void 0, void 0, void 0, function* () {
    if (!request.body)
        throw new response_1.ResponseError("Cannot process a request without a body", protocol_1.StatusCode.BAD_REQUEST);
    const instance = container_1.default.get(auth_services_1.AuthService);
    instance.setRequest(request.body);
    return yield container_1.default.get(services_1.default).chooseEvent(request);
}));
//# sourceMappingURL=index.js.map