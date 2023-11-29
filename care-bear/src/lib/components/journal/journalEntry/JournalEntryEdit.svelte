<script>
	let journals = []; // Array to hold journal entries
</script>

<!-- Display the list of journals if no error occurs -->
<div class="p-4">
	<div class="bg-white shadow-md rounded-lg">
		<div class="p-4 border-b">
			<h2 class="text-xl font-semibold text-gray-800">My Journals</h2>
		</div>
		<ul>
			{#each journals as journal}
				<li class="border-b last:border-b-0">
					<a href={`/journal/${journal.id}`} class="block">
						<span>{journal.title}</span>
						<span>{journal.timestamp}</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</div>

<!-- If a journal is selected, display its entries -->
<div class="p-4">
	<h2>{selectedJournal.title}</h2>
	<ul>
		{#each entries as entry}
			<!-- Iterates through the entries of the selected journal -->
			<li>
				<p>{entry.title}</p>
				<p>{entry.content}</p>
				<p>{entry.timestamp}</p>
			</li>
		{/each}
	</ul>
</div>
