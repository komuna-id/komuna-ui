<script>
	import { Button, Container, Drawer, NavLink, Navbar } from '$lib';
	import { GithubIcon, MenuIcon, MoonIcon, SunIcon, XIcon } from 'svelte-feather-icons';
	import { navigating } from '$app/stores';
	import { theme, toggleTheme } from '$lib/utils';

	let openMobileNavbar = false;

	$: if (openMobileNavbar && $navigating) {
		openMobileNavbar = false;
	}
</script>

<Navbar>
	<p class="font-bold text-lg mr-auto">
		<a href="/">Komuna UI</a>
	</p>

	<div class="hidden md:flex gap-0.5 mr-2.5">
		<NavLink size="sm" href="/quickstart">Quickstart</NavLink>
		<NavLink size="sm" href="/components">Components</NavLink>
		<NavLink size="sm" href="/examples">Examples</NavLink>
	</div>

	<Button size="sm" square class="hidden md:flex mr-2" on:click={toggleTheme}>
		{#if $theme === 'light'}
			<MoonIcon class="w-[1.075rem] h-[1.075rem] stroke-[2.25]" />
		{:else}
			<SunIcon class="w-[1.075rem] h-[1.075rem] stroke-[2.25]" />
		{/if}
	</Button>

	<Button
		href="https://github.com/komuna-id/ui"
		target="_blank"
		size="sm"
		square
		class="hidden md:flex"
	>
		<GithubIcon class="w-[1.075rem] h-[1.075rem] stroke-2" />
	</Button>

	<Button size="sm" square class="flex md:hidden" on:click={() => (openMobileNavbar = true)}>
		<MenuIcon class="w-[1.075rem] h-[1.075rem] stroke-2" />
	</Button>
</Navbar>

<Drawer open={openMobileNavbar} onClose={() => (openMobileNavbar = false)}>
	<Container class="py-3.5">
		<Button size="sm" square class="ml-auto" on:click={() => (openMobileNavbar = false)}>
			<XIcon class="w-[1.075rem] h-[1.075rem] stroke-2" />
		</Button>

		<div class="mt-4 flex flex-col gap-0.5">
			<NavLink size="sm" href="/quickstart">Quickstart</NavLink>
			<NavLink size="sm" href="/components">Components</NavLink>
			<NavLink size="sm" href="/examples">Examples</NavLink>
			<div class="flex justify-center gap-2.5 pt-4">
				<Button size="sm" square>
					<MoonIcon class="w-[1.075rem] h-[1.075rem] stroke-2" />
				</Button>

				<Button href="https://github.com/komuna-id/ui" target="_blank" size="sm" square>
					<GithubIcon class="w-[1.075rem] h-[1.075rem] stroke-2" />
				</Button>
			</div>
		</div>
	</Container>
</Drawer>
