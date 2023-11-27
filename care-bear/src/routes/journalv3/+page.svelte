
<script>
    import { onMount } from 'svelte';
    import JournalEntry from '$lib/components/journal/JournalEntry.svelte';

    let entry = null;

    onMount(async () => {
        try {
            const response = await fetch('https://your-api-endpoint.com/journal/entry/1'); // Replace with your actual API endpoint
            if (response.ok) {
                entry = await response.json();
            } else {
                throw new Error('Failed to fetch entry');
            }
        } catch (error) {
            console.error(error);
        }
    });
</script>

{#if entry}
    <JournalEntry {entry} />
{:else}
    <p>Loading...</p>
{/if}
