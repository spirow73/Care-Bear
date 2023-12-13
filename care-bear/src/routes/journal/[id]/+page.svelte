<script>
	import AddJournalEntry from '$lib/components/journal/AddJournalEntry.svelte';
	import JournalEntry from '$lib/components/journal/JournalEntry.svelte';
	import journalStore from '$lib/journalStore';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

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
			<div class="mt-4" transition:slide>
				<AddJournalEntry journalId={Number(data.id)} />
				<div class="text-center mt-4">
					<button
						class="px-4 py-2 bg-button-1 text-white rounded hover:bg-button-2 transition duration-300"
						on:click={toggleAddEntryForm}
					>
						Hide Add Entry Form
					</button>
				</div>
			</div>
		{:else}
			<div class="text-center">
				<button
					class="px-4 py-2 bg-button-1 text-white rounded hover:bg-button-2 transition duration-300"
					on:click={toggleAddEntryForm}
				>
					Add Journal Entry
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
