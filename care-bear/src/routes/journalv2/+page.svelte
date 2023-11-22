<script>
	import { onMount } from 'svelte';
	import V2JournalData from '$lib/components/journal/V2JournalData.svelte';
	import JournalEntry from '$lib/components/journal/JournalEntry.svelte';

	// Lets try to create a supabase client
	import { createClient } from '@supabase/supabase-js';

	const supabaseUrl = 'https://djhxrvvfyaoduxzlowlf.supabase.co';
	const supabaseKey =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqaHhydnZmeWFvZHV4emxvd2xmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA0ODU2MDEsImV4cCI6MjAxNjA2MTYwMX0.N5ILlFpgSQp_k8o4XKNOZIyJ5alm1kQkxDCk8VNC2js';

	const supabaseClient = createClient(supabaseUrl, supabaseKey);

	// Create a function to fetch a single journal entry
	export async function fetchEntry(entryId) {
		const { data, error } = await supabaseClient
			.from('journal_entry')
			.select('*')
			.eq('journal_entry_id', entryId);

		if (error) {
			console.error('Error fetching journal entry:', error);
		} else {
			return data[0];
		}
	}

	let data = {};

	onMount(async () => {
		data = await fetchEntry(1);
	});
</script>

<div class="m-4">
	<h1 class="text-3xl font-semibold mb-4">Journal Page</h1>

	<V2JournalData
		journal_entry_id={data.journal_entry_id}
		title={data.title}
		entry={data.entry}
		timestamp={data.timestamp}
	/>

	<hr class="my-8 border-gray-300" />

	<JournalEntry />
</div>
