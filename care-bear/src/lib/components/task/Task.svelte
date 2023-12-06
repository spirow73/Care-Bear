<script>
	import TaskView from './TaskView.svelte';
	import TaskEdit from './TaskEdit.svelte';
	import { removeDbTask } from '$lib/taskStore';
	export let task_id;
	export let title;
	export let description;
	export let deadline;
	export let isCompleted;

	let isEditing = false;

	$: formattedDeadline = new Date(deadline).toLocaleDateString('en-EN', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});

	function handleDelete() {
		console.log(task_id);
		removeDbTask(task_id);
	}

	function toggleEdit() {
		isEditing = !isEditing;
	}
</script>

<div>
	{#if isEditing}
		<TaskEdit {task} />
	{:else}
		<TaskView {task} />
	{/if}
	<button on:click={toggleEdit}>Edit</button>
</div>
