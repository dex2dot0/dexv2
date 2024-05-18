<script>
	import HexFull from './HexFull.svelte';
	import HexLeft from './HexLeft.svelte';
	import HexRight from './HexRight.svelte';

	export let index;
	export let iconHref;
	export let bgColor;
	export let header;
	export let body;
	export let sliced = 'full'; // 'left', 'right', or 'full'
	export let mediaSize;

	$: marginClass = index == 0 ? 'w-full flex flex-row' : 'w-full flex flex-row -mt-44';
</script>

<div class="w-full flex flex-col items-center drop-shadow-md">
	{#if mediaSize === 'xl'}
		{#if sliced === 'left'}
			<div class={marginClass}>
				<div class="basis-6/12"></div>
				<div class="basis-2/12 justify-end">
					<div class="relative w-32 h-32 sm:w-64 sm:h-64">
						<HexLeft fillColor={bgColor} iconUrl={iconHref} />
					</div>
				</div>
				<div class="basis-4/12 sm:mt-16 text-center sm:text-left ml-4">
					<h2 class="text-xl font-bold mb-2">{header}</h2>
					<p class="">{body}</p>
				</div>
			</div>
		{:else if sliced === 'right'}
			<div class={marginClass}>
				<div class="basis-4/12 sm:mt-16 text-center sm:text-right mr-4">
					<h2 class="text-xl font-bold mb-2">{header}</h2>
					<p class="">{body}</p>
				</div>
				<div class="basis-2/12 flex justify-start">
					<div class="relative w-32 h-32 sm:w-64 sm:h-64">
						<HexRight fillColor={bgColor} iconUrl={iconHref} />
					</div>
				</div>
				<div class="basis-6/12"></div>
			</div>
		{/if}
	{:else}
		<div class="w-full flex flex-row items-center p-4">
			<div class="w-1/3 flex justify-start">
				<div class="relative w-32 h-32 sm:w-64 sm:h-64">
					<HexFull fillColor={bgColor} iconUrl={iconHref} />
				</div>
			</div>
			<div class="w-2/3 text-left ml-4">
				<h2 class="xs:text-lg md:text-xl lg:text-2xl font-bold mb-2">{header}</h2>
				<p class="xs:text-sm sm:text-base">{body}</p>
			</div>
		</div>
	{/if}
</div>
