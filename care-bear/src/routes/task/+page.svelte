<script>
	import TaskAdder from '$lib/components/task/TaskAdder.svelte';
	import TaskList from '$lib/components/task/TaskList.svelte';

	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import taskStore from '$lib/taskStore.js';
	import up from '$lib/components/images/up.png';
	import down from '$lib/components/images/down.png';

	onMount(async () => {
		await taskStore.loadDbTasks();
	});

	let showAddTaskForm = false;

	function toggleAddTaskForm() {
		showAddTaskForm = !showAddTaskForm;
	}
</script>

<body>
	<div class="my-4">
		<!-- Container for the button and the form with a white background when the form is visible -->
		<div class={showAddTaskForm ? 'bg-brown-900 py-4' : ''}>
			{#if showAddTaskForm}
				<div transition:slide>
					<TaskAdder />
				</div>
				<!-- Apply sliding transition to the form -->
				<div class="mt-4 flex flex-col items-center">
					<span class="block mb-2 text-black text-center text-lg"><b>Close</b></span>
					<button class="mx-auto w-6 h-6" on:click={toggleAddTaskForm}>
						<img src={up} alt="Up Button Image" />
					</button>
				</div>
			{:else}
				<div class="flex flex-col items-center">
					<span class="block mb-2 text-black text-center text-lg"><b>Add task</b></span>
					<button class="mx-auto w-6 h-6" on:click={toggleAddTaskForm}>
						<img src={down} alt="Down Button Image" />
					</button>
				</div>
			{/if}
		</div>

		<div class="m-3">
			<TaskList tasks={$taskStore} showFilters={true} />
		</div>
	</div></body
>
