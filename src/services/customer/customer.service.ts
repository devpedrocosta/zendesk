import "reflect-metadata";
import { inject, injectable } from "inversify";
import request from "../../util/request";
import { getMetadata } from "55tec_integration_lib/model/metadata/decorator";
import { HttpMethod } from "../../util/http-method.enum";
import { AuthService } from "../auth/auth.services";
import { Customer } from "../../models/customer";
import { Context } from "55tec_integration_lib/service";
import { GetTokenOAuthBody, GetUrlOAuthBody, ResponseError } from "55tec_integration_lib/model/protocol/integrator/response";
import { StatusCode } from "55tec_integration_lib/model/protocol";
import { bodyFormatResponse, getBycontext } from "../../util/projection";
import {
  FindBody,
  SaveBody,
  ListBody,
} from "55tec_integration_lib/model/protocol/integrator/response";

@injectable()
export class CustomerService {
  constructor(@inject(AuthService) private readonly authService: AuthService) {}

  public getMetadata() {
    return getMetadata(new Customer());
  }

  async getOAuthURL(ctx: Context):Promise<GetUrlOAuthBody> {
    try {
      const url = `https://api.getbase.com/oauth2/token${getBycontext(
        ctx.payload.data
      )}`;
      let result = await request(
        url,
        HttpMethod.POST,
        this.authService.getToken(),
        {}
      );
      return {
        url: result.access_token
      };
    } catch (error:any) {
      throw new ResponseError(error.errors[0].error.message, StatusCode.FORBIDDEN); 
    }
  }

async getOAuthToken(ctx: Context):Promise<GetTokenOAuthBody> {
  try {
    const url = `https://api.getbase.com/oauth2/token${getBycontext(
      ctx.payload.data
    )}`;
    let result = await request(
      url,
      HttpMethod.POST,
      this.authService.getToken(),
      {}
    );
    return {
      token: result.access_token,
      refresh: result.refresh_token
    };
  } catch (error:any) {
    throw new ResponseError(error.errors[0].error.message, StatusCode.FORBIDDEN); 
  }
  }

  public async getCustomer(ctx: Context): Promise<FindBody> {
    const url = `https://api.getbase.com/v2/contacts${getBycontext(
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

  public async getListCustomer(ctx: Context): Promise<ListBody> {
    let result = await request(
      `https://api.getbase.com/v2/contacts`,
      HttpMethod.GET,
      this.authService.getToken(),
      {}
    );

    return {
      data: bodyFormatResponse(ctx, result),
      pagination: ctx.payload.pagination,
    };
  }

  public async createCustomer(ctx: Context): Promise<SaveBody> {
    try {
      const url = `https://api.getbase.com/v2/contacts`;

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

  public async updateCustomer(ctx: Context): Promise<SaveBody> {
    let { id } = ctx.payload;
    if (!id) throw new Error("ID not found");
    try {
      const url = `https://api.getbase.com/v2/contacts/${id}`;

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
