<script lang="ts">
	export let mediaSize: string;
	export let currentCategory: string = '';

	import Amplify from './Amplify.svelte';
	import AWS from './AWS.svelte';
	import Azure from './Azure.svelte';
	import Cloudflare from './Cloudflare.svelte';
	import Csharp from './Csharp.svelte';
	import CSS from './CSS.svelte';
	import Docker from './Docker.svelte';
	import DotnetCore from './DotnetCore.svelte';
	import Dynamo from './Dynamo.svelte';
	import Fastify from './Fastify.svelte';
	import Github from './Github.svelte';
	import Go from './Go.svelte';
	import Html from './Html.svelte';
	import Jira from './Jira.svelte';
	import Lambda from './Lambda.svelte';
	import Mongo from './Mongo.svelte';
	import MySql from './MySql.svelte';
	import Mui from './Mui.svelte';
	import Netlify from './Netlify.svelte';
	import Next from './Next.svelte';
	import Postman from './Postman.svelte';
	import PowerBI from './PowerBI.svelte';
	import React from './React.svelte';
	import Remix from './Remix.svelte';
	import SST from './SST.svelte';
	import Svelte from './Svelte.svelte';
	import Tailwind from './Tailwind.svelte';
	import Terraform from './Terraform.svelte';
	import Typescript from './Typescript.svelte';
	import Wordpress from './Wordpress.svelte';
	import Zuplo from './Zuplo.svelte';

	type Logo = {
		Component: any;
		Category: string[];
		DivStyle?: string;
		ComponentStyle?: string;
	};

	let baseRadiusIncrement = 5;
	let numLogos: number = 100;
	const logoList: Logo[] = [
		{ Component: Typescript, Category: ['webdev'] },
		{ Component: Csharp, Category: ['api'] },
		{ Component: Amplify, Category: ['cloud', 'fullstack', 'devops', 'webdev', 'serverless'] },
		{ Component: Mongo, Category: ['data'] },
		{ Component: Svelte, Category: ['webdev', 'fullstack', 'serverless'] },
		{ Component: Github, Category: ['agile'] },
		{ Component: AWS, Category: ['cloud', 'fullstack', 'devops', 'webdev', 'serverless'] },
		{ Component: Go, Category: ['api'] },
		{ Component: SST, Category: ['cloud', 'devops', 'fullstack', 'serverless'] },
		{ Component: React, Category: ['webdev'] },
		{ Component: PowerBI, Category: ['data'] },
		{ Component: Netlify, Category: ['webdev', 'serverless'] },
		{ Component: Terraform, Category: ['devops', 'fullstack', 'cloud'] },
		{ Component: Tailwind, Category: ['webdev'] },
		{ Component: Postman, Category: ['api'] },
		{ Component: Azure, Category: ['cloud', 'fullstack', 'devops', 'webdev', 'serverless'] },
		{ Component: Fastify, Category: ['api'] },
		{ Component: Next, Category: ['webdev', 'fullstack'] },
		{ Component: Lambda, Category: ['cloud', 'serverless'] },
		{ Component: Wordpress, Category: ['webdev'] },
		{ Component: Jira, Category: ['agile'] },
		{ Component: Cloudflare, Category: ['cloud', 'fullstack', 'webdev', 'serverless'] },
		{ Component: MySql, Category: ['data'] },
		{ Component: CSS, Category: ['webdev'] },
		{ Component: Docker, Category: ['fullstack', 'devops'] },
		{ Component: Mui, Category: ['webdev'] },
		{ Component: DotnetCore, Category: ['api'] },
		{ Component: Remix, Category: ['webdev', 'fullstack'] },
		{ Component: Dynamo, Category: ['data', 'cloud', 'serverless'] },
		{ Component: Html, Category: ['webdev'] }
	];

	let logos = Array.from({ length: numLogos }, (_, i) => logoList[i % logoList.length]);

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
	const getSize = (index: number): number => {
		return baseSizeRem + sizeIncrementPerLogo * index;
	};

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

{#each logos as { Component, Category }, index}
	<div
		class="absolute"
		style={`left: 50%; top: 50%; transform: translate(${calculateSpiralPosition(index).x}px, ${
			calculateSpiralPosition(index).y
		}px)`}
	>
		<Component
			style={`width: ${getSize(index)}rem; height: ${getSize(index)}rem;`}
			className={Category.includes(currentCategory)
				? 'fill-tertiary-500 stroke-tertiary-800'
				: 'fill-surface-400/50 stroke-surface-800/50'}
		/>
	</div>
{/each}
