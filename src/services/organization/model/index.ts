import { MetafieldType, Lang } from "55tec_integration_lib/model/metadata";
import { label, prop } from "../../../util/metadata/metadata.decorators";

@label(Lang.PT_BR, "Organização")
export class Organization {

  @prop({
    name: "nome",
    externalName: "nome",
    required: true,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "nome" },
  })
  nome!: string;

  @prop({
    name: "equipeKey",
    externalName: "equipeKey",
    required: true,
    type: MetafieldType.NUMBER,
    label: { [Lang.PT_BR]: "Chave da equipe" },
  })
  equipeKey!: number;

  @prop({
    name: "nivelDeServicoKey",
    externalName: "nivelDeServicoKey",
    required: true,
    type: MetafieldType.OBJECT,
    label: { [Lang.PT_BR]: "Chave do nivel de Serviço" },
  })
  nivelDeServicoKey?: Object;

  @prop({
    name: "ativo",
    externalName: "ativo",
    required: false,
    type: MetafieldType.BOOLEAN,
    label: { [Lang.PT_BR]: "Ativo" },
  })
  ativo?: boolean;

  @prop({
    name: "visualizavel",
    externalName: "visualizavel",
    required: false,
    type: MetafieldType.BOOLEAN,
    label: { [Lang.PT_BR]: "Visualizavel" },
  })
  visualizavel?: boolean;


  @prop({
    name: "cnpj",
    externalName: "cnpj",
    required: false,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "CNPJ" },
  })
  cnpj?: string;

  @prop({
    name: "codigo",
    externalName: "codigo",
    required: false,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "Codigo" },
  })
  codigo?: string;


  @prop({
    name: "horasSuporte",
    externalName: "horasSuporte",
    required: false,
    type: MetafieldType.OBJECT,
    label: { [Lang.PT_BR]: "Horas de suporte" },
  })
  horasSuporte?: Number;


  @prop({
    name: "logotipoPath",
    externalName: "logotipoPath",
    required: false,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "Logotipo" },
  })
  logotipoPath?: string;

  @prop({
    name: "observacoes",
    externalName: "observacoes",
    required: false,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "Observações" },
  })
  observacoes?: string;

  @prop({
    name: "razaoSocial",
    externalName: "razaoSocial",
    required: false,
    type: MetafieldType.TEXT,
    label: { [Lang.PT_BR]: "Razão sociall" },
  })
  razaoSocial?: string;

  
  @prop({
    name: "telefones",
    externalName: "telefones",
    required: false,
    type: MetafieldType.LIST,
    label: { [Lang.PT_BR]: "Telefones" },
  })
  telefones?: Array<string>;

  @prop({
    name: "valorHora",
    externalName: "valorHora",
    required: false,
    type: MetafieldType.NUMBER,
    label: { [Lang.PT_BR]: "Valor Hora" },
  })
  valorHora?: number;

}



export default Organization;
