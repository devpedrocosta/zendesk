"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBycontext = exports.bodyFormatResponse = void 0;
function followPath(obj, pathParts) {
    const result = {};
    const firstPath = pathParts.shift();
    if (firstPath === undefined) {
        return {};
    }
    if (pathParts.length > 0) {
        result[firstPath] = followPath(obj[firstPath], pathParts);
    }
    else {
        result[firstPath] = obj[firstPath];
    }
    return result;
}
function Projection(listElemnts, projection) {
    if (!Array.isArray(listElemnts)) {
        return listElemnts;
    }
    return listElemnts.map((v) => {
        const newObject = {};
        for (const path of projection) {
            const parts = path.split(".");
            const firstPath = parts.shift();
            if (firstPath === undefined) {
                continue;
            }
            newObject[firstPath] =
                parts.length > 0 ? followPath(v[firstPath], parts) : v[firstPath];
        }
        return newObject;
    });
}
exports.default = Projection;
function bodyFormatResponse(ctx, result) {
    var _a, _b;
    return ((_a = ctx === null || ctx === void 0 ? void 0 : ctx.params) === null || _a === void 0 ? void 0 : _a.projection) && ((_b = ctx === null || ctx === void 0 ? void 0 : ctx.params) === null || _b === void 0 ? void 0 : _b.projection.length) > 0
        ? Projection(JSON.parse(result.body), ctx.params.projection)
        : JSON.parse(result.body);
}
exports.bodyFormatResponse = bodyFormatResponse;
function getBycontext(payload) {
    let { id } = payload;
    if (id) {
        return `/${id}`;
    }
    return `?${Object.keys(payload)
        .map((key) => `${key}=${encodeURIComponent(payload[key])}`)
        .join("&")}`;
}
exports.getBycontext = getBycontext;
//# sourceMappingURL=projection.js.map