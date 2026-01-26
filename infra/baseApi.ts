export const baseApi = (zone: string, hostedZoneId: string) => {
	const api = new sst.aws.ApiGatewayV2('BaseApi', {
		domain: {
			name: `api.${zone}`,
		},
	});
	api.route('GET /', 'packages/functions/src/lambda.handler');
	return api;
};
