<script>
	import TaskList from '$lib/components/task/TaskList.svelte';
	import TaskAdder from '$lib/components/task/TaskAdder.svelte';
	import { onMount } from 'svelte';
	import taskStore from '$lib/taskStore.js'; // Importa la tienda completa

	onMount(() => {
		taskStore.loadDbTasks(); // Llama a la función de carga de tareas
	});
</script>

<div>
	<TaskAdder />

	<TaskList tasks={$taskStore} />
</div>
