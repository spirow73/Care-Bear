<!-- MoodPage.svelte -->

<script>
	import { fetchLatestMoodEntries } from '$lib/moodClient';
	import { onMount } from 'svelte';

	let moodEntries = [];

	onMount(async () => {
		try {
			moodEntries = await fetchLatestMoodEntries(20);
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
				<!-- <p>Date: {entry.timestamp}</p> -->
				<p>{entry.mood_description}</p>
			</div>
		{/each}
	{:else}
		<p>No moods registered.</p>
	{/if}
</a>
