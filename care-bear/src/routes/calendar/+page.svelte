<script>
	import Calendar from '../../lib/components/Calendar.svelte';
	import { onMount } from 'svelte';
	import { tasks, loadDbTasks } from '../../lib/taskStore.js';
	import TaskAdder from '$lib/components/task/TaskAdder.svelte';
	import Task from '$lib/components/task/Task.svelte';

	onMount(async () => {
		await loadDbTasks();
		console.log($tasks);
	});
</script>

<Calendar tasks={$tasks} />
