<script>
	import Calendar from '../../lib/components/Calendar.svelte';
	import { onMount } from 'svelte';
	import { tasks, loadDbTasks } from '../../lib/taskStore.js';

	onMount(async () => {
		await loadDbTasks();
		console.log($tasks);
	});
</script>

<Calendar tasks={$tasks} />
