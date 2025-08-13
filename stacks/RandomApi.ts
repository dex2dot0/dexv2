import { StackContext, Api, use } from 'sst/constructs';
import { DNS } from './DNS';

export function BaseApi({ app, stack }: StackContext) {
	const dns = use(DNS);

	const api = new Api(stack, 'myRandomApi', {
		routes: {
			'GET /': 'packages/functions/src/lambda.handler',
		},
	});

	stack.addOutputs({
		ApiEndpoint: api.url,
	});
}
