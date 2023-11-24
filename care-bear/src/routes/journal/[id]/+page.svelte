<!--[id].svelte-->
<script>
	import JournalEntry from '$lib/components/journal/JournalEntry.svelte';
	export let data;

	// Simulated content
	let entries = [
		{
			id: 1,
			title: 'Simulated Journal Entry 1',
			content:
				'This is a simulated content of the first journal entry. It can be as long as you need to test the display and formatting features of the JournalEntry component.',
			timestamp: new Date().toISOString()
		},
		{
			id: 2,
			title: 'Simulated Journal Entry 2',
			content:
				'This is a simulated content of the second journal entry. It can be as long as you need to test the display and formatting features of the JournalEntry component.',
			timestamp: new Date().toISOString()
		},
		{
			id: 3,
			title: 'Simulated Journal Entry 3',
			content:
				'This is a simulated content of the third journal entry. It can be as long as you need to test the display and formatting features of the JournalEntry component.',
			timestamp: new Date().toISOString()
		}
	];
</script>

<!-- Here is the id page -->
<!-- <h1>{data.id}</h1> -->
<JournalEntry entry={entries[parseInt(data.id) - 1]} />

{#each entries as entry (entry.id)}
	<JournalEntry {entry} />
{/each}
