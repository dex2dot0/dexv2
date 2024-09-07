import { writable, derived } from 'svelte/store';

export const screenSize = writable({
	width: 0
});

export const screenCategory = derived(screenSize, ($screenSize) => {
	if ($screenSize.width <= 768) {
		return 'mobile';
	} else if ($screenSize.width > 768 && $screenSize.width <= 1024) {
		return 'tablet';
	} else {
		return 'desktop';
	}
});
