<script>
	import AddJournalForm from '$lib/components/journal/AddJournalForm.svelte';
	import JournalList from '$lib/components/journal/JournalList.svelte';
	import journalStore from '$lib/journalStore';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import up from '$lib/components/images/up.png'
	import down from '$lib/components/images/down.png';

	let showAddJournalForm = false;

	onMount(async () => {
		await journalStore.loadJournals();
	});

	function toggleAddJournalForm() {
		showAddJournalForm = !showAddJournalForm;
	}
</script>

<!-- Contenedor principal -->
<div class="my-4">
	<!-- Contenedor del botón y el formulario con un fondo blanco cuando el formulario es visible -->
	<div class={showAddJournalForm ? 'bg-fuchsia-200 py-4' : ''}>
		{#if showAddJournalForm}
		<div transition:slide ><AddJournalForm /></div>
		<div class="mt-4 flex flex-col items-center">
			<span class="block mb-2 text-black text-center text-lg"><b>Close</b></span>
			<button class="mx-auto w-6 h-6" on:click={toggleAddJournalForm}>
				<img src={up} alt="Up Button Image" />
			</button>
		</div>
		{:else}
			<div class="flex flex-col items-center">
				<span class="block mb-2 text-black text-center  text-lg"><b>Add journal</b></span>
				<button class="mx-auto w-6 h-6" on:click={toggleAddJournalForm}>
					<img src={down} alt="Down Button Image" class="">
				</button>
			</div>
		{/if}
	</div>
</div>
	

<!-- Lista de journals -->
<JournalList journals={$journalStore} numOfEntries={3} />
