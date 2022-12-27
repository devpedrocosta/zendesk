
export function filterToString(filters: {[f: string]: any, phone?: string | string[]}) {
    let str = "";
    for (let f in filters) {
        const v = filters[f];
        if (!(v instanceof Array) && (typeof v !== "string") && (typeof v !== "number")) continue;

        if (str) str += " or ";
        str += `(${fieldToCondition(f, v)})`;
    }

    console.log("Filtro gerado: " + str);

    return str;
}

const movideskStringFields = [
    "userName",
    "accessProfile",
    "businessName",
    "corporateName",
    "businessBranch",
    "cpfCnpj",
    "role",
    "bossId",
    "bossName",
    "classification",
    "cultureId",
    "timeZoneId",
    "authenticationOn",
    "createdBy",
    "changedBy",
    "observations"
];

function fieldToCondition(field: string, value: number | string | number[] | string[]) {

    let parser = (f: string, v: string | number) => {
        if (typeof v === "string") v = `'${v}'`;
        return `${f} eq ${v}`
    };

    if (field === "phone") parser = (_f: string, v: string | number) => `Contacts/any(c: contains(c/Contact,'${v}'))`;
    if (field === "email") parser = (_f: string, v: string | number) => `Emails/any(e: contains(e/Email,'${v}'))`;
    if (field === "teams") parser = (_f: string, v: string | number) => `Teams/any(t: contains(t,'${v}'))`;
    if (field === "isActive") parser = (_f: string, v: string | number) => {
        if (['true', 1, 'ativo'].includes(v)) return `isActive eq true`;
        if (['false', 0, 'inativo'].includes(v)) return `isActive eq false`;
        return '';
    }
    if (movideskStringFields.includes(field)) parser = (f: string, v: string | number) => `contains(${f}, '${v}')`;

    // @ts-ignore
    if (value instanceof Array) return value.map((v: string | number) => parser(field, v)).join(" or ");

    return parser(field, value);
}
