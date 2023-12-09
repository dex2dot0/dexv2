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

	export let cloudSelected: boolean = false;
	export let fullStackSelected: boolean = false;
	export let apisSelected: boolean = false;
	export let devopsSelected: boolean = false;
	export let webDevSelected: boolean = false;
	export let mortechSelected: boolean = false;
	export let dataSelected: boolean = false;
	export let agileSelected: boolean = false;

	const logoList: any[] = [
		Amplify,
		AWS,
		Azure,
		Cloudflare,
		Csharp,
		CSS,
		Docker,
		DotnetCore,
		Dynamo,
		Fastify,
		Github,
		Go,
		Html,
		Jira,
		Lambda,
		Mongo,
		MySql,
		Mui,
		Netlify,
		Next,
		Postman,
		PowerBI,
		React,
		Remix,
		SST,
		Svelte,
		Tailwind,
		Terraform,
		Typescript,
		Wordpress,
		Zuplo
	];
	const logos: any[] = [];

	for (let i = 0; i < 100; i++) {
		logoList.map((logo) => logos.push(logo));
	}
</script>

<div class="logo-container">
	{#each logos as Logo}
		<div>
			<Logo isSelected={false} />
		</div>
	{/each}
</div>

<style>
	.logo-container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-content: flex-start;
	}

	.logo-container > div {
		margin: 1rem; /* Adjust the gap between logos */
	}

	.logo-container > div > svg {
		overflow: hidden; /* Allow logos to overflow the container */
		position: absolute;
	}
</style>
