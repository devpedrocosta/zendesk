import "reflect-metadata";
import { Container } from "inversify";
import { Channel } from "55tec_integration_lib/model/protocol";
import { Client as BrowserClient } from "55tec_integration_lib/model/protocol/browser";
import path from "path";
import { TicketService } from "../services/ticket/ticket.service";
import { AuthService } from "../services/auth/auth.services";
import ZendesksellService from "../services";
import { CustomerService } from "../services/customer/customer.service";
import { DealsService } from "../services/deals/deals.service";
import { LeadsService } from '../services/leads/leads.service';

const container = new Container();

const channel: Channel = process as Channel;

container
  .bind<CustomerService>(CustomerService)
  .to(CustomerService)
  .inSingletonScope();
  container
  .bind<LeadsService>(LeadsService)
  .to(LeadsService)
  .inSingletonScope();
container
  .bind<TicketService>(TicketService)
  .to(TicketService)
  .inSingletonScope();
container
  .bind<DealsService>(DealsService)
  .to(DealsService)
  .inSingletonScope();
container.bind<AuthService>(AuthService).to(AuthService).inSingletonScope();
container
  .bind<ZendesksellService>(ZendesksellService)
  .to(ZendesksellService)
  .inRequestScope();
container
  .bind<BrowserClient>(BrowserClient)
  .toConstantValue(
    new BrowserClient(channel, path.join(__dirname, "../browser/func"))
  );

export default container;
