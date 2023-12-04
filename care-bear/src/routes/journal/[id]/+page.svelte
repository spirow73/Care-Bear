<!--[id].svelte-->
<script>
	import JournalEntry from '$lib/components/journal/JournalEntry.svelte';
	import { onMount } from 'svelte';
	import { getJournalEntries } from '$lib/journalStore.js';
	export let data;

	let entries = [];
	// Get journals on mount
	onMount(async () => {
		entries = await getJournalEntries(Number(data.id));
	});
</script>

<!-- Here is the id page -->
<!-- <h1>{data.id}</h1> -->

{#each entries.slice().reverse() as entry}
	<JournalEntry {entry} />
{/each}
