<script>
	import { addJournalEntry } from '$lib/journalStore.js';

	// No es necesario declarar user_id aquí si siempre va a ser 1
	// De lo contrario, deberías pasarlo como prop o conseguirlo de otra forma (p.ej., sesión de usuario)
	export let journalId;
	let title = '';
	let content = '';
	const user_id = 1; // Esto es un placeholder, reemplázalo con el valor correcto

	async function save() {
		if (title.trim() === '' || content.trim() === '') {
			alert('Please enter a title and content for the journal entry.');
			return;
		}

		await addJournalEntry(journalId, user_id, { title, content });

		// Restablece el formulario
		title = '';
		content = '';
	}
</script>

<div class="p-4 bg-white shadow rounded-lg m-4">
	<h2 class="text-2xl font-semibold mb-4">Create a new entry</h2>
	<input
		type="text"
		bind:value={title}
		class="w-full p-2 mb-2 border border-gray-300 rounded-md"
		placeholder="Title"
	/>
	<textarea
		bind:value={content}
		class="w-full p-2 border border-gray-300 rounded-md"
		placeholder="Content"
	/>
	<button
		class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
		on:click={save}
	>
		Add Entry
	</button>
</div>
