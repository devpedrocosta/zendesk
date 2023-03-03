import { MetafieldType, Lang } from "55tec_integration_lib/model/metadata";
import { label, prop } from '55tec_integration_lib/model/metadata/decorator';
@label(Lang.PT_BR, "Contatos")
export class Customer {
  @prop({
    name: "name",
    externalName: "name",
    required: false,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "Nome" },
  })
  nome?: string;

  @prop({
    name: "first_name",
    externalName: "first_name",
    required: false,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "primeiro nome" },
  })
  first_name?: string;

  @prop({
    name: "last_name",
    externalName: "last_name",
    required: false,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "Ultimo nome" },
  })
  last_name?: string;

  @prop({
    name: "email",
    externalName: "email",
    required: false,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "E-mail " },
  })
  email?: string;

  @prop({
    name: "phone",
    externalName: "phone",
    required: false,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "Telefone" },
  })
  telefone?: string;

  @prop({
    name: "customer_status",
    externalName: "customer_status",
    required: false,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "customer_status" },
  })
  customer_status?: string;

  @prop({
    name: "address",
    externalName: "address",
    required: false,
    type: MetafieldType.OBJECT,
    label: { [Lang.PT_BR]: "Endereço" },
  })
  address?: Object;

  @prop({
    name: "is_organization",
    externalName: "is_organization",
    required: false,
    type: MetafieldType.BOOLEAN,
    label: { [Lang.PT_BR]: "é uma organização" },
  })
  apenasEmail?: boolean;

  @prop({
    name: "cnpj",
    externalName: "cnpj",
    required: false,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "CNPJ" },
  })
  cnpj?: string;

  @prop({
    name: "custom_fields",
    externalName: "custom_fields",
    required: false,
    type: MetafieldType.OBJECT,
    label: { [Lang.PT_BR]: "Campos customizados" },
  })
  custom_fields?: any;

  @prop({
    name: "cpf",
    externalName: "cpf",
    required: false,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "CPF" },
  })
  cpf?: string;
}

export default Customer;
