<!-- MoodCard.svelte -->
<script>
	export let mood;
	export let emoji;
</script>

<div class="card bg-white shadow-lg rounded-lg p-4 text-center hover:bg-blue-50 m-4">
	<div class="text-6xl">{emoji}</div>
	<p class="text-gray-700 mt-2">{mood}</p>
</div>
