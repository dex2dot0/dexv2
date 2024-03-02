<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import LoadingSpinner from '../components/LoadingSpinner.svelte';
	import BrandLogos from '../components/brand-logos/BrandLogos.svelte';
	import WavingHandIcon from '../components/icons/WavingHand.svelte';

	// create a map of image indexes to categories
	const categoryMap: { [key: string]: string } = {
		'0': 'api-dev',
		'1': 'cloud',
		'2': 'serverless',
		'3': 'full-stack',
		'4': 'web-dev',
		'5': 'devops',
		'6': 'data',
		'7': 'agile'
	};

	$: prefersReducedMotion = false;
	$: currentDivFocus = '0';
	$: currentCategory = '';
	$: sentence = '';

	let names: string[] = ['Dexter', 'Cliff', 'Dex2.0'];
	$: name = 'Dexter';
	$: nameClass = 'h2 bg-primary-500 gradient-heading-secondary uppercase';
	$: stopBlink = false;

	let width: number;
	let mediaSize: string;

	function waitForMs(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	async function animateName() {
		let selectedName;

		for (let i = 1; i < 3; i++) {
			selectedName = names[i];
			await waitForMs(1500);

			nameClass = 'h2 gradient-heading-secondary-line-through uppercase';
			await waitForMs(2000);

			nameClass = 'h2 gradient-heading-secondary-with-bg uppercase';
			stopBlink = true;
			await waitForMs(2000);
			name = '';
			stopBlink = false;

			await waitForMs(700);
			nameClass = 'h2 bg-primary-500 gradient-heading-secondary uppercase';
			typeName(100, selectedName);
		}
		stopBlink = true;
	}

	async function typeName(delay = 200, newName: string) {
		const letters = newName.split('');
		for (let i = 0; i < letters.length; i++) {
			await waitForMs(delay);
			name += letters[i];
		}
	}

	// Credit for typing effect basis https://medium.com/front-end-weekly/how-to-create-typing-effect-in-css-and-js-3252dd807f0a
	async function typeSentence(delay = 200, addedTime: number = 0) {
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
		const waitTime = remainingInterval - deletionTime - addedTime - 100; // buffer of 100 ms, addedTime is for the initial delay

		await waitForMs(waitTime > 0 ? waitTime : 0);
		deleteSentence();
	}

	async function deleteSentence() {
		for (let i = sentence.length; i > 0; i--) {
			await waitForMs(100);
			sentence = sentence.slice(0, -1);
		}
		sentence = '';
	}

	onMount(() => {
		// set prefersReducedMotion
		const mediaQueryReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
		prefersReducedMotion = mediaQueryReduceMotion.matches;

		if (prefersReducedMotion) {
			handleResize();
			stopBlink = true;
			currentCategory = 'web-dev';
			sentence = 'Programming';
			return;
		}
		setTimeout(() => {
			currentCategory = 'api-dev';
			typeSentence(200, 1000);
			animateName();
		}, 1000);

		window.addEventListener('resize', handleResize);
		handleResize();

		const interval = setInterval(() => {
			// change image on timer
			currentDivFocus = String((Number(currentDivFocus) + 1) % 8);

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
	<div
		class="grid w-screen h-full place-content-center items-center grid-auto-rows gap-y-2 text-center"
	>
		<div class="typing-container flex flex-row content-center place-self-center overflow-hidden">
			<span class="h2 uppercase pr-2" id="sentence">Hey</span>
			<WavingHandIcon className="w-8 h-8 inline-block stroke-primary-400 fill-secondary-500/50" />
		</div>
		<div
			class="typing-container flex flex-row content-center place-self-center place-content-center overflow-hidden"
		>
			<span class="h2 uppercase pr-2" id="sentence">I'm</span>
			<span class={nameClass} id="sentence">{name}</span>
			<span
				class={stopBlink
					? ''
					: 'input-cursor bg-gradient-to-br from-primary-500 via-tertiary-500 to-secondary-300'}
			/>
		</div>
		<div
			class="typing-container flex flex-row items-center content-center place-content-center overflow-hidden"
		>
			<span class="h2 uppercase" id="sentence"
				>And I
				<svg
					class="feather feather-heart w-8 h-8 inline-block fill-primary-400 stroke-secondary-300"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					><path
						d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
					/></svg
				>
			</span>
		</div>
		<div class="typing-container flex flex-row content-center place-self-center">
			<span class="h1 gradient-heading uppercase h-max" id="sentence">{sentence}</span>
			<span
				class={stopBlink
					? ''
					: 'input-cursor bg-gradient-to-br from-primary-500 via-tertiary-500 to-secondary-300'}
			/>
			<!-- to prevent the height from collapsing and layout shift occurring-->
			<span class="h1">&nbsp;</span>
		</div>
	</div>
{:else}
	<div class="grid place-content-center w-screen h-screen">
		<LoadingSpinner className="text-primary-500 text-5xl" />
	</div>
{/if}

<style lang="postcss">
	.gradient-heading-secondary-line-through {
		@apply bg-clip-text text-transparent box-decoration-clone;
		/* Direction */
		@apply bg-gradient-to-b;
		/* Color Stops */
		@apply from-secondary-600 via-tertiary-400 to-primary-500;
		position: relative; /* Ensure the container is positioned for pseudo-elements */
	}

	.gradient-heading-secondary-line-through::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		top: 50%; /* Center the line vertically */
		height: 3px; /* Thickness of the line */
		background: linear-gradient(to right, var(--tw-gradient-stops)); /* Use the gradient */
		/* Adjust 'var(--tw-gradient-stops)' as needed if using custom properties or specify the gradient explicitly */
	}

	.gradient-heading-secondary-with-bg {
		@apply bg-clip-text text-transparent box-decoration-clone;
		/* Direction */
		@apply bg-gradient-to-b;
		/* Color Stops for Text */
		@apply from-secondary-600 via-tertiary-400 to-primary-500;

		/* Background Layer */
		position: relative;
		z-index: 0;
	}

	.gradient-heading-secondary-with-bg::before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: -1;

		/* Adjust the background gradient as needed for visibility and design preference */
		background: linear-gradient(
			to bottom,
			rgba(255, 255, 255, 0.3),
			rgba(250, 250, 250, 0.4)
		); /* Light and more opaque background */
	}

	.gradient-heading-secondary-with-bg::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		top: 50%; /* Adjust as necessary to center the line */
		height: 3px; /* Adjust the thickness of the line as needed */
		background: linear-gradient(
			to right,
			#4c669f,
			#3b5998,
			#192f6a
		); /* Example gradient - match to your text gradient */
		z-index: 1; /* Ensure it's above the background but below the text */
	}

	.input-cursor {
		display: inline-block;
		width: 3px;
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
