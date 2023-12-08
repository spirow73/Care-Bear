<script>
	import TaskAdder from '$lib/components/task/TaskAdder.svelte';
	import TaskList from '$lib/components/task/TaskList.svelte';

	export let closeEventModal;
	export let currentEventDate;
	export let tasksForDay = []; // Añadir esto para recibir las tareas del día
</script>

<div class="modal-container">
	<div class="modal-content overflow-auto">
		<TaskAdder calendarDate={currentEventDate} />
		{#if tasksForDay.length > 0}
			<TaskList title="Tasks for the Day" tasks={tasksForDay} />
		{/if}
		<button
			on:click={closeEventModal}
			class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
		>
			Close
		</button>
	</div>
</div>

<style>
	.modal-container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5); /* Set the opacity to 50% */
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.modal-content {
		background-color: white;
		padding: 2rem;
		border-radius: 5px;
		overflow-y: auto; /* Habilitar scroll */
	}

	@media (max-width: 600px) {
		.modal-content {
			width: 90%;
		}
	}
</style>
