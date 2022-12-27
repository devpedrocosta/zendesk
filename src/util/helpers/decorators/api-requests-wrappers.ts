
export function apiRequest (options?: { pagination: boolean }) {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor => {
    const originalMethod = descriptor.value
    descriptor.value = async function (...args: any[]) {
      return await originalMethod.apply(this, args)
    }
    return descriptor
  }
}

// if (options?.pagination) {
//   const parseHeaderLink: HiHeaderPagination = req.headers.link.split(',').reduce(parserHiPagination, {})
//   req.pagination = parseHeaderLink
// }
// function parserHiPagination (object: {[key: string]: string}, link: string): HiHeaderPagination {
//   const headerRegex = /<(.+)>;\s?rel="(.+)"/gi
//   const [, url, paginationIndex] = headerRegex.exec(link) || []
//   if (paginationIndex) {
//     object[paginationIndex.toLowerCase()] = url
//   }
//   return object
// }
