<script lang="ts">
	import HexLeft from './HexLeft.svelte';
	import HexRight from './HexRight.svelte';

	export let index;
	export let iconUrl;
	export let bgColor;
	export let iconBgColor;
	export let header;
	export let body;
	export let sliced = 'full'; // 'left', 'right', or 'full'
	export let mediaSize;

	// do not add negative margin to the first card
	$: marginClass = index == 0 ? 'w-full flex flex-row' : `w-full flex flex-row -mt-32`;
</script>

<div class="w-full flex flex-col items-center drop-shadow-md">
	{#if mediaSize === 'xl'}
		{#if sliced === 'left'}
			<div class={marginClass}>
				<div class="basis-6/12"></div>
				<div class="basis-2/12 justify-end">
					<div class="relative w-64 h-64">
						<HexLeft fillColor={bgColor} {iconUrl} {iconBgColor} />
					</div>
				</div>
				<div class="basis-4/12 sm:mt-16 text-center sm:text-left ml-4">
					<h2 class="text-xl font-bold mb-2 p-2 {bgColor} rounded-md">{header}</h2>
					<p class="">{body}</p>
				</div>
			</div>
		{:else if sliced === 'right'}
			<div class={marginClass}>
				<div class="basis-4/12 sm:mt-16 text-center sm:text-right mr-4">
					<h2 class="text-xl font-bold mb-2 p-2 {bgColor} rounded-md">{header}</h2>
					<p class="">{body}</p>
				</div>
				<div class="basis-2/12 flex justify-start">
					<div class="relative w-64 h-64">
						<HexRight fillColor={bgColor} {iconUrl} {iconBgColor} />
					</div>
				</div>
				<div class="basis-6/12"></div>
			</div>
		{/if}
	{:else}
		<div class="w-full flex flex-col items-center p-4">
			<div class={`w-full flex items-center ${bgColor} p-4 rounded-md`}>
				<img
					src={iconUrl}
					alt="Icon"
					class={`w-10 h-10 mr-4 p-1 rounded-full shadow-xl ${iconBgColor}`}
				/>

				<h2 class="text-lg font-bold text-white">{header}</h2>
			</div>
			<div class="w-full text-left mt-2">
				<p class="text-sm sm:text-base mx-4">{body}</p>
			</div>
		</div>
	{/if}
</div>
