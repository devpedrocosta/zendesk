import "reflect-metadata";
import { inject, injectable } from "inversify";
import request from "../../util/request";
import { getMetadata } from "55tec_integration_lib/model/metadata/decorator";
import { HttpMethod } from "../../util/http-method.enum";
import { AuthService } from "../auth/auth.services";
import { Context } from "55tec_integration_lib/service";
import { ResponseError } from "55tec_integration_lib/model/protocol/integrator/response";
import { StatusCode } from "55tec_integration_lib/model/protocol";
import { bodyFormatResponse, getBycontext } from "../../util/projection";
import {
  FindBody,
  SaveBody,
  ListBody,
} from "55tec_integration_lib/model/protocol/integrator/response";
import { Leads } from "../../models/leads";

@injectable()
export class LeadsService {
  constructor(@inject(AuthService) private readonly authService: AuthService) {}

  public getMetadata() {
    return getMetadata(new Leads());
  }


  public async getLeads(ctx: Context): Promise<FindBody> {
    const url = `https://api.getbase.com/v2/leads${getBycontext(
      ctx.payload.data
    )}`;
    let result = await request(
      url,
      HttpMethod.GET,
      this.authService.getToken(),
      {}
    );
    return {
      data: bodyFormatResponse(ctx, result),
      wwwRef: {
        model: url,
      },
    };
  }

  public async getListLeads(ctx: Context): Promise<ListBody> {
    let result = await request(
      `https://api.getbase.com/v2/leads`,
      HttpMethod.GET,
      this.authService.getToken(),
      {}
    );

    return {
      data: bodyFormatResponse(ctx, result),
      pagination: ctx.payload.pagination,
    };
  }

  public async createLeads(ctx: Context): Promise<SaveBody> {
    try {
      const url = `https://api.getbase.com/v2/leads`;

      const data = await request(
        `${url}`,
        HttpMethod.POST,
        this.authService.getToken(),
        { data: ctx.payload }
      );

      return {
        id: data.id,
        wwwRef: {
          model: url,
        },
      };
    } catch (error: any) {
      throw new ResponseError(error.errors[0].error.message, StatusCode.FORBIDDEN);
    }
  }

  async setConversorLeads(ctx: Context): Promise<SaveBody>{
    let { lead_id } = ctx.payload;
    if (!lead_id) throw new Error("ID not found");
    try {
      const url = `https://api.getbase.com/v2/lead_conversion`;

      const data = await request(
        `${url}`,
        HttpMethod.POST,
        this.authService.getToken(),
        { data: ctx.payload }
      );
      return {
        id: data.id,
        wwwRef: {
          model: url,
        },
      } ;
    } catch (error: any) {
      throw new ResponseError(error.errors[0].error.message, StatusCode.FORBIDDEN);
    }
  }
  

  public async updateLeads(ctx: Context): Promise<SaveBody> {
    let { id } = ctx.payload;
    if (!id) throw new Error("ID not found");
    try {
      const url = `https://api.getbase.com/v2/leads/${id}`;

      const data = await request(
        `${url}`,
        HttpMethod.PUT,
        this.authService.getToken(),
        { data: ctx.payload }
      );
      return {
        id: data.id,
        wwwRef: {
          model: url,
        },
      };
    } catch (error: any) {
      throw new ResponseError(error.errors[0].error.message, StatusCode.FORBIDDEN);
    }
  }
}
