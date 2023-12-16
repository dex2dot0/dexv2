<script lang="ts">
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

	export let currentCategory: string = '';

	type Logo = {
		Component: any;
		Category: string[];
	};

	const logoList: Logo[] = [
		{ Component: Amplify, Category: ['cloud', 'fullstack', 'devops', 'webdev', 'serverless'] },
		{ Component: AWS, Category: ['cloud', 'fullstack', 'devops', 'webdev', 'serverless'] },
		{ Component: Azure, Category: ['cloud', 'fullstack', 'devops', 'webdev', 'serverless'] },
		{ Component: Cloudflare, Category: ['cloud', 'fullstack', 'webdev', 'serverless'] },
		{ Component: Csharp, Category: ['api'] },
		{ Component: CSS, Category: ['webdev'] },
		{ Component: Docker, Category: ['fullstack', 'devops'] },
		{ Component: DotnetCore, Category: ['api'] },
		{ Component: Dynamo, Category: ['data', 'cloud', 'serverless'] },
		{ Component: Fastify, Category: ['api'] },
		{ Component: Github, Category: ['agile'] },
		{ Component: Go, Category: ['api'] },
		{ Component: Html, Category: ['webdev'] },
		{ Component: Jira, Category: ['agile'] },
		{ Component: Lambda, Category: ['cloud', 'serverless'] },
		{ Component: Mongo, Category: ['data'] },
		{ Component: MySql, Category: ['data'] },
		{ Component: Mui, Category: ['webdev'] },
		{ Component: Netlify, Category: ['webdev', 'serverless'] },
		{ Component: Next, Category: ['webdev', 'fullstack'] },
		{ Component: Postman, Category: ['api'] },
		{ Component: PowerBI, Category: ['data'] },
		{ Component: React, Category: ['webdev'] },
		{ Component: Remix, Category: ['webdev', 'fullstack'] },
		{ Component: SST, Category: ['cloud', 'devops', 'fullstack', 'serverless'] },
		{ Component: Svelte, Category: ['webdev', 'fullstack', 'serverless'] },
		{ Component: Tailwind, Category: ['webdev'] },
		{ Component: Terraform, Category: ['devops', 'fullstack', 'cloud'] },
		{ Component: Typescript, Category: ['webdev'] },
		{ Component: Wordpress, Category: ['webdev'] },
		{ Component: Zuplo, Category: ['api'] }
	];

	const logos: Logo[] = [];

	for (let i = 0; i < 15; i++) {
		logoList.map((logo: Logo) => logos.push(logo));
	}
</script>

<div class="logo-container">
	{#each logos as { Component, Category }}
		<div>
			<Component
				className={Category.includes(currentCategory)
					? 'fill-tertiary-500 stroke-tertiary-800 w-14 md:w-12 sm:w-10 h-14 md:h-12 sm:h-10'
					: 'fill-surface-400/50 stroke-surface-800/50 w-14 md:w-12 sm:w-10 h-14 md:h-12 sm:h-10'}
			/>
		</div>
	{/each}
</div>

<style>
	.logo-container {
		position: fixed;
		top: 0;
		left: 0;
		width: 105vw;
		height: 105vh;
		margin-left: -2rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-content: flex-start;
	}

	.logo-container > div {
		margin: 1rem; /* Adjust the gap between logos */
	}
</style>
