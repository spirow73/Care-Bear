<script>
  import { journalEntryStore } from '$lib/journalEntryStore.js';

  let newEntry = {
    title: '',
    content: ''
  };

  async function addEntry() {
    await journalEntryStore.addEntry(1, newEntry);
    newEntry = { title: '', content: '' };
  }
</script>

<h1>Add New Journal Entry</h1>

<form on:submit|preventDefault={addEntry}>
  <label>
    Title:
    <input bind:value={newEntry.title} placeholder="Enter title" />
  </label>
  <label>
    Content:
    <textarea bind:value={newEntry.content} placeholder="Enter content"></textarea>
  </label>
  <button type="submit">Add Entry</button>
</form>
