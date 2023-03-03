import { inject, injectable } from "inversify";
import {
  Request,
  Body as RequestBody,
} from "55tec_integration_lib/model/protocol/integrator/request";
import { Client as BrowserClient } from "55tec_integration_lib/model/protocol/browser";
import { Context } from "55tec_integration_lib/service";
import { TicketService } from "./ticket/ticket.service";
import { CustomerService } from "./customer/customer.service";
import { DealsService } from "./deals/deals.service";
import { LeadsService } from "./leads/leads.service";

@injectable()
export class ZendesksellService {
  constructor(
    @inject(TicketService) private readonly ticketService: TicketService,
    @inject(LeadsService) private readonly leadsService: LeadsService,
    @inject(CustomerService) private readonly customerService: CustomerService,
    @inject(DealsService)
    private readonly dealsService: DealsService,
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
        return await this.ticketService.getTicket(ctx);

      case "incidents/list":
        return await this.ticketService.getListTicket(ctx);

      case "customers/get-metadata":
        return this.customerService.getMetadata();

      case "customers/create":
        return await this.customerService.createCustomer(ctx);

      case "customers/update":
        return await this.customerService.updateCustomer(ctx);

      case "customers/find":
        return await this.customerService.getCustomer(ctx);

      case "customers/list":
        return await this.customerService.getListCustomer(ctx);

      case "sale/get-metadata":
        return this.leadsService.getMetadata();

      case "sale/create":
        return await this.leadsService.createLeads(ctx);

      case "sale/update":
        return await this.leadsService.updateLeads(ctx);

      case "sale/find":
        return await this.leadsService.getLeads(ctx);

      case "sale/list":
        return await this.leadsService.getListLeads(ctx);

        case "sale/conversor":
          return await this.leadsService.setConversorLeads(ctx);

      case "deals/get-metadata":
        return this.dealsService.getMetadata();
      case "deals/create":
        return await this.dealsService.createDeals(ctx);

      case "deals/update":
        return await this.dealsService.updateDeals(ctx);

      case "deals/find":
        return await this.dealsService.getDeals(ctx);

      case "deals/list":
        return await this.dealsService.getListDeals(ctx);
      case "users/get-oauth-url":
        return this.customerService.getOAuthURL(ctx);
      case "users/get-token":
        return this.customerService.getOAuthToken(ctx);

      default:
        throw new Error(
          `Não foi registrada nenhuma ação para o id informado: ${info.action}`
        );
    }
  }
}

export default ZendesksellService;
