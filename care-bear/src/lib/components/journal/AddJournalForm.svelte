<script>
    import { addJournal } from '$lib/journalStore.js';
    import theme from '../../../stores/themeStore.js';


    let title = '';
    let description = '';
    let userId = 1; // Ensure you obtain the current user's ID appropriately

    let darkModeClass = '';
    $: darkModeClass = $theme === 'dark' ? 'dark' : '';

    async function handleSubmit() {
        if (title.trim() === '') {
            alert('Please enter a title for the journal.');
            return;
        }

        const newJournalData = {
            title,
            description,
            user_id: userId // Ensure this value is obtained appropriately
        };

        // Call addJournal function to add the new journal
        await addJournal(newJournalData);

        // Reset the form
        title = '';
        description = '';
    }
</script>

<form on:submit|preventDefault={handleSubmit} class={`p-4  bg-orange-200 shadow rounded-lg m-4 ${darkModeClass}`}>
    <h2 class="text-2xl font-semibold mb-4">Create a new journal</h2>
    <div class="mb-4">
        <label for="title" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Title</label>
        <input
            type="text"
            id="title"
            bind:value={title}
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Journal title"
        />
    </div>

    <div class="mb-4">
        <label for="description" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
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
            class="px-4 py-2 bg-button-1 text-white rounded hover:bg-button-2 transition duration-300"
        >
            Add Journal
        </button>
    </div>
</form>

<style>
    /* Add any additional dark mode specific styles here */
</style>
