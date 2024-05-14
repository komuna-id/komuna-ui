<script lang="ts">
	import { theme } from '$lib/utils';
	import { onMount } from 'svelte';

	onMount(() => {
		theme.set(window.theme || 'light');
	});
</script>

<svelte:head>
	<script>
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			window.theme = 'dark';
		} else {
			document.documentElement.classList.remove('dark');
			window.theme = 'light';
		}
	</script>
</svelte:head>

<slot />
