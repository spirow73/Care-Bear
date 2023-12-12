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

	function formatTimestamp(timestamp) {
    const parsedDate = new Date(Date.parse(timestamp));
    if (isNaN(parsedDate.getTime())) {
      return 'Invalid Date';
    }
    const options = {
      weekday: 'long', // Displays the full name of the day of the week (e.g., Monday)
      day: 'numeric',
	  month:'long',
      hour: 'numeric',
    };
    return parsedDate.toLocaleString('en-EN', options);
  }
  </script>
  
  <a href="/mood">
	{#if moodEntries.length > 0}
	  {#each moodEntries as entry (entry.mood_entry_id)}
		<div class="flex items-center mb-2 bg-brown-900 shadow-md p-4 rounded-lg border border-black hover:bg-orange-200">
		  <div class="mr-4">
			<p style="font-size: 25px;">{getEmojiForMood(entry.mood_description)}</p>
		  </div>
		  <div class="flex-1">
			<p>{entry.mood_description}</p>
			<p>Registered last: {formatTimestamp(entry.timestamp)}</p>
		  </div>
		  <div class="ml-auto">

			<span>🔗</span>
		  </div>
		</div>
	  {/each}
	{:else}
	  <p>No moods registered.</p>
	{/if}
  </a>
  