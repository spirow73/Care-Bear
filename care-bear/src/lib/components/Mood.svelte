 <!-- MoodPage.svelte -->


 <script>
  import { fetchLatestMoodEntries } from '$lib/moodClient';
  import { onMount } from 'svelte';

  let moodEntries = [];

  onMount(async () => {
    try {
      moodEntries = await fetchLatestMoodEntries();
      console.log('Fetched Mood Entries:', moodEntries);
    } catch (error) {
      console.error('Error fetching mood entries:', error);
    }
  });
</script>

<div class="col-end-7 col-span-2 bg-orange-200 mr-20 text-center border-solid border-2 border-black rounded-full">
  <a href="/mood">
    <h2><b>Moods</b></h2>

    {#if moodEntries.length > 0}
      {#each moodEntries as entry (entry.mood_entry_id)}
        <div>
          <p>Date: {entry.timestamp}</p>
          <p>{entry.mood_description}</p>
        </div>
      {/each}
    {:else}
      <p>No moods registered.</p>
    {/if}
  </a>
</div>
