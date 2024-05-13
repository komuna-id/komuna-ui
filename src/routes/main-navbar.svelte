<script>
	import { Button, Container, Drawer, NavLink, Navbar } from '$lib';
	import { GithubIcon, MenuIcon, MoonIcon, XIcon } from 'svelte-feather-icons';
	import { navigating } from '$app/stores';

	let openMobileNavbar = false;

	$: if (openMobileNavbar && $navigating) {
		openMobileNavbar = false;
	}
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

	<Button size="sm" square class="hidden md:flex mr-2">
		<MoonIcon class="w-[1.075rem] h-[1.075rem] stroke-2" />
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
		<div class="flex items-center flex-nowrap">
			<h4 class="mr-auto truncate">Main Menu</h4>
			<Button size="sm" square on:click={() => (openMobileNavbar = false)}>
				<XIcon class="w-[1.075rem] h-[1.075rem] stroke-2" />
			</Button>
		</div>

		<div class="mt-4 flex flex-col gap-0.5">
			<NavLink href="/quickstart">Quickstart</NavLink>
			<NavLink href="/components">Components</NavLink>
			<NavLink href="/examples">Examples</NavLink>
		</div>
	</Container>
</Drawer>
