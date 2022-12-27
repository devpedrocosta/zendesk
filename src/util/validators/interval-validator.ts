import { invalid, valid } from '../helpers/default-validation-messages'
import { IHttpRequestValidator, Validation } from '../helpers/validators'

export class IntervalValidator implements IHttpRequestValidator {
  constructor (private fields: Array<{ startDate: string, endDate: string }>) {

  }

  isValid (data: any): Validation {
    const invalidFields = []

    for (const {startDate, endDate } of this.fields) {
      var dataIni = new Date(startDate);
      var dataFim = new Date(endDate);

      var diferencaEmMili = Math.abs(dataFim.getTime() - dataIni.getTime());
      var diferencaEmDias = Math.ceil(diferencaEmMili/(1000*3600*24))

      if (diferencaEmDias > 31){
        invalidFields.push(`O intervalo deve ser igual ou menor que 31 dias`)
      }
    }

    if (invalidFields.length) {
      return invalid(invalidFields.toString())
    }

    return valid()
  }
}