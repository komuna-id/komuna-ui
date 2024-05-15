<script lang="ts">
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
	import { twJoin, twMerge } from 'tailwind-merge';

	type $$Props = HTMLButtonAttributes &
		HTMLAnchorAttributes & {
			className?: string;
			href?: string;
			size?: 'sm' | 'md';
			square?: boolean;
			variant?: 'default' | 'primary' | 'transparent' | 'active';
		};

	export let className: $$Props['className'] = '';
	export let href: $$Props['href'] = '';
	export let size: $$Props['size'] = 'md';
	export let square: $$Props['square'] = false;
	export let variant: $$Props['variant'] = 'default';

	const { class: __class, disabled, ...rest } = $$restProps;

	$: _class = twMerge(
		'font-semibold tracking-wide',
		'relative flex items-center justify-center whitespace-nowrap',
		size === 'sm' && 'px-3.5 h-10 text-sm rounded-md',
		size === 'md' && 'px-5 h-11 text-base rounded-md',
		square && size === 'sm' && 'px-0 w-10',
		square && size === 'md' && 'px-0 w-11',
		variant === 'default' &&
			twJoin(
				'bg-white text-neutral-800/80 border border-neutral-200 shadow-sm hover:bg-neutral-50',
				'dark:bg-neutral-900 dark:hover:bg-neutral-800/50 dark:border-neutral-700/70 dark:text-neutral-300'
			),
		variant === 'primary' && 'bg-blue-600/90 text-neutral-50 hover:bg-blue-600',
		variant === 'transparent' &&
			'text-neutral-500 hover:text-neutral-800/80 dark:text-neutral-400 dark:hover:text-neutral-300',
		variant === 'active' &&
			'text-neutral-800/80 bg-neutral-100 dark:bg-neutral-800/80 dark:text-neutral-300',
		disabled && 'pointer-events-none opacity-65',
		className,
		__class
	);
</script>

{#if href}
	<a {href} class={_class} {...rest}>
		<slot />
	</a>
{:else}
	<button class={_class} {...rest} on:click>
		<slot />
	</button>
{/if}
