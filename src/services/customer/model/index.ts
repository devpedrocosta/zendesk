import { MetafieldType, Lang } from "55tec_integration_lib/model/metadata";
import { label, prop } from "../../../util/metadata/metadata.decorators";

@label(Lang.PT_BR, "Customer")
export class Customer {
  @prop({
    name: "nome",
    externalName: "nome",
    required: true,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "Nome" },
  })
  nome?: string;

  @prop({
    name: "organizacoes",
    externalName: "organizacoes",
    required: false,
    type: MetafieldType.LIST,
    label: { [Lang.PT_BR]: "Organizações" },
  })
  organizacoes?: Array<any>;

  @prop({
    name: "telefones",
    externalName: "telefones",
    required: false,
    type: MetafieldType.LIST,
    label: { [Lang.PT_BR]: "Telefone" },
  })
  telefones?: Array<string>;

  @prop({
    name: "email",
    externalName: "email",
    required: false,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "E-mail do contato" },
  })
  email?: string;

  @prop({
    name: "cpf",
    externalName: "cpf",
    required: false,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "CPF" },
  })
  cpf?: string;

  @prop({
    name: "ativo",
    externalName: "ativo",
    required: false,
    type: MetafieldType.BOOLEAN,
    label: { [Lang.PT_BR]: "Ativo" },
  })
  ativo?: boolean;

  @prop({
    name: "apenasContato",
    externalName: "apenasContato",
    required: false,
    type: MetafieldType.BOOLEAN,
    label: { [Lang.PT_BR]: "Apenas contato" },
  })
  apenasContato?: boolean;

  @prop({
    name: "apenasEmail",
    externalName: "apenasEmail",
    required: false,
    type: MetafieldType.BOOLEAN,
    label: { [Lang.PT_BR]: "Apenas email" },
  })
  apenasEmail?: boolean;

  @prop({
    name: "enviarEmail",
    externalName: "enviarEmail",
    required: false,
    type: MetafieldType.BOOLEAN,
    label: { [Lang.PT_BR]: "Enviar email" },
  })
  enviarEmail?: boolean;
}

export default Customer;
