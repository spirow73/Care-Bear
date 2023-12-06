<script>
	import TaskList from '$lib/components/task/TaskList.svelte';
	import TaskAdder from '$lib/components/task/TaskAdder.svelte';
	import theme from '../../stores/themeStore.js';

	import { loadDbTasks } from '$lib/taskStore.js';
	import { onMount } from 'svelte';
	import { tasks } from '$lib/taskStore.js';

	onMount(async () => {
		await loadDbTasks();
		console.log($tasks);
	});

	function toggleDarkMode() {
        theme.toggle(); // This will update the theme globally and persist it
    }
</script>

<div>
	<TaskAdder />

	<TaskList tasks={$tasks} />
</div>
