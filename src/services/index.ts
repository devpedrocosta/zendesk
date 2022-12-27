import { inject, injectable } from "inversify";
import {
  Request,
  Body as RequestBody,
} from "55tec_integration_lib/model/protocol/integrator/request";
import { Client as BrowserClient } from "55tec_integration_lib/model/protocol/browser";
import { Context } from "55tec_integration_lib/service";
import { LeadsService } from "./leads/leads.service";
import { CustomerService } from "./customer/customer.service";
import { TasksService } from "./task/task.service";
import { DealsService } from "./deals/deals.service";

@injectable()
export class ZendeskService {
  constructor(
    @inject(LeadsService) private readonly leadsService: LeadsService,
    @inject(DealsService) private readonly dealService: DealsService,
    @inject(CustomerService) private readonly customerService: CustomerService,
    @inject(TasksService)
    private readonly tasksService: TasksService,
    @inject(BrowserClient) private readonly browserClient: BrowserClient
  ) {}

  public async chooseEvent(info: Request | any) {
    let ctx = new Context(info);

    const [entity, operation] = info.action.split("/");

    if (entity === "functions") {
      return this.browserClient.load(operation);
    }

    switch (info.action) {
      case "leads/get-metadata":
        return this.leadsService.getMetadata();

      case "leads/create":
        return await this.leadsService.createLeads(ctx);

      case "leads/update":
        return await this.leadsService.updateLeads(ctx);

      case "leads/find":
        return await this.leadsService.getLeadssByid(ctx);

      case "deals/get-metadata":
        return this.dealService.getMetadata();
      case "deals/create":
        return await this.dealService.createDeals(ctx);

      case "deals/update":
        return await this.dealService.updateDeals(ctx);

      case "deals/find":
        return await this.dealService.getDealsByid(ctx);

      case "contacts/get-metadata":
        return this.customerService.getMetadata();

      case "contacts/create":
        return await this.customerService.createCustomer(ctx);

      case "contacts/update":
        return await this.customerService.updateCustomer(ctx);

      case "contacts/find":
        return await this.customerService.getCustomer(ctx);

      case "task/get-metadata":
        return this.tasksService.getMetadata();
      case "task/create":
        return await this.tasksService.createTask(ctx);

      case "task/update":
        return await this.tasksService.updateTask(ctx);

      case "task/find":
        return await this.tasksService.getTasksByid(ctx);

      default:
        throw new Error(
          `Não foi registrada nenhuma ação para o id informado: ${info.action}`
        );
    }
  }
}

export default ZendeskService;
