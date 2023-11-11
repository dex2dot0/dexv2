<script lang='ts'>
	import '../app.postcss';
	import { AppBar, LightSwitch, autoModeWatcher } from '@skeletonlabs/skeleton';
	import { createMenu } from 'svelte-headlessui'
	import Transition from 'svelte-transition';

	const menu = createMenu({ label: 'Actions' })

	const menuLinks = [{
		name: 'Home',
		href: '/',
	}, {
		name: 'About',
		href: '/about',
	}, {
		name: 'Contact',
		href: '/contact',
	}];
</script>

<svelte:head>{@html `<script>${autoModeWatcher.toString()} autoModeWatcher();</script>`}</svelte:head>
<div class="min-h-screen min-w-max h-screen grid grid-rows-[auto,1fr]">
	<div>
	<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
		<svelte:fragment slot="lead"><LightSwitch /></svelte:fragment>
		<span class="h2 gradient-heading">@dex2dot0</span>
		<svelte:fragment slot="trail">
			<div class="relative inline-block">
			<button use:menu.button type="button" class="btn-icon bg-gradient-to-br variant-gradient-primary-secondary"><img alt="menu dropdown button" src="/icons/feather/24/menu.svg"/></button>
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
								<a class="block p-2 w-full text-xl hover:variant-gradient-secondary-tertiary" href={menuLink.href}>{menuLink.name}</a>
							</div>
						{/each}
					</div>
				</Transition>
			</div>
		</svelte:fragment>
	</AppBar>
	</div>
	<div class="overflow-y-auto">
		<slot />
	</div>
</div>