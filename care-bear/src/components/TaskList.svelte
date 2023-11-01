<!-- TaskList.svelte -->

<script>
	import Task from './Task.svelte';
	import { createEventDispatcher } from 'svelte';

	export let title = 'Task List';
	export let tasks;
</script>

<div class="p-4 border rounded">
	<h1 class="text-2xl font-semibold mb-3">{title}</h1>
	<div>
		{#each tasks as task (task.id)}
			<Task
				definition={task.definition}
				due_date={task.due_date}
				isCompleted={task.isCompleted}
				onDelete={() => deleteTask(task.id)}
			/>
		{/each}
	</div>
</div>
