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
exports.Customer = void 0;
const metadata_1 = require("55tec_integration_lib/model/metadata");
const decorator_1 = require("55tec_integration_lib/model/metadata/decorator");
let Customer = class Customer {
};
__decorate([
    (0, decorator_1.prop)({
        name: "name",
        externalName: "nome",
        required: true,
        type: metadata_1.MetafieldType.TEXT,
        label: { [metadata_1.Lang.PT_BR]: "Nome" },
    }),
    __metadata("design:type", String)
], Customer.prototype, "nome", void 0);
__decorate([
    (0, decorator_1.prop)({
        name: "companyName",
        externalName: "organizacoes",
        required: false,
        type: metadata_1.MetafieldType.TEXT,
        label: { [metadata_1.Lang.PT_BR]: "Organizações" },
    }),
    __metadata("design:type", Array)
], Customer.prototype, "organizacoes", void 0);
__decorate([
    (0, decorator_1.prop)({
        name: "phone",
        externalName: "telefones",
        required: false,
        type: metadata_1.MetafieldType.TEXT,
        label: { [metadata_1.Lang.PT_BR]: "Telefone" },
    }),
    __metadata("design:type", Array)
], Customer.prototype, "telefones", void 0);
__decorate([
    (0, decorator_1.prop)({
        name: "email",
        externalName: "email",
        required: true,
        type: metadata_1.MetafieldType.TEXT,
        label: { [metadata_1.Lang.PT_BR]: "E-mail do contato" },
    }),
    __metadata("design:type", String)
], Customer.prototype, "email", void 0);
__decorate([
    (0, decorator_1.prop)({
        name: "cpf",
        externalName: "cpf",
        required: false,
        type: metadata_1.MetafieldType.TEXT,
        label: { [metadata_1.Lang.PT_BR]: "CPF" },
    }),
    __metadata("design:type", String)
], Customer.prototype, "cpf", void 0);
__decorate([
    (0, decorator_1.prop)({
        name: "ativo",
        externalName: "ativo",
        required: false,
        type: metadata_1.MetafieldType.BOOLEAN,
        label: { [metadata_1.Lang.PT_BR]: "Ativo" },
    }),
    __metadata("design:type", Boolean)
], Customer.prototype, "ativo", void 0);
__decorate([
    (0, decorator_1.prop)({
        name: "apenasContato",
        externalName: "apenasContato",
        required: false,
        type: metadata_1.MetafieldType.BOOLEAN,
        label: { [metadata_1.Lang.PT_BR]: "Apenas contato" },
    }),
    __metadata("design:type", Boolean)
], Customer.prototype, "apenasContato", void 0);
__decorate([
    (0, decorator_1.prop)({
        name: "apenasEmail",
        externalName: "apenasEmail",
        required: false,
        type: metadata_1.MetafieldType.BOOLEAN,
        label: { [metadata_1.Lang.PT_BR]: "Apenas email" },
    }),
    __metadata("design:type", Boolean)
], Customer.prototype, "apenasEmail", void 0);
__decorate([
    (0, decorator_1.prop)({
        name: "enviarEmail",
        externalName: "enviarEmail",
        required: false,
        type: metadata_1.MetafieldType.BOOLEAN,
        label: { [metadata_1.Lang.PT_BR]: "Enviar email" },
    }),
    __metadata("design:type", Boolean)
], Customer.prototype, "enviarEmail", void 0);
Customer = __decorate([
    (0, decorator_1.label)(metadata_1.Lang.PT_BR, "Customer")
], Customer);
exports.Customer = Customer;
exports.default = Customer;
//# sourceMappingURL=customer.js.map