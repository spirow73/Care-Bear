<!-- TaskList.svelte -->

<script>
	import Task from './Task.svelte';
	import { tasks } from '$lib/taskStore'; // Import the store

	export let title = 'Task List';
</script>

<div class="p-4 border rounded m-3">
	<h1 class="text-2xl font-semibold">{title}</h1>
	{#each $tasks as task (task.id)}
		<Task
			definition={task.definition}
			due_date={task.due_date}
			isCompleted={task.isCompleted}
			id={task.id}
		/>
	{/each}
</div>
