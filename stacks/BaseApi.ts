import { StackContext, Api} from "sst/constructs";

export function BaseApi({ stack }: StackContext) {

  const api = new Api(stack, "BaseApi", {
    routes: {
      "GET /": "packages/functions/src/lambda.handler"
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
