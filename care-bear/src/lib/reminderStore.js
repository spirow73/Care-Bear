import { writable } from 'svelte/store';

// Initialize the store with a default value (e.g., false)
export const reminderEnabled = writable(false);
