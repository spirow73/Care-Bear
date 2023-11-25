<script>
    // Importing necessary Svelte functions and modules
    import { onMount, createEventDispatcher } from 'svelte';
    import { journalEntryStore } from '$lib/journalEntryStore.js'; // Importing the journal entry store
    import JournalEntryDisplay from './journalEntry/JournalEntryDisplay.svelte'; // Importing display component
    import JournalEntryEdit from './journalEntry/JournalEntryEdit.svelte'; // Importing edit component

    // Destructuring functions from the imported journalEntryStore
    const { subscribe: entrySubscribe, loadInitialEntries, getEntryById } = journalEntryStore;

    // Initializing variables to manage selected entry, subscriptions, and entry data
    let selectedEntryId = null;
    let unsubscribe;
    let journalEntries = [];
    let selectedJournalEntry = null;
    let editing = false;

    // Subscribing to changes in the journal entry store
    unsubscribe = entrySubscribe(entries => {
        journalEntries = []; // Clear the array before updating to avoid duplicates
        journalEntries = [...entries]; // Update the array with new entries
    });

    // Executed when the component is mounted
    onMount(async () => {
        await loadInitialEntries(); // Loads initial entries from the journal entry store
        return () => {
            unsubscribe(); // Unsubscribes from the entry subscription when the component is unmounted
        };
    });

    const dispatch = createEventDispatcher(); // Creating an event dispatcher to communicate with parent components

    // Function to handle the selection of a journal entry
    async function selectEntry(entryId) {
        if (selectedEntryId !== entryId || !editing) {
            selectedEntryId = entryId;
            selectedJournalEntry = await getEntryById(entryId); // Retrieves the selected entry by its ID
            editing = true;
            dispatch('entrySelected', selectedJournalEntry); // Dispatches an event with the selected entry data
        } else {
            editing = false;
            selectedEntryId = null;
            selectedJournalEntry = null;
        }
    }
</script>

<!-- Styling for the journal entries -->
<style>
   /* Styling for individual journal entries */
    .journal-entry {
        margin: 3px;
        padding: 4px;
        background-color: #fff;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
    }

    /* Styling for journal entry titles */
    .journal-entry h1 {
        font-size: 1.5rem;
        font-weight: bold;
        color: #333;
    }

    /* Styling for journal entry content */
    .journal-entry p {
        font-size: 0.875rem;
        color: #666;
    }
</style>

<!-- Displaying the list of journal entries -->
<div class="p-4">
    <ul>
        {#each journalEntries as entry}
        <li class="journal-entry border-b last:border-b-0" on:click={() => selectEntry(entry.id)}>
            <h1>{entry.title}</h1>
            <p>{entry.content}</p>
            <p>{entry.timestamp}</p>
        </li>
        {/each}
    </ul>
</div>

<!-- Displaying the selected journal entry for editing or display -->
<div class="p-4">
    {#if selectedJournalEntry}
    <article class="journal-entry m-3">
        <h1>{selectedJournalEntry.title}</h1>
        <p>{new Date(selectedJournalEntry.timestamp).toLocaleString()}</p>
		{#if editing}
		<JournalEntryEdit entry={selectedJournalEntry} on:saveContent={() => editing = false} on:cancelEdit={() => editing = false} />
	{:else}
		<JournalEntryDisplay entry={selectedJournalEntry} on:editContent={() => editing = true} />
	{/if}

        <div class="flex justify-between items-center mt-4">
            <!-- Existing Edit and Delete buttons can be added here -->
        </div>
    </article>
    {/if}
</div>
