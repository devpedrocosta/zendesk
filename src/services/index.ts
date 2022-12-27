import { inject, injectable } from "inversify";
import {
  Request,
  Body as RequestBody,
} from "55tec_integration_lib/model/protocol/integrator/request";
import { Client as BrowserClient } from "55tec_integration_lib/model/protocol/browser";
import { Context } from "55tec_integration_lib/service";
import { LeadsService } from "./leads/leads.service";
import { CustomerService } from "./customer/customer.service";
import { OrganizationService } from "./organization/organization.service";

@injectable()
export class ZendeskService {
  constructor(
    @inject(LeadsService) private readonly ticketService: LeadsService,
    @inject(CustomerService) private readonly customerService: CustomerService,
    @inject(OrganizationService)
    private readonly organizationService: OrganizationService,
    @inject(BrowserClient) private readonly browserClient: BrowserClient
  ) {}

  public async chooseEvent(info: Request | any) {
    let ctx = new Context(info);

    const [entity, operation] = info.action.split("/");

    if (entity === "functions") {
      return this.browserClient.load(operation);
    }

    switch (info.action) {
      case "incidents/get-metadata":
        return this.ticketService.getMetadata();

      case "incidents/create":
        return await this.ticketService.createTicket(ctx);

      case "incidents/update":
        return await this.ticketService.updateTicket(ctx);

      case "incidents/find":
        return await this.ticketService.getTicketsByid(ctx);

      case "incidents/attachment":
        return await this.ticketService.sendFileForTicket(ctx);

      case "customers/get-metadata":
        return this.customerService.getMetadata();

      case "customers/create":
        return await this.customerService.createCustomer(ctx);

      case "customers/update":
        return await this.customerService.updateCustomer(ctx);

      case "customers/find":
        return await this.customerService.getCustomer(ctx);

      case "organizations/get-metadata":
        return this.organizationService.getMetadata();
      case "organizations/create":
        return await this.organizationService.createOrganization(ctx);

      case "organizations/update":
        return await this.organizationService.updateOrganization(ctx);

      case "organizations/find":
        return await this.organizationService.getOrganizationsByid(ctx);

      default:
        throw new Error(
          `Não foi registrada nenhuma ação para o id informado: ${info.action}`
        );
    }
  }
}

export default ZendeskService;
