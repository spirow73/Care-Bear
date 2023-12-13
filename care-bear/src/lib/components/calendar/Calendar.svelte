<script>
	import { onMount } from 'svelte';
	import { getDaysInMonth, getBlankDays } from './Calendar.js';
	import WeekDay from './WeekDay.svelte';
	import CalendarDay from './CalendarDay.svelte';
	import CalendarHeader from './CalendarHeader.svelte';
	import EventModal from './EventModal.svelte';
	import { fade } from 'svelte/transition';
	import taskStore from '$lib/taskStore';

	let selectedDate = new Date();
	const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	let currentEventDate;
	let selectedTasks = [];
	let isEventModalOpen = false;

	onMount(async () => {
		await taskStore.loadDbTasks();
	});

	$: year = selectedDate.getFullYear();
	$: month = selectedDate.getMonth();
	$: daysInMonth = getDaysInMonth(year, month).map((day) => ({
		number: day,
		events: taskStore.getTasksForDay(year, month, day) || []
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
