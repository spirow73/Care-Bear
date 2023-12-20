<script>
	import { addJournal } from '$lib/journalStore.js';

	let title = '';
	let description = '';
	let userId = 1; // Asegúrate de obtener el ID del usuario actual de manera adecuada

	async function handleSubmit() {
		if (title.trim() === '') {
			alert('Please enter a title for the journal.');
			return;
		}

		const newJournalData = {
			title,
			description,
			user_id: userId // Asegúrate de que este valor se obtenga de manera adecuada
		};

		// Llama a la función addJournal para añadir el nuevo journal
		await addJournal(newJournalData);

		// Restablece el formulario
		title = '';
		description = '';
	}
</script>

<form on:submit|preventDefault={handleSubmit} class="p-4 bg-white shadow rounded-lg m-4">
	<h2 class="text-2xl font-semibold mb-4">Create a new journal</h2>
	<div class="mb-4">
		<label for="title" class="block text-sm font-medium text-gray-700">Title</label>
		<input
			type="text"
			id="title"
			bind:value={title}
			class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
			placeholder="Journal title"
		/>
	</div>

	<div class="mb-4">
		<label for="description" class="block text-sm font-medium text-gray-700">Description</label>
		<textarea
			id="description"
			bind:value={description}
			class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
			placeholder="Journal description"
		/>
	</div>

	<div class="flex justify-end">
		<button
			type="submit"
			class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
		>
			Add Journal
		</button>
	</div>
</form>
