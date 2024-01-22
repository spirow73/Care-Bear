<script>
	export let entry;
	let max_entries = 100;

	import { removeJournalEntry } from '$lib/journalStore';

	async function handleDelete() {
		if (confirm('Are you sure you want to delete this entry?')) {
			await removeJournalEntry(entry.journal_entry_id);
		}

		// Hace que el entry desaparezca
		entry = null;
	}

	let finalLocation = `/journal/${entry.journal_id}`;
</script>

{#if entry !== null}
	<div class="flex items-center p-4 hover:bg-fuchsia-200 transition-colors cursor-pointer">
		<div class="flex-1">
			<h3 class="text-lg font-semibold text-gray-900 text-base">{entry.title}</h3>
			<p class="text-gray-500 mt-1 text-sm">
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
				on:click|preventDefault={handleDelete}
			>
				🗑️
			</button>
		</div>
	</div>
{/if}
