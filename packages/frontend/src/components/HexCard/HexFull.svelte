<script lang="ts">
	export let fillColor = '#000000';
	export let iconUrl: string | undefined;
</script>

<div class="relative sm:w-32 sm:h-32 md:w-64 md:h-64">
	<div class="absolute inset-0 flex items-center justify-center">
		<img class="z-10 w-1/3 h-1/3 object-contain" src={iconUrl} alt="Icon" />
	</div>
	<div class="absolute inset-0 flex items-center justify-center">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" version="1.1">
			<path
				class={fillColor}
				d="M 140.750 231.236 L 73 270.379 73 539.959 L 73 809.538 306.481 944.240 L 539.962 1078.942 773.481 944.223 L 1007 809.504 1007 539.966 L 1007 270.427 939.017 231.201 L 871.034 191.974 705.517 287.471 L 540 382.967 374.506 287.484 C 283.484 234.968, 208.896 192.021, 208.756 192.046 C 208.615 192.072, 178.012 209.707, 140.750 231.236"
				stroke="none"
				fill-rule="evenodd"
			/>
		</svg>
	</div>
</div>
