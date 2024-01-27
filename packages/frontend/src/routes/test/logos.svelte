<script lang="ts">
	export let mediaSize: string;
	import Amplify from '../../components/brand-logos/Amplify.svelte';

	let baseRadiusIncrement = 5;
	let numLogos: number = 100;
	let logos: Array<any> = Array.from({ length: numLogos }, (_, i) => i);
	let angleIncrement = 16;
	let initialRadiusPx: number;
	let baseSizeRem: number;
	let sizeIncrementPerLogo: number;

	$: if (mediaSize) {
		switch (mediaSize) {
			case 'sm':
				initialRadiusPx = 120;
				baseSizeRem = 1.5;
				sizeIncrementPerLogo = 0.15;
				break;
			case 'md':
				initialRadiusPx = 160;
				baseSizeRem = 2;
				sizeIncrementPerLogo = 0.1375;
				break;
			case 'lg':
				initialRadiusPx = 200;
				baseSizeRem = 2.5;
				sizeIncrementPerLogo = 0.125;
				break;
			case 'xl':
				initialRadiusPx = 220;
				baseSizeRem = 3;
				sizeIncrementPerLogo = 0.1;
				break;
		}
	}

	// Calculate size of each logo
	function getSize(index: number): number {
		return baseSizeRem + sizeIncrementPerLogo * index;
	}

	// Calculate radius increment
	function getRadiusIncrement(index: number) {
		return baseRadiusIncrement + getSize(index) / 2;
	}

	// Calculate position for each logo in a spiral pattern
	$: calculateSpiralPosition = (index: number) => {
		let totalRadius = initialRadiusPx;
		for (let i = 0; i <= index; i++) {
			totalRadius += getRadiusIncrement(i);
		}
		const angle = angleIncrement * index;
		const x = totalRadius * Math.cos((angle * Math.PI) / 180);
		const y = totalRadius * Math.sin((angle * Math.PI) / 180);
		return { x, y };
	};
</script>

{#if mediaSize}
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
