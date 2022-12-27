import { invalid, valid } from '../helpers/default-validation-messages'
import { IHttpRequestValidator, Validation } from '../helpers/validators'

export class CaractersLengthValidator implements IHttpRequestValidator {
  constructor (private readonly fields: Array<{ name: string, max?: number, min?: number }>) {

  }

  isValid (data: any): Validation {
    const invalidFields = []
    for (const { name, max, min } of this.fields) {
      if (typeof data[name] !== 'string') {
        invalidFields.push(`O campo ${name} deve ser uma string`)
      }
      const caracters = data[name].length
      if (min && caracters < min) {
        invalidFields.push(`O campo ${name} deve ter no minimo ${min} caracteres`)
      }
      if (max && caracters > max) {
        invalidFields.push(`O campo ${name} deve ter no máximo ${max} caracteres e foram enviados ${data[name].length} caracteres`)
      }
    }

    if (invalidFields.length) {
      return invalid(invalidFields.toString())
    }
    return valid()
  }
}
