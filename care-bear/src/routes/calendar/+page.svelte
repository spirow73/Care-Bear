<script>
	import { onMount } from 'svelte';
	import Calendar from '../../lib/components/Calendar.svelte';
	import { loadDbTasks, tasks } from '../../lib/taskStore.js';

	onMount(async () => {
		await loadDbTasks();
		console.log($tasks);
	});
</script>
<body>

	<Calendar tasks={$tasks} />
</body>
