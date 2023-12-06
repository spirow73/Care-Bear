<script>
	import { updateDbTask } from '$lib/taskStore';
	export let task_id;
	export let title;
	export let description;
	export let deadline;
	export let closeEdit;

	// Convertir deadline a un formato adecuado para el input tipo 'date'
	$: editableDeadline = deadline ? new Date(deadline).toISOString().split('T')[0] : '';

	async function handleSave() {
		// Convertir la fecha de nuevo a un formato adecuado para el backend si es necesario
		const updatedDeadline = new Date(editableDeadline);
		await updateDbTask(task_id, { title, description, deadline: updatedDeadline });
		// Aquí podrías incluir lógica adicional después de guardar, como cerrar el modo de edición
		closeEdit();
	}
</script>

<form on:submit|preventDefault={handleSave}>
	<div class="flex items-center">
		<h2 class="text-xl font-semibold mr-2">Title:</h2>
		<input
			class="flex-1 border-b-2 border-gray-300 p-1 bg-transparent"
			type="text"
			bind:value={title}
		/>
	</div>
	<div class="flex items-center mt-2">
		<h2 class="text-xl font-semibold mr-2">Description:</h2>
		<textarea class="flex-1 border-b-2 border-gray-300 bg-transparent" bind:value={description} />
	</div>
	<div class="flex items-center mt-2">
		<h2 class="text-xl font-semibold mr-2">Deadline:</h2>
		<input
			class="border-b-2 border-gray-300 p-1 bg-transparent"
			type="date"
			bind:value={editableDeadline}
		/>
	</div>
	<div class="text-center">
		<button type="submit" class="mt-4 bg-button-1 hover:bg-button-2 text-white py-2 px-4 rounded-md transition-colors duration-300">
			Save
		</button>
	</div>	
</form>
