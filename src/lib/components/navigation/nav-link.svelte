<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import { twJoin } from 'tailwind-merge';
	import { page } from '$app/stores';
	import Button from './button.svelte';

	type $$Props = HTMLAnchorAttributes & {
		exact?: boolean;
	};

	export let exact: $$Props['exact'] = false;

	const { href, class: className, ...rest } = $$restProps;

	$: active = exact ? $page.url.pathname === href : $page.url.pathname.startsWith(href);
</script>

<Button {href} size="sm" variant={active ? 'default' : 'transparent'} {...rest}>
	<slot />
</Button>
