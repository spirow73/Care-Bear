<script>
	import { onMount } from 'svelte';
	import Weekday from './Weekday.svelte';
	import CalendarDay from './CalendarDay.svelte';
	import CalendarHeader from './CalendarHeader.svelte';
	import EventModal from './EventModal.svelte';
	import { getDaysInMonth, getBlankDays } from './calendar.js';
	import { fade } from 'svelte/transition';
	import taskStore from '$lib/taskStore';
	import './calendar.css';

	let selectedDate = new Date();
	let daysInMonth = [];
	let blankDays = [];

	let currentEventDate; // Variable para almacenar la fecha del evento actual

	let selectedTasks = [];

	function openEventModal(day, tasksOfDay) {
		currentEventDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day);
		selectedTasks = tasksOfDay; // Establecer las tareas seleccionadas
		isEventModalOpen = true;
	}

	const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	onMount(async () => {
		await taskStore.loadDbTasks();
		updateCalendar();
	});

	let isEventModalOpen = false;

	async function updateCalendar() {
		let year = selectedDate.getFullYear();
		let month = selectedDate.getMonth();

		// Obtén los eventos para el mes actual
		let eventsByDay = taskStore.getTasksForMonth(year, month);

		// Construye un nuevo array para daysInMonth que contenga el número del día y los eventos
		daysInMonth = getDaysInMonth(year, month).map((day) => {
			return {
				number: day,
				events: eventsByDay[day] || [] // Asegúrate de que siempre haya un array, incluso si es vacío
			};
		});
		blankDays = getBlankDays(year, month);
	}

	function changeMonth(monthChange) {
		selectedDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + monthChange, 1);
		updateCalendar();
	}

	function closeEventModal() {
		isEventModalOpen = false;
	}
</script>

<div class="calendar-container m-2 rounded p-4">
	<CalendarHeader {selectedDate} {changeMonth} />

	<div class="weekday-header">
		{#each weekDays as day}
			<Weekday {day} />
		{/each}
	</div>

	<div class="day-grid mt-4 pb-6">
		{#each blankDays as _}
			<div
				class=".blank-cell m-2 mt-4 flex flex-col items-center justify-center h-full relative text-center p-4 rounded-lg w-15"
			/>
		{/each}
		{#each daysInMonth as dayObj}
			<CalendarDay
				day={dayObj.number}
				{selectedDate}
				{openEventModal}
				eventsForDay={dayObj.events}
			/>
		{/each}
	</div>

	<!-- Aquí puedes agregar el modal de eventos y cualquier otra lógica de UI -->
	{#if isEventModalOpen}
		<div transition:fade>
			<EventModal {closeEventModal} {currentEventDate} tasksForDay={selectedTasks} />
		</div>
	{/if}
</div>
