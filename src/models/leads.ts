import { MetafieldType, Lang } from "55tec_integration_lib/model/metadata";
import { label, prop } from '55tec_integration_lib/model/metadata/decorator';
@label(Lang.PT_BR, "Leads")
export class Leads {
  @prop({
    name: "organization_name",
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
    name: "title",
    externalName: "title",
    required: false,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "Tituto " },
  })
  titulo?: string;

  @prop({
    name: "phone",
    externalName: "phone",
    required: false,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "Telefone" },
  })
  phone?: string;

  @prop({
    name: "mobile",
    externalName: "mobile",
    required: false,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "Celular" },
  })
  mobile?: string;

  @prop({
    name: "description",
    externalName: "description",
    required: false,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "Descrição" },
  })
  description?: string;
 
  @prop({
    name: "unqualified_reason_id",
    externalName: "unqualified_reason_id",
    required: false,
    type: MetafieldType.NUMBER,
    label: { [Lang.PT_BR]: "unqualified_reason_id" },
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
    name: "status",
    externalName: "status",
    required: false,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "Status" },
  })
  status?: string;

  @prop({
    name: "email",
    externalName: "email",
    required: false,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "email" },
  })
  email?: string;

  @prop({
    name: "custom_fields",
    externalName: "custom_fields",
    required: false,
    type: MetafieldType.OBJECT,
    label: { [Lang.PT_BR]: "Campos customizados" },
  })
  custom_fields?: any;
}

export default Leads;
