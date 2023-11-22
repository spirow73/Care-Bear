<script>
	// Supongamos que estos son los datos que recibes desde tu backend o store
	let journals = [
		{ id: 1, title: 'Viaje a la Montaña', entries: 10 },
		{ id: 2, title: 'Pensamientos de medianoche', entries: 5 },
		{ id: 3, title: 'Ideas para el proyecto', entries: 3 }
	];
</script>

<div class="p-4">
	<div class="bg-white shadow-md rounded-lg">
		<div class="p-4 border-b">
			<h2 class="text-xl font-semibold text-gray-800">Mis Diarios</h2>
		</div>
		<ul>
			{#each journals as journal}
				<li class="border-b last:border-b-0">
					<a
						href={`/journal/${journal.id}`}
						class="flex items-center p-4 hover:bg-gray-100 transition-colors"
					>
						<span class="flex-1 font-medium text-gray-900">{journal.title}</span>
						<span class="text-sm font-normal text-gray-600">{journal.entries} entradas</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</div>
