<script>
    import { theme } from '../../stores/themeStore.js';
    export let mood;
    export let emoji;

    let currentTheme;
    $: currentTheme = $theme;
</script>

<div class={`card ${currentTheme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-700'} shadow-lg rounded-lg p-4 text-center hover:bg-blue-50 m-4`}>
    <div class="text-6xl">{emoji}</div>
    <p>{mood}</p>
</div>

<style>
    /* Add additional dark mode specific styles here if needed */
</style>
