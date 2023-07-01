import { SSTConfig } from "sst";
import { BaseApi } from "./stacks/BaseApi";

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
  }
} satisfies SSTConfig;
