<script>
	export let day;
	export let openEventModal;
	export let eventsForDay; // Este es un array de eventos pasados desde el componente padre

	function handleDayClick() {
		openEventModal(day, eventsForDay); // Pasar el día y las tareas a EventModal
	}
</script>

<div
	class="day-cell m-2 mt-4 p-4 flex flex-col items-center justify-center h-full cursor-pointer relative"
	on:click={handleDayClick}
	role="gridcell"
	aria-label={day}
	tabindex="0"
>
	<span class="text-lg font-semibold mb-2">{day}</span>
	{#if eventsForDay && eventsForDay.length > 0}
		<span class="notification-mark w-1.5 h-1.5 bg-red-500 rounded-full" />
	{/if}
</div>

<style>
	.notification-mark {
		display: inline-block;
		width: 6px;
		height: 6px;
		background-color: red;
		border-radius: 50%;
	}
</style>
