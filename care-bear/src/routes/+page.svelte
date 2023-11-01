<script>
	import TaskList from '../components/TaskList.svelte';
	import supabase from '../lib/supabaseClient.js';

	import TaskAdder from '../components/TaskAdder.svelte';

	let tasks = [];

	async function fetchTasks() {
		const { data, error } = await supabase.from('tasks').select('*');
		if (error) {
			console.error('Error fetching tasks:', error);
		} else {
			tasks = data;
		}
	}

	// Calls fetchTasks when the page loads or when necessary.
	fetchTasks();
</script>

<div>
	<TaskAdder />

	<TaskList {tasks} />
</div>
