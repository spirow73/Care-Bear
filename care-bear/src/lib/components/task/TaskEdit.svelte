<script>
	import { updateDbTask } from '$lib/taskStore';
	export let task_id;
	export let title;
	export let description;
	export let deadline;
	export let closeEdit;

	// Convert deadline to an appropriate format for the 'date' input
	$: editableDeadline = deadline ? new Date(deadline).toISOString().split('T')[0] : '';

	async function handleSave() {
		// Convert the date back to an appropriate format for the backend if needed
		const updatedDeadline = new Date(editableDeadline);
		await updateDbTask(task_id, { title, description, deadline: updatedDeadline });
		// Additional logic after saving, such as closing the edit mode
		closeEdit();
	}
</script>

<form on:submit|preventDefault={handleSave} class="mt-4">
	<legend class="text-lg font-semibold mb-2">Task Details</legend>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
		<div>
			<label for="taskTitle" class="block text-gray-800 font-semibold mb-2">Title:</label>
			<input
				id="taskTitle"
				class="w-full border-b-2 border-gray-300 p-1 bg-transparent focus:outline-none focus:border-purple-300"
				type="text"
				bind:value={title}
			/>
		</div>
		<div>
			<label for="taskDeadline" class="block text-gray-800 font-semibold mb-2">Deadline:</label>
			<input
				id="taskDeadline"
				class="w-full border-b-2 border-gray-300 p-1 bg-transparent focus:outline-none focus:border-purple-300"
				type="date"
				value={editableDeadline}
			/>
		</div>
		<div class="col-span-2">
			<label for="taskDescription" class="block text-gray-800 font-semibold mb-2"
				>Description:</label
			>
			<textarea
				id="taskDescription"
				class="w-full h-9 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-purple-300 resize-none"
				bind:value={description}
			/>
		</div>
	</div>
	<div class="text-center mt-4">
		<button
			type="button"
			class="bg-button-1 hover:bg-buton-2 text-white py-2 px-4 rounded-md transition duration-300 focus:outline-none focus:ring focus:border-purple-300 ml-2"
			on:click={closeEdit}
		>
			Cancel
		</button>
		<button
			type="submit"
			class="bg-button-1 hover:bg-buton-2 text-white py-2 px-4 rounded-md transition duration-300 focus:outline-none focus:ring focus:border-purple-300"
		>
			Save
		</button>
	</div>
</form>
