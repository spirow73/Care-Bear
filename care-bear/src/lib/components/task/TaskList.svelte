<script>
	import { onMount } from 'svelte';
    import { fetchTasks } from '../../taskClient';
	import Task from './Task.svelte';


	export const title = '';
	export let tasks = []; // Now managed within the component
	export let limit = null; // Optional: Use if you want to limit the number of tasks displayed

	let sortOption = 'deadline'; // Default sort option
	let filterOption = 'all'; // Default filter option

	// ???
	onMount(() => {
		loadTasks(); // Load tasks when the component mounts
	});

	// Function to load tasks based on the current filter and sort options
	function loadTasks() {
		let filter = {};
		if (filterOption !== 'all') {
			filter.isCompleted = filterOption === 'completed';
		}

		// ???
		fetchTasks({ filter, sort: sortOption })
			.then((fetchedTasks) => {
				tasks = fetchedTasks;
			})
			.catch((error) => {
				console.error('Error fetching tasks:', error);
			});
	}

	// ???
	// Watch for changes in filter and sort options and reload tasks
	$: if (filterOption || sortOption) {
		loadTasks();
	}
</script>

<div>
    <h1 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-100">{title}</h1>

    <div class="mb-4 flex flex-wrap gap-2 justify-center">
        <select bind:value={filterOption} class="bg-pink-100 border border-beige-300 rounded-md py-2 px-4 leading-tight text-center focus:outline-none focus:bg-beige-200 focus:border-beige-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <option value="all">All Tasks</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
        </select>

        <select bind:value={sortOption} class="bg-pink-100 border border-beige-300 rounded-md py-2 px-4 leading-tight text-center focus:outline-none focus:bg-beige-200 focus:border-beige-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <option value="deadline">Sort by Deadline</option>
        </select>
    </div>






	{#if limit}
		{#each tasks.slice().reverse().slice(0, limit) as task}
			<Task
				title={task.title}
				description={task.description}
				deadline={task.deadline}
				isCompleted={task.isCompleted}
				task_id={task.task_id}
			/>
		{/each}
	{:else}
		{#each tasks.slice().reverse() as task}
			<Task
				title={task.title}
				description={task.description}
				deadline={task.deadline}
				isCompleted={task.isCompleted}
				task_id={task.task_id}
			/>
		{/each}
	{/if}
</div>
