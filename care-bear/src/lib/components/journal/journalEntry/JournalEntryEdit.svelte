<script>
  // Importing necessary Svelte functions and the journalEntryStore module
  import { onMount, createEventDispatcher } from 'svelte';
  import { journalEntryStore } from '$lib/journalEntryStore.js';

  // Destructuring methods from the journalEntryStore module
  const { loadInitialJournals, getEntriesForJournal } = journalEntryStore;

  // Initializing reactive variables to hold data
  let journals = []; // Array to hold journal entries
  let selectedJournal = null; // Variable to store the selected journal
  let entries = []; // Array to store journal entries related to the selected journal
  let error = null; // Variable to handle errors during data fetching

  // Executes when the component mounts
  onMount(async () => {
    try {
      // Loads initial journals and assigns them to the 'journals' array
      journals = await loadInitialJournals();
    } catch (err) {
      // Catches and handles errors during journal loading
      error = err;
      console.error('Error loading initial journals:', err);
    }
  });

  // Event dispatcher to communicate selected journal entries to parent components
  const dispatch = createEventDispatcher();

  // Function triggered when a journal is selected
  async function selectJournal(journal) {
    try {
      // Sets the selectedJournal to the clicked journal
      selectedJournal = journal;
      // Fetches entries related to the selected journal and assigns them to 'entries'
      entries = await getEntriesForJournal(journal.id);
      // Dispatches an event notifying the selected journal entries
      dispatch('journalSelected', entries);
    } catch (err) {
      // Catches and handles errors during entry fetching
      error = err;
      console.error('Error fetching entries for the journal:', err);
    }
  }
</script>

{#if error}
  <!-- Display an error message if an error occurs -->
  <p>Error: {error.message}</p>
{:else}
  <!-- Display the list of journals if no error occurs -->
  <div class="p-4">
    <div class="bg-white shadow-md rounded-lg">
      <div class="p-4 border-b">
        <h2 class="text-xl font-semibold text-gray-800">My Journals</h2>
      </div>
      <ul>
        {#each journals as journal}
          <!-- Iterates through the journals and displays them -->
          <li class="border-b last:border-b-0" on:click={() => selectJournal(journal)}>
            <!-- Clicking a journal triggers the selectJournal function -->
            <a href={`/journal/${journal.id}`} class="block">
              <span>{journal.title}</span>
              <span>{journal.timestamp}</span>
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </div>

  <!-- Display selected journal entries -->
  {#if selectedJournal}
    <!-- If a journal is selected, display its entries -->
    <div class="p-4">
      <h2>{selectedJournal.title}</h2>
      <ul>
        {#each entries as entry}
          <!-- Iterates through the entries of the selected journal -->
          <li>
            <p>{entry.title}</p>
            <p>{entry.content}</p>
            <p>{entry.timestamp}</p>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
{/if}
