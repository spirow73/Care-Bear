<!-- Task.svelte -->
<script>
	export let definition;
	export let due_date;
	export let isCompleted;

	function handleDelete() {
		if (onDelete) {
			onDelete();
		}
	}
</script>

<div class="border rounded p-4 mb-2">
	<div class="flex justify-between">
		<h2 class="text-xl font-semibold">{definition}</h2>
		<button on:click={handleDelete} class="text-red-500 hover:text-red-700">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		</button>
	</div>
	<p class="text-gray-600">{due_date}</p>
	<p class={isCompleted ? 'text-green-600' : 'text-red-600'}>
		{isCompleted ? 'Completed' : 'Pending'}
	</p>
</div>
