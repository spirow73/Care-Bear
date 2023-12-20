<script>
	import JournalList from '$lib/components/journal/JournalList.svelte';
	import AddJournalForm from '$lib/components/journal/AddJournalForm.svelte';
	import { onMount } from 'svelte';
	import { journals, loadJournals } from '$lib/journalStore.js';
	import { slide, fade } from 'svelte/transition';

	let showAddJournalForm = false;

	onMount(async () => {
		await loadJournals();
	});

	function toggleAddJournalForm() {
		showAddJournalForm = !showAddJournalForm;
	}
</script>

<!-- Contenedor principal -->
<div class="my-4">
	<!-- Contenedor del botón y el formulario con un fondo blanco cuando el formulario es visible -->
	<div class={showAddJournalForm ? 'bg-white py-4' : ''}>
		{#if showAddJournalForm}
			<!-- Aplicar la transición de deslizamiento al formulario -->
			<div class="mt-4" transition:slide>
				<AddJournalForm />

				<div class="text-center">
					<button
						class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
						on:click={toggleAddJournalForm}
					>
						{showAddJournalForm ? 'Hide Add Journal Form' : 'Add Journal'}
					</button>
				</div>
			</div>
		{:else}
			<div class="text-center">
				<button
					class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
					on:click={toggleAddJournalForm}
				>
					{showAddJournalForm ? 'Hide Add Journal Form' : 'Add Journal'}
				</button>
			</div>
		{/if}
	</div>
</div>

<!-- Lista de journals -->
<JournalList journals={$journals} numOfEntries={3} />
