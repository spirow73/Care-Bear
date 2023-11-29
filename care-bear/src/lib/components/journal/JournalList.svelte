<script>
	import JournalEntry from './JournalEntry.svelte';

	export let journals = [];
</script>

<!-- Display section for journals -->
<div class="p-4">
	<div class="bg-white shadow-md rounded-lg">
		<div class="p-4 border-b">
			<h2 class="text-2xl font-semibold text-gray-800">My Journals</h2>
		</div>
		<ul>
			{#each journals.slice().reverse() as journal}
				<li class="border-b last:border-b-0 hover:bg-gray-100">
					<!-- Link for each journal with an event to select the journal -->
					<a href={`/journal/${journal.journal_id}`} class="block p-4">
						<span class="text-lg font-semibold text-gray-800">{journal.title}</span>
						<span class="text-sm text-gray-600 block">{journal.description}</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>

	<!-- Display selected journal's details -->
	{#if selectedJournal}
		<JournalEntry journal={selectedJournal} />
	{/if}
</div>
