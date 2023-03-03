"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_1 = require("inversify");
const browser_1 = require("55tec_integration_lib/model/protocol/browser");
const path_1 = __importDefault(require("path"));
const ticket_service_1 = require("../services/ticket/ticket.service");
const auth_services_1 = require("../services/auth/auth.services");
const services_1 = __importDefault(require("../services"));
const customer_service_1 = require("../services/customer/customer.service");
const organization_service_1 = require("../services/organization/organization.service");
const container = new inversify_1.Container();
const channel = process;
container
    .bind(customer_service_1.CustomerService)
    .to(customer_service_1.CustomerService)
    .inSingletonScope();
container
    .bind(ticket_service_1.TicketService)
    .to(ticket_service_1.TicketService)
    .inSingletonScope();
container
    .bind(organization_service_1.OrganizationService)
    .to(organization_service_1.OrganizationService)
    .inSingletonScope();
container.bind(auth_services_1.AuthService).to(auth_services_1.AuthService).inSingletonScope();
container
    .bind(services_1.default)
    .to(services_1.default)
    .inRequestScope();
container
    .bind(browser_1.Client)
    .toConstantValue(new browser_1.Client(channel, path_1.default.join(__dirname, "../browser/func")));
exports.default = container;
//# sourceMappingURL=container.js.map