import { MetafieldType, Lang } from "55tec_integration_lib/model/metadata";
import { label, prop } from "../../../util/metadata/metadata.decorators";

@label(Lang.PT_BR, "Tarefa")
export class Task {

  @prop({
    name: "name",
    externalName: "name",
    required: true,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "name" },
  })
  name!: string;

  @prop({
    name: "value",
    externalName: "owner_id",
    required: false,
    type: MetafieldType.NUMBER,
    label: { [Lang.PT_BR]: "Identificador do usuário" },
  })
  owner_id?: number;


  @prop({
    name: "contact_id",
    externalName: "contact_id",
    required: false,
    type: MetafieldType.NUMBER,
    label: { [Lang.PT_BR]: "Identificador do contato" },
  })
  contact_id?: number;

  @prop({
    name: "value",
    externalName: "value",
    required: false,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "Valor" },
  })
  value?: any;

  @prop({
    name: "currency",
    externalName: "currency",
    required: false,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "Moeda" },
  })
  currency?: string;

  @prop({
    name: "last_stage_change_at",
    externalName: "last_stage_change_at",
    required: false,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "Data da ultima mudança" },
  })
  last_stage_change_at?: string;


  @prop({
    name: "added_at",
    externalName: "added_at",
    required: false,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "Data que foi adicionado" },
  })
  added_at?: string;


  @prop({
    name: "estimated_close_date",
    externalName: "estimated_close_date",
    required: false,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "Data estimada de fechamento do negócio" },
  })
  estimated_close_date?: string;

  @prop({
    name: "stage_id",
    externalName: "stage_id",
    required: false,
    type: MetafieldType.NUMBER,
    label: { [Lang.PT_BR]: "Indetificador do estagio" },
  })
  stage_id?: number;

  @prop({
    name: "customized_win_likelihood",
    externalName: "customized_win_likelihood",
    required: false,
    type: MetafieldType.NUMBER,
    label: { [Lang.PT_BR]: "Probablidade de vitória personalizada" },
  })
  customized_win_likelihood?: number;


  @prop({
    name: "hot",
    externalName: "hot",
    required: false,
    type: MetafieldType.BOOLEAN,
    label: { [Lang.PT_BR]: "Indicador de calor" },
  })
  hot?: boolean;

  @prop({
    name: "tags",
    externalName: "tags",
    required: false,
    type: MetafieldType.LIST,
    label: { [Lang.PT_BR]: "tags" },
  })
  tags?: Array<string>;

  @prop({
    name: "custom_fields",
    externalName: "custom_fields",
    required: false,
    type: MetafieldType.OBJECT,
    label: { [Lang.PT_BR]: "Campos personalizados" },
  })
  custom_fields?: any;

  @prop({
    name: "source_id",
    externalName: "source_id",
    required: false,
    type: MetafieldType.NUMBER,
    label: { [Lang.PT_BR]: "Id da fonte do negócio" },
  })
  source_id?: number;

  @prop({
    name: "loss_reason_id",
    externalName: "loss_reason_id",
    required: false,
    type: MetafieldType.NUMBER,
    label: { [Lang.PT_BR]: "Id do motivo da perda" },
  })
  loss_reason_id?: number;


  @prop({
    name: "unqualified_reason_id",
    externalName: "unqualified_reason_id",
    required: false,
    type: MetafieldType.NUMBER,
    label: { [Lang.PT_BR]: "Id do motivo de desqualificação" },
  })
  unqualified_reason_id?: number;


}



export default Task;
