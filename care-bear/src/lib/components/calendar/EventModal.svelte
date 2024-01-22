<script>
	import TaskAdder from '$lib/components/task/TaskAdder.svelte';
	import TaskList from '$lib/components/task/TaskList.svelte';

	import { onMount, onDestroy } from 'svelte';

	export let closeEventModal;
	export let currentEventDate;
	export let tasksForDay = [];

	// Function to handle the "Esc" key press
	function handleKeydown(event) {
		if (event.key === 'Escape') {
			closeEventModal();
		}
	}

	// Add event listener on mount
	onMount(() => {
		window.addEventListener('keydown', handleKeydown);
	});

	// Clean up the event listener on destroy
	onDestroy(() => {
		window.removeEventListener('keydown', handleKeydown);
	});
</script>

<div class="modal-container">
	<div class="modal-content overflow-auto relative">
		<!-- Close Button at the very top right corner of the modal content with a red circle -->
		<button
			on:click={closeEventModal}
			class="absolute top-0 right-0 m-2 text-2xl rounded-full bg-red-500 hover:bg-red-700 p-1 text-white"
			aria-label="Close"
		>
			<svg
				class="h-6 w-6"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		</button>

		{#if tasksForDay.length > 0}
			<div class="task-layout" style="display: flex; flex-direction: row; gap: 1rem;">
				<div class="task-list-container" style="flex: 1;">
					<TaskList title="Tasks for the Day" tasks={tasksForDay} deadline={currentEventDate} />
				</div>
				<div style="flex: 1;">
					<TaskAdder calendarDate={currentEventDate} {closeEventModal} />
					<button
						on:click={closeEventModal}
						class="mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-300"
					>
						OK
					</button>
				</div>
			</div>
		{:else}
			<div style="flex: 1;">
				<TaskAdder calendarDate={currentEventDate} {closeEventModal} />
				<button
					on:click={closeEventModal}
					class="mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-300"
				>
					OK
				</button>
			</div>
		{/if}
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
		background-image: url('$lib/components/images/background.png');
		background-repeat: no-repeat;
		background-size: cover;
		padding: 2rem;
		border-radius: 5px;
		overflow-y: auto; /* Enable scroll */
		max-width: 100%; /* Maximum width of 100% */
		max-height: 100%; /* Maximum height of 100% */
		box-sizing: border-box; /* Include padding in total width/height */
	}

	.task-layout {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		flex-wrap: wrap;
	}

	.task-list-container {
		max-height: 450px;
		overflow-y: auto;
		flex: 1;
		margin-right: 5px; /* Adjust spacing between Task List and Task Adder */
	}

	.task-layout {
		display: flex; /* This will ensure that the child elements are flex items */
		flex-direction: column; /* Stack children vertically */
		height: 100%; /* Make the task-layout take full height of its parent */
	}

	.task-list-container {
		overflow-y: auto; /* Add scroll to the task list if it overflows */
	}

	@media (max-width: 600px) {
		.modal-content {
			width: 100%; /* Adjust width on small screens */
		}
	}
</style>
