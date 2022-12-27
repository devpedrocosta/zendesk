
export type Validation = {
  isValid: boolean
  message?: string
}
export interface IHttpRequestValidator {
  isValid: (data: any) => Validation
}
