<script>
	import { removeDbTask, toggleTaskCompletion } from '$lib/taskStore';
	import TaskEdit from './TaskEdit.svelte';
	import TaskView from './TaskView.svelte';

	// Exported variables remain the same
	export let task_id;
	export let title;
	export let description;
	export let deadline;
	export let isCompleted;

	let isEditing = false;

	// Date formatting remains the same
	$: formattedDeadline = new Date(deadline).toLocaleDateString('en-EN', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});

	// Function to handle task deletion remains the same
	function handleDelete() {
		removeDbTask(task_id);
	}

	// Function to toggle editing mode remains the same
	function toggleEdit() {
		isEditing = !isEditing;
	}

	// Function to handle toggling task completion remains the same
	function handleToggleCompletion() {
		toggleTaskCompletion(task_id, isCompleted);
	}
</script>

<div class="flex items-center mb-2 bg-fuchsia-100 shadow-md p-4 rounded-lg border border-black">
	<!-- Changes start here -->
	<!-- Revised structure of the completion toggle button and display -->
	<div class="flex items-center flex-1">
		<button
			class="focus:outline-none"
			on:click={handleToggleCompletion}
			aria-label={isCompleted ? 'Mark as Pending' : 'Mark as Completed'}
			title={isCompleted ? 'Mark as Pending' : 'Mark as Completed'}
		>
			<!-- Revised structure for the completion toggle icon -->
			<div class="flex items-center">
				<span
					class="{isCompleted
						? 'bg-green-500'
						: 'bg-red-500'} h-6 w-6 rounded-full flex items-center justify-center mr-2"
					role="checkbox"
					aria-checked={isCompleted}
				>
					<svg
						class="h-4 w-4 text-white"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<!-- Updated SVG paths for completed and pending tasks -->
						{#if isCompleted}
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 13l4 4L19 7"
							/>
						{:else}
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						{/if}
					</svg>
				</span>
			</div>
		</button>
		<!-- Revised structure for handling editing mode -->
		<div class="flex ml-4">
			{#if isEditing}
				<!-- Displaying TaskEdit component -->
				<TaskEdit {title} {description} {deadline} {task_id} closeEdit={toggleEdit} />
			{:else}
				<div class="flex">
					<!-- Displaying TaskView component -->
					<TaskView {title} {description} {formattedDeadline} />
					<!-- Button to toggle editing mode -->
					<button
						on:click={toggleEdit}
						class="ml-2 focus:outline-none"
						aria-label={isEditing ? 'Cancel Edit' : 'Edit Task'}
						title={isEditing ? 'Cancel Edit' : 'Edit Task'}
					>
						{isEditing ? '❌' : '🖊️'}
					</button>
				</div>
			{/if}
		</div>
		<!-- Displaying task completion status -->
		<!-- <span
			class="px-1 py-1 text-xs font-semibold rounded-lg uppercase {isCompleted
				? 'bg-green-200 text-green-800'
				: 'bg-red-200 text-red-800'}"
		>
			{isCompleted ? 'Completed' : 'Pending'}
		</span> -->
	</div>
	<!-- Button to delete the task -->
	<button
		on:click={handleDelete}
		class="ml-4 text-red-500 hover:text-red-700 focus:outline-none"
		aria-label="Delete Task"
		title="Delete Task"
	>
		🗑️
	</button>
	<!-- End of changes -->
</div>
