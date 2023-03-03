import "reflect-metadata";
import { listen } from "55tec_integration_lib";
import { Channel, StatusCode } from "55tec_integration_lib/model/protocol";
import { Request } from "55tec_integration_lib/model/protocol/integrator/request";
import container from "./boot/container";
import { ResponseError } from "55tec_integration_lib/model/protocol/integrator/response";
import { AuthService } from "./services/auth/auth.services";
import ZendesksellService from "./services";

let channel = process as Channel;

listen(channel, async (request: Request) => {
  if (!request.body)
    throw new ResponseError(
      "Cannot process a request without a body",
      StatusCode.BAD_REQUEST
    );

  const instance = container.get<AuthService>(AuthService);

  instance.setRequest(request.body);

  return await container.get<ZendesksellService>(ZendesksellService).chooseEvent(request);
});
