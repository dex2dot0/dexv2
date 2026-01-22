export const baseApi = (zone: string) => {
	const api = new sst.aws.ApiGatewayV2('BaseApi', {
		//domain: `api.${zone}`,
	});
	api.route('GET /', 'packages/functions/src/lambda.handler');
	return api;
};
