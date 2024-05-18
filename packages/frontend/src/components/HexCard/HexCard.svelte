<script>
	import HexFull from './HexFull.svelte';
	import HexLeft from './HexLeft.svelte';
	import HexRight from './HexRight.svelte';

	export let iconHref;
	export let bgColor;
	export let header;
	export let body;
	export let sliced = 'full'; // 'left', 'right', or 'full'
	export let mediaSize;
</script>

<div class="w-full flex flex-col items-center p-4 drop-shadow-md my-4">
	{#if mediaSize === 'lg' || mediaSize === 'xl'}
		{#if sliced === 'left'}
			<div class="w-full flex flex-row">
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
			<div class="w-full flex flex-row">
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
		<div class="relative w-32 h-32 sm:w-64 sm:h-64 mr-4">
			<HexFull fillColor={bgColor} iconUrl={iconHref} />
		</div>
		<div class="text-center sm:text-left">
			<h2 class="text-xl font-bold mb-2">{header}</h2>
			<p class="text-gray-700">{body}</p>
		</div>
	{/if}
</div>
