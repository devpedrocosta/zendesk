import "reflect-metadata";
import { inject, injectable } from "inversify";
import request from "../../util/request";
import { getMetadata } from "../../util/metadata/metadata.decorators";
import { HttpMethod } from "../../util/http-method.enum";
import { AuthService } from "../auth/auth.services";
import Organization from "./model";
import { Context } from "55tec_integration_lib/service";
import {
  createOk,
  HttpResponse,
  serverError,
  success,
} from "../../util/helppers";


@injectable()
export class OrganizationService {
  constructor(@inject(AuthService) private readonly authService: AuthService) {}

  public getMetadata() {
    return getMetadata(new Organization());
  }

  public async createOrganization(
    ctx: Context
  ): Promise<HttpResponse<{ id: string; wwwRef: { model: string } }>> {
    try {
      const url = `${ctx.opts.domain}/api/publica/organizacoes`;
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
        id: result.id,
        wwwRef: {
          model: url,
        },
      });
    } catch (error: any) {
      return serverError(ctx.id, error?.response.data?.Message || "");
    }
  }

  public async updateOrganization(
    ctx: Context
  ): Promise<HttpResponse<{ id: string; wwwRef: { model: string } }>> {
    try {
      let { id } = ctx.payload;
      if (!id) throw new Error("ID not found");

      const url = `${ctx.opts.domain}/api/publica/organizacoes${id}`;
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
        id: result.id,
        wwwRef: {
          model: url,
        },
      });
    } catch (error: any) {
      return serverError(ctx.id, error?.response.data?.Message || "");
    }
  }



  public async getOrganizationsByid(ctx: Context) {
    try {
      let result = await request(
        `${ctx.opts.domain}/api/publica/organizacoes${this.getBycontext(
          ctx.payload
        )}`,
        HttpMethod.GET,
        this.authService.getToken(),
        {}
      );
      return success(ctx.id, result.body);
    } catch (error) {
      console.log(error);
      return serverError(ctx.id);
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

    throw new Error("Organizations not found");
  }
}
