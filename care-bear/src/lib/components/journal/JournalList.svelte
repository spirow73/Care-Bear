<script>
	import { onMount } from 'svelte';
	import JournalEntryFront from './JournalEntryFront.svelte';
	import V2JournalData from './V2JournalData.svelte'; // Assuming V2JournalData component exists
	import JournalEntry from './JournalEntry.svelte'; // Assuming JournalEntry component exists
	import { journalEntryStore } from '$lib/journalEntryStore.js';

	// Create a readable store for journal entries
	const { subscribe: journalSubscribe, loadInitialEntries } = journalEntryStore;

	let selectedEntry = null;

	let unsubscribe;
	let journalEntries = [];

	// Subscribe to the journalEntries store
	unsubscribe = journalSubscribe(entries => {
		journalEntries = entries;
	});

	onMount(async () => {
		await loadInitialEntries(); // Fetch initial entries when component mounts
		return () => {
			unsubscribe(); // Unsubscribe when the component unmounts
		};
	});

	function selectEntry(entryId) {
		const foundEntry = journalEntries.find(entry => entry.id === entryId);
    console.log('Found Entry:', foundEntry);
    if (foundEntry) {
        selectedEntry = foundEntry; // Update the 'selectedEntry' variable
        console.log('Selected Entry:', selectedEntry);
    }
  }
</script>

<div class="p-4">
	<div class="bg-white shadow-md rounded-lg">
		<div class="p-4 border-b">
			<h2 class="text-xl font-semibold text-gray-800">My Journals</h2>
		</div>
		<ul>
			{#each journalEntries as entry}
    <li class="border-b last:border-b-0" on:click={() => selectEntry(entry.id)}>
      <a href={`/journal/${entry.id}`} class="block">
        <JournalEntryFront {entry} />
      </a>
    </li>
  {/each}
		</ul>
	</div>

	{#if selectedEntry}
		<V2JournalData
			journal_entry_id={selectedEntry.id}
			title={selectedEntry.title}
			entry={selectedEntry.entry}
			timestamp={selectedEntry.timestamp}
		/>
		<hr class="my-8 border-gray-300" />
		<JournalEntry />
	{/if}
</div>
