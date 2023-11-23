<script>
	export let entry;
	let newContent = entry.content;
	export let onSaveContent;
	export let onCancelEdit;

	function save() {
		// Lógica para guardar el nuevo contenido
		onSaveContent(newContent);
	}

	function cancel() {
		// Lógica para cancelar la edición
		onCancelEdit();
	}
</script>

<textarea
	bind:value={newContent}
	class="w-full p-2 border rounded"
	placeholder="Type your content here..."
/>
<button class="btn-save" on:click={save}>Save Content</button>
<button class="btn-cancel" on:click={cancel}>Cancel</button>
