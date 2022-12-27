import { MetafieldType, Lang } from "55tec_integration_lib/model/metadata";
import { label, prop } from "../../../util/metadata/metadata.decorators";

@label(Lang.PT_BR, "Contatos")
export class Customer {
  @prop({
    name: "name",
    externalName: "name",
    required: true,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "Nome" },
  })
  name?: string;

  @prop({
    name: "last_name",
    externalName: "last_name",
    required: true,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "Sobrenome" },
  })
  last_name!: string;

  @prop({
    name: "organization_name",
    externalName: "organization_name",
    required: true,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "Nome da empresa" },
  })
  organization_name!: string;

  @prop({
    name: "first_name",
    externalName: "first_name",
    required: false,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "Nome" },
  })
  first_name?: string;

  @prop({
    name: "owner_id",
    externalName: "owner_id",
    required: false,
    type: MetafieldType.NUMBER,
    label: { [Lang.PT_BR]: "Identificador do usuário" },
  })
  owner_id?: number;

  @prop({
    name: "is_organization",
    externalName: "is_organization",
    required: false,
    type: MetafieldType.BOOLEAN,
    label: { [Lang.PT_BR]: "Contato é uma Empresa" },
  })
  is_organization?: boolean;

  @prop({
    name: "parent_organization_id",
    externalName: "parent_organization_id",
    required: false,
    type: MetafieldType.NUMBER,
    label: { [Lang.PT_BR]: "Indetificador relação entre empresas " },
  })
  parent_organization_id?: number;


  @prop({
    name: "contact_id",
    externalName: "contact_id",
    required: false,
    type: MetafieldType.NUMBER,
    label: { [Lang.PT_BR]: "Indetificador de contato " },
  })
  contact_id?: number;

  @prop({
    name: "customer_status",
    externalName: "customer_status",
    required: false,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "Status do consumidor" },
  })
  customer_status?: string;

  @prop({
    name: "prospect_status",
    externalName: "prospect_status",
    required: false,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "Status prospetado" },
  })
  prospect_status?: string;

  @prop({
    name: "title",
    externalName: "title",
    required: false,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "Titulo" },
  })
  title?: string;

  @prop({
    name: "description",
    externalName: "description",
    required: false,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "Descrição" },
  })
  description?: string;

  @prop({
    name: "mobile",
    externalName: "mobile",
    required: false,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "Celular" },
  })
  mobile?: string;

  @prop({
    name: "industry",
    externalName: "industry",
    required: false,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "industry" },
  })
  industry?: string;

  @prop({
    name: "phone",
    externalName: "phone",
    required: false,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "Telefone" },
  })
  phone?: string;

  @prop({
    name: "email",
    externalName: "email",
    required: false,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "Email" },
  })
  email?: string;

  @prop({
    name: "website",
    externalName: "website",
    required: false,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "Site" },
  })
  website?: string;

  @prop({
    name: "custom_fields",
    externalName: "custom_fields",
    required: false,
    type: MetafieldType.OBJECT,
    label: { [Lang.PT_BR]: "Campos personalizados" },
  })
  custom_fields?: any;

  @prop({
    name: "tags",
    externalName: "tags",
    required: false,
    type: MetafieldType.LIST,
    label: { [Lang.PT_BR]: "Tags" },
  })
  tags?: Array<string>;


  @prop({
    name: "address",
    externalName: "address",
    required: false,
    type: MetafieldType.OBJECT,
    label: { [Lang.PT_BR]: "Endereço" },
  })
  address?: string;
}

export default Customer;
