import { writable } from 'svelte/store';

function createThemeStore() {
    const isBrowser = typeof window !== 'undefined';

    // Read theme from localStorage or default to 'light'
    const storedTheme = isBrowser ? localStorage.getItem('theme') || 'light' : 'light';
    const { subscribe, set } = writable(storedTheme);

    function updateTheme(newTheme) {
        set(newTheme);
        if (isBrowser) {
            localStorage.setItem('theme', newTheme);
            document.body.classList.toggle('dark', newTheme === 'dark');
        }
    }

    // Set initial theme class on body if in browser
    if (isBrowser) {
        document.body.classList.toggle('dark', storedTheme === 'dark');
    }

    return {
        subscribe,
        set: updateTheme,
        toggle: () => updateTheme(storedTheme === 'light' ? 'dark' : 'light')
    };
}

const theme = createThemeStore();
export default theme;
