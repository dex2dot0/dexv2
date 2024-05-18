<script lang="ts">
	import HexCard from '../../components/HexCard/HexCard.svelte';
	import { onMount } from 'svelte';

	let width: number;
	let mediaSize: string;

	onMount(() => {
		window.addEventListener('resize', handleResize);
		handleResize();
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

	let cards = [
		{
			iconHref: '/icons/feather/24/code.svg',
			bgColor: 'fill-primary-500',
			header: 'Header 1',
			body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			sliced: 'left'
		},
		{
			iconHref: '/icons/feather/24/code.svg',
			bgColor: 'fill-primary-500',
			header: 'Header 2',
			body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			sliced: 'right'
		},
		{
			iconHref: '/icons/feather/24/code.svg',
			bgColor: 'fill-primary-500',
			header: 'Header 3',
			body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			sliced: 'left'
		}
		// Add more cards as needed
	];
</script>

<div class="main">
	<div class="text-center px-8 py-4">
		<h1 class="gradient-heading text-4xl md:text-5xl font-bold">About Me</h1>
		<hr class="gradient-hr m-3" />
	</div>
	<div class="text-center pb-4">
		<div class="px-4 xs:px-12 sm:px-6">
			<h1 class="gradient-heading text-2xl md:text-3xl font-bold">Why Dex2.0?</h1>
			<p class="text-balance md:text-lg text-gray-700 dark:text-gray-300 mt-4">
				When I was born, on my birth certificate at least, my name was legally Dexter. There was
				some confusion in the hospital and essentially how the story goes is Dexter was a name in
				the running but a big surprise to see on the birth certificate that arrived several weeks
				after I was born. Shortly thereafter, my folks got the birth certificate amended to my
				current legal name, Cliff (no its not Clifford, I am not that cool). Dexter version 2,
				dex2.0, dex2dot0, etc. plays on the history of my name, ergo Cliff is effectively the second
				version of Dexter. Probably goes without saying but without Michael C. Hall, I don't know if
				I'd be using the same moniker. Dexter's lab was pretty cool too but I am a big fan of
				Dexter.
			</p>
		</div>
	</div>

	<div class="container mx-auto px-4">
		{#each cards as card, index}
			<HexCard
				{index}
				iconHref={card.iconHref}
				bgColor={card.bgColor}
				header={card.header}
				body={card.body}
				sliced={mediaSize == 'lg' || mediaSize == 'xl'
					? index % 2 === 0
						? 'left'
						: 'right'
					: 'full'}
				{mediaSize}
			/>
		{/each}
	</div>

	<!-- Professional Section -->
	<div class="container mx-auto px-4">
		<div class="flex flex-col md:flex-row md:flex-wrap">
			<!-- Section 1 -->
			<div class="flex md:w-1/2">
				<div class="w-full md:w-1/2 p-4 text-center md:text-right">
					<h3 class="text-xl font-semibold mb-2">Development</h3>
					<p>
						Passionate about creating scalable cloud solutions and crafting efficient devops
						pipelines.
					</p>
				</div>
				<div class="w-full md:w-1/2 p-4 flex justify-center md:justify-start items-center">
					<!-- Your icon/graphic goes here -->
				</div>
			</div>

			<!-- Section 2 -->
			<div class="flex md:w-1/2 flex-row-reverse">
				<div class="w-full md:w-1/2 p-4 text-center md:text-left">
					<h3 class="text-xl font-semibold mb-2">Mortgage</h3>
					<p>
						Decade of experience in mortgage industry, with a deep understanding of technology's
						role in it.
					</p>
				</div>
				<div class="w-full md:w-1/2 p-4 flex justify-center md:justify-end items-center">
					<!-- Your icon/graphic goes here -->
				</div>
			</div>

			<!-- Repeat for other sections -->
		</div>
	</div>

	<!-- Personal Section -->
	<div class="flex flex-wrap justify-around items-start mt-8">
		<div
			class="card rounded-card bg-white dark:bg-gray-800 p-6 m-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
		>
			<h2 class="gradient-heading-secondary font-semibold">Music</h2>
			<p class="text-card">
				A melody for every mood, I find music to be a refuge and a source of inspiration.
			</p>
		</div>
		<div
			class="card rounded-card bg-white dark:bg-gray-800 p-6 m-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
		>
			<h2 class="gradient-heading-secondary font-semibold">Music</h2>
			<p class="text-card">
				A melody for every mood, I find music to be a refuge and a source of inspiration.
			</p>
		</div>
		<!-- Other personal cards similarly -->
	</div>
	`
</div>

<style lang="postcss">
</style>
