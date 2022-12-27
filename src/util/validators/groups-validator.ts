import { invalid, valid } from '../helpers/default-validation-messages'
import { Validation } from '../helpers/validators'


export class GroupsValidator{
    constructor (readonly fields: string[]){}

    isValid (data:any): Validation{
        const invalidFields = this.fields.filter(field => !data[field])

        if (invalidFields.length){
            return invalid(`Grupo inexistente`)
        }

        return valid()
    }

}