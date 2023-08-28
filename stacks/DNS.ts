import { StackContext } from "sst/constructs";

export function DNS({ stack, app }: StackContext) {
    const zone = app.stage == "prod" ? "dexv2.com" : "dev.dexv2.com";
    const domain = app.stage == "prod" ? "dexv2.com" : `${app.stage}.dexv2.com`;

    return {
        zone,
        domain
    }
};