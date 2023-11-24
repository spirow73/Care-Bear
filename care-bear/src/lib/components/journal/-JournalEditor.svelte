<script>
  import { journalEntryStore } from '$lib/journalEntryStore';
  import { onDestroy, onMount } from 'svelte';

  export let entryId;

  let selectedEntry = {};
  let editedContent = '';

  const unsubscribe = journalEntryStore.subscribe(entries => {
    selectedEntry = entries.find(entry => entry.journal_entry_id === entryId);
    editedContent = selectedEntry ? selectedEntry.entry : '';
  });

  onMount(() => {
    return () => {
      unsubscribe();
    };
  });

  onDestroy(() => {
    saveChanges();
  });

  function saveChanges() {
    if (selectedEntry && editedContent !== selectedEntry.entry) {
      journalEntryStore.updateEntry(selectedEntry.journal_entry_id, editedContent);
    }
  }
</script>

<style>
  /* CSS styles for the Edit Journal Entry component */
  h1 {
    font-size: 24px;
    margin-bottom: 16px;
    color: #333;
  }

  textarea {
    width: 100%;
    min-height: 200px;
    padding: 8px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
  }

  button {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #0056b3;
  }
</style>

<h1>Edit Journal Entry</h1>

<textarea bind:value={editedContent}></textarea>
<button on:click={saveChanges}>Save</button>
