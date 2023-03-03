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
exports.Ticket = void 0;
const metadata_1 = require("55tec_integration_lib/model/metadata");
const decorator_1 = require("55tec_integration_lib/model/metadata/decorator");
let Ticket = class Ticket {
};
__decorate([
    (0, decorator_1.prop)({
        name: "subject",
        externalName: "titulo",
        required: true,
        type: metadata_1.MetafieldType.TEXT,
        label: { [metadata_1.Lang.PT_BR]: "Titulo" },
    }),
    __metadata("design:type", String)
], Ticket.prototype, "titulo", void 0);
__decorate([
    (0, decorator_1.prop)({
        name: "description",
        externalName: "descricao",
        required: false,
        type: metadata_1.MetafieldType.TEXT,
        label: { [metadata_1.Lang.PT_BR]: "descrição" },
    }),
    __metadata("design:type", String)
], Ticket.prototype, "descricao", void 0);
__decorate([
    (0, decorator_1.prop)({
        name: "agente",
        externalName: "agente",
        required: false,
        type: metadata_1.MetafieldType.OBJECT,
        label: { [metadata_1.Lang.PT_BR]: "Agente" },
    }),
    __metadata("design:type", Object)
], Ticket.prototype, "agente", void 0);
__decorate([
    (0, decorator_1.prop)({
        name: "alvoDeSpam",
        externalName: "alvoDeSpam",
        required: false,
        type: metadata_1.MetafieldType.BOOLEAN,
        label: { [metadata_1.Lang.PT_BR]: "Alvo de Spam" },
    }),
    __metadata("design:type", Boolean)
], Ticket.prototype, "alvoDeSpam", void 0);
__decorate([
    (0, decorator_1.prop)({
        name: "arquivado",
        externalName: "arquivado",
        required: false,
        type: metadata_1.MetafieldType.BOOLEAN,
        label: { [metadata_1.Lang.PT_BR]: "Arquivado" },
    }),
    __metadata("design:type", Boolean)
], Ticket.prototype, "arquivado", void 0);
__decorate([
    (0, decorator_1.prop)({
        name: "liexeira",
        externalName: "liexeira",
        required: false,
        type: metadata_1.MetafieldType.BOOLEAN,
        label: { [metadata_1.Lang.PT_BR]: "Lixeira" },
    }),
    __metadata("design:type", Boolean)
], Ticket.prototype, "liexeira", void 0);
__decorate([
    (0, decorator_1.prop)({
        name: "mesclado",
        externalName: "mesclado",
        required: false,
        type: metadata_1.MetafieldType.BOOLEAN,
        label: { [metadata_1.Lang.PT_BR]: "Mesclado" },
    }),
    __metadata("design:type", Boolean)
], Ticket.prototype, "mesclado", void 0);
__decorate([
    (0, decorator_1.prop)({
        name: "categoria",
        externalName: "categoria",
        required: false,
        type: metadata_1.MetafieldType.OBJECT,
        label: { [metadata_1.Lang.PT_BR]: "Categoria" },
    }),
    __metadata("design:type", Object)
], Ticket.prototype, "categoria", void 0);
__decorate([
    (0, decorator_1.prop)({
        name: "dataDaUltimaAlteracao",
        externalName: "dataDaUltimaAlteracao",
        required: false,
        type: metadata_1.MetafieldType.OBJECT,
        label: { [metadata_1.Lang.PT_BR]: "Data da Ultima Alteração" },
    }),
    __metadata("design:type", Object)
], Ticket.prototype, "dataDaUltimaAlteracao", void 0);
__decorate([
    (0, decorator_1.prop)({
        name: "createdAt",
        externalName: "dataDeCriacao",
        required: false,
        type: metadata_1.MetafieldType.OBJECT,
        label: { [metadata_1.Lang.PT_BR]: "Data de criação" },
    }),
    __metadata("design:type", Object)
], Ticket.prototype, "dataDeCriacao", void 0);
__decorate([
    (0, decorator_1.prop)({
        name: "dataDePronto",
        externalName: "dataDePronto",
        required: false,
        type: metadata_1.MetafieldType.OBJECT,
        label: { [metadata_1.Lang.PT_BR]: "Data de pronto" },
    }),
    __metadata("design:type", Object)
], Ticket.prototype, "dataDePronto", void 0);
__decorate([
    (0, decorator_1.prop)({
        name: "especieDeTicket",
        externalName: "especieDeTicket",
        required: false,
        type: metadata_1.MetafieldType.OBJECT,
        label: { [metadata_1.Lang.PT_BR]: "Especie de Ticket" },
    }),
    __metadata("design:type", Object)
], Ticket.prototype, "especieDeTicket", void 0);
__decorate([
    (0, decorator_1.prop)({
        name: "id",
        externalName: "id",
        required: false,
        type: metadata_1.MetafieldType.OBJECT,
        label: { [metadata_1.Lang.PT_BR]: "ID" },
    }),
    __metadata("design:type", Number)
], Ticket.prototype, "id", void 0);
__decorate([
    (0, decorator_1.prop)({
        name: "notaDeSatisfacao",
        externalName: "notaDeSatisfacao",
        required: false,
        type: metadata_1.MetafieldType.OBJECT,
        label: { [metadata_1.Lang.PT_BR]: "Nota dee Satisfação" },
    }),
    __metadata("design:type", Number)
], Ticket.prototype, "notaDeSatisfacao", void 0);
__decorate([
    (0, decorator_1.prop)({
        name: "kanbanStatus",
        externalName: "kanbanStatus",
        required: false,
        type: metadata_1.MetafieldType.OBJECT,
        label: { [metadata_1.Lang.PT_BR]: "kanban Status" },
    }),
    __metadata("design:type", Object)
], Ticket.prototype, "kanbanStatus", void 0);
__decorate([
    (0, decorator_1.prop)({
        name: "listas",
        externalName: "listas",
        required: false,
        type: metadata_1.MetafieldType.OBJECT,
        label: { [metadata_1.Lang.PT_BR]: "Listas" },
    }),
    __metadata("design:type", Object)
], Ticket.prototype, "listas", void 0);
__decorate([
    (0, decorator_1.prop)({
        name: "organizacao",
        externalName: "organizacao",
        required: false,
        type: metadata_1.MetafieldType.OBJECT,
        label: { [metadata_1.Lang.PT_BR]: "Organização" },
    }),
    __metadata("design:type", Object)
], Ticket.prototype, "organizacao", void 0);
__decorate([
    (0, decorator_1.prop)({
        name: "release",
        externalName: "release",
        required: false,
        type: metadata_1.MetafieldType.OBJECT,
        label: { [metadata_1.Lang.PT_BR]: "Lançamento" },
    }),
    __metadata("design:type", Object)
], Ticket.prototype, "release", void 0);
__decorate([
    (0, decorator_1.prop)({
        name: "origem",
        externalName: "origem",
        required: false,
        type: metadata_1.MetafieldType.TEXT,
        label: { [metadata_1.Lang.PT_BR]: "Origem" },
    }),
    __metadata("design:type", String)
], Ticket.prototype, "origem", void 0);
__decorate([
    (0, decorator_1.prop)({
        name: "reporter",
        externalName: "reporter",
        required: false,
        type: metadata_1.MetafieldType.OBJECT,
        label: { [metadata_1.Lang.PT_BR]: "Relatorio" },
    }),
    __metadata("design:type", Object)
], Ticket.prototype, "reporter", void 0);
__decorate([
    (0, decorator_1.prop)({
        name: "prioridadeDaOrganizacao",
        externalName: "prioridadeDaOrganizacao",
        required: false,
        type: metadata_1.MetafieldType.NUMBER,
        label: { [metadata_1.Lang.PT_BR]: "Prioridade da organização" },
    }),
    __metadata("design:type", Number)
], Ticket.prototype, "prioridadeDaOrganizacao", void 0);
__decorate([
    (0, decorator_1.prop)({
        name: "quantidadeDeVinculados",
        externalName: "quantidadeDeVinculados",
        required: false,
        type: metadata_1.MetafieldType.NUMBER,
        label: { [metadata_1.Lang.PT_BR]: "Quantidade de Vinculados" },
    }),
    __metadata("design:type", Number)
], Ticket.prototype, "quantidadeDeVinculados", void 0);
__decorate([
    (0, decorator_1.prop)({
        name: "tempoCliclico",
        externalName: "tempoCliclico",
        required: false,
        type: metadata_1.MetafieldType.NUMBER,
        label: { [metadata_1.Lang.PT_BR]: "Tempo Ciclico" },
    }),
    __metadata("design:type", Number)
], Ticket.prototype, "tempoCliclico", void 0);
__decorate([
    (0, decorator_1.prop)({
        name: "seguidores",
        externalName: "seguidores",
        required: false,
        type: metadata_1.MetafieldType.LIST,
        label: { [metadata_1.Lang.PT_BR]: "Seguidores" },
    }),
    __metadata("design:type", Array)
], Ticket.prototype, "seguidores", void 0);
__decorate([
    (0, decorator_1.prop)({
        name: "tags",
        externalName: "tags",
        required: false,
        type: metadata_1.MetafieldType.LIST,
        label: { [metadata_1.Lang.PT_BR]: "Tags" },
    }),
    __metadata("design:type", Array)
], Ticket.prototype, "tags", void 0);
__decorate([
    (0, decorator_1.prop)({
        name: "solicitante",
        externalName: "solicitante",
        required: false,
        type: metadata_1.MetafieldType.OBJECT,
        label: { [metadata_1.Lang.PT_BR]: "Solicitante" },
    }),
    __metadata("design:type", Object)
], Ticket.prototype, "solicitante", void 0);
__decorate([
    (0, decorator_1.prop)({
        name: "suspenso",
        externalName: "suspenso",
        required: false,
        type: metadata_1.MetafieldType.BOOLEAN,
        label: { [metadata_1.Lang.PT_BR]: "Suspenso" },
    }),
    __metadata("design:type", Boolean)
], Ticket.prototype, "suspenso", void 0);
Ticket = __decorate([
    (0, decorator_1.label)(metadata_1.Lang.PT_BR, "Tíquete")
], Ticket);
exports.Ticket = Ticket;
exports.default = Ticket;
//# sourceMappingURL=ticket.js.map