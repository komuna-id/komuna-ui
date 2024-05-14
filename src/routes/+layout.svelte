<script>
	import { Provider } from '$lib';
	import '$lib/styles.css';
	import MainNavbar from './main-navbar.svelte';
</script>

<svelte:head>
	<title>Komuna UI</title>
</svelte:head>

<Provider>
	<MainNavbar />

	<slot />
</Provider>
