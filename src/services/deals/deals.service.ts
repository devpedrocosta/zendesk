import "reflect-metadata";
import { inject, injectable } from "inversify";
import request from "../../util/request";
import { getMetadata } from "55tec_integration_lib/model/metadata/decorator";
import { HttpMethod } from "../../util/http-method.enum";
import { AuthService } from "../auth/auth.services";
import Deals from "../../models/deals";
import { Context } from "55tec_integration_lib/service";
import {
  FindBody,
  SaveBody,
  ListBody,
  ResponseError,
} from "55tec_integration_lib/model/protocol/integrator/response";
import { bodyFormatResponse, getBycontext } from "../../util/projection";
import { StatusCode } from "55tec_integration_lib/model/protocol";

@injectable()
export class DealsService {
  constructor(@inject(AuthService) private readonly authService: AuthService) {}

  public getMetadata() {
    return getMetadata(new Deals());
  }
  public async getDeals(ctx: Context): Promise<FindBody> {
    const url = `https://api.getbase.com/v2/deals${getBycontext(
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

  public async getListDeals(ctx: Context): Promise<ListBody> {
    let result = await request(
      `https://api.getbase.com/v2/deals`,
      HttpMethod.GET,
      this.authService.getToken(),
      {}
    );

    return {
      data: bodyFormatResponse(ctx, result),
      pagination: ctx.payload.pagination,
    };
  }

  public async createDeals(ctx: Context): Promise<SaveBody> {
    try {
      const url = `https://api.getbase.com/v2/deals`;

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

  public async updateDeals(ctx: Context): Promise<SaveBody> {
    let { id } = ctx.payload;
    if (!id) throw new Error("ID not found");
    try {
      const url = `https://api.getbase.com/v2/deals/${id}`;

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
