<script>
    import { journalEntryStore } from './path/to/JournalEntryStore.js';
    import { onMount } from 'svelte';
  
    let selectedEntry = {};
    let editedContent = '';
  
    onMount(() => {
      // Retrieve selected entry from the store
      selectedEntry = $journalEntryStore;
      editedContent = selectedEntry.content;
    });
  
    function saveChanges() {
      // Save the edited content
      journalEntryStore.updateEntry(selectedEntry.id, editedContent);
      // Optionally, you can also re-fetch entries to refresh the list after editing
      // journalEntryStore.fetchEntries(userId);
    }
  </script>
  
  <textarea bind:value={editedContent}></textarea>
  <button on:click={saveChanges}>Save</button>
  