<script>
    import Profile from '../../lib/components/Profile.svelte';
    import theme from '../../stores/themeStore.js';

    function toggleDarkMode() {
        theme.toggle(); // This will update the theme globally and persist it
    }

</script>

<Profile />
