<script lang="ts">
	import { Container } from '.';
</script>

<div class="fixed top-0 inset-x-0 bg-neutral-50 z-10 border-b border-neutral-200">
	<Container class="h-[3.65rem] flex items-center">
		<slot />
	</Container>
</div>
<div class="pb-20" />
