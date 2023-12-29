<script>
	import { onMount } from 'svelte';
	import { getDaysInMonth, getBlankDays } from './Calendar.js';

	import WeekDay from './WeekDay.svelte';
	import CalendarDay from './CalendarDay.svelte';
	import CalendarHeader from './CalendarHeader.svelte';
	import EventModal from './EventModal.svelte';

	import taskStore from '$lib/taskStore';

	import { fade } from 'svelte/transition';

	let selectedDate = new Date();
	const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	let currentEventDate = null;
	let selectedTasks = [];
	let isEventModalOpen = false;

	onMount(async () => {
		await taskStore.loadDbTasks();
		console.log('Loaded tasks');
		console.log($taskStore);
	});

	$: year = selectedDate.getFullYear();
	$: month = selectedDate.getMonth();
	$: daysInMonth = getDaysInMonth(year, month).map((day) => ({
		number: day,
		events: $taskStore.filter(
			(task) =>
				new Date(task.deadline).getFullYear() === year &&
				new Date(task.deadline).getMonth() === month &&
				new Date(task.deadline).getDate() === day
		)
	}));
	$: blankDays = getBlankDays(year, month);

	function changeMonth(monthChange) {
		selectedDate = new Date(year, month + monthChange, 1);
	}

	function openEventModal(day, tasksOfDay) {
		currentEventDate = new Date(year, month, day);
		selectedTasks = tasksOfDay;
		isEventModalOpen = true;
	}

	function closeEventModal() {
		isEventModalOpen = false;
	}
</script>

{#if $taskStore.isLoading}
	<p>Loading tasks</p>
{:else}
	<div class="mt-2">
		<CalendarHeader {selectedDate} {changeMonth} />
		<div class="grid grid-cols-7 gap-1 my-2">
			{#each weekDays as day}
				<WeekDay {day} />
			{/each}
		</div>

		<div class="grid grid-cols-7 auto-rows-minmax gap-1 mt-1" role="rowgroup">
			{#each blankDays as _}
				<div />
			{/each}
			{#each daysInMonth as dayObj}
				<CalendarDay day={dayObj.number} {openEventModal} eventsForDay={dayObj.events} />
			{/each}
		</div>

		{#if isEventModalOpen}
			<div transition:fade>
				<EventModal {closeEventModal} {currentEventDate} tasksForDay={selectedTasks} />
			</div>
		{/if}
	</div>
{/if}
