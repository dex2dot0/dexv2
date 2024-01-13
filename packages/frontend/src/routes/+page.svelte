<script lang="ts">
	import { onMount } from 'svelte';
	import BrandLogos from '../components/brand-logos/BrandLogos.svelte';

	let divIds: string[] = [];
	let currentDivFocus: string = '0';
	let imageSrc = '/images/holga_0.png';
	let cycleImages: any;

	onMount(() => {
		// For mobile viewports will automatically cycle through the image sections
		// rather than wait for hover to change the image
		getDivIds();
		window.addEventListener('resize', handleResize);
		handleResize();
	});

	// create a map of currentDivFocus to category
	const categoryMap: { [key: string]: string } = {
		'0': '',
		'1': 'api',
		'3': 'webdev',
		'4': 'agile',
		'6': 'data',
		'7': 'serverless',
		'9': 'devops',
		'11': 'cloud',
		'12': 'fullstack'
	};

	let currentCategory: string = '';

	const getCategory = () => {
		currentCategory = categoryMap[currentDivFocus];
	};

	// set current category
	getCategory();

	function handleResize() {
		const width = window.innerWidth;

		if (width < 700) {
			if (cycleImages) {
				clearInterval(cycleImages);
			}
			cycleImages = setInterval(changeDivFocus, 3000);
		}
		if (width >= 700) {
			if (cycleImages) {
				clearInterval(cycleImages);
			}
		}
	}

	const getDivIds = () => {
		const divs = document.querySelectorAll('div');
		divs.forEach((div: HTMLDivElement) => {
			if (div.id && !isNaN(Number(div.id)) && !div.className.includes('hidden')) {
				divIds.push(div.id);
			}
		});
		divIds.sort((a, b) => Number(a) - Number(b));
	};

	const changeDivFocus = () => {
		const currentDivFocusIndex = divIds.indexOf(currentDivFocus);
		if (currentDivFocusIndex === divIds.length - 1) {
			currentDivFocus = '0';
			getCategory();
		} else {
			currentDivFocus = divIds[currentDivFocusIndex + 1];
			getCategory();
		}
		imageSrc = `/images/holga_${currentDivFocus}.png`;
	};

	const onHover = (section: number) => {
		currentDivFocus = String(section);
		imageSrc = `/images/holga_${section}.png`;
		getCategory();
	};
</script>

<div class="absolute flex left-0 -z-10">
	<BrandLogos {currentCategory} />
</div>
<div class="h-full w-full flex items-center justify-center">
	<div class="grid grid-cols-3 h-full w-full text-center align-middle">
		<div>
			<div id="11" on:mouseover={() => onHover(11)} class="h-1/3 flex items-center justify-center">
				<span class={currentDivFocus === '11' ? 'focus-heading' : 'non-focus-heading'}>Cloud</span>
			</div>
			<div id="9" on:mouseover={() => onHover(9)} class="h-1/3 flex items-center justify-center">
				<span class={currentDivFocus === '9' ? 'focus-heading' : 'non-focus-heading'}>DevOps</span>
			</div>
			<div
				id="7"
				on:mouseover={() => onHover(7)}
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
				on:mouseover={() => onHover(12)}
				class="h-1/3 flex flex-col items-center justify-center"
			>
				<span class={currentDivFocus === '12' ? 'focus-heading' : 'non-focus-heading'}
					>Full-Stack</span
				>
			</div>
			<div id="0" on:mouseover={() => onHover(0)} class="grid place-content-center w-full h-1/3">
				<figure class="w-full h-full">
					<section class="img-bg" />
					<img width="200" height="200" src={imageSrc} alt="headshot" />
				</figure>
			</div>
			<div
				id="6"
				on:mouseover={() => onHover(6)}
				class="h-1/3 flex flex-col items-center justify-center"
			>
				<span class={currentDivFocus === '6' ? 'focus-heading' : 'non-focus-heading'}>Data</span>
			</div>
		</div>
		<div>
			<div id="1" on:mouseover={() => onHover(1)} class="h-1/3 flex items-center justify-center">
				<span class={currentDivFocus === '1' ? 'focus-heading' : 'non-focus-heading'}>APIs</span>
			</div>
			<div
				id="3"
				on:mouseover={() => onHover(3)}
				class="h-1/3 flex flex-col items-center justify-center"
			>
				<span class={currentDivFocus === '3' ? 'focus-heading bg-tertiary' : 'non-focus-heading'}
					>WebDev</span
				>
			</div>
			<div id="4" on:mouseover={() => onHover(4)} class="h-1/3 flex items-center justify-center">
				<span class={currentDivFocus === '4' ? 'focus-heading' : 'non-focus-heading'}>Agile</span>
			</div>
		</div>
	</div>
</div>

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

	.focus-heading {
		@apply text-primary-600;
		@apply bg-surface-200/90 dark:bg-surface-800/80;
		@apply shadow-inner;
		@apply shadow-primary-600/80;
		text-decoration: underline;
		text-decoration-thickness: 2px;
		font-size: x-large;
		padding: 2rem;
		border-radius: 0.5em;
	}

	.non-focus-heading {
		@apply text-secondary-400;
		@apply bg-surface-200/90 dark:bg-surface-800/80;
		@apply shadow-2xl;
		@apply shadow-primary-600/60;
		font-size: x-large;
		padding: 2rem;
		border-radius: 0.5em;
	}
</style>
