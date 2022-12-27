import "reflect-metadata";
import { inject, injectable } from "inversify";
import request from "../../util/request";
import { getMetadata } from "../../util/metadata/metadata.decorators";
import { HttpMethod } from "../../util/http-method.enum";
import { AuthService } from "../auth/auth.services";
import Leads from "./model";
import { Context } from "55tec_integration_lib/service";
import moment from "moment";
import {
  createOk,
  HttpResponse,
  serverError,
  success,
} from "../../util/helppers";
import { Call } from "./model/leads.face";
import { baseUrl } from '../../env/enviroment';

@injectable()
export class LeadsService {
  constructor(@inject(AuthService) private readonly authService: AuthService) {}

  public getMetadata() {
    return getMetadata(new Leads());
  }

  public async createLeads(
    ctx: Context
  ): Promise<HttpResponse<{ id: string; wwwRef: { model: string } }>> {
    try {
      const url = `${baseUrl.default}/leads`;
      ctx.payload.Description = `${
        ctx.payload.Description || ""
      }\n${this.callInfo(ctx.payload)}`;
      let result = await request(
        `${url}`,
        HttpMethod.POST,
        this.authService.getToken(),
        {data:ctx.payload} 
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

  public async updateLeads(
    ctx: Context
  ): Promise<HttpResponse<{ id: string; wwwRef: { model: string } }>> {
    try {
      let { id } = ctx.payload;
      if (!id) throw new Error("ID not found");

      const url = `${baseUrl.default}/leads/${id}`;

      let result = await request(
        `${url}`,
        HttpMethod.PUT,
        this.authService.getToken(),
        {data:ctx.payload}
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

  callInfo(info: { [key: string]: any }) {
    let callType;
    switch (info.call_type) {
      case "active":
        callType = "Ativo";
        break;
      case "receptive":
        callType = "Receptivo";
        break;
      default:
        callType = "Não Definido";
        break;
    }

    return `===================Registro de Ligação===================\nCPF/CNPJ: ${
      info.call_document || Call.NOT_FOUND_PLACEHOLDER
    }\nTipo de ligação: ${callType || Call.NOT_FOUND_PLACEHOLDER}\nNúmero: ${
      info.call_customer_phone || Call.NOT_FOUND_PLACEHOLDER
    }\nRamal: ${info.call_branchNumber || Call.NOT_FOUND_PLACEHOLDER}\nDDD: ${
      info.call_areaCode || Call.NOT_FOUND_PLACEHOLDER
    }\nData da ligação: ${
      (info.call_date &&
        moment(info.call_date).format("DD/MM/YYYY HH:mm:ss")) ||
      Call.NOT_FOUND_PLACEHOLDER
    }\nData de término: ${
      (info.call_finishedAt &&
        moment(info.call_finishedAt).format("DD/MM/YYYY HH:mm:ss")) ||
      Call.NOT_FOUND_PLACEHOLDER
    }\nDuração: ${
      (info.call_duration && Math.floor(+info.call_duration)) ||
      Call.NOT_FOUND_PLACEHOLDER
    }\nCall ID: ${info.call_callId || Call.NOT_FOUND_PLACEHOLDER}\nURA: ${
      info.call_ivr || Call.NOT_FOUND_PLACEHOLDER
    }\nFila: ${info.call_queue || Call.NOT_FOUND_PLACEHOLDER}\nOrder: ${
      info.call_order || Call.NOT_FOUND_PLACEHOLDER
    }\nCusto da ligação: ${
      info.call_cost || Call.NOT_FOUND_PLACEHOLDER
    }\nURL de Áudio: ${info.call_audioUrl || Call.NOT_FOUND_PLACEHOLDER}`;
  }

  public async getLeadssByid(ctx: Context) {
    try {
      let result = await request(
        `${baseUrl.default}/leads/${this.getBycontext(
          ctx.payload
        )}`,
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

  getBycontext(payload: any) {
    let { id } = payload;
    if (!payload.KEY && id) {
      return `${id}`;
    }
    if (payload.KEY) {
      return `?${payload.KEY}=${payload.VALUE}`;
    }

    throw new Error("Leadss not found");
  }
}
