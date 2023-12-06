<script>
	import TaskAdder from '$lib/components/task/TaskAdder.svelte';
	import TaskList from '$lib/components/task/TaskList.svelte';

	import { loadDbTasks, tasks } from '$lib/taskStore.js';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';



onMount(async () => {
  await loadDbTasks();
  console.log($tasks);
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
			<!-- Apply sliding transition to the form -->
			<div class="mt-4" transition:slide>
			  <TaskAdder />
	  
			  <div class="text-center">
				<button
				  class="px-4 py-2 bg-button-1 text-white rounded hover:bg-button-2 transition duration-300"
				  on:click={toggleAddTaskForm}
				>
				  {showAddTaskForm ? 'Hide Add Task Form' : 'Add Task'}
				</button>
			  </div>
			</div>
		  {:else}
			<div class="text-center">
			  <button
				class="px-4 py-2 bg-button-1 text-white rounded hover:bg-button-2 transition duration-300"
				on:click={toggleAddTaskForm}
			  >
				{showAddTaskForm ? 'Hide Add Task Form' : 'Add Task'}
			  </button>
			</div>
		  {/if}
		</div>
	  </div>
	  
	<div>
		<TaskList tasks={$tasks}/>
	</div>
</body>
