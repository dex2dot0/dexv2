<script lang="ts">
	import { onMount } from 'svelte';
	import Amplify from '../../components/brand-logos/Amplify.svelte';

	export let numLogos: number = 100;
	let logos = Array.from({ length: numLogos }, (_, i) => i);

	let initialRadiusPx: number;
	let baseRadiusIncrement = 5;
	let angleIncrement = 16;
	let baseSizeRem: number;
	let sizeIncrementPerLogo: number;

	onMount(() => {
		// For mobile viewports will automatically cycle through the image sections
		// rather than wait for hover to change the image
		window.addEventListener('resize', handleResize);
		handleResize();
	});

	function handleResize() {
		const width = window.innerWidth;

		if (width < 600) {
			initialRadiusPx = 120;
			baseSizeRem = 1.5;
			sizeIncrementPerLogo = 0.15;
		} else {
			initialRadiusPx = 220;
			baseSizeRem = 3;
			sizeIncrementPerLogo = 0.1;
		}
	}

	// Calculate size of each logo
	function getSize(index: number) {
		return baseSizeRem + sizeIncrementPerLogo * index;
	}

	// Calculate radius increment
	function getRadiusIncrement(index: number) {
		return baseRadiusIncrement + getSize(index) / 2;
	}

	// Calculate position for each logo in a spiral pattern
	function calculateSpiralPosition(index: number) {
		let totalRadius = initialRadiusPx;
		for (let i = 0; i <= index; i++) {
			totalRadius += getRadiusIncrement(i);
		}
		const angle = angleIncrement * index;
		const x = totalRadius * Math.cos((angle * Math.PI) / 180);
		const y = totalRadius * Math.sin((angle * Math.PI) / 180);
		return { x, y };
	}
</script>

<div class="absolute overflow-hidden" style="width: 100vw; height: 100vh;">
	<!-- Logos positioned in a spiral pattern -->
	{#if baseSizeRem && sizeIncrementPerLogo}
		{#each logos as _, index}
			<div
				class="absolute"
				style={`left: 50%; top: 50%; transform: translate(${calculateSpiralPosition(index).x}px, ${
					calculateSpiralPosition(index).y
				}px)`}
			>
				<Amplify
					style={`width: ${getSize(index)}rem; height: ${getSize(index)}rem;`}
					className={`fill-tertiary-500 stroke-tertiary-800`}
				/>
			</div>
		{/each}
	{/if}
</div>
