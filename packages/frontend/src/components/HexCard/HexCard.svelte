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

<div
	class="flex flex-col sm:flex-row items-center sm:items-start sm:justify-center p-4 drop-shadow-md w-full sm:w-3/4 lg:w-2/3 my-4"
>
	{#if mediaSize != 'sm' && mediaSize != 'md'}
		<div class="relative w-32 h-32 sm:w-64 sm:h-64">
			{#if sliced === 'left'}
				<HexLeft fillColor={bgColor} iconUrl={iconHref} />
			{:else if sliced === 'right'}
				<HexRight fillColor={bgColor} iconUrl={iconHref} />
			{/if}
		</div>
		<div class="sm:ml-4 text-center sm:text-left">
			<h2 class="text-xl font-bold mb-2">{header}</h2>
			<p class="">{body}</p>
		</div>
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
