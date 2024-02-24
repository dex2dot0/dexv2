<script lang="ts">
	export let className: string = '';
	export let style: string = '';
	let imageSrc = '/images/holga_0.png';
</script>

<img class={className} {style} src={imageSrc} alt="headshot" />
