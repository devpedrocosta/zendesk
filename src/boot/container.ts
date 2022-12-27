import "reflect-metadata";
import { Container } from "inversify";
import { Channel } from "55tec_integration_lib/model/protocol";
import { Client as BrowserClient } from "55tec_integration_lib/model/protocol/browser";
import path from "path";
import { LeadsService } from "../services/leads/leads.service";
import { AuthService } from "../services/auth/auth.services";
import ZendeskService from "../services";
import { CustomerService } from "../services/customer/customer.service";
import { TasksService } from "../services/task/task.service";

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
  .bind<TasksService>(TasksService)
  .to(TasksService)
  .inSingletonScope();
container.bind<AuthService>(AuthService).to(AuthService).inSingletonScope();
container
  .bind<ZendeskService>(ZendeskService)
  .to(ZendeskService)
  .inRequestScope();
container
  .bind<BrowserClient>(BrowserClient)
  .toConstantValue(
    new BrowserClient(channel, path.join(__dirname, "../browser/func"))
  );

export default container;
