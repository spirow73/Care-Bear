<script>
    import { loadDbTasks } from '$lib/taskStore.js';
    import { onMount } from 'svelte';

    onMount(async () => {
        await loadDbTasks();
    });

    export let title = 'Add Task';
    export let calendarDate;

    $: formattedDeadline = new Date(calendarDate).toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    let newTask = {
        user_id: 1,
        title: '',
        description: '',
        deadline: '', 
        isCompleted: false
    };

    let dateData = {
        date: '', 
        time: '' 
    };

    let addTask = async () => {
        // ... existing addTask logic ...
    };

    // ... additional script content ...
</script>

<Toaster></Toaster>
<form
	on:submit|preventDefault={addTask}
	class="p-4 bg-orange-200 shadow rounded-lg m-4 dark:bg-gray-700 dark:border-gray-600"
>
	<!-- Heading -->
	<h3 class="text-2xl font-semibold mb-4">Create a new task</h3>

	<!-- Title Input -->
	<div class="mb-4 dark:bg-gray-700 dark:border-gray-600">
		<label for="title" class="block text-sm font-medium text-gray-700 mb-1">Title</label>
		<input
			type="text"
			id="title"
			bind:value={newTask.title}
			class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
			placeholder="Task title"
		/>
	</div>

	<!-- Description Input -->
	<div class="mb-4 dark:bg-gray-700 dark:border-gray-600">
		<label for="description" class="block text-sm font-medium text-gray-700 mb-1">Description</label
		>
		<textarea
			id="description"
			bind:value={newTask.description}
			class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
			placeholder="Task description"
		/>
	</div>

	<!-- Date and Time Inputs -->
	<div class="flex flex-col sm:flex-row mb-4 dark:bg-gray-700 dark:border-gray-600">
		<div class="mb-2 sm:mr-2 sm:mb-0 dark:bg-gray-700 dark:border-gray-600">
			<label for="date" class="block text-sm font-medium text-gray-700 mb-1">Date</label>
			<input
				type="date"
				bind:value={dateData.date}
				class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
			/>
		</div>
		<div class="mb-2 dark:bg-gray-700 dark:border-gray-600">
			<label for="time" class="block text-sm font-medium text-gray-700 mb-1">Time</label>
			<input
				type="time"
				bind:value={dateData.time}
				class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
			/>
		</div>
	</div>

	<!-- Button -->
	<div class="flex justify-end dark:bg-gray-700 dark:border-gray-600">
		<button
			type="submit"
			class="px-4 py-2 bg-button-1 text-white rounded hover:bg-button-2 transition duration-300 dark:hover:bg-blue-700"
		>
			Add Task
		</button>
	</div>
</form>
