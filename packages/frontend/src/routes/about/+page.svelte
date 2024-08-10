<script lang="ts">
	import { onMount } from 'svelte';
	import HexBackground from './HexBackground.svelte';
	import HexCard from '../../components/HexCard/HexCard.svelte';

	let width: number;
	let mediaSize: string;

	onMount(async () => {
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
			iconUrl: '/icons/feather/24/bar-chart.svg',
			bgColor: 'fill-primary-500 bg-primary-500',
			iconBgColor: 'bg-primary-400',
			header: 'Discovering Passion',
			body: `I started my journey into development and programming by pushing the boundaries of Excel while working with mortgage data. As the data grew, I needed more automation and discovered VBA scripting. Despite its limitations, VBA opened my eyes to the power of programming, turning complex tasks into simple ones. This experience sparked a passion for programming for me and became the catalyst for pursuing a career in engineering.`
		},
		{
			iconUrl: '/icons/csharp.svg',
			bgColor: 'fill-secondary-600 bg-secondary-600',
			iconBgColor: 'bg-secondary-400/70',
			header: 'Dotnet Land',
			body: 'My initial foray beyond a simplified language like VBA was into the world of C# and VB.NET. I must admit, coming from VBA, VB.NET was much more attractive than C# at the time. As the years have passed however, I have seen the light, drank the Kool-Aid, and adamantly prefer C# on .NET projects unless required otherwise. I am presently looking forward to the day where .NET Framework is a thing of the past for me and I can live peacefully in .NET Core bliss!'
		},
		{
			iconUrl: '/icons/feather/24/database.svg',
			bgColor: 'fill-tertiary-500 bg-tertiary-500',
			iconBgColor: 'bg-tertiary-400',
			header: 'Excelling Beyond Excel',
			body: `As they say, business runs on Excel but not because it should, rather because it is easy and fast to get up and running as a "reporting solution". But as a reporting solution, it is just not very good and certainly not scalable. Within my career, this has led me to develop proficiencies all across the data spectrum including database administration, SQL, NoSQL, ETL, business analysis, data engineering, and more.`
		},
		{
			iconUrl: '/icons/feather/24/chrome.svg',
			bgColor: 'fill-primary-500 bg-primary-500',
			iconBgColor: 'bg-primary-400',
			header: 'The World Wide Web',
			body: `.NET is a fantastic language but prior to Blazor (when I started learning in 2016), devs still ultimately needed to mix .NET and React, Vue, etc. in most cases to create truly interactive web applications. Understanding this, I took the opportunity to learn and have had the pleasure of working with web tech of all kinds, building from the basics (HTML, CSS, JS, Jquery, etc.) up to the more advanced (React, Svelte, Vue, etc.).`
		},
		{
			iconUrl: '/icons/feather/24/hard-drive.svg',
			bgColor: 'fill-secondary-600 bg-secondary-600',
			iconBgColor: 'bg-secondary-400/70',
			header: 'The Cloud Will Set You Free!',
			body: `Servers and physical infra are great but so is having all of that and more without the overhead of managing it. That is my ideal sweet spot in terms of how I approach infra and has been a major focal point for what I do and the solutions I create. It's fast, scalable, and in most use cases cost effective. There are of course exceptions, respect and love for on-prem, but the cloud has my heart. Azure, AWS, GCP, Cloudflare... Yes please!`
		},
		{
			iconUrl: '/icons/feather/24/package.svg',
			bgColor: 'fill-tertiary-500 bg-tertiary-500',
			iconBgColor: 'bg-tertiary-400',
			header: 'DevOps Is Dope!',
			body: `And Infrastucture as Code (IaC) is what makes it so good. There is something so satisfying about being able to deploy all your infra with just code AKA IaC. It's feel almost like having freaking superpowers sometimes, the things we can do with just code. I mean its not all unicorns and rainbows but its still my happy place. SST, CDK, ARM, Terraform, Pulumi... I love them all!*`
		},
		{
			iconUrl: '/icons/feather/24/layers.svg',
			bgColor: 'fill-primary-500 bg-primary-500',
			iconBgColor: 'bg-primary-400',
			header: 'The Stack Is Full But Not Overflowing',
			body: `Frontend, backend, databases, infra, CI/CD, the whole gambit. Too much to master but things are so good nowadays, there is so much you can do from a full-stack perspective and do efficiently. Its certainly not the easy path but with time and a whole lot of effort, it is very rewarding. `
		}
		// Add more cards as needed
	];
</script>

<div class="main">
	<div class="fixed overflow-visible -z-10 h-full w-screen -mt-32">
		<HexBackground />
	</div>
	<div
		class="z-10 pt-4 px-8 py-4 grid grid-cols-3 gap-x-12 place-items-center bg-primary-200 shadow-xl border border-b-1 border-primary-300/70 dark:bg-secondary-800/70 dark:border-secondary-900/70"
	>
		<div class="max-[1024px]:col-span-3 lg:col-span-1 flex flex-col items-center">
			<div class="flex flex-row mb-4">
				<h1
					class="gradient-heading-secondary text-4xl md:text-5xl font-bold font-['Monaco'] uppercase"
				>
					Dex2.0
				</h1>
				<h1
					class="gradient-heading-surface text-4xl md:text-5xl font-bold font-['Monaco'] uppercase ml-4"
				>
					Origins
				</h1>
			</div>
			<div
				class="w-48 h-48 bg-primary-700/70 rounded-full flex items-center justify-center max-[1180px]:hidden lg:flex"
			>
				<img
					class="object-contain w-40 h-40 rounded-full"
					src="/images/holga_0.png"
					alt="my headshot with a cap, with some distortion effects"
				/>
			</div>
		</div>
		<div class="max-[1024px]:col-span-3 lg:col-span-2 p-4">
			<hr class="gradient-hr" />
			<p class="md:text-balance lg:text-wrap md:text-lg text-gray-700 dark:text-gray-300 mt-4">
				Why Dex2.0? Well, when I was born, on my birth certificate at least, my name was legally
				Dexter. There was some confusion in the hospital and essentially how the story goes is
				Dexter was a name in the running but a big surprise to see on the birth certificate that
				arrived several weeks after I was born. Shortly thereafter, my folks got the birth
				certificate amended to my current legal name, Cliff (no its not Clifford, I am not that
				cool). Dexter version 2, dex2.0, dex2dot0, etc. plays on the history of my name, ergo Cliff
				is effectively the second version of Dexter. Probably goes without saying but without
				Michael C. Hall, I don't know if I'd be using the same moniker. Dexter's lab is certainly
				deserving of an honorable mention though.
			</p>
		</div>
	</div>

	<div class="container mx-auto px-4 h-full">
		<div class="relative">
			{#each cards as card, index}
				<HexCard
					{index}
					iconUrl={card.iconUrl}
					bgColor={card.bgColor}
					iconBgColor={card.iconBgColor}
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
			<span class="pr-4 -mt-4 tiny-text right-0 absolute font-mono">* Excludes CloudFormation</span>
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
</div>

<style lang="postcss">
	.tiny-text {
		font-size: 0.5rem;
	}
</style>
