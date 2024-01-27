<script lang="ts">
	import { onMount } from 'svelte';
	import Logos from './logos.svelte';

	let mediaSize: string;

	onMount(() => {
		// For mobile viewports will automatically cycle through the image sections
		// rather than wait for hover to change the image
		window.addEventListener('resize', handleResize);
		handleResize();
	});

	async function handleResize() {
		if (window.innerWidth < 600) {
			mediaSize = 'sm';
		} else if (window.innerWidth < 900) {
			mediaSize = 'md';
		} else if (window.innerWidth < 1280) {
			mediaSize = 'lg';
		} else {
			mediaSize = 'xl';
		}
	}
</script>

<div class="absolute overflow-hidden" style="width: 100vw; height: 100vh;">
	<!-- Logos positioned in a spiral pattern -->
	{#if mediaSize}
		<Logos bind:mediaSize />
	{/if}
</div>
