<!-- TaskAdder.svelte -->
<script>
	import { addTaskToDb } from '$lib/taskStore';

	export let title = 'Add Task';
	let taskName = '';
	let taskDate = '';
	// Commented out 'isCompleted' as it's not being used for now.

	function handleAddTask() {
		if (taskName.trim() === '' || taskDate.trim() === '') {
			alert('Task name and date are required.');
			return;
		}

		const newTask = {
			definition: taskName,
			due_date: taskDate,
			is_completed: false // You can set this based on user input if needed.
		};

		addTaskToDb(newTask);

		taskName = '';
		taskDate = '';
	}
</script>

<div class="p-4 m-3 border rounded">
	<h1 class="text-2xl font-semibold mb-2">{title}</h1>
	<input
		type="text"
		placeholder="Task name"
		bind:value={taskName}
		class="border rounded p-2 mb-2"
	/>
	<input type="date" bind:value={taskDate} class="border rounded p-2 mb-2" />
	<button
		on:click={handleAddTask}
		class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
	>
		Add Task
	</button>
</div>
