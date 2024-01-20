<script lang="ts">
	export let numLogos: number = 100; // Number of logos
	import Amplify from '../../components/brand-logos/Amplify.svelte';
	let logos = Array.from({ length: numLogos }, (_, i) => i);
	const initialRadiusPx = 220; // Initial radius in pixels
	const baseRadiusIncrement = 5; // Base incremental increase in radius per logo
	const angleIncrement = 16; // Angle increment in degrees
	const baseSizeRem = 3; // Base size in rem for the first logo
	const sizeIncrementPerLogo = 0.1; // Size increment per logo in rem

	function getSize(index: number) {
		const sizeIncrement = index > 20 ? 0.15 : sizeIncrementPerLogo;
		return baseSizeRem + sizeIncrement * index;
	}

	function getRadiusIncrement(index: number) {
		return baseRadiusIncrement + getSize(index) / 2; // Adjust this formula as needed
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
</div>
