import request from "request-promise";
import { HttpMethod } from "./http-method.enum";
import urlLib from "url";
import qs from "querystring";
import { Context } from "55tec_integration_lib/service";
import { Credential } from "55tec_integration_lib/model/protocol/integrator/credential";
import { Projection } from "55tec_integration_lib/model/protocol/integrator/request";

export class RequestError extends Error {
  code: number;

  constructor(message: string, code: number = 500) {
    super(message);
    this.code = code;
  }
}

export default async (
  url: string,
  method: HttpMethod = HttpMethod.GET,
  token: string,
  body: { [k: string]: any } = {},
  params={},
  type=false
) => {
  if (body && method === "get") {
    let parsedUrl = urlLib.parse(url);

    url = `${parsedUrl.protocol}//${parsedUrl.host}${
      parsedUrl.pathname
    }?${qs.stringify({
      ...qs.parse(parsedUrl.query || ""),
      ...body,
    })}`;

    body = {};
  }

  return await request({
    rejectUnauthorized: true,
    url: url,
    method: method,
    qs:params,
    body: method !== HttpMethod.GET ? JSON.stringify(body) : undefined,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Basic ${token}`
    },
    simple: false,
    resolveWithFullResponse: true,
  });
};

export function validateToken(ctx: Context) {
  const token = ctx.credentials!.find((c: Credential) => c.type === "basic");

  if (!token) {
    const err = new Error("Missing OAuth token");
    //@ts-ignore
    err.code = 401;
    throw err;
  }
}

export function cleanPayload(obj:any) {
  for (var propName in obj) {
    if (obj[propName] === null || obj[propName] === undefined || obj[propName] === '') {
      delete obj[propName];
    }
  }
  return obj
}



export function projectionFilter(projection: Projection, obj: any) {
    return obj.map((item:any)=>{
       return Object.keys(Object.keys(
        projection.toString()
          .split(",")
          .map((x) => x.split(":").map((y) => y.trim()))
          .reduce((a:Partial<any>, x) => {
            a[x[0]] = x[1];
            return a;
          }, {})
      )
      .reduce((a:Partial<any>, e) => {
        a[e] = 1;
        return a;
      }, {})).reduce((r:Partial<any>,k) => {
            r[k] = item[k] || '';
            return r;
          },{});
    })

}