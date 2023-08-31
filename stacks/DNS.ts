import { StackContext } from "sst/constructs";

const baseDomain = process.env.BASE_DOMAIN;

const getDomain = (appStage: string) => {
    return appStage != "dev" ? `${appStage}.dev.${baseDomain}` : `dev.${baseDomain}`;
};

export function DNS({ stack, app }: StackContext) {
    const subDomain = getDomain(app.stage);
    const zone = app.stage == "production" ? baseDomain : `dev.${baseDomain}`;
    const domain = app.stage == "production" ? baseDomain : subDomain;

    return {
        zone,
        domain
    }
};