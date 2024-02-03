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
	<div class="grid w-full h-full place-content-center grid-auto-rows gap-y-8 text-center">
		<figure class="place-self-center">
			<section class="img-bg" />
			<img width="200" height="200" src={imageSrc} alt="headshot" />
		</figure>
		<div class="typing-container flex flex-row content-center place-self-center p-2">
			<span class="h1 gradient-heading uppercase" id="sentence">{sentence}</span>
			<span
				class="input-cursor bg-gradient-to-br from-primary-500 via-tertiary-500 to-secondary-300"
			/>
		</div>
	</div>
	<!-- <div class="h-full w-full flex items-center justify-center">
		<div class="grid grid-cols-3 h-full w-full text-center align-middle">
			<div>
				<div
					id="11"
					on:mouseover={() => onActive(11)}
					on:click={() => onActive(11)}
					class="h-1/3 flex items-center justify-center"
				>
					<span class={currentDivFocus === '11' ? 'focus-heading' : 'non-focus-heading'}>Cloud</span
					>
				</div>
				<div
					id="9"
					on:mouseover={() => onActive(9)}
					on:click={() => onActive(9)}
					class="h-1/3 flex items-center justify-center"
				>
					<span class={currentDivFocus === '9' ? 'focus-heading' : 'non-focus-heading'}>DevOps</span
					>
				</div>
				<div
					id="7"
					on:mouseover={() => onActive(7)}
					on:click={() => onActive(7)}
					class="h-1/3 flex flex-col items-center justify-center"
				>
					<span class={currentDivFocus === '7' ? 'focus-heading' : 'non-focus-heading'}
						>Serverless</span
					>
				</div>
			</div>
			<div>
				<div
					id="12"
					on:mouseover={() => onActive(12)}
					on:click={() => onActive(12)}
					class="h-1/3 flex flex-col items-center justify-center"
				>
					<span class={currentDivFocus === '12' ? 'focus-heading' : 'non-focus-heading'}
						>Full-Stack</span
					>
				</div>
				<div
					id="0"
					on:mouseover={() => onActive(0)}
					on:click={() => onActive(0)}
					class="grid place-content-center w-full h-1/3"
				>
					<figure class="w-full h-full">
						<section class="img-bg" />
						<img width="200" height="200" src={imageSrc} alt="headshot" />
					</figure>
				</div>
				<div
					id="6"
					on:mouseover={() => onActive(6)}
					on:click={() => onActive(6)}
					class="h-1/3 flex flex-col items-center justify-center"
				>
					<span class={currentDivFocus === '6' ? 'focus-heading' : 'non-focus-heading'}>Data</span>
				</div>
			</div>
			<div>
				<div
					id="1"
					on:mouseover={() => onActive(1)}
					on:click={() => onActive(1)}
					class="h-1/3 flex items-center justify-center"
				>
					<span class={currentDivFocus === '1' ? 'focus-heading' : 'non-focus-heading'}>APIs</span>
				</div>
				<div
					id="3"
					on:mouseover={() => onActive(3)}
					on:click={() => onActive(3)}
					class="h-1/3 flex flex-col items-center justify-center"
				>
					<span class={currentDivFocus === '3' ? 'focus-heading bg-tertiary' : 'non-focus-heading'}
						>WebDev</span
					>
				</div>
				<div
					id="4"
					on:mouseover={() => onActive(4)}
					on:click={() => onActive(4)}
					class="h-1/3 flex items-center justify-center"
				>
					<span class={currentDivFocus === '4' ? 'focus-heading' : 'non-focus-heading'}>Agile</span>
				</div>
			</div>
		</div>
	</div> -->
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
			transform: scale(2);
		}
	}

	.input-cursor {
		display: inline-block;
		width: 3px;
		height: 50px;
		background-color: bg-gradient-primary-secondary;
		margin-left: 5px;
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

	.focus-heading {
		@apply text-primary-600;
		font-size: x-large;
		padding-top: 3rem;
	}

	/* .non-focus-heading {
		@apply text-secondary-400;
		@apply bg-surface-200/90 dark:bg-surface-800/80;
		@apply shadow-2xl;
		@apply shadow-secondary-600/60;
		font-size: x-large;
		padding: 2rem;
		border-radius: 0.5em;
	} */
</style>
