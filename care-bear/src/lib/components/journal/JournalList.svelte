<script>
	import JournalEntryFront from './JournalEntryFront.svelte';

	// Suppose these are the data you receive from your backend or store
	let journals = [
		{
			id: 1,
			title: 'Trip to the Mountain',
			content: 'The mountains are calling and I must go...',
			entries: 10
		},
		{
			id: 2,
			title: 'Midnight Thoughts',
			content:
				'Sometimes, at midnight, I wonder if the stars are watching us just as we watch them...',
			entries: 5
		},
		{
			id: 3,
			title: 'Project Ideas',
			content: 'Thinking of starting a new project about sustainability and technology...',
			entries: 3
		}
	];
</script>

<div class="p-4">
	<div class="bg-white shadow-md rounded-lg">
		<div class="p-4 border-b">
			<h2 class="text-xl font-semibold text-gray-800">My Journals</h2>
		</div>
		<ul>
			{#each journals as entry}
				<li class="border-b last:border-b-0">
					<a href={`/journal/${entry.id}`} class="block">
						<JournalEntryFront {entry} />
					</a>
				</li>
			{/each}
		</ul>
	</div>
</div>
