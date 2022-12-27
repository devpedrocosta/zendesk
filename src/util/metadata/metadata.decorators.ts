import "reflect-metadata";
import { Metafield } from "55tec_integration_lib/model/metadata";

export const PROPERTY_METADATA_KEY = Symbol("propertyMetadata");

export function prop(obj: Metafield) {
    return (target: any, prop: string | symbol | number) => {

        let metadata = Reflect.getMetadata(PROPERTY_METADATA_KEY, target) || {};

        metadata[prop] = metadata[prop] || {};

        for (let key of Reflect.ownKeys(obj)) metadata[prop][key] = obj[key as keyof Metafield];

        Reflect.defineMetadata(
            PROPERTY_METADATA_KEY,
            metadata,
            target,
        );
    }
}

export function getMetadata(instance: any): any {

    let metafields = Reflect.getMetadata(PROPERTY_METADATA_KEY, instance) || {};

    return {
        label: instance.label,
        fields: Object.keys(metafields).map(k => metafields[k])
    };

}

export function label(lang: string, text: string) {
    return function (constructor: Function) {
        constructor.prototype.label = {
            ...(constructor.prototype.label || {}),
            [lang]: text
        };
    }
}
