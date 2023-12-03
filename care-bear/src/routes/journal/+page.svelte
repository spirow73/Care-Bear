<script>
	import JournalList from '$lib/components/journal/JournalList.svelte';
	import { onMount } from 'svelte';
	import { journals, loadJournals } from '$lib/journalStore.js';
	import JournalListFront from '$lib/components/journal/-JournalListFront.svelte';

	onMount(async () => {
		await loadJournals();
	});
</script>

<JournalList />
