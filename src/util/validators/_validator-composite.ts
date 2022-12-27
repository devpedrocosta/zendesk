
import { invalid, valid } from '../helpers/default-validation-messages'
import { IHttpRequestValidator, Validation } from '../helpers/validators'

export class ValidatorComposite implements IHttpRequestValidator {
  constructor (private readonly validators: IHttpRequestValidator[]) {

  }

  isValid (data: any): Validation {
    for (const validator of this.validators) {
      const { isValid, message } = validator.isValid(data)
      if (!isValid) {
        return invalid(message ?? '')
      }
    }
    return valid()
  }
}
