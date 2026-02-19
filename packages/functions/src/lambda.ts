export const handler = async () => {
	return {
		statusCode: 200,
		body: `Hello world. The time is ${new Date().toISOString()}`,
	};
};
