import "reflect-metadata";
import { inject, injectable } from "inversify";
import request from "../../util/request";
import { getMetadata } from "../../util/metadata/metadata.decorators";
import { HttpMethod } from "../../util/http-method.enum";
import { AuthService } from "../auth/auth.services";
import Task from "./model";
import { Context } from "55tec_integration_lib/service";
import { baseUrl } from "../../env/enviroment";
import {
  createOk,
  HttpResponse,
  serverError,
  success,
} from "../../util/helppers";

@injectable()
export class TasksService {
  constructor(@inject(AuthService) private readonly authService: AuthService) {}

  public getMetadata() {
    return getMetadata(new Task());
  }

  public async createTask(
    ctx: Context
  ): Promise<HttpResponse<{ id: string; wwwRef: { model: string } }>> {
    try {
      const url = `${baseUrl.default}/tasks`;

      let result = await request(
        `${url}`,
        HttpMethod.POST,
        this.authService.getToken(),
        { data: ctx.payload }
      );

      return createOk(ctx.id, {
        id: result.data.id,
        wwwRef: {
          model: url,
        },
      });
    } catch (error: any) {
      return serverError(ctx.id, error?.response.data?.Message || "");
    }
  }

  public async updateTask(
    ctx: Context
  ): Promise<HttpResponse<{ id: string; wwwRef: { model: string } }>> {
    try {
      let { id } = ctx.payload;
      if (!id) throw new Error("ID not found");

      const url = `${baseUrl.default}/tasks${id}`;

      await request(`${url}`, HttpMethod.PUT, this.authService.getToken(), {
        data: ctx.payload,
      });

      return createOk(ctx.id, {
        id: id,
        wwwRef: {
          model: url,
        },
      });
    } catch (error: any) {
      return serverError(ctx.id, error?.response.data?.Message || "");
    }
  }

  public async getTasksByid(ctx: Context) {
    try {
      let { id } = ctx.payload;

      if (!id) throw new Error("ID not found");
      let result = await request(
        `${baseUrl.default}/tasks${id}`,
        HttpMethod.GET,
        this.authService.getToken(),
        {}
      );
      return success(ctx.id, result.body.data);
    } catch (error) {
      console.log(error);
      return serverError(ctx.id);
    }
  }
}
