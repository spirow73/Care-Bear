<script>
	import { addDbTask, loadDbTasks } from '$lib/taskStore.js';
	import { onMount } from 'svelte';

	import toast, { Toaster } from 'svelte-french-toast';

	onMount(async () => {
		await loadDbTasks();
	});

	export const title = 'Add Task';
	export let calendarDate = null;
	export let closeEventModal;

	$: formattedDeadline = new Date(calendarDate).toLocaleDateString('en-EN', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});

	let newTask = {
		user_id: 1,
		title: '',
		description: '',
		deadline: '', // Nuevo campo 'deadline' para la fecha
		isCompleted: false
	};

	let dateData = {
		date: '', // Cambiado a 'date'
		time: '' // Nuevo campo 'time' para la hora
	};

	async function addTask() {
		let newTaskDeadline;
		if (calendarDate) {
			newTaskDeadline = calendarDate;
		} else {
			newTaskDeadline = new Date(`${dateData.date}T${dateData.time}:00.000Z`).toISOString();
		}

		newTask.deadline = newTaskDeadline;

		await addDbTask(newTask);

		// Reiniciar el objeto newTask para el siguiente uso
		newTask = {
			user_id: 1,
			title: '',
			description: '',
			deadline: '',
			isCompleted: false
		};

		// Reiniciar el objeto dateData para el siguiente uso
		dateData = {
			date: '',
			time: ''
		};

		toast.success('Task added!', {
			style: 'background: #84B59F'
		});
		closeEventModal();
	}
</script>

<Toaster />
<form on:submit|preventDefault={addTask} class="p-4 bg-fuchsia-100 shadow rounded-lg">
	<!-- Heading -->
	<h3 class="text-2xl font-semibold mb-4">Create a new task</h3>

	<!-- Title Input -->
	<div class="mb-4">
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
	<div class="mb-4">
		<label for="description" class="block text-sm font-medium text-gray-700 mb-1">Description</label
		>
		<textarea
			id="description"
			bind:value={newTask.description}
			class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
			placeholder="Task description"
		/>
	</div>

	<!-- Date and Time Inputs -->
	{#if calendarDate === null}
		<!-- Date and Time Inputs -->
		<div class="flex flex-col sm:flex-row mb-4">
			<div class="mb-2 sm:mr-2 sm:mb-0">
				<label for="date" class="block text-sm font-medium text-gray-700 mb-1">Date</label>
				<input
					type="date"
					bind:value={dateData.date}
					class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
				/>
			</div>
			<div class="mb-2">
				<label for="time" class="block text-sm font-medium text-gray-700 mb-1">Time</label>
				<input
					type="time"
					bind:value={dateData.time}
					class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
				/>
			</div>
		</div>
	{:else}
		<!-- Display the selected date and time -->
		<div class="flex flex-col sm:flex-row mb-4">
			<div class="mb-2 sm:mr-2 sm:mb-0">
				<label class="block text-sm font-medium text-gray-700 mb-1">Deadline</label>
				<p class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm">
					{formattedDeadline}
				</p>
			</div>
			<div class="mb-2">
				<label for="time" class="block text-sm font-medium text-gray-700 mb-1">Time</label>
				<input
					type="time"
					bind:value={dateData.time}
					class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
				/>
			</div>
		</div>
	{/if}

	<!-- Button -->
	<div class="flex justify-end">
		<button
			type="submit"
			class="px-4 py-2 bg-button-1 text-white rounded hover:bg-button-2 transition duration-300"
		>
			Add Task
		</button>
	</div>
</form>
