<script>
  import { journalEntryStore } from '$lib/-journalEntryStore';

  let newEntry = {
    title: '',
    content: ''
  };

  async function addJournalEntry() {
    // Assuming 1 is a placeholder for the journal ID; replace it with the actual journal ID.
    await journalEntryStore.addJournalEntry(1, newEntry);
    newEntry = { title: '', content: '' };
  }
</script>

<style>
  /* CSS styles for the Add New Journal Entry form */
  h1 {
    font-size: 24px;
    margin-bottom: 16px;
    color: #333;
  }

  form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin-top: 20px;
  }

  label {
    margin-bottom: 8px;
    color: #444;
  }

  input,
  textarea {
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

<h1>Add New Journal Entry</h1>

<form on:submit|preventDefault={addJournalEntry}>
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
