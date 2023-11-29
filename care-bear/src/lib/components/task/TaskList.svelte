<!-- TaskList.svelte -->

<script>
	import Task from './Task.svelte';

	export let title = 'Task List';
	export let tasks = [];
</script>

<div class="p-4 border rounded m-3">
	<h1 class="text-2xl font-semibold mb-3">{title}</h1>
	{#each tasks as task}
		<Task
			title={task.title}
			description={task.description}
			deadline={task.deadline}
			isCompleted={task.isCompleted}
			task_id={task.task_id}
		/>
	{/each}
</div>
