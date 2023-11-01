<!-- TaskList.svelte -->
<script>
	let tasks = [];
	let newTaskText = ''; // Variable para almacenar el texto de la nueva tarea

	function addTask() {
		if (newTaskText.trim() !== '') {
			tasks = [...tasks, { text: newTaskText, completed: false }];
			newTaskText = ''; // Limpia el campo de entrada
		}
	}

	function toggleTaskCompletion(index) {
		tasks[index].completed = !tasks[index].completed;
		tasks = [...tasks];
	}
</script>

<div class="p-4 border rounded shadow-md">
	<h2 class="text-xl font-bold mb-4">Lista de Tareas</h2>

	<input
		type="text"
		placeholder="Nueva tarea"
		bind:value={newTaskText}
		on:keydown={(e) => {
			if (e.key === 'Enter' && newTaskText) {
				addTask();
			}
		}}
		class="w-full px-2 py-1 border mb-4 rounded"
	/>

	<button on:click={addTask} class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
		Agregar Tarea
	</button>

	<ul>
		{#each tasks as task, index (task.id)}
			<li
				class={task.completed ? 'line-through text-gray-400' : ''}
				on:click={() => toggleTaskCompletion(index)}
			>
				{task.text}
			</li>
		{/each}
	</ul>
</div>

<style>
	/* Estilos personalizados aquí si es necesario */
</style>
