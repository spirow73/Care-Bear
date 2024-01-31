<script>
	import WeekDay from './WeekDay.svelte';

	const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
</script>

<div class="grid grid-cols-7 gap-1 mt-4" role="row">
	{#each weekDays as day}
		<WeekDay {day} />
	{/each}
</div>
