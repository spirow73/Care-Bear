<script>
	import JournalEntryDisplay from './journalEntry/JournalEntryDisplay.svelte';
	import JournalEntryEdit from './journalEntry/JournalEntryEdit.svelte';
	export let entry;
	let editing = false;

	function toggleEdit() {
		editing = !editing;
	}
</script>

<article class="m-3 p-4 bg-white shadow-lg rounded-lg">
	<h1 class="text-2xl font-bold text-gray-800">{entry.title}</h1>
	<p class="text-sm text-gray-600">{new Date(entry.timestamp).toLocaleString()}</p>

	{#if editing}
		<JournalEntryEdit {entry} on:saveContent={toggleEdit} on:cancelEdit={toggleEdit} />
	{:else}
		<JournalEntryDisplay {entry} on:editContent={toggleEdit} />
	{/if}

	<div class="flex justify-between items-center mt-4">
		<!-- Existing Edit and Delete buttons -->
	</div>
</article>
