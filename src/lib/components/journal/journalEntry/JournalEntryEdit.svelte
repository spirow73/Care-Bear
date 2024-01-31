<script>
	export let entry;
	export let onSaveContent;
	export let onCancelEdit;

	let newContent = entry.content;

	async function save() {
		try {
			// Actualizar la entrada en la base de datos y en el store
			await entry.updateJournalEntry({ content: newContent });

			// Llamar al callback de onSaveContent para notificar al componente padre
			onSaveContent();
		} catch (error) {
			console.error('Error saving journal entry:', error);
			// Aquí puedes manejar el error, mostrar un mensaje al usuario, etc.
		}
	}

	function cancel() {
		// Lógica para cancelar la edición
		onCancelEdit();
	}
</script>

<div class="p-4bg-fuchsia-100 shadow rounded-lg">
	<textarea
		bind:value={newContent}
		class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
		placeholder="Type your content here..."
	/>

	<div class="flex justify-end space-x-2 mt-4">
		<button
			class="btn-cancel px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition duration-300"
			on:click={cancel}
		>
			Cancel
		</button>
		<button
			class="btn-save px-4 py-2 bg-button-1 text-white rounded hover:bg-button-2 transition duration-300"
			on:click={save}
		>
			Save Content
		</button>
	</div>
</div>
