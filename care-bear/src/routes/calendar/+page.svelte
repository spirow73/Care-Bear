<script>
	import Calendar from '../../lib/components/Calendar.svelte';
	import { onMount } from 'svelte';
	import { tasks, loadDbTasks } from '../../lib/taskStore.js';
	import theme from '../../stores/themeStore.js';

	onMount(async () => {
		await loadDbTasks();
		console.log($tasks);
	});

	function toggleDarkMode() {
        theme.toggle(); // This will update the theme globally and persist it
    }

</script>

<Calendar tasks={$tasks} />
