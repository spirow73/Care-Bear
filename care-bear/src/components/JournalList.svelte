<script>
  import { journalEntryStore } from '$lib/journalEntryStore';
  import { onMount } from 'svelte';

  let entries = [];

  onMount(async () => {
    await journalEntryStore.fetchJournalEntries(1); // Assuming 1 as journal ID
  });

  function selectEntry(entryId) {
    // Handle selecting the entry
    // You can perform actions here when an entry is selected
  }
</script>

<style>
  /* CSS styles for the Journal Entries component */
  h1 {
    font-size: 24px;
    margin-bottom: 16px;
    color: #333;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    padding: 8px 16px;
    margin-bottom: 8px;
    background-color: #f5f5f5;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  li:hover {
    background-color: #e0e0e0;
  }
</style>

<h1>Journal Entries</h1>

<ul>
  {#each entries as entry (entry.id)}
    <li on:click={() => selectEntry(entry.id)}>
      {entry.title}
    </li>
  {/each}
</ul>
