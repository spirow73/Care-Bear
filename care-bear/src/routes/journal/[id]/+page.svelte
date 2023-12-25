<script>
	import AddJournalEntry from '$lib/components/journal/AddJournalEntry.svelte';
	import JournalEntry from '$lib/components/journal/JournalEntry.svelte';
	import journalStore from '$lib/journalStore';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import up from '$lib/components/images/up.png';
	import down from '$lib/components/images/down.png';

	onMount(async () => {
		await journalStore.loadJournals();
	});

	export let data;

	let showAddEntryForm = false;

	// Usar una asignación reactiva para mantener actualizadas las entradas
	$: entries = $journalStore.find((j) => j.journal_id === Number(data.id))?.journal_entry || [];

	function toggleAddEntryForm() {
		showAddEntryForm = !showAddEntryForm;
	}
</script>

<div class="my-4">
	<div class={showAddEntryForm ? 'bg-brown-900 py-4' : ''}>
		{#if showAddEntryForm}
		<div transition:slide>
			<AddJournalEntry journalId={Number(data.id)} />
		</div>
		<div class="mt-4 flex flex-col items-center">
			<span class="block mb-2 text-black text-center text-lg"><b>Close</b></span>
			<button class="mx-auto w-6 h-6" on:click={toggleAddEntryForm}>
				<img src={up} alt="Up Button Image" />
			</button>
		</div>
		{:else}
		<div class="flex flex-col items-center">
			<span class="block mb-2 text-black text-center  text-lg"><b>Add Journal Entry</b></span>
			<button class="mx-auto w-6 h-6" on:click={toggleAddEntryForm}>
				<img src={down} alt="Down Button Image">
			</button>
		</div>
		{/if}
	</div>
</div>
{#if entries.length === 0}
	<p class="text-gray-500 text-center">No journals found.</p>
{:else}
	{#each entries.slice().reverse() as entry}
		<JournalEntry {entry} />
	{/each}
{/if}
