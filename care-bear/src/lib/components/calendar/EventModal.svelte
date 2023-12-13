<script>
	import TaskAdder from '$lib/components/task/TaskAdder.svelte';
	import TaskList from '$lib/components/task/TaskList.svelte';

	export let closeEventModal;
	export let currentEventDate;
	export let tasksForDay = []; // Añadir esto para recibir las tareas del día
	console.log(tasksForDay);
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
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.5); /* Opacidad del 50% */
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 20px; /* Margen alrededor del modal */
	}

	.modal-content {
		background-color: white;
		padding: 2rem;
		border-radius: 5px;
		overflow-y: auto; /* Habilitar scroll */
		max-width: 100%; /* Ancho máximo del 100% */
		max-height: 100%; /* Altura máxima del 100% */
		box-sizing: border-box; /* Incluir padding en el ancho/altura total */
	}

	@media (max-width: 600px) {
		.modal-content {
			width: 90%; /* Ajustar el ancho en pantallas pequeñas */
		}
	}
</style>
