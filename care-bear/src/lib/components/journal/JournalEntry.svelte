<script>
    import theme from '../../../stores/themeStore.js';
    import JournalEntryDisplay from './journalEntry/JournalEntryDisplay.svelte';
    import JournalEntryEdit from './journalEntry/JournalEntryEdit.svelte';

    export let entry;
    let editing = false;
    let darkModeClass = '';
    $: darkModeClass = $theme === 'dark' ? 'dark' : '';

    function toggleEdit() {
        editing = !editing;
    }
</script>

<article class={`m-3 p-4 bg-fuchsia-200 shadow-lg rounded-lg border border-black ${darkModeClass}`}>
    <h1 class={`text-2xl font-bold text-gray-800 ${darkModeClass}:text-gray-200`}>{entry.title}</h1>
    <p class={`text-sm text-gray-600 ${darkModeClass}:text-gray-400`}>{new Date(entry.timestamp).toLocaleString()}</p>

    {#if editing}
        <JournalEntryEdit {entry} onSaveContent={toggleEdit} onCancelEdit={toggleEdit} />
    {:else}
        <JournalEntryDisplay {entry} onEditContent={toggleEdit} />
    {/if}

    <div class="flex justify-between items-center mt-4">
        <!-- Existing Edit and Delete buttons -->
    </div>
</article>
