<script>
	import { onMount } from 'svelte';
	import TaskAdder from './task/TaskAdder.svelte';

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
		console.log('Displaying events for:', dateString);
		return events[dateString]?.map((event) => `${event.name} at ${event.time}`).join(', ') || '';
	}
</script>

<div class="container">
	<div class="calendar-header">
		<button on:click={() => changeMonth(-1)}>&lt; Prev</button>
		<span id="month-year">
			{selectedDate
				? `${selectedDate.toLocaleString('default', {
						month: 'long'
				  })} ${selectedDate.getFullYear()}`
				: 'Loading...'}
		</span>
		<button on:click={() => changeMonth(1)}>Next &gt;</button>
	</div>

	<div class="weekdays">
		<div>Sun</div>
		<div>Mon</div>
		<div>Tue</div>
		<div>Wed</div>
		<div>Thu</div>
		<div>Fri</div>
		<div>Sat</div>
	</div>

	<div class="days">
		{#each blankDays as _, i}
			<div class="day empty" />
		{/each}
		{#each daysInMonth as day}
			<div class="day" on:click={() => openEventModal(day)}>
				{day}
				<div class="events">
					{displayEvents(
						new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day)
							.toISOString()
							.split('T')[0]
					)}
				</div>
			</div>
		{/each}
	</div>

	<!-- Event input -->
	{#if showEventModal}
		<!-- <div class="modal">
			<h2>Add Event</h2>
			<input type="text" placeholder="Event Name" bind:value={newEventName} />
			<input type="time" bind:value={newEventTime} />
			<button on:click={saveEvent}>Save Event</button>
			<button on:click={() => (showEventModal = false)}>Cancel</button>
		</div> -->
		<p>Selected date: {newEventDate}</p>
		<TaskAdder calendarDate={newEventDate} />
	{/if}
</div>

<!-- JUAN -->
<div class="container">
	<!-- Existing code... -->

	<!-- Task list -->
	<div class="tasks">
		{#each tasks.slice().reverse() as task}
			<div class="task">
				{task.title}
			</div>
		{/each}
	</div>

	<!-- Existing code... -->
</div>

<!-- JUAN -->

<style>
	/* Your existing styles */

	.days,
	.weekdays {
		display: grid;
		grid-template-columns: repeat(7, 1fr); /* 7 columns for 7 days of the week */
		text-align: center;
	}

	.day,
	.weekdays div {
		padding: 10px;
		min-height: 50px; /* Adjust as needed */
	}

	.day {
		background-color: #f0f0f0;
	}

	.empty {
		background-color: transparent;
	}

	.container {
		max-width: 800px;
		margin: 30px auto;
		padding: 20px;
		background-color: white;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		border-radius: 8px;
	}

	.calendar-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px;
		background-color: #4a90e2;
		color: white;
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
	}

	.calendar-header button {
		background: none;
		border: none;
		color: white;
		cursor: pointer;
		font-size: 16px;
		padding: 5px 10px;
		border-radius: 4px;
		transition: background-color 0.3s;
	}

	.calendar-header button:hover {
		background-color: rgba(255, 255, 255, 0.2);
	}

	.weekdays,
	.days {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		text-align: center;
	}

	.weekdays div,
	.day {
		padding: 12px;
		border: 1px solid #eaeaea;
	}

	.weekdays div {
		background-color: #f7f7f7;
		font-weight: bold;
	}

	.day {
		background-color: #f0f0f0;
		cursor: pointer;
		transition: background-color 0.3s, transform 0.3s;
	}

	.day:hover {
		background-color: #e0e0e0;
		transform: translateY(-2px);
	}

	.empty {
		background-color: transparent;
	}

	.selected {
		background-color: #4a90e2;
		color: white;
		font-weight: bold;
	}
</style>
