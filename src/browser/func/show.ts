import {Context} from '55tec_integration_lib/model/protocol/browser/func';
import {Entity} from "55tec_integration_lib/model/metadata/action/entity";

export default function (ctx: Context, entity: Entity, id: string = '', url: string) {
    return new Promise((resolve, reject) => {
        try {
            let payload = {
                forceNewTab: true,
                href: ''
            }
            if (entity === 'incidents') {
                payload.href = `/Ticket/Edit/${id}`
            }
            if (entity === 'customers') {
                payload.href = `/Person/Edit/${id}`
            }
            window.parent.postMessage({
                action: 'open-tab',
                payload
            }, '*');
        } catch (err) {
            reject(err);
        }
    });
}
