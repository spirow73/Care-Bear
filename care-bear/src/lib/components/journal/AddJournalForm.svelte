<script>
	import journalStore from '$lib/journalStore.js';
	import theme from '../../../stores/themeStore.js';
	import SpeechToText from '$lib/components/Speech_To_Text.svelte';
	import user from '$lib/userStore.js';

	let title = '';
	let description = '';

	let darkModeClass = '';
	$: darkModeClass = $theme === 'dark' ? 'dark' : '';

	let isFormValid = false;
	$: isFormValid = title.trim() !== '' && description.trim() !== '';

	async function handleSubmit() {
		if (title.trim() === '' || description.trim() === '') {
			alert('Please enter a title for the journal.');
			return;
		}

		const newJournalData = {
			title,
			description
		};

		console.log(newJournalData);

		// Call addJournal function to add the new journal
		await journalStore.addJournal(newJournalData);

		// Reset the form
		title = '';
		description = '';
	}
</script>

<form
	on:submit|preventDefault={handleSubmit}
	class={`p-4 bg-fuchsia-100 shadow rounded-lg m-4 ${darkModeClass}`}
>
	<h2 class="text-2xl font-semibold mb-4 ml-0">Create a new journal</h2>
	<div class="mb-4 ml-0">
		<label for="title" class="block text-sm font-medium text-gray-700 dark:text-gray-300 ml-0"
			>Title</label
		>
		<input
			type="text"
			id="title"
			bind:value={title}
			class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
			placeholder="Journal title"
		/>
	</div>

	<div class="mb-4 ml-0">
		<label for="description" class="block text-sm font-medium text-gray-700 dark:text-gray-300 ml-0"
			>Description</label
		>
		<textarea
			id="description"
			bind:value={description}
			class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
			placeholder="Journal description"
		/>
	</div>

	<div class="flex justify-end">
		<button
			type="submit"
			disabled={!isFormValid}
			class={`px-4 py-2 bg-button-1 text-white rounded hover:bg-button-2 transition duration-300 ${
				!isFormValid
					? 'bg-gray-400 text-gray-600 cursor-not-allowed'
					: 'bg-button-1 text-white hover:bg-button-2'
			}`}
		>
			Add Journal
		</button>
	</div>
	<SpeechToText/>
</form>

<style>
	/* Add any additional dark mode specific styles here */
</style>
