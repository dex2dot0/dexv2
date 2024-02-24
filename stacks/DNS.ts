import { StackContext } from "sst/constructs";

const baseDomain = process.env.BASE_DOMAIN;

export function DNS({ stack, app }: StackContext) {
    const zone = app.stage == "production" ? baseDomain : `${app.stage}.${baseDomain}`;
    const domain = baseDomain;

    return {
        zone,
        domain
    }
};