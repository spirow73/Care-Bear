<script>
  import { journalEntryStore } from '$lib/journalEntryStore.js';
  import { onMount } from 'svelte';
  import { onDestroy } from 'svelte';

  export let entryId; 

  let selectedEntry = {};
  let editedContent = '';

  const unsubscribe = journalEntryStore.subscribe(entries => {
    selectedEntry = entries.find(entry => entry.id === entryId);
    editedContent = selectedEntry ? selectedEntry.content : '';
  });

  onMount(() => {
    return () => {
      unsubscribe();
    };
  });

  onDestroy(() => {
    
  });

  function saveChanges() {
    if (selectedEntry) {
      journalEntryStore.updateEntry(selectedEntry.id, editedContent);
    }
  }
</script>

<h1>Edit Journal Entry</h1>

<textarea bind:value={editedContent}></textarea>
<button on:click={saveChanges}>Save</button>

