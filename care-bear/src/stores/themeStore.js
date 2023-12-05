// Import writable store from Svelte
import { writable } from 'svelte/store';

// Create a writable store with a default theme ('light' or 'dark')
export const theme = writable('light'); // Default to 'light' theme

// Function to toggle between light and dark themes
export function toggleTheme() {
    theme.update(currentTheme => currentTheme === 'light' ? 'dark' : 'light');
}

// Optional: Function to set a specific theme (light or dark)
export function setTheme(newTheme) {
    theme.set(newTheme);
}
