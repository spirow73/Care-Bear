<script>
	export let day;
	export let selectedDate;
	export let openEventModal;
	export let eventsForDay; // Este es un array de eventos pasados desde el componente padre

	function handleDayClick() {
		openEventModal(day, eventsForDay); // Pasar el día y las tareas a EventModal
	}
</script>

<div
	class="day-cell m-2 mt-4"
	on:click={handleDayClick}
	role="gridcell"
	aria-label={day}
	tabindex="0"
>
	<div class="text-center text-lg">
		{day}
	</div>
	{#if eventsForDay && eventsForDay.length > 0}
		<div class="notification-container">
			<span class="notification-mark" />
		</div>
	{/if}
</div>

<style>
	.notification-container {
		text-align: center;
	}

	.notification-mark {
		display: inline-block;
		margin-top: 5px; /* Ajusta el margen superior para posicionar el punto debajo del número */
		width: 6px;
		height: 6px;
		background-color: red;
		border-radius: 50%;
	}
</style>
