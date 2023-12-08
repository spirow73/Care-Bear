<!-- <script>
	import { fetchLatestMoodEntries } from '$lib/moodClient';
	import { onMount } from 'svelte';

	let moodEntries = [];

	onMount(async () => {
		try {
			moodEntries = await fetchLatestMoodEntries(3);
			console.log('Fetched Mood Entries:', moodEntries);
		} catch (error) {
			console.error('Error fetching mood entries:', error);
		}
	});

</script>

<a href="/mood">
	{#if moodEntries.length > 0}
		{#each moodEntries as entry (entry.mood_entry_id)}
			<div>
				<p>{entry.mood_description}</p>
			</div>
		{/each}
	{:else}
		<p>No moods registered.</p>
	{/if}
</a> -->
<!-- Mood.svelte -->

<script>
	import { fetchLatestMoodEntries } from '$lib/moodClient';
	import { onMount } from 'svelte';
  
	let moodEntries = [];
  
	onMount(async () => {
	  try {
		moodEntries = await fetchLatestMoodEntries(3);
		console.log('Fetched Mood Entries:', moodEntries);
	  } catch (error) {
		console.error('Error fetching mood entries:', error);
	  }
	});
  
	function getEmojiForMood(mood) {
	  // Customize this function based on your mood-to-emoji mapping
	  const emojiMap = {
		'Happy': '😄',
		'Sad': '😢',
		'Stressed': '😡',
		'Depressed': '😔',
		'Tired': '😴',
		'Upset': '😠'
	  };
  
	  return emojiMap[mood] || '❓'; // Default emoji if the mood is not recognized
	}
  </script>
  
  <a href="/mood">
	{#if moodEntries.length > 0}
	  {#each moodEntries as entry (entry.mood_entry_id)}
		<div>
		  <p>{getEmojiForMood(entry.mood_description)} {entry.mood_description}</p>
		</div>
	  {/each}
	{:else}
	  <p>No moods registered.</p>
	{/if}
  </a>
  