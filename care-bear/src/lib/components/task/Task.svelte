<script>
	import { removeDbTask, toggleTaskCompletion } from '$lib/taskStore';
	import TaskEdit from './TaskEdit.svelte';
	import TaskView from './TaskView.svelte';
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

	function handleToggleCompletion() {
		toggleTaskCompletion(task_id, isCompleted);
	}
</script>

<div class="flex items-center mb-2 bg-brown-900 shadow-md p-4 rounded-lg border border-black">
	<div class="flex flex-col items-center mr-4 text-xs">
        <div
            class="{isCompleted ? 'bg-green-500' : 'bg-red-500'} h-6 w-6 rounded-full flex items-center justify-center"
            on:click={handleToggleCompletion}
        />
        <span><b>{isCompleted ? 'Completed' : 'Pending'}</b></span>
    </div>

    {#if isEditing}
        <TaskEdit {title} {description} {deadline} {task_id} closeEdit={toggleEdit} />
    {:else}
        <TaskView {title} {description} {formattedDeadline} />
    {/if}

    <button on:click={toggleEdit} class="ml-2">{isEditing ? '❌' : '🖊️'}</button>

    <button on:click={handleDelete} class="text-red-500 hover:text-red-700 ml-auto">
        <span class="text-red-500">🗑️</span>
    </button>
</div>
