export async function post({ request }) {
	const body = await request.json();
	console.log(body);

	return {
		status: 200,
		body: {
			message: 'Ok'
		}
	};
}
