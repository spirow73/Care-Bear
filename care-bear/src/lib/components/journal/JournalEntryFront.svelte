<script>
	import { deleteJournalEntryInStore } from '$lib/journalStore.js';
 // Asegúrate de implementar esta función

	export let entry;
	let max_entries = 100;

	async function handleDelete() {
		if (confirm('Are you sure you want to delete this entry?')) {
			await deleteJournalEntryInStore(entry.journal_entry_id);
			// Agrega lógica adicional si necesitas actualizar el UI tras eliminar la entrada
		}
	}
</script>

{#if entry}
	<div class="flex items-center p-4 hover:bg-orange-200 transition-colors cursor-pointer border border-black">
		<div class="flex-1">
			<h3 class="text-lg font-semibold text-gray-900">{entry.title}</h3>
			<p class="text-gray-500 mt-1">
				{#if entry.content && entry.content.length > 0}
					{entry.content.length > max_entries
						? `${entry.content.substring(0, max_entries)}...`
						: entry.content}
				{:else}
					Couldn't find the content for this entry
				{/if}
			</p>
		</div>
		<div class="flex items-center">
			<span class="text-sm text-gray-600">
				{entry.timestamp ? new Date(entry.timestamp).toLocaleDateString() : ''}
			</span>
			<button
				class="ml-4 text-red-500 hover:text-red-700"
				title="Delete entry"
				on:click={handleDelete}
			>
				🗑️
			</button>
		</div>
	</div>
{/if}
