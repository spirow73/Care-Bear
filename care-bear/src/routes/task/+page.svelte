<script>
	import TaskList from '$lib/components/task/TaskList.svelte';
	import TaskAdder from '$lib/components/task/TaskAdder.svelte';

	import { loadDbTasks } from '$lib/taskStore.js';
	import { onMount } from 'svelte';
	import { tasks } from '$lib/taskStore.js';

	onMount(async () => {
		await loadDbTasks();
		console.log($tasks);
	});
</script>

<div>
	<TaskAdder />

	<TaskList tasks={$tasks} />
</div>
