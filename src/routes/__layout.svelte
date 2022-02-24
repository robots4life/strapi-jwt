<script>
	import Navigation from '$lib/Navigation.svelte';
</script>

<Navigation />

<slot><!-- optional fallback --></slot>

<style>
	:global(html) {
		font-family: sans-serif;
	}
</style>
