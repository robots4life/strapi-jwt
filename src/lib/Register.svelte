<script>
	let username, email, password, payload;

	async function register() {
		payload = {
			username: username,
			email: email,
			password: password
		};
		console.log(payload);

		try {
			const response = await fetch('http://localhost:1337/api/auth/local/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(payload)
			});

			if (response.ok) {
				const responseDetails = await response.json();
				// console.log(responseDetails);

				const jwt = responseDetails.jwt;
				console.log(jwt);

				if (jwt) {
					try {
						const response = await fetch('/auth/register', {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json'
							},
							body: JSON.stringify(jwt)
						});

						const responseDetails = await response.json();
						console.log(responseDetails);
					} catch (error) {
						console.log(error);
					}
				}
			}
		} catch (error) {
			console.log(error);
		}
	}
</script>

<hr />
<h2>Register a new End User</h2>
<p>Username</p>
<input name="username" type="text" bind:value="{username}" />
<p>Email</p>
<input name="email" type="email" bind:value="{email}" />
<p>Password</p>
<input name="password" type="password" bind:value="{password}" />
<br />
<button on:click="{register}">Register</button>
<hr />
