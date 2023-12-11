<script>
    import JournalEntryFront from './JournalEntryFront.svelte';
    import { removeJournal } from '$lib/journalStore.js';
    import { fade } from 'svelte/transition'; // Import the transition
    import { onMount } from 'svelte';
    import theme from '../../../stores/themeStore.js';

    export let journals;
    export let numOfEntries = 3;

    async function handleDelete(journalId) {
        if (window.confirm('Are you sure you want to delete this journal? This will remove all associated entries and cannot be undone.')) {
            await removeJournal(journalId);
        }
    }
</script>

{#if journals.length === 0}
    <p class="text-gray-500 text-center dark:text-gray-400">No journals found.</p>
{:else}
    <div class="space-y-4 p-4">
        {#each journals.slice().reverse() as journal, i (journal.journal_id)}
            <div class="bg-brown-900 dark:bg-gray-800 shadow-md rounded-lg overflow-hidden border border-black dark:border-gray-700" transition:fade={{ duration: 300 }}>
                <div class="p-4 border-b dark:border-gray-600 flex justify-between items-center">
                    <a href={`/journal/${journal.journal_id}`} class="block">
                        <div>
                            <h1 class="text-2xl font-semibold text-gray-800 dark:text-gray-300">{journal.title}</h1>
                            <p class="text-sm text-gray-600 dark:text-gray-400">{journal.description}</p>
                        </div>
                    </a>
                    <button class="text-red-500 hover:text-red-700" title="Delete journal" on:click={() => handleDelete(journal.journal_id)}>🗑️</button>
                </div>
                <ul>
                    {#each journal.journal_entry.slice(0, numOfEntries) as entry}
                        <a href={`/journal/${entry.journal_id}`} class="block">
                            <li class="border-b last:border-b-0 dark:border-gray-600">
                                <JournalEntryFront {entry} />
                            </li>
                        </a>
                    {/each}
                </ul>
            </div>
        {/each}
    </div>
{/if}

<style>
    /* Original light mode styles remain unchanged */
</style>
