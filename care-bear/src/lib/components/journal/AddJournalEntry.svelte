<script>
	import journalStore from '$lib/journalStore';
	import theme from '../../../stores/themeStore';
	import user from '$lib/userStore';

	export let journalId;

	let title = '';
	let content = '';
	const user_id = $user.user.id;

	let darkModeClass = '';
	$: darkModeClass = $theme === 'dark' ? 'dark' : '';
	let isFormValid = false;
	$: isFormValid = title.trim() !== '' && content.trim() !== '';

	async function save() {
		if (title.trim() === '' || content.trim() === '') {
			alert('Please enter a title and content for the journal entry.');
			return;
		}

		let entryData = {
			title,
			content
		};

		// Verifica los datos antes de enviar
		console.log('Saving entry with data:', entryData);

		await journalStore.addJournalEntry(journalId, user_id, entryData);

		title = '';
		content = '';
	}
</script>

<div class={`p-4 bg-fuchsia-100 shadow rounded-lg m-4 ${darkModeClass}`}>
	<h2 class={`text-2xl font-semibold mb-4 ${darkModeClass}:text-gray-100`}>Create a new entry</h2>
	<label for="title" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Title</label
	>
	<input
		type="text"
		bind:value={title}
		class={`w-full p-2 mb-2 border border-gray-300 rounded-md ${darkModeClass}:bg-gray-700 ${darkModeClass}:border-gray-600 ${darkModeClass}:text-gray-100`}
		placeholder="Title"
	/>

	<label for="description" class="block text-sm font-medium text-gray-700 dark:text-gray-300"
		>Content</label
	>
	<textarea
		bind:value={content}
		class={`w-full p-2 border border-gray-300 rounded-md ${darkModeClass}:bg-gray-700 ${darkModeClass}:border-gray-600 ${darkModeClass}:text-gray-100`}
		placeholder="Content"
	/>
	<div class="flex justify-end">
		<button
			type="submit"
			disabled={!isFormValid}
			class={`mt-4 px-4 py-2 bg-button-1 text-white rounded hover:bg-button-2 transition duration-300 ${darkModeClass}:bg-button-1-dark ${darkModeClass}:hover:bg-button-2-dark ${
				!isFormValid
					? 'bg-gray-400 text-gray-600 cursor-not-allowed'
					: 'bg-button-1 text-white hover:bg-button-2'
			}`}
			on:click={save}
		>
			Add Entry
		</button>
	</div>
</div>
