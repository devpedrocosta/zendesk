import { MetafieldType, Lang } from "55tec_integration_lib/model/metadata";
import { label, prop } from "../../../util/metadata/metadata.decorators";

@label(Lang.PT_BR, "Tíquete")
export class Ticket {

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
    name: "status",
    externalName: "status",
    required: false,
    type: MetafieldType.BOOLEAN,
    label: { [Lang.PT_BR]: "Status" },
  })
  status?: boolean;

  @prop({
    name: "source_id",
    externalName: "source_id",
    required: false,
    type: MetafieldType.NUMBER,
    label: { [Lang.PT_BR]: "Indetificador da fonte" },
  })
  source_id?: number;

  @prop({
    name: "unqualified_reason_id",
    externalName: "unqualified_reason_id",
    required: false,
    type: MetafieldType.NUMBER,
    label: { [Lang.PT_BR]: "Id do motivo de não qualificado" },
  })
  unqualified_reason_id?: number;

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
    label: { [Lang.PT_BR]: "Telefone" },
  })
  mobile?: string;

  @prop({
    name: "facebook",
    externalName: "facebook",
    required: false,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "Facebook" },
  })
  facebook?: string;

  @prop({
    name: "linkedin",
    externalName: "linkedin",
    required: false,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "Linkedin" },
  })
  linkedin?: string;

  @prop({
    name: "custom_fields",
    externalName: "custom_fields",
    required: false,
    type: MetafieldType.OBJECT,
    label: { [Lang.PT_BR]: "Campos personalizados" },
  })
  custom_fields?: string;

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



export default Ticket;
