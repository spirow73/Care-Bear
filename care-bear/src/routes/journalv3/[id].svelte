<!--[id].svelte-->

<script>
	import JournalEntry from '$lib/components/journal/JournalEntry.svelte';

	// Simulated content
	let entry = {
		id: 1,
		title: 'Simulated Journal Entry',
		content:
			'This is a simulated content of the journal entry. It can be as long as you need to test the display and formatting features of the JournalEntry component.',
		timestamp: new Date().toISOString()
	};
</script>

<JournalEntry {entry} />
