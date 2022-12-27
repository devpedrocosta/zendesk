import { invalid, valid } from '../helpers/default-validation-messages'
import { IHttpRequestValidator, Validation } from '../helpers/validators'

export class DateValidator implements IHttpRequestValidator{
    constructor (private readonly fields: string[]) { 

    }

    isValid (data: any): Validation {  
        const invalidFields = []  
        var newData = new Date(data);

        if(newData.toString()==="Invalid Date"){
            invalidFields.push(`A data deve ser válida`)
        }
        
        return valid()
    }


}