import { writable } from 'svelte/store';

export const theme = writable('light');

export function toggleTheme() {
	if (window.theme === 'dark') {
		window.theme = 'light';
		theme.set('light');
		localStorage.setItem('theme', 'light');
		document.documentElement.classList.remove('dark');
	} else {
		window.theme = 'dark';
		theme.set('dark');
		localStorage.setItem('theme', 'dark');
		document.documentElement.classList.add('dark');
	}
}
