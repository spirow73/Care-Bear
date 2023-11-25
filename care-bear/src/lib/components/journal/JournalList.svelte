<script>
	import { onMount } from 'svelte';
	import JournalEntry from './JournalEntry.svelte'; // Assuming this component exists
	import { journalStore } from '$lib/journalStore.js';
  
	const { subscribe: journalSubscribe, loadInitialJournals } = journalStore;
  
	let selectedJournal = null;
  
	let unsubscribe;
	let journals = [];
  
	// Subscribe to changes in the journalStore
	unsubscribe = journalSubscribe(data => {
	  journals = data;
	});
  
	// Load initial journals when the component mounts
	onMount(async () => {
	  await loadInitialJournals();
	  return () => {
		// Unsubscribe to prevent memory leaks
		unsubscribe();
	  };
	});
  
	// Function to select a specific journal based on its ID
	function selectJournal(journalId) {
	  // Find the journal with the given ID in the list of journals
	  const foundJournal = journals.find(journal => journal.journal_id === journalId);
	  if (foundJournal) {
		// Assign the selectedJournal with a deep copy of the found journal
		selectedJournal = { ...foundJournal };
	  }
	}
  </script>
  
  <!-- Display section for journals -->
  <div class="p-4">
	<div class="bg-white shadow-md rounded-lg">
	  <div class="p-4 border-b">
		<h2 class="text-2xl font-semibold text-gray-800">My Journals</h2>
	  </div>
	  <ul>
		{#each journals as journal}
		  <li class="border-b last:border-b-0 hover:bg-gray-100">
			<!-- Link for each journal with an event to select the journal -->
			<a href={`/journal/${journal.journal_id}`} class="block p-4" on:click={() => selectJournal(journal.journal_id)}>
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
  