import { Context } from "55tec_integration_lib/model/protocol/browser/func";

export default function (ctx: Context) {
    return new Promise(async (resolve, reject) => {
        try {
            resolve(ctx);
        } catch (err) {
            reject(err);
        }
    });
};
