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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AceleratoService = void 0;
const inversify_1 = require("inversify");
const browser_1 = require("55tec_integration_lib/model/protocol/browser");
const service_1 = require("55tec_integration_lib/service");
const ticket_service_1 = require("./ticket/ticket.service");
const customer_service_1 = require("./customer/customer.service");
const organization_service_1 = require("./organization/organization.service");
let AceleratoService = class AceleratoService {
    constructor(ticketService, customerService, organizationService, browserClient) {
        this.ticketService = ticketService;
        this.customerService = customerService;
        this.organizationService = organizationService;
        this.browserClient = browserClient;
    }
    chooseEvent(info) {
        return __awaiter(this, void 0, void 0, function* () {
            let ctx = new service_1.Context(info);
            const [entity, operation] = info.action.split("/");
            if (entity === "functions") {
                return this.browserClient.load(operation);
            }
            switch (info.action) {
                case "incidents/get-metadata":
                    return this.ticketService.getMetadata();
                case "incidents/create":
                    return yield this.ticketService.createTicket(ctx);
                case "incidents/update":
                    return yield this.ticketService.updateTicket(ctx);
                case "incidents/find":
                    return yield this.ticketService.getTicketsByid(ctx);
                case "incidents/list":
                    return yield this.ticketService.getTicketsList(ctx);
                case "incidents/attachment":
                    return yield this.ticketService.sendFileForTicket(ctx);
                case "customers/get-metadata":
                    return this.customerService.getMetadata();
                case "customers/create":
                    return yield this.customerService.createCustomer(ctx);
                case "customers/update":
                    return yield this.customerService.updateCustomer(ctx);
                case "customers/find":
                    return yield this.customerService.getCustomer(ctx);
                case "customers/list":
                    return yield this.customerService.getListCustomer(ctx);
                case "companies/get-metadata":
                    return this.organizationService.getMetadata();
                case "companies/create":
                    return yield this.organizationService.createOrganization(ctx);
                case "companies/update":
                    return yield this.organizationService.updateOrganization(ctx);
                case "companies/find":
                    return yield this.organizationService.getOrganizationsByid(ctx);
                case "companies/list":
                    return yield this.organizationService.getListOrganizations(ctx);
                default:
                    throw new Error(`Não foi registrada nenhuma ação para o id informado: ${info.action}`);
            }
        });
    }
};
AceleratoService = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(ticket_service_1.TicketService)),
    __param(1, (0, inversify_1.inject)(customer_service_1.CustomerService)),
    __param(2, (0, inversify_1.inject)(organization_service_1.OrganizationService)),
    __param(3, (0, inversify_1.inject)(browser_1.Client)),
    __metadata("design:paramtypes", [ticket_service_1.TicketService,
        customer_service_1.CustomerService,
        organization_service_1.OrganizationService,
        browser_1.Client])
], AceleratoService);
exports.AceleratoService = AceleratoService;
exports.default = AceleratoService;
//# sourceMappingURL=index.js.map