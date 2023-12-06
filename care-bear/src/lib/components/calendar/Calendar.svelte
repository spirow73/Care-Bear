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

<div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
	<div class="max-w-2xl w-full space-y-8 border border-gray-300 rounded-lg p-6">
		<CalendarHeader {selectedDate} {changeMonth} />

		<div class="grid grid-cols-7 gap-1 mt-4">
			{#each weekDays as day}
				<Weekday {day} />
			{/each}
		</div>

		<div class="grid grid-cols-7 gap-1 mt-1" role="rowgroup">
			{#each blankDays as _}
				<div class="text-center p-4 w-15" />
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
</div>
