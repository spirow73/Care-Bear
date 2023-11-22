<script>
	import JournalList from '$lib/components/journal/-JournalList.svelte';
	import JournalEntry from '$lib/components/journal/-JournalEntry.svelte';
	import JournalEditor from '$lib/components/journal/-JournalEditor.svelte';
</script>

<main class="container mx-auto my-8 px-4">
	<h1 class="text-3xl font-semibold mb-4">Journal Page</h1>

	<!-- Display Journal Components -->
	<JournalList />
	<JournalEntry />
	<JournalEditor />
</main>
