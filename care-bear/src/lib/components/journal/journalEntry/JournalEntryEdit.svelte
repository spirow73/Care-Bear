<script>
	import { writable } from 'svelte/store';
	import { journalEntryStore } from '$lib/journalEntryStore.js';
  
  export let entry;
  let newContent = entry.content;
  
  async function onSaveContent() {
    try {
      await journalEntryStore.updateEntryContent(entry.id, newContent);
    } catch (error) {
      console.error('Error saving entry content:', error.message);
      // Handle error saving content
    }
  }
  
  function onCancelEdit() {
    newContent = entry.content; // Reflect changes immediately
  }
  </script>
  
  <textarea
	bind:value={newContent}
	class="w-full p-2 border rounded"
	placeholder="Type your content here..."
  ></textarea>
  <button class="btn-save" on:click={onSaveContent}>Save Content</button>
  <button class="btn-cancel" on:click={onCancelEdit}>Cancel</button>
  