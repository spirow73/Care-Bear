<script>
	import TaskAdder from '$lib/components/task/TaskAdder.svelte';
	import TaskList from '$lib/components/task/TaskList.svelte';

	export let closeEventModal;
	export let currentEventDate;
	export let tasksForDay = []; // Añadir esto para recibir las tareas del día
</script>

<div class="modal-container">
	<div class="modal-content">
		<TaskAdder calendarDate={currentEventDate} />
		{#if tasksForDay.length > 0}
			<TaskList title="Tasks for the Day" tasks={tasksForDay} />
		{/if}
		<button on:click={closeEventModal}>Close</button>
	</div>
</div>

<style>
	.modal-container {
		/* Estilos para el fondo oscurecido detrás del modal */
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.modal-content {
		/* Estilos para el contenido del modal */
		background-color: white;
		padding: 2rem;
		border-radius: 10px;
	}
</style>
