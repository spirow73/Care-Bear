<!-- Task.svelte -->
<script>
	import { removeDbTask } from '$lib/taskStore';

	export let task_id;
	export let title;
	export let description;
	export let deadline;
	export let isCompleted;

	$: formattedDeadline = new Date(deadline).toLocaleDateString('en-EN', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});

	function handleDelete() {
		console.log(task_id);
		removeDbTask(task_id);
	}
</script>

<!-- <div class="border rounded-full p-4 mb-2 bg-white shadow-md">
	<div class="flex justify-between raounded-full">
		<h2 class="text-xl font-semibold ml-4">Title: {title}</h2>
		<button on:click={handleDelete} class="text-red-500 hover:text-red-700 mr-4">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		</button>
	</div>
	<p class="text-gray-600 ml-4">Date: {formattedDeadline}</p>
	<p class="text-gray-600 ml-4">Description: {description}</p>
	<p class= "{isCompleted ? 'text-green-600' : 'text-red-600'} ml-4">
		Status: {isCompleted ? 'Completed' : 'Pending'}
	</p>
</div> -->
<div class="flex items-center mb-2 bg-brown-900 shadow-md p-4 rounded-full border border-black">
    <div class="{isCompleted ? 'bg-green-500' : 'bg-red-500'} h-6 w-6 rounded-full flex items-center justify-center mr-4">
        <p class="{isCompleted ? 'text-white' : 'text-black'} font-semibold">
            {isCompleted ? '' : ''}
        </p>
    </div>
    <div>
        <h2 class="text-xl font-semibold">Title: {title}</h2>
        <p class="text-black">Description: {description}</p>
		<p class="text-slate-500">Deadline: {formattedDeadline}</p>
    </div>
    <button on:click={handleDelete} class="text-red-500 hover:text-red-700 ml-auto">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
    </button>
</div>

