<script>
	import { onMount } from 'svelte';
	import { fetchTasks } from '../../taskClient';
	import Task from './Task.svelte';

	export const title = '';
	export let showFilters = false; // New prop to control filter visibility
	export let tasks = [];
	export let limit = null;
	export let deadline = null;

	let sortOption = 'deadline'; // Default sort option
	let filterOption = 'all'; // Default filter option

	// ???
	onMount(() => {
		loadTasks(); // Load tasks when the component mounts
	});

	// Function to load tasks based on the current filter and sort options
	async function loadTasks() {
		let filter = {};
		if (filterOption !== 'all') {
			filter.isCompleted = filterOption === 'completed';
		}

		try {
			const fetchedTasks = await fetchTasks({ filter, sort: sortOption });
			tasks = fetchedTasks;
		} catch (error) {
			console.error('Error fetching tasks:', error);
		}
	}

	$: if (filterOption || sortOption) {
		loadTasks(); // Reload tasks on filter or sort option change
	}

	// Crear una funcion para saber si la tarea se encuentra en el dia seleccionado
	function isTaskInSelectedDay(task) {
		if (deadline === null) {
			return true;
		} else {
			// Vamos a coger la fecha de la tarea y le vamos a quitar la informacion de la
			// hora, minutos, segundos y milisegundos
			const taskDate = new Date(task.deadline);
			taskDate.setHours(0, 0, 0, 0);

			// Ahora comparamos
			return taskDate.getTime() === deadline.getTime();
		}
	}
</script>

<div>
	{#if showFilters}
		<h1 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-100">{title}</h1>
		<div class="mb-4 flex flex-wrap gap-2 justify-center">
			<select
				bind:value={filterOption}
				class="bg-pink-100 border border-beige-300 rounded-md py-2 px-4 leading-tight text-center focus:outline-none focus:bg-beige-200 focus:border-beige-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
			>
				<option value="all">All Tasks</option>
				<option value="completed">Completed</option>
				<option value="pending">Pending</option>
			</select>

			<select
				bind:value={sortOption}
				class="bg-pink-100 border border-beige-300 rounded-md py-2 px-4 leading-tight text-center focus:outline-none focus:bg-beige-200 focus:border-beige-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
			>
				<option value="deadline">Sort by Deadline</option>
			</select>
		</div>
	{/if}

	{#if limit !== null || limit > 0}
		{#each tasks.slice().reverse().slice(0, limit) as task}
			{#if deadline === null}
				<Task
					title={task.title}
					description={task.description}
					deadline={task.deadline}
					isCompleted={task.isCompleted}
					task_id={task.task_id}
				/>
			{:else if isTaskInSelectedDay(task)}
				<Task
					title={task.title}
					description={task.description}
					deadline={task.deadline}
					isCompleted={task.isCompleted}
					task_id={task.task_id}
				/>
			{:else}
				<p class="text-gray-500 text-center" />
			{/if}
		{/each}
	{:else}
		{#each tasks.slice().reverse() as task}
			{#if deadline === null}
				<Task
					title={task.title}
					description={task.description}
					deadline={task.deadline}
					isCompleted={task.isCompleted}
					task_id={task.task_id}
				/>
			{:else if isTaskInSelectedDay(task)}
				<Task
					title={task.title}
					description={task.description}
					deadline={task.deadline}
					isCompleted={task.isCompleted}
					task_id={task.task_id}
				/>
			{/if}
		{/each}
	{/if}
</div>
