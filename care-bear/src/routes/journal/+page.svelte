<script>
    import JournalList from '../../components/JournalList.svelte';
    import JournalEntry from '../../components/JournalEntry.svelte';
    import JournalEditor from '../../components/JournalEditor.svelte';
  </script>
  
  <template>
    <main class="container mx-auto my-8 px-4">
      <h1 class="text-3xl font-semibold mb-4">Journal Page</h1>
  
      <!-- Display Journal Components -->
      <JournalList />
      <JournalEntry />
      <JournalEditor />
    </main>
  </template>
  