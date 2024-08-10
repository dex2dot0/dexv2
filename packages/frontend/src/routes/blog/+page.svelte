<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	// Animation state to trigger effects
	const showAnimation = writable(false);

	onMount(() => {
		// Trigger the animation state after the component mounts
		setTimeout(() => {
			showAnimation.set(true);
		}, 500);
	});
</script>

<div
	class="flex items-center justify-center min-h-screen bg-gradient-to-r from-primary-600 via-secondary-500 to-tertiary-500 text-secondary-200 text-center p-6"
>
	<div class="fade-in {$showAnimation ? 'show' : ''}">
		<h1 class="text-4xl md:text-6xl font-bold mb-6 glow">
			The Blog is Coming, Ugh.... Sometime...
		</h1>
		<p class="text-lg md:text-2xl mb-12">Please stand by in the meantime and check back later.</p>
	</div>
</div>

<style>
	.glow {
		animation: glow 1s infinite alternate;
	}

	@keyframes glow {
		from {
			text-shadow: 0 0 10px rgba(85, 76, 76, 0.6);
		}
		to {
			text-shadow: 0 0 20px rgba(70, 62, 62, 0.506);
		}
	}

	.fade-in {
		opacity: 0;
		transition: opacity 1.5s ease-in-out;
	}

	.fade-in.show {
		opacity: 0.7;
	}
</style>
