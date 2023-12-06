<!-- TaskAdder.svelte -->
<script>
	import { loadDbTasks, addDbTask } from '$lib/taskStore.js';
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
		deadline: '', // Nuevo campo 'deadline' para la fecha
		isCompleted: false
	};

	let dateData = {
		date: '', // Cambiado a 'date'
		time: '' // Nuevo campo 'time' para la hora
	};

	let addTask = async () => {
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
	};
</script>

<div class="p-4 m-3 border rounded bg-white">
	<h3 class="text-xl font-semibold mb-2">{title}</h3>
	<input
		type="text"
		placeholder="Title"
		bind:value={newTask.title}
		class="border rounded p-2 mb-2"
	/>
	<input
		type="text"
		placeholder="Description"
		bind:value={newTask.description}
		class="border rounded p-2 mb-2"
	/>
	<div class="flex mb-2">
		{#if calendarDate}
			<p>{formattedDeadline}</p>
		{:else}
			<input type="date" bind:value={dateData.date} class="border rounded p-2 mr-2" />
		{/if}
		<input type="time" bind:value={dateData.time} class="border rounded p-2" />
	</div>
	<button
		on:click={addTask}
		class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
	>
		Add Task
	</button>
</div>
