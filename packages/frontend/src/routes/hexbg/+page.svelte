<script>
	import { onMount } from 'svelte';
	import { tweened, spring } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	// Generated with the help of ChatGPT-4o
	let coords = spring({ x: 0, y: 0 }, { stiffness: 0.1, damping: 0.1 });
	$: coordinates = '';
	$: gridPosition = '0_0';
	let hexagons = [];
	let gridMapping = [];
	const rows = 20;
	const cols = 40;
	// hexRadius is for all points from center,
	const hexRadius = 60; // Radius of the hexagon

	// Tweened position for smooth mouse tracking
	let mouseX = tweened(0, { duration: 200, easing: cubicOut });
	let mouseY = tweened(0, { duration: 200, easing: cubicOut });

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
		coords.set({ x: event.clientX, y: event.clientY });
		coordinates = `x: ${event.clientX}, y: ${event.clientY}`;

		// find the hexagon that is closest to the mouse
		// by plotting the mouse x and y position and finding the hexagon that is closest to it
		// using our gridMapping object
		gridPosition = getGridPosition(event.clientX, event.clientY, gridMapping);
		// get the polygon with the id of gridPosition and highlight it
		const polygon = document.getElementById(gridPosition);
		if (polygon) {
			// only highlight for 1 second
			polygon.style.fill = 'url(#hexGradient)';
			polygon.style.strokeWidth = '4';
			polygon.style.opacity = '1';
			// then reduce the opacity for another 1 second
			setTimeout(() => {
				polygon.style.strokeWidth = '3';
				polygon.style.opacity = '0.75';
			}, 1000);
			// then set back to normal
			setTimeout(() => {
				polygon.style.fill = 'none';
				polygon.style.strokeWidth = '2';
				polygon.style.opacity = '0.5';
			}, 2000);
		}
	}

	function getGridPosition(x, y, gridMapping) {
		for (const [position, range] of Object.entries(gridMapping)) {
			const [xMin, xMax] = range.x;
			const [yMin, yMax] = range.y;

			if (x >= xMin && x < xMax && y >= yMin && y < yMax) {
				return position;
			}
		}
		return '0_0'; // If no match is found
	}

	function generateHexagonGrid(rows, cols, radius) {
		const hexHeight = Math.sqrt(3) * radius;
		const hexWidth = 2 * radius;
		const hexagons = [];
		for (let row = 0; row < rows; row++) {
			for (let col = 0; col < cols; col++) {
				const x = col * hexWidth * 0.75; // Horizontal distance between centers
				const y = row * hexHeight + (col % 2 ? hexHeight / 2 : 0); // Offset every other column
				const id = `${row}_${col}`;
				hexagons.push({ x, y, id });

				/// Calculate xMin and xMax based on the offset pattern
				const xMin = x - radius; // x center - radius
				const xMax = x + radius; // x center + radius

				// Calculate yMin and yMax based on the offset pattern
				const yMin = y - hexHeight / 2;
				const yMax = y + hexHeight / 2;

				gridMapping[id] = {
					x: [xMin, xMax],
					y: [yMin, yMax]
				};
			}
		}
		return hexagons;
	}
</script>

<div class="fixed left-0 top-0 overflow-visible -z-10 h-lvh w-screen">
	<svg width="100%" height="100%">
		<defs>
			<linearGradient id="hexGradient" x1="20%" y1="30%" x2="100%" y2="100%">
				<stop offset="0%" style="stop-color: #ff0000; stop-opacity: .05" />
				<stop offset="80%" style="stop-color: #0000ff; stop-opacity: .15" />
			</linearGradient>
		</defs>
		{#each hexagons as { x, y, id }}
			<polygon
				{id}
				points="
					{x + hexRadius}, {y}
					{x + hexRadius / 2}, {y + (Math.sqrt(3) * hexRadius) / 2}
					{x - hexRadius / 2}, {y + (Math.sqrt(3) * hexRadius) / 2}
					{x - hexRadius}, {y}
					{x - hexRadius / 2}, {y - (Math.sqrt(3) * hexRadius) / 2}
					{x + hexRadius / 2}, {y - (Math.sqrt(3) * hexRadius) / 2}
				"
				fill={'none'}
				stroke="url(#hexGradient)"
				stroke-width={2}
				opacity={0.5}
			/>
		{/each}
	</svg>
</div>
