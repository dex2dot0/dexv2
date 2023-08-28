import { StackContext } from "sst/constructs";

const getDomain = (appStage: string) => {
    return appStage != "dev" ? `${appStage}.dev.dexv2.com` : "dev.dexv2.com";
};

export function DNS({ stack, app }: StackContext) {
    const subDomain = getDomain(app.stage);
    const zone = app.stage == "production" ? "dexv2.com" : "dev.dexv2.com";
    const domain = app.stage == "production" ? "dexv2.com" : subDomain;

    return {
        zone,
        domain
    }
};