<script>
	import TaskAdder from '$lib/components/task/TaskAdder.svelte';
	import TaskList from '$lib/components/task/TaskList.svelte';

	export let closeEventModal;
	export let currentEventDate;
	export let tasksForDay = []; // Add this to receive tasks for the day
	console.log(tasksForDay);
</script>

<div class="modal-container">
	<div class="modal-content overflow-auto">
		<TaskAdder calendarDate={currentEventDate} />
		{#if tasksForDay.length > 0}
			<div class="task-list-container">
				<TaskList title="Tasks for the Day" tasks={tasksForDay} />
			</div>
		{/if}
		<button
			on:click={closeEventModal}
			class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
		>
			Close
		</button>
	</div>
</div>

<style>
	.modal-container {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.5); /* 50% opacity */
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 20px; /* Margin around the modal */
	}

	.modal-content {
		background-color: white;
		padding: 2rem;
		border-radius: 5px;
		overflow-y: auto; /* Enable scroll */
		max-width: 100%; /* Maximum width of 100% */
		max-height: 100%; /* Maximum height of 100% */
		box-sizing: border-box; /* Include padding in total width/height */
	}

	.task-list-container {
		max-height: 300px;
		overflow-y: auto;
	}

	@media (max-width: 600px) {
		.modal-content {
			width: 90%; /* Adjust width on small screens */
		}
	}
</style>
