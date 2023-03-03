function followPath(obj: any, pathParts: string[]): any {
  const result: { [k: string]: any } = {};

  const firstPath = pathParts.shift();
  if (firstPath === undefined) {
    return {};
  }

  if (pathParts.length > 0) {
    result[firstPath] = followPath(obj[firstPath], pathParts);
  } else {
    result[firstPath] = obj[firstPath];
  }

  return result;
}

export default function Projection(listElemnts: any, projection: any) {
  if (!Array.isArray(listElemnts)) {
    return listElemnts;
  }

  return listElemnts.map((v: any) => {
    const newObject: any = {};

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

export function bodyFormatResponse(ctx: any, result: any) {
  return ctx?.params?.projection && ctx?.params?.projection.length > 0
    ? Projection(result.data, ctx.params.projection)
    : result.data;
}

export function getBycontext(payload: any) {
  let { id } = payload;
  if (id) {
    return `/${id}`;
  }
  return `?${Object.keys(payload)
    .map((key) => `${key}=${encodeURIComponent(payload[key])}`)
    .join("&")}`;
}
