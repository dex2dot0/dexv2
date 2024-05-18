import { writable } from 'svelte/store';

export const screenSize = writable(window.innerWidth);

function updateScreenSize() {
	screenSize.set(window.innerWidth);
}

window.addEventListener('resize', updateScreenSize);
