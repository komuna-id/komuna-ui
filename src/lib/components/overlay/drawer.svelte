<script lang="ts">
	import type { HTMLHtmlAttributes } from 'svelte/elements';
	import { fade, slide } from 'svelte/transition';

	type $$Props = HTMLHtmlAttributes & {
		open: boolean;
		onClose: () => void;
	};

	export let open: $$Props['open'];
	export let onClose: $$Props['onClose'];
</script>

{#if open}
	<div class="fixed inset-0 z-20">
		<div
			class="absolute inset-0 bg-neutral-700/70"
			aria-hidden="true"
			on:click={onClose}
			transition:fade={{ duration: 250 }}
		/>
		<div
			class="absolute inset-y-0 right-0 w-full max-w-64 bg-white"
			transition:slide={{ axis: 'x', duration: 200 }}
		>
			<slot />
		</div>
	</div>
{/if}
