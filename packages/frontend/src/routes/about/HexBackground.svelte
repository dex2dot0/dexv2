<script>
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	// Generated with the help of ChatGPT-4o

	let hexagons = [];
	const rows = 200;
	const cols = 20;
	const hexRadius = 80; // Radius of the hexagon
	const highlightDistance = 100; // Distance from mouse to highlight

	// Tweened position for smooth mouse tracking
	let mouseX = tweened(0, { duration: 200, easing: cubicOut });
	let mouseY = tweened(0, { duration: 200, easing: cubicOut });

	function distanceToMouse(x, y) {
		return Math.sqrt(Math.pow($mouseX - x, 2) + Math.pow($mouseY - y, 2));
	}

	onMount(() => {
		// Generate hexagon positions
		hexagons = generateHexagonGrid(rows, cols, hexRadius);

		window.addEventListener('mousemove', handleMouseMove);
		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	});

	function handleMouseMove(event) {
		mouseX.set(event.clientX);
		mouseY.set(event.clientY);
	}

	function generateHexagonGrid(rows, cols, radius) {
		const hexHeight = Math.sqrt(3) * radius;
		const hexWidth = 2 * radius;
		const hexagons = [];
		for (let row = 0; row < rows; row++) {
			for (let col = 0; col < cols; col++) {
				const x = col * hexWidth * 0.75; // Horizontal distance between centers
				const y = row * hexHeight + (col % 2 ? hexHeight / 2 : 0); // Offset every other column
				hexagons.push({ x, y });
			}
		}
		return hexagons;
	}
</script>

<svg width="100%" height="100%" class="">
	<defs>
		<linearGradient id="hexGradient" x1="20%" y1="30%" x2="100%" y2="100%">
			<stop offset="0%" style="stop-color: #ff0000; stop-opacity: .3" />
			<stop offset="50%" style="stop-color: #0000ff; stop-opacity: .4" />
		</linearGradient>
	</defs>
	{#each hexagons as { x, y }}
		<polygon
			class="hover:fill-primary-500"
			points="
        {x + hexRadius}, {y}
        {x + hexRadius / 2}, {y + (Math.sqrt(3) * hexRadius) / 2}
        {x - hexRadius / 2}, {y + (Math.sqrt(3) * hexRadius) / 2}
        {x - hexRadius}, {y}
        {x - hexRadius / 2}, {y - (Math.sqrt(3) * hexRadius) / 2}
        {x + hexRadius / 2}, {y - (Math.sqrt(3) * hexRadius) / 2}
      "
			fill="none"
			stroke="url(#hexGradient)"
			stroke-width={distanceToMouse(x, y) < highlightDistance ? 4 : 2}
			opacity={1 - Math.min(distanceToMouse(x, y) / highlightDistance, 1) * 0.5}
		/>
	{/each}
</svg>

<style>
	svg {
		pointer-events: none; /* Ignore mouse events on the SVG itself */
	}
</style>
