import "reflect-metadata";
import { inject, injectable } from "inversify";
import { Body as RequestBody } from "55tec_integration_lib/model/protocol/integrator/request";
import request, { validateToken } from "../../util/request";
import { getMetadata } from "../../util/metadata/metadata.decorators";
import { HttpMethod } from "../../util/http-method.enum";
import { ResponseError } from "55tec_integration_lib/model/protocol/integrator/response";
import { StatusCode } from "55tec_integration_lib/model/protocol/index";
import { AuthService } from "../auth/auth.services";
import { Customer } from "./model";
import { Context } from "55tec_integration_lib/service";
import {
  HttpResponse,
  serverError,
  success,
  createOk,
} from "../../util/helppers";

@injectable()
export class CustomerService {

  constructor(@inject(AuthService) private readonly authService: AuthService) {}

  public getMetadata() {
    return getMetadata(new Customer());
  }

  public async getCustomer(
    ctx: Context
  ) {
    try {
      let result = await request(
        `${ctx.opts.domain}}/api/publica/usuarios${this.getBycontext(
          ctx.payload
        )}`,
        HttpMethod.GET,
        this.authService.getToken(),
        {}
      );

      return success(ctx.id, [result.data]);
    } catch (error) {
      console.log(error);
      return serverError(ctx.id);
    }
  }

  public async createCustomer(
    ctx: Context
  ): Promise<HttpResponse<{ id: string; wwwRef: { model: string } }>> {
    try {
      const url = `${ctx.opts.domain}/api/publica/usuarios`;
      if(ctx.payload.telefones){
        ctx.payload.telefones = [ctx.payload.telefones]
      }
     
      let result = await request(
        `${url}`,
        HttpMethod.POST,
        this.authService.getToken(),
        ctx.payload
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

  getBycontext(payload: any) {

    let { id } = payload;
    if (!payload.KEY && id) {
      return `/${id}`;
    }
    if (payload.KEY) {
      return `?${payload.KEY}=${payload.VALUE}`;
    }

    throw new Error("Customers not found");
  }


  public async updateCustomer(
    ctx: Context
  ): Promise<HttpResponse<{ id: string; wwwRef: { model: string } }>> {
    try {
      let { id } = ctx.payload;
      if (!id) throw new Error("ID not found");
      const url = `${ctx.opts.domain}/api/publica/usuarios/${id}`;
      if(ctx.payload.telefones){
        ctx.payload.telefones = [ctx.payload.telefones]
      }
      let result = await request(
        `${url}`,
        HttpMethod.PUT,
        this.authService.getToken(),
        ctx.payload
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
}
