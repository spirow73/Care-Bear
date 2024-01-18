<script>
	import DayTaskIndicator from './DayTaskIndicator.svelte';

	export let day;
	export let openEventModal;
	export let eventsForDay;

	function handleDayClick() {
		openEventModal(day, eventsForDay);
	}

	function handleDayKeyDown(event) {
		if (['Enter', ' '].includes(event.key)) {
			handleDayClick();
		}
	}

	// Calcula las tareas de forma reactiva
	$: completedTasks = eventsForDay.filter((event) => event.isCompleted).length;
	$: notCompletedTasks = eventsForDay.filter((event) => !event.isCompleted).length;
	$: numberOfTasks = eventsForDay.length;
</script>

<div
	class="relative cursor-pointer hover:bg-fuchsia-100 rounded-lg border border-gray-500"
	on:click={handleDayClick}
	on:keydown={handleDayKeyDown}
	role="gridcell"
	aria-label={day}
	tabindex="0"
>
	<!-- Number container -->
	<div class="flex flex-col items-center justify-center p-4 h-full">
		<span class="text-sm sm:text-lg mb-1">{day}</span>
	</div>

	<!-- Indicator container -->
	{#if numberOfTasks > 0}
		<div class="absolute bottom-1 right-1 flex items-center justify-center space-x-1">
			{#if completedTasks > 0}
				<DayTaskIndicator color={'green'} count={completedTasks} />
			{/if}
			{#if notCompletedTasks > 0}
				<DayTaskIndicator color={'red'} count={notCompletedTasks} />
			{/if}
		</div>
	{:else}
		<!-- If there are no task nothing is shown -->
	{/if}
</div>
