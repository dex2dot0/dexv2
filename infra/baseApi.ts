export const baseApi = (zone: string) => {
	const api = new sst.aws.ApiGatewayV2('BaseApi', {
		domain: {
			name: `api.${zone}`,
			dns: sst.aws.dns({ override: true }),
		},
	});
	api.route('GET /', 'packages/functions/src/lambda.handler');
	return api;
};
