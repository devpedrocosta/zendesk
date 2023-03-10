"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.CustomerService = void 0;
require("reflect-metadata");
const inversify_1 = require("inversify");
const request_1 = __importDefault(require("../../util/request"));
const decorator_1 = require("55tec_integration_lib/model/metadata/decorator");
const http_method_enum_1 = require("../../util/http-method.enum");
const auth_services_1 = require("../auth/auth.services");
const customer_1 = require("../../models/customer");
const response_1 = require("55tec_integration_lib/model/protocol/integrator/response");
const protocol_1 = require("55tec_integration_lib/model/protocol");
const projection_1 = require("../../util/projection");
let CustomerService = class CustomerService {
    constructor(authService) {
        this.authService = authService;
    }
    getMetadata() {
        return (0, decorator_1.getMetadata)(new customer_1.Customer());
    }
    getCustomer(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `https://${ctx.opts.subdomain}.acelerato.com/api/publica/usuarios${(0, projection_1.getBycontext)(ctx.payload.data)}`;
            let result = yield (0, request_1.default)(url, http_method_enum_1.HttpMethod.GET, this.authService.getToken(), {});
            const itemListed = JSON.parse(result.body);
            if (itemListed === null || itemListed === void 0 ? void 0 : itemListed.errors) {
                throw new response_1.ResponseError(itemListed === null || itemListed === void 0 ? void 0 : itemListed.errors[0], protocol_1.StatusCode.FORBIDDEN);
            }
            return {
                data: (0, projection_1.bodyFormatResponse)(ctx, result),
                wwwRef: {
                    model: url,
                },
            };
        });
    }
    getListCustomer(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield (0, request_1.default)(`https://${ctx.opts.subdomain}.acelerato.com/api/publica/usuarios`, http_method_enum_1.HttpMethod.GET, this.authService.getToken(), {});
            const itemListed = JSON.parse(result.body);
            if (itemListed === null || itemListed === void 0 ? void 0 : itemListed.errors) {
                throw new response_1.ResponseError(itemListed === null || itemListed === void 0 ? void 0 : itemListed.errors[0], protocol_1.StatusCode.FORBIDDEN);
            }
            return {
                data: (0, projection_1.bodyFormatResponse)(ctx, result),
                pagination: ctx.payload.pagination,
            };
        });
    }
    createCustomer(ctx) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const url = `https://${ctx.opts.subdomain}.acelerato.com/api/publica/usuarios`;
            if (ctx.payload.telefones) {
                ctx.payload.telefones = [((_a = ctx === null || ctx === void 0 ? void 0 : ctx.payload) === null || _a === void 0 ? void 0 : _a.telefones) || ""];
            }
            const result = yield (0, request_1.default)(`${url}`, http_method_enum_1.HttpMethod.POST, this.authService.getToken(), ctx.payload);
            const itemSaved = JSON.parse(result.body);
            if (itemSaved === null || itemSaved === void 0 ? void 0 : itemSaved.errors) {
                throw new response_1.ResponseError(itemSaved === null || itemSaved === void 0 ? void 0 : itemSaved.errors[0], protocol_1.StatusCode.FORBIDDEN);
            }
            let resultFind = yield (0, request_1.default)(`https://${ctx.opts.subdomain}.acelerato.com/api/publica/usuarios?email=${ctx.payload.email}`, http_method_enum_1.HttpMethod.GET, this.authService.getToken(), {});
            const item = JSON.parse(resultFind.body);
            if (!item) {
                throw new response_1.ResponseError("Erro ao buscar usu??rio, tente mais tarde novamente", protocol_1.StatusCode.NOT_FOUND);
            }
            const xMax = Math.max(...Array.from(item, (o) => o.usuarioKey));
            const maxXObject = item.find((o) => o.usuarioKey === xMax);
            return {
                id: maxXObject.usuarioKey,
                wwwRef: {
                    model: url,
                },
            };
        });
    }
    updateCustomer(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            let { id } = ctx.payload;
            if (!id)
                throw new Error("ID not found");
            const url = `https://${ctx.opts.subdomain}.acelerato.com/api/publica/usuarios/${id}`;
            if (ctx.payload.telefones) {
                ctx.payload.telefones = [ctx.payload.telefones];
            }
            const result = yield (0, request_1.default)(`${url}`, http_method_enum_1.HttpMethod.PUT, this.authService.getToken(), ctx.payload);
            const itemUpdated = JSON.parse(result.body);
            if (itemUpdated === null || itemUpdated === void 0 ? void 0 : itemUpdated.errors) {
                throw new response_1.ResponseError(itemUpdated === null || itemUpdated === void 0 ? void 0 : itemUpdated.errors[0], protocol_1.StatusCode.FORBIDDEN);
            }
            return {
                id: id,
                wwwRef: {
                    model: url,
                },
            };
        });
    }
};
CustomerService = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(auth_services_1.AuthService)),
    __metadata("design:paramtypes", [auth_services_1.AuthService])
], CustomerService);
exports.CustomerService = CustomerService;
//# sourceMappingURL=customer.service.js.map