<script lang="ts">
	import { onMount } from 'svelte';
	import BrandLogos from '../components/brand-logos/BrandLogos.svelte';

	// create a map of image indexes to categories
	const categoryMap: { [key: string]: string } = {
		'0': 'hello world!',
		'1': 'api',
		'2': 'webdev',
		'3': 'agile',
		'4': 'data',
		'5': 'serverless',
		'6': 'devops',
		'7': 'cloud',
		'8': 'fullstack'
	};

	$: currentDivFocus = '0';
	$: imageSrc = '/images/holga_0.png';
	$: currentCategory = 'hello world';
	$: sentence = '';

	let width: number;
	let mediaSize: string;

	function waitForMs(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	async function typeSentence(delay = 100) {
		const letters = currentCategory.split('');
		for (let i = 0; i < letters.length; i++) {
			await waitForMs(delay);
			sentence += letters[i];
		}

		// Calculate remaining time in the interval
		const timeTyped = letters.length * delay;
		const remainingInterval = 5000 - timeTyped;

		// Calculate wait time before deletion starts
		const deletionTime = sentence.length * 100; // time to delete the sentence
		const waitTime = remainingInterval - deletionTime - 100; // buffer of 100 ms

		await waitForMs(waitTime > 0 ? waitTime : 0);
		deleteSentence();
	}

	async function deleteSentence() {
		for (let i = sentence.length; i > 0; i--) {
			await waitForMs(100);
			sentence = sentence.slice(0, -1);
		}
	}

	onMount(() => {
		typeSentence();
		window.addEventListener('resize', handleResize);
		handleResize();

		const interval = setInterval(() => {
			// change image on timer
			currentDivFocus = String((Number(currentDivFocus) + 1) % 8);
			imageSrc = `/images/holga_${currentDivFocus}.png`;

			// change category on timer
			currentCategory = categoryMap[currentDivFocus];
			typeSentence();
		}, 5000);

		return () => {
			clearInterval(interval);
		};
	});

	const handleResize = () => {
		width = window.innerWidth;

		if (window.innerWidth < 600) {
			mediaSize = 'sm';
		} else if (window.innerWidth < 900) {
			mediaSize = 'md';
		} else if (window.innerWidth < 1280) {
			mediaSize = 'lg';
		} else {
			mediaSize = 'xl';
		}
	};
</script>

{#if mediaSize}
	<div class="absolute overflow-clip -z-10 h-full w-screen">
		<BrandLogos {currentCategory} bind:mediaSize />
	</div>
	<div class="grid w-screen h-full place-content-center grid-auto-rows gap-y-8 text-center">
		<figure class="place-self-center">
			<section class="img-bg" />
			<img width="200" height="200" src={imageSrc} alt="headshot" />
		</figure>
		<div class="typing-container flex flex-row content-center place-self-center overflow-hidden">
			<span class="h1 gradient-heading uppercase" id="sentence">{sentence}</span>
			<span
				class="input-cursor bg-gradient-to-br from-primary-500 via-tertiary-500 to-secondary-300"
			/>
		</div>
	</div>
{:else}
	Loading...
{/if}

<style lang="postcss">
	figure {
		transition: transform 0.3s ease;
	}
	figure svg,
	.img-bg {
		@apply w-64 h-64 md:w-80 md:h-80;
	}
	.img-bg {
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite, glow 5s linear infinite;
	}

	@keyframes glow {
		0% {
			@apply bg-primary-100/100;
		}
		33% {
			@apply bg-secondary-700/50;
		}
		66% {
			@apply bg-tertiary-600/50;
		}
		100% {
			@apply bg-primary-700/50;
		}
	}
	@keyframes pulse {
		70% {
			transform: scale(1);
		}
	}

	.input-cursor {
		display: inline-block;
		width: 3px;
		height: 50px;
		background-color: bg-gradient-primary-secondary;
		padding-left: 5px;
		animation: blink 0.6s linear infinite alternate;
	}

	@keyframes blink {
		0% {
			opacity: 1;
		}
		40% {
			opacity: 1;
		}
		60% {
			opacity: 0;
		}
		100% {
			opacity: 0;
		}
	}
</style>
