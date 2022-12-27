import { MetafieldType, Lang } from "55tec_integration_lib/model/metadata";
import { label, prop } from "../../../util/metadata/metadata.decorators";

@label(Lang.PT_BR, "Tarefa")
export class Task {

  @prop({
    name: "content",
    externalName: "content",
    required: true,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "Conteudo" },
  })
  content!: string;

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
    label: { [Lang.PT_BR]: "Tipo da fonte" },
  })
  resource_type?: string;

  @prop({
    name: "resource_id",
    externalName: "resource_id",
    required: false,
    type: MetafieldType.NUMBER,
    label: { [Lang.PT_BR]: "Indetificador da fonte" },
  })
  resource_id?: number;



  @prop({
    name: "completed",
    externalName: "completed",
    required: false,
    type: MetafieldType.BOOLEAN,
    label: { [Lang.PT_BR]: "Completo" },
  })
  completed?: boolean;


  @prop({
    name: "remind_at",
    externalName: "remind_at",
    required: false,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "Lembrete" },
  })
  remind_at?: string;


}



export default Task;
