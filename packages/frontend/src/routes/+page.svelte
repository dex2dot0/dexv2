<script lang="ts">
	import { onMount } from 'svelte';
	let divIds: string[] = [];
	let currentDivFocus: string = "0";

	onMount(() => {
		// For mobile viewports will automatically cycle through the image sections
		// rather than wait for hover
		getDivIds();
		window.addEventListener('resize', handleResize);
	});

	function handleResize() {
		const width = window.innerWidth;
		console.log(width)

		if (width < 700) {
			setInterval(changeDivFocus,3000);
		}
	}

	const getDivIds = () => {
		const divs = document.querySelectorAll('div');
		divs.forEach((div: HTMLDivElement) => {
			divIds.push(div.id);
		});
	}

	const changeDivFocus = () => {
		const currentDivFocusIndex = divIds.indexOf(currentDivFocus);
		if (currentDivFocusIndex === divIds.length - 1) {
			currentDivFocus = "0";
		} else {
			currentDivFocus = divIds[currentDivFocusIndex + 1];
		}
	}

	
	let imageSrc = '/images/holga_0.png';

	const onHover = (section: number) => {
		imageSrc = `/images/holga_${section}.png`;
	};
</script>

<div class="h-screen w-full flex justify-center">
	<div class="space-y-10 text-center flex flex-col h-full w-full">
		<div class="flex flex-row space-x-4 w-full h-full flex-grow">
			<div class="flex flex-row h-full w-full">
				<div class="flex flex-col justify-between w-full">
					<div id="11" on:mouseover={() => onHover(11)} class="border content-section flex-grow">
						1
					</div>
					<div id="9" on:mouseover={() => onHover(9)} class="border content-section flex-grow">
						2
					</div>
				</div>
				<div class="flex flex-col justify-between">
					<div id="3" on:mouseover={() => onHover(12)} class="border content-section flex-grow">
						3
					</div>
					<div id="0" on:mouseover={() => onHover(0)} class="flex flex-grow w-full">
						<figure>
							<section class="img-bg" />
							<img width="300" height="300" src={imageSrc} alt="headshot" />
						</figure>
					</div>
					<div id="6" on:mouseover={() => onHover(6)} class="border content-section flex-grow">
						4
					</div>
				</div>
				<div class="flex flex-col justify-between w-full">
					<div id="5" on:mouseover={() => onHover(1)} class="border content-section flex-grow">
						5
					</div>
					<div id="4" on:mouseover={() => onHover(4)} class="border content-section flex-grow">
						6
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	figure {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	figure {
		max-width: 100%;
		transition: transform 0.3s ease;
	}
	figure {
		@apply flex relative flex-col;
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
			@apply bg-primary-100/100 dark:bg-primary-200/50;
		}
		33% {
			@apply bg-secondary-700/50 dark:bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-600/50 dark:bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-700/50 dark:bg-primary-400/50;
		}
	}
	@keyframes pulse {
		70% {
			transform: scale(1.5);
		}
	}

	content-section {
		border-width: 1px;
		border-style: solid;
		justify-content: center;
		justify-items: center;
		align-content: center;
		align-items: center;
		place-items: center;
		vertical-align: middle;
	}
</style>
