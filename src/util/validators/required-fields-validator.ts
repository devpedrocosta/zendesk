import { invalid, valid } from '../helpers/default-validation-messages'
import { IHttpRequestValidator, Validation } from '../helpers/validators'

export class HttpRequestRequiredFields implements IHttpRequestValidator {
  constructor (private readonly fields: string[]) { }

  isValid (data: any): Validation {
    if (!data) {
      return { isValid: false, message: 'Data not provided' }
    }
    const invalidFields = this.fields.filter(field => !data[field])
    if (invalidFields.length) {
      return invalid(`Campos obrigatorios em branco: ${invalidFields.join(', ')}`)
    }

    return valid()
  }
}
