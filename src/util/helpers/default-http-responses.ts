import { HttpResponse } from "../helppers"

export const badRequest = <T>(id: string, errorMessage: string): HttpResponse<T> => {
  return {
    requestId: id,
    data: [],
    status: 400,
    dataCount: 0,
    error: true,
    errorMessage
  }
}

export const createOk = <T>(id: string, data: T | T[], pagination?: any): HttpResponse<T> => {
  return {
    requestId: id,
    data,
    status: 201,
    dataCount: data instanceof Array ? data.length : undefined,
    pagination
  }
}

export const success = <T>(id: string, data: T | T[], pagination?: any): HttpResponse<T> => {
  return {
    requestId: id,
    data,
    status: 200,
    dataCount: data instanceof Array ? data.length : undefined,
    pagination
  }
}
export const serverError = (id: string, message?: string): HttpResponse<any> => {
  return {
    requestId: id,
    data: [],
    status: 500,
    error: true,
    errorMessage: message,
  }
}
