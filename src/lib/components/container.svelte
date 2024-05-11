<script lang="ts">
	import type { HTMLHtmlAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type $$Props = HTMLHtmlAttributes;

	const { class: className, ...rest } = $$restProps;
</script>

<div class={twMerge('w-full max-w-screen-lg mx-auto px-5 md:px-6', className)} {...rest}>
	<slot />
</div>
