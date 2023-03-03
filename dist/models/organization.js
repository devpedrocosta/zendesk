"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
const metadata_1 = require("55tec_integration_lib/model/metadata");
const decorator_1 = require("55tec_integration_lib/model/metadata/decorator");
let Company = class Company {
};
__decorate([
    (0, decorator_1.prop)({
        name: "name",
        externalName: "nome",
        required: true,
        type: metadata_1.MetafieldType.TEXT,
        label: { [metadata_1.Lang.PT_BR]: "nome" },
    }),
    __metadata("design:type", String)
], Company.prototype, "nome", void 0);
__decorate([
    (0, decorator_1.prop)({
        name: "equipeKey",
        externalName: "equipeKey",
        required: true,
        type: metadata_1.MetafieldType.NUMBER,
        label: { [metadata_1.Lang.PT_BR]: "Chave da equipe" },
    }),
    __metadata("design:type", Number)
], Company.prototype, "equipeKey", void 0);
__decorate([
    (0, decorator_1.prop)({
        name: "nivelDeServicoKey",
        externalName: "nivelDeServicoKey",
        required: true,
        type: metadata_1.MetafieldType.OBJECT,
        label: { [metadata_1.Lang.PT_BR]: "Chave do nivel de Serviço" },
    }),
    __metadata("design:type", Object)
], Company.prototype, "nivelDeServicoKey", void 0);
__decorate([
    (0, decorator_1.prop)({
        name: "ativo",
        externalName: "ativo",
        required: false,
        type: metadata_1.MetafieldType.BOOLEAN,
        label: { [metadata_1.Lang.PT_BR]: "Ativo" },
    }),
    __metadata("design:type", Boolean)
], Company.prototype, "ativo", void 0);
__decorate([
    (0, decorator_1.prop)({
        name: "visualizavel",
        externalName: "visualizavel",
        required: false,
        type: metadata_1.MetafieldType.BOOLEAN,
        label: { [metadata_1.Lang.PT_BR]: "Visualizavel" },
    }),
    __metadata("design:type", Boolean)
], Company.prototype, "visualizavel", void 0);
__decorate([
    (0, decorator_1.prop)({
        name: "cnpj",
        externalName: "cnpj",
        required: false,
        type: metadata_1.MetafieldType.TEXT,
        label: { [metadata_1.Lang.PT_BR]: "CNPJ" },
    }),
    __metadata("design:type", String)
], Company.prototype, "cnpj", void 0);
__decorate([
    (0, decorator_1.prop)({
        name: "codigo",
        externalName: "codigo",
        required: false,
        type: metadata_1.MetafieldType.TEXT,
        label: { [metadata_1.Lang.PT_BR]: "Codigo" },
    }),
    __metadata("design:type", String)
], Company.prototype, "codigo", void 0);
__decorate([
    (0, decorator_1.prop)({
        name: "horasSuporte",
        externalName: "horasSuporte",
        required: false,
        type: metadata_1.MetafieldType.OBJECT,
        label: { [metadata_1.Lang.PT_BR]: "Horas de suporte" },
    }),
    __metadata("design:type", Number)
], Company.prototype, "horasSuporte", void 0);
__decorate([
    (0, decorator_1.prop)({
        name: "logotipoPath",
        externalName: "logotipoPath",
        required: false,
        type: metadata_1.MetafieldType.TEXT,
        label: { [metadata_1.Lang.PT_BR]: "Logotipo" },
    }),
    __metadata("design:type", String)
], Company.prototype, "logotipoPath", void 0);
__decorate([
    (0, decorator_1.prop)({
        name: "observacoes",
        externalName: "observacoes",
        required: false,
        type: metadata_1.MetafieldType.TEXT,
        label: { [metadata_1.Lang.PT_BR]: "Observações" },
    }),
    __metadata("design:type", String)
], Company.prototype, "observacoes", void 0);
__decorate([
    (0, decorator_1.prop)({
        name: "razaoSocial",
        externalName: "razaoSocial",
        required: false,
        type: metadata_1.MetafieldType.TEXT,
        label: { [metadata_1.Lang.PT_BR]: "Razão sociall" },
    }),
    __metadata("design:type", String)
], Company.prototype, "razaoSocial", void 0);
__decorate([
    (0, decorator_1.prop)({
        name: "phone",
        externalName: "telefones",
        required: false,
        type: metadata_1.MetafieldType.LIST,
        label: { [metadata_1.Lang.PT_BR]: "Telefones" },
    }),
    __metadata("design:type", Array)
], Company.prototype, "telefones", void 0);
__decorate([
    (0, decorator_1.prop)({
        name: "valorHora",
        externalName: "valorHora",
        required: false,
        type: metadata_1.MetafieldType.NUMBER,
        label: { [metadata_1.Lang.PT_BR]: "Valor Hora" },
    }),
    __metadata("design:type", Number)
], Company.prototype, "valorHora", void 0);
Company = __decorate([
    (0, decorator_1.label)(metadata_1.Lang.PT_BR, "Empresa")
], Company);
exports.Company = Company;
exports.default = Company;
//# sourceMappingURL=organization.js.map