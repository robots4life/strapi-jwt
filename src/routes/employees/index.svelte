<script>
	export let locals;

	// https://svelte.dev/repl/0104cd0c8b934b10a1887c3e962e7860?version=3.46.4
	// load external data on click of button

	// define the promose outside of the async function
	// and also outside of the button buttonFetchPosts function

	// this is necessary for the {#await fetchDataPromise} block
	// as otherwise the {#await promise} block is undefined
	let fetchDataPromise;

	function buttonFetchPosts() {
		// load external data on click of button function
		async function fetchEmployees() {
			//
			// https://docs.strapi.io/developer-docs/latest/guides/auth-request.html#fetch-articles

			//
			// fetch employee data as an authenticated End User

			let response = await fetch('http://localhost:1337/api/employees/', {
				method: 'GET',
				headers: {
					Authorization: 'Bearer ' + locals.token,
					'Content-Type': 'application/json'
				}
			});

			let employeesData = await response.json();

			employeesData = employeesData.data;
			console.log(employeesData);

			return employeesData;
		}
		fetchDataPromise = fetchEmployees();
	}
</script>

<p>{JSON.stringify(locals)}</p>

<button on:click="{buttonFetchPosts}">Fetch Posts from JSONPlaceholder</button>

{#if fetchDataPromise}
	<h1>Button Fetch Posts</h1>
	<!-- content here -->
	<div>
		{#await fetchDataPromise}
			<p>Loading...</p>
		{:then employeesData}
			{#each employeesData as employee}
				{@const data = employee.attributes}
				<p>Employee First Name : {data.firstName}</p>
				<p>Employee Last Name : {data.lastName}</p>
				<p>Employee Birthday : {data.birthday}</p>
				<p>Employee Start Date : {data.startDate}</p>
				<p>Employee End Date : {data.endDate}</p>
				<p>Employee Salary : {data.salary}</p>
				<p>Employee Role : {data.role}</p>
				<hr />
			{/each}
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}
	</div>
{/if}
