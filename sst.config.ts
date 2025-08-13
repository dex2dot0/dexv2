import { SSTConfig } from 'sst';
import { DNS } from './stacks/DNS';
import { BaseApi } from './stacks/BaseApi';
import { Frontend } from './stacks/Frontend';
import { DexBlog } from './stacks/Blog';
import { RandomApi } from './stacks/RandomApi';

export default {
	config(_input) {
		return {
			name: 'dex2io',
			region: 'us-west-2',
			stage: 'production',
		};
	},
	stacks(app) {
		app.stack(DNS);
		app.stack(BaseApi);
		app.stack(Frontend);
		app.stack(DexBlog);
		app.stack(RandomApi);
	},
} satisfies SSTConfig;
