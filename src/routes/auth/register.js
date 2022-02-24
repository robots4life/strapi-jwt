export async function post({ request }) {
	const payload = await request.json();
	console.log(payload);

	try {
		// getting the the End User credentials from the client we now deal with Strapi and the JWT on the server
		const strapiResponse = await fetch('http://localhost:1337/api/auth/local/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(payload)
		});

		if (strapiResponse.ok) {
			const strapiResponseDetails = await strapiResponse.json();
			console.log(strapiResponseDetails);

			const jwt = strapiResponseDetails.jwt;
			console.log(jwt);

			if (jwt) {
				const headers = {
					Authorization: 'Bearer ' + jwt
				};
				return {
					status: 200,
					headers,
					body: {
						message: 'Server says : Registration successful'
					}
				};
			}
		}
	} catch (error) {
		console.log(error);
	}
}
