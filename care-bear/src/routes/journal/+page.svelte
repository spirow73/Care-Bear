<script>
	import JournalList from '$lib/components/journal/JournalList.svelte';
	import { onMount } from 'svelte';
	import { journals, loadJournals } from '$lib/journalStore.js';

	onMount(async () => {
		await loadJournals();
	});
</script>

<JournalList journals={$journals} />
