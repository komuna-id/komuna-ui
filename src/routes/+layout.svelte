<script>
	import { Button, NavLink, Navbar } from '$lib';
	import { GithubIcon } from 'svelte-feather-icons';
	import '$lib/styles.css';
</script>

<Navbar>
	<p class="font-display font-semibold tracking-wide text-lg mr-auto">
		<a href="/">Komuna UI</a>
	</p>

	<div class="hidden md:flex gap-0.5 mr-2.5">
		<NavLink href="/quickstart">Quickstart</NavLink>
		<NavLink href="/components">Components</NavLink>
		<NavLink href="/examples">Examples</NavLink>
	</div>

	<Button href="https://github.com/komuna-id/ui" target="_blank" size="sm" square>
		<GithubIcon class="w-[1.075rem] h-[1.075rem] stroke-[2]" />
	</Button>
</Navbar>

<slot />
