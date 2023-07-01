import { SSTConfig } from "sst";
import { BaseApi } from "./stacks/BaseApi";
import { Frontend } from "./stacks/Frontend";

export default {
  config(_input) {
    return {
      name: "dex2io",
      region: "us-west-2",
      stage: "production"
    };
  },
  stacks(app) {
    app.stack(BaseApi);
    app.stack(Frontend);
  }
} satisfies SSTConfig;
