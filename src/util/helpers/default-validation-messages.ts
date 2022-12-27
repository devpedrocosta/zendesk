import { Validation } from "./validators"


export const valid = (): Validation => ({ isValid: true })
export const invalid = (message: string): Validation => ({ isValid: false, message })
