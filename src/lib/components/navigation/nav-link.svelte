<script lang="ts">
	import { page } from '$app/stores';
	import Button from './button.svelte';
	import type { ComponentProps } from 'svelte';

	type $$Props = ComponentProps<Button> & {
		exact?: boolean;
	};

	export let exact: $$Props['exact'] = false;

	const { href, class: className, ...rest } = $$restProps;

	$: active = exact ? $page.url.pathname === href : $page.url.pathname.startsWith(href);
</script>

<Button {href} variant={active ? 'active' : 'transparent'} {...rest}>
	<slot />
</Button>
