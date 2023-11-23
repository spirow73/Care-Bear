<script>
	import { journalEntryStore } from '$lib/journalEntryStore.js';
	import { onMount } from 'svelte';

	let journalEntries = [];

	onMount(async () => {
		const unsubscribe = journalEntryStore.subscribe((entries) => {
			journalEntries = entries;
		});
		await journalEntryStore.fetchEntries(1);
		return unsubscribe;
	});

	function selectEntry(entryId) {}
</script>

<ul>
	{#each journalEntries as entry}
		<li on:click={() => selectEntry(entry.id)}>
			{entry.title}
		</li>
	{/each}
</ul>
