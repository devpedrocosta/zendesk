import "reflect-metadata";
import { inject, injectable } from "inversify";
import request from "../../util/request";
import { getMetadata } from "../../util/metadata/metadata.decorators";
import { HttpMethod } from "../../util/http-method.enum";
import { AuthService } from "../auth/auth.services";
import Deals from "./model";
import { Context } from "55tec_integration_lib/service";
import { baseUrl } from "../../env/enviroment";
import {
  createOk,
  HttpResponse,
  serverError,
  success,
} from "../../util/helppers";

@injectable()
export class DealsService {
  constructor(@inject(AuthService) private readonly authService: AuthService) {}

  public getMetadata() {
    return getMetadata(new Deals());
  }

  public async createDeals(
    ctx: Context
  ): Promise<HttpResponse<{ id: string; wwwRef: { model: string } }>> {
    try {
      const url = `${baseUrl.default}/deals`;

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

  public async updateDeals(
    ctx: Context
  ): Promise<HttpResponse<{ id: string; wwwRef: { model: string } }>> {
    try {
      let { id } = ctx.payload;
      if (!id) throw new Error("ID not found");

      const url = `${baseUrl.default}/deals${id}`;

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

  public async getDealsByid(ctx: Context) {
    try {
      let result = await request(
        `${baseUrl.default}/deals/${this.getBycontext(ctx.payload)}`,
        HttpMethod.GET,
        this.authService.getToken(),
        {}
      );
      return success(ctx.id, result.body.items);
    } catch (error) {
      console.log(error);
      return serverError(ctx.id);
    }
  }

  getBycontext(payload: any) {
    let { id } = payload;
    if (!payload.KEY && id) {
      return `${id}`;
    }
    if (payload.KEY) {
      return `?${payload.KEY}=${payload.VALUE}`;
    }

    throw new Error("Deals not found");
  }
}
