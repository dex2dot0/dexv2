<script lang="ts">
	export let fillColor = '#000000';
	export let iconUrl: string | undefined;
	export let iconBgColor;
</script>

<div class="absolute inset-0 flex items-center justify-center z-50">
	<img
		class={`z-10 object-contain w-16 h-16 p-1 rounded-lg shadow-lg ${iconBgColor}`}
		src={iconUrl}
		alt="Icon"
	/>
</div>
<div class="absolute inset-0 flex items-center justify-center">
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" version="1.1">
		<path
			class={fillColor}
			d="M 237.750 175.311 L 73 270.385 73 539.962 L 73 809.538 306.479 944.238 L 539.958 1078.939 628.934 1027.720 L 717.911 976.500 717.956 842.926 L 718 709.353 862.500 625.934 L 1007 542.516 1007 406.468 L 1007 270.420 843.343 175.960 C 753.332 124.007, 679.177 81.193, 678.553 80.818 C 677.858 80.399, 675.058 83.686, 671.313 89.318 C 648.567 123.519, 614.015 146.737, 571.791 156.195 C 562.790 158.211, 558.805 158.500, 540 158.500 C 521.195 158.500, 517.210 158.211, 508.209 156.195 C 466.072 146.757, 431.596 123.626, 408.799 89.500 C 405.492 84.550, 402.722 80.441, 402.643 80.369 C 402.565 80.296, 328.363 123.021, 237.750 175.311"
			stroke="none"
			fill-rule="evenodd"
		/>
	</svg>
</div>
