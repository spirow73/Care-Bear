<script>
    import { addJournalEntry } from '$lib/journalStore.js';
    import theme from '../../../stores/themeStore';
 // Import theme store

    export let journalId;
    let title = '';
    let content = '';
    const user_id = 1; // Placeholder, replace with correct value
    let darkModeClass = '';
    $: darkModeClass = $theme === 'dark' ? 'dark' : '';

    async function save() {
        if (title.trim() === '' || content.trim() === '') {
            alert('Please enter a title and content for the journal entry.');
            return;
        }

        await addJournalEntry(journalId, user_id, { title, content });

        // Reset the form
        title = '';
        content = '';
    }
</script>

<div class={`p-4 bg-orange-200 shadow rounded-lg m-4 ${darkModeClass}`}>
    <h2 class={`text-2xl font-semibold mb-4 ${darkModeClass}:text-gray-100`}>Create a new entry</h2>
    <input
        type="text"
        bind:value={title}
        class={`w-full p-2 mb-2 border border-gray-300 rounded-md ${darkModeClass}:bg-gray-700 ${darkModeClass}:border-gray-600 ${darkModeClass}:text-gray-100`}
        placeholder="Title"
    />
    <textarea
        bind:value={content}
        class={`w-full p-2 border border-gray-300 rounded-md ${darkModeClass}:bg-gray-700 ${darkModeClass}:border-gray-600 ${darkModeClass}:text-gray-100`}
        placeholder="Content"
    />
    <button
        class={`mt-4 px-4 py-2 bg-button-1 text-white rounded hover:bg-button-2 transition duration-300 ${darkModeClass}:bg-button-1-dark ${darkModeClass}:hover:bg-button-2-dark`}
        on:click={save}
    >
        Add Entry
    </button>
</div>
