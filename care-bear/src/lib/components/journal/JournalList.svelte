<script>
	import JournalEntryFront from './JournalEntryFront.svelte';

	// Suppose these are the data you receive from your backend or store
	export let journals;
</script>

<div class="space-y-4 p-4">
	{#each journals as journal}
		<div class="bg-white shadow-md rounded-lg overflow-hidden">
			<div class="p-4 border-b">
				<h1 class="text-2xl font-semibold text-gray-800">{journal.title}</h1>
				<p class="text-sm text-gray-600">{journal.description}</p>
				<p class="text-sm text-gray-500">Journal ID: {journal.journal_id}</p>
			</div>
			<ul>
				{#each journal.journal_entry as entry}
					<li class="border-b last:border-b-0">
						<a href={`/journal/${entry.journal_id}`} class="block">
							<JournalEntryFront {entry} />
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/each}
</div>
