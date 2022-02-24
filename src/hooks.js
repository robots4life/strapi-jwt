//
// https://kit.svelte.dev/docs/hooks

import * as cookie from 'cookie';

export async function handle({ event, resolve }) {
	//
	// get the cookies
	const cookies = event.request.headers.get('cookie');
	// console.log(cookies);
	// ==
	// A
	// parse the cookies into an object so that we can get the uuid
	const parsedCookies = cookie.parse(cookies || '');
	// console.log(parsedCookies);

	const jwt = parsedCookies.jwt;
	// console.log(jwt);

	if (jwt) {
		//
		// https://www.loopwerk.io/articles/2021/sveltekit-cookies-tokens/
		//
		// B
		// pass the jwt to locals as token object
		event.locals.token = jwt;

		// C
		// resolve the event and return the modified response
		const response = await resolve(event);
		return response;
	} else {
		//
		// if there is no JWT then explicitly empty the event.locals object
		event.locals = null;
		//
		// resolve the event and return the untouched response
		const response = await resolve(event);
		return response;
	}
}

// https://kit.svelte.dev/docs/hooks#getsession

// This function takes the event object and returns a session object that is accessible on the client
export async function getSession(event) {
	// ==
	// D
	// make the event.locals.token data available on the session
	console.log(event.locals);

	if (event.locals !== null) {
		console.log(event.locals.token);
		return event.locals.token;
	}

	return {};
}
