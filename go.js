const child = require("child_process");

(async () => {
  const childs = child.fork(
    "/Users/pedrojoaquimdacosta/integration/integrador_ac/dist/index.js"
  );

  childs.on("message", (message) => {
    console.log("--- m essage", JSON.stringify(message));
  });

  childs.send(
    {"id":"20319ec0-ad5d-11ed-9ba5-f753c144f1c1",
    "action":"customers/create",
    "body":{"data":{"nome":"sdf",
    "organizacoes":[{"organizacaoKey":-1,"nome":"-- Nenhuma --","nomeParaExibicao":"-- Nenhuma --","ativo":true,
    "equipe":{"equipeKey":1,"nome":"Minha Primeira Equipe de Atendimento",
    "tipoDeEquipe":"ATENDIMENTO","cor":"Magenta"},"valorHora":0,
    "horasSuporte":0,"visualizavel":false,"ad":false,
    "orgDomains":[]}],
    "email":"sfsf@asda.com",
    "telefones":"+5511940558203",
    "ativo":true},
    "credentials":[{"type":"basic","value":{"id":"nelson.junior@55pbx.com","secret":"ih58ARUgTDsjCKyByfBzGA=="}}],
    "options":{"subdomain":"55pbx","domain":"https://55pbx.acelerato.com","accountType":"user"}},"resources":[{"type":"browser","env":"tab","app":"webphone"}]}
    // {
    //   id: "4c1d5d80-a989-11ed-95be-d350168cab7b",
    //   action: "customers/create",
    //   body: {
    //     data: {
    //       "email": "usuaruioteste@gmail.com",  "nome": "Usuáruio Teste"
    //      },
    //     // projection:["name","descricao","titulo"],
    //     credentials: [
    //       {
    //         type: "basic",
    //         value: {
    //           id: "nelson.junior@55pbx.com",
    //           secret: "ih58ARUgTDsjCKyByfBzGA==",
    //         },
    //       },
    //     ],
    //     options: { domain: "https://55pbx.acelerato.com", accountType: "user" },
    //   },
    //   resources: [{ type: "browser", env: "tab", app: "webphone" }],
    // }
    // {
    //     "id":"f14dbfc0-a79a-11ed-a3b9-7d5f437fdb9a",
    //     "action":"incidents/list",
    //     "body":{
    //         "data":{},
    //         "credentials":[{"type":"basic","value":{"id":"nelson.junior@55pbx.com","secret":"ih58ARUgTDsjCKyByfBzGA=="}}],
    //         "options":{"domain":"https://55pbx.acelerato.com","accountType":"user"},
    //         "pagination":{"page":0,"size":100},
    //         "projection":["name","cpf","cnpj","companyName","email","phone","code","nome","organizacoes","telefones","ativo","apenasContato","apenasEmail","enviarEmail"]
    //     },
    //     "resources":[{"type":"browser","env":"tab","app":"webphone"}]
    // }
    //     {
    //     id: 'ASDKFBNASDKFJNSADIJBSADF',
    //     action: 'company/list',
    //     body: {
    //         options: {
    //         },
    //         data:{
    //             id:"e652c947-bcba-4609-b1d3-e19171a1727c"
    //         },
    //         credentials: [
    //             {type: 'basic', value:
    //             {
    //                 id: 'mdlt76778ee2-ef9d-4554-a55c-8558ed0eb9dc',
    //                 secret:'9z97bofnfogt1byomnty'
    //             }
    //         }
    //         ],
    //         pagination: {
    //             page: 1000,
    //             size: 10,
    //         },
    //     },
    //     resources: [{
    //         type: 'string'
    //     }],
    // }
  );
})();
