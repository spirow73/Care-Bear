<!-- Mood.svelte -->

<script>
	import { fetchLatestMoodEntries } from '$lib/moodClient';
	import { onMount } from 'svelte';

	let moodEntries = [];

	onMount(async () => {
		try {
			const today = new Date();
			const yesterday = new Date(today);
			yesterday.setDate(yesterday.getDate() - 1);
			const dayBeforeYesterday = new Date(yesterday);
			dayBeforeYesterday.setDate(dayBeforeYesterday.getDate() - 1);

			// Fetch 3 entries for today, 3 for yesterday, and 3 for the day before
			const todayEntries = await fetchLatestMoodEntries(today, 3);
			const yesterdayEntries = await fetchLatestMoodEntries(yesterday, 3);
			const dayBeforeYesterdayEntries = await fetchLatestMoodEntries(dayBeforeYesterday, 3);

			// Filter out days with no mood entries
			moodEntries = [
				{ date: today, entries: todayEntries },
				{ date: yesterday, entries: yesterdayEntries },
				{ date: dayBeforeYesterday, entries: dayBeforeYesterdayEntries }
			].filter((day) => day.entries.length > 0);

			console.log('Fetched Mood Entries:', moodEntries);
		} catch (error) {
			console.error('Error fetching mood entries:', error);
		}
	});

	function getEmojiForMood(mood) {
		// Customize this function based on your mood-to-emoji mapping
		const emojiMap = {
			Happy: '😄',
			Sad: '😢',
			Stressed: '😡',
			Depressed: '😔',
			Tired: '😴',
			Upset: '😠',
			Excited: '😃',
			Content: '😌',
			Anxious: '😰',
			Loved: '💕',
			Lonely: '😔',
			Calm: '😊',
			Energetic: '🤩',
			Confused: '😕',
			Frustrated: '😤',
			Neutral: '😐'
		};

		return emojiMap[mood] || '❓'; // Default emoji if the mood is not recognized
	}

	function formatTimestamp(timestamp) {
		const options = {
			weekday: 'long', // Displays the full name of the day of the week (e.g., Monday)
			day: 'numeric',
			month: 'long'
		};

		try {
			const formattedDate = new Date(timestamp).toLocaleString('en-EN', options);
			return formattedDate;
		} catch (error) {
			console.error('Error formatting timestamp:', error);
			return 'Invalid Date';
		}
	}
</script>

<a href="/mood">
	{#if moodEntries.length > 0}
		{#each moodEntries as { date, entries }}
			<p class="mb-2 text-xl">{formatTimestamp(date)}</p>
			<div class="flex justify-between">
				{#each entries as entry (entry.mood_entry_id)}
					<div
						class="flex items-center text-center mb-2 bg-fuchsia-100 shadow-md p-4 rounded-lg border border-black hover:bg-orange-200"
						style="width: 200px;"
					>
						<div class="mr-4">
							<p style="font-size: 25px;">{getEmojiForMood(entry.mood_description)}</p>
						</div>
						<div class="flex-1">
							<p>{entry.mood_description}</p>
						</div>
					</div>
				{/each}
			</div>
		{/each}
	{:else}
		<p>No moods registered for the selected days.</p>
	{/if}
</a>
