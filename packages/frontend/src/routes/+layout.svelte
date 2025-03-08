<script lang="ts">
	import '../app.postcss';
	import { onMount } from 'svelte';
	import { AppBar, LightSwitch, autoModeWatcher } from '@skeletonlabs/skeleton';
	import { createMenu } from 'svelte-headlessui';
	import Transition from 'svelte-transition';
	import Footer from '../components/Footer.svelte';
	import { screenSize } from '$lib/stores/screensize';
	import { prefersReducedMotion } from '$lib/stores/motion';

	const menu = createMenu({ label: 'Actions' });

	const menuLinks = [
		{
			name: 'Home',
			href: '/'
		},
		{
			name: 'About',
			href: '/about'
		},
		{
			name: 'Blog',
			href: 'https://blog.dexv2.com'
		}
	];

	// onmount wire up the screenSize store
	onMount(() => {
		function updateScreenSize() {
			screenSize.set({
				width: window.innerWidth
			});
		}

		const mediaQueryReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
		prefersReducedMotion.set(mediaQueryReduceMotion.matches);

		updateScreenSize();
		window.addEventListener('resize', updateScreenSize);

		return () => {
			window.removeEventListener('resize', updateScreenSize);
		};
	});
</script>

<svelte:head
	>{@html `<script>${autoModeWatcher.toString()} autoModeWatcher();</script>`}</svelte:head
>
<div class="h-lvh min-w-max w-screen overflow-y-visible">
	<div>
		<AppBar
			background="bg-tertiary-700 dark:bg-surface-800"
			gridColumns="grid-cols-3"
			slotDefault="place-self-center"
			slotTrail="place-content-end"
		>
			<svelte:fragment slot="lead"><LightSwitch class="ml-6" /></svelte:fragment>
			<a href="/"><img height="60" width="60" alt="dexv2 logo" src="/logos/dex2logo.webp" /></a>
			<svelte:fragment slot="trail">
				<div class="relative inline-block">
					<button
						use:menu.button
						type="button"
						class="btn-icon bg-gradient-to-br variant-gradient-primary-secondary"
						><img alt="menu dropdown button" src="/icons/feather/24/menu.svg" /></button
					>
					<Transition
						show={$menu.expanded}
						enter="transition ease-out duration-100"
						enterFrom="transform opacity-0 scale-95"
						enterTo="transform opacity-100 scale-100"
						leave="transition ease-in duration-75"
						leaveFrom="transform opacity-100 scale-100"
						leaveTo="transform opacity-0 scale-95"
					>
						<div
							use:menu.items
							class="absolute z-50 right-0 mt-2 w-56 origin-top-right divide-y divide-secondary-800 rounded-md bg-gradient-to-br variant-gradient-primary-secondary shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
						>
							{#each menuLinks as menuLink}
								<div class="px-1 py-1 text-center z-50">
									<a
										class="block p-2 w-full text-xl hover:variant-gradient-secondary-tertiary"
										href={menuLink.href}>{menuLink.name}</a
									>
								</div>
							{/each}
						</div>
					</Transition>
				</div>
			</svelte:fragment>
		</AppBar>
	</div>
	<div class="w-screen h-full">
		<slot />
		<Footer />
	</div>
</div>
