<script>
	import { onMount } from 'svelte';
	import TaskAdder from './task/TaskAdder.svelte';
	import theme from '../../stores/themeStore.js';
	$: darkModeClass = $theme === 'dark' ? 'dark' : '';
	export let tasks = [];

	let currentDate;
	let selectedDate;
	let daysInMonth = [];
	let blankDays = [];

	onMount(() => {
		currentDate = new Date();
		selectedDate = new Date();
		updateCalendar();
	});

	function changeMonth(monthChange) {
		selectedDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + monthChange, 1);
		updateCalendar();
	}

	function updateCalendar() {
		const firstDayOfMonth = new Date(
			selectedDate.getFullYear(),
			selectedDate.getMonth(),
			1
		).getDay();
		const numDays = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();

		blankDays = Array(firstDayOfMonth).fill(null);
		daysInMonth = Array.from({ length: numDays }, (_, i) => i + 1);
	}

	let events = {}; // Object to store events

	let showEventModal = false;
	let newEventDate,
		newEventName = '',
		newEventTime = '';

	function openEventModal(day) {
		showEventModal = true;
		newEventDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day);
	}

	function saveEvent() {
		if (!newEventName || !newEventTime) {
			alert('Please enter both event name and time.');
			return;
		}
		const dateString = newEventDate.toISOString().split('T')[0];
		if (!events[dateString]) {
			events[dateString] = [];
		}
		events[dateString].push({ name: newEventName, time: newEventTime });

		// Use Svelte's update method here to ensure reactivity
		events = Object.assign({}, events);

		newEventName = '';
		newEventTime = '';
		showEventModal = false;
	}

	function displayEvents(dateString) {
		return events[dateString]?.map((event) => `${event.name} at ${event.time}`).join(', ') || '';
	}
</script>

<div
	class={`min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ${darkModeClass}`}
>
	<div
		class="max-w-2xl w-full space-y-8 border border-gray-300 rounded-lg p-6 bg-brown-900 dark:bg-gray-800"
	>
		<div>
			<!-- Calendar Header -->
			<div class="flex justify-between items-center button-container">
				<button
					class="bg-orange-200 hover:bg-orange-300 text-white font-bold py-2 px-4 rounded"
					on:click={() => changeMonth(-1)}
					aria-label="Previous Month"
				>
					&lt; Prev
				</button>
				<span
					class="text-xl font-bold text-orange-300"
					id="month-year"
					role="heading"
					aria-level="2"
					aria-live="assertive"
				>
					{selectedDate
						? `${selectedDate.toLocaleString('default', {
								month: 'long'
						  })} ${selectedDate.getFullYear()}`
						: 'Loading...'}
				</span>
				<button
					class="bg-orange-200 hover:bg-orange-300 text-white font-bold py-2 px-4 rounded"
					on:click={() => changeMonth(1)}
					aria-label="Next Month"
				>
					Next &gt;
				</button>
			</div>

			<!-- Weekdays -->
			<div class="grid grid-cols-7 gap-1 mt-4" role="row">
				<div class="text-center font-semibold text-gray-600" role="columnheader">Sun</div>
				<div class="text-center font-semibold text-gray-600" role="columnheader">Mon</div>
				<div class="text-center font-semibold text-gray-600" role="columnheader">Tue</div>
				<div class="text-center font-semibold text-gray-600" role="columnheader">Wed</div>
				<div class="text-center font-semibold text-gray-600" role="columnheader">Thu</div>
				<div class="text-center font-semibold text-gray-600" role="columnheader">Fri</div>
				<div class="text-center font-semibold text-gray-600" role="columnheader">Sat</div>
			</div>

			<!-- Days -->
			<div class="grid grid-cols-7 gap-1 mt-1" role="rowgroup">
				{#each blankDays as _, i}
					<div class="text-center text-gray-400" role="gridcell" aria-hidden="true" />
				{/each}
				{#each daysInMonth as day}
					<div
						class="text-center p-4 cursor-pointer hover:bg-orange-100 rounded-lg border border-gray-300 w-15"
						on:click={() => openEventModal(day)}
						role="gridcell"
						aria-label={day}
					>
						{day}
						<div class="text-sm mt-2 text-gray-500">
							{displayEvents(
								new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day)
									.toISOString()
									.split('T')[0]
							)}
						</div>
					</div>
				{/each}
			</div>

			<!-- Event Input -->
			{#if showEventModal}
				<div class="mt-4 p-4 border rounded bg-white shadow-md">
					<p class="text-lg font-semibold mb-2 text-black" role="heading" aria-level="2">
						Selected date: {newEventDate}
					</p>
					<TaskAdder calendarDate={newEventDate} />
				</div>
			{/if}
		</div>
	</div>
</div>

<!-- Task list
<div class="border-t pt-4">
	<h2 class="text-xl font-semibold text-black">Task List</h2>
	<div class="mt-4">
		{#each tasks.slice().reverse() as task}
			<div class="border rounded p-3 mb-2 bg-white">
				<p>{task.title}</p>
			</div>
		{/each}
	</div>
</div>
-->

<style>
	/* Media query for screens smaller than 640px (adjust as needed) */
	@media (max-width: 640px) {
		/* Adjustments for smaller screens */
		.grid-cols-7 > div {
			padding: 8px;
			font-size: 12px;
			width: calc(75vw / 7);
		}
		/* Adjust button size */
		.button-container button {
			font-size: 14px;
			padding: 8px 12px;
		}
	}

	.dark .bg-gray-100 {
		background-color: #1a202c; /* Dark mode background color */
	}
	.dark .text-gray-600 {
		color: #cbd5e0; /* Dark mode text color */
	}
	.dark .border-gray-300 {
		border-color: #4a5568; /* Dark mode border color */
	}
	.dark .hover\:bg-orange-100:hover {
		background-color: #dd6b20; /* Dark mode hover background color */
	}
</style>
