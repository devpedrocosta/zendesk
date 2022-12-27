const child = require('child_process');

(async( ) => {
    const childs = child.fork('/Users/pedrojoaquimdacosta/integration/integration-hiplatform/dist/index.js');

    childs.on('message', (message) => {
        console.log('--- m essage', JSON.stringify(message));
    })

    childs.send({
        id: 'ASDKFBNASDKFJNSADIJBSADF',
        action: 'incidents/find',
        body: {
            options: {
            },
            data:{
                id:"e652c947-bcba-4609-b1d3-e19171a1727c"
            },
            credentials: [
                {type: 'basic', value: 
                {
                    id: 'mdlt76778ee2-ef9d-4554-a55c-8558ed0eb9dc',
                    secret:'9z97bofnfogt1byomnty'
                }
            }
            ],
            pagination: {
                page: 1000,
                size: 10,
            },
        },
        resources: [{
            type: 'string'
        }],
    })
})()