import { StackContext } from 'sst/constructs';

const baseDomain = process.env.BASE_DOMAIN;

export function DNS({ stack, app }: StackContext) {
	const zone = app.stage == 'production' ? baseDomain : `${app.stage}.${baseDomain}`;
	const domain = baseDomain;
	const domainAlias =
		app.stage == 'production' ? `www.${baseDomain}` : `www.${app.stage}.${baseDomain}`;

	return {
		zone,
		domain,
		domainAlias,
	};
}
