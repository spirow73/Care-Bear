<script>
    import { onMount } from 'svelte';
    import Calendar from '../../lib/components/Calendar.svelte';
    import { loadDbTasks, tasks } from '../../lib/taskStore.js';
    import theme from '../../stores/themeStore.js';

    onMount(async () => {
        await loadDbTasks();
        console.log($tasks);
    });

    function toggleDarkMode() {
        theme.toggle(); // This will update the theme globally and persist it
    }
</script>
<body>
    <Calendar tasks={$tasks} />
</body>
