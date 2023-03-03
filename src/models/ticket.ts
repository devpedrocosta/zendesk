import { MetafieldType, Lang } from "55tec_integration_lib/model/metadata";
import { label, prop } from '55tec_integration_lib/model/metadata/decorator';
@label(Lang.PT_BR, "Tíquete")
export class Ticket {


  @prop({
    name: "description",
    externalName: "content",
    required: true,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "Descrição" },
  })
  descricao!: string;

  @prop({
    name: "due_date",
    externalName: "due_date",
    required: false,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "Data de Vencimento" },
  })
  due_date?: string;

  @prop({
    name: "owner_id",
    externalName: "owner_id",
    required: false,
    type: MetafieldType.NUMBER,
    label: { [Lang.PT_BR]: "Identificador do usuário" },
  })
  owner_id?: number;

  @prop({
    name: "resource_type",
    externalName: "resource_type",
    required: false,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "Tipo de objecto do tiquete" },
  })
  resource_type?: string;

  @prop({
    name: "resource_id",
    externalName: "resource_id",
    required: false,
    type: MetafieldType.ID,
    label: { [Lang.PT_BR]: "Identificador do objecto do tiquete" },
  })
  resource_id?: number;

  @prop({
    name: "status",
    externalName: "completed",
    required: false,
    type: MetafieldType.BOOLEAN,
    label: { [Lang.PT_BR]: "Mesclado" },
  })
  mesclado?: boolean;

  @prop({
    name: "remind_at",
    externalName: "remind_at",
    required: false,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "Data para lembrar a tarefa" },
  })
  remind_at?: string;



}



export default Ticket;
