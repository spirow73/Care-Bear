<script>
    import { onMount } from 'svelte';
    import Task from './Task.svelte';
    import { fetchTasks } from '../../taskClient'; // Import your fetchTasks function

    export let title = '';
    let tasks = []; // Now managed within the component
    let limit; // Optional: Use if you want to limit the number of tasks displayed

    let sortOption = 'deadline'; // Default sort option
    let filterOption = 'all'; // Default filter option

    onMount(() => {
        loadTasks(); // Load tasks when the component mounts
    });

    // Function to load tasks based on the current filter and sort options
    function loadTasks() {
        let filter = {};
        if (filterOption !== 'all') {
            filter.isCompleted = filterOption === 'completed';
        }


        let ascending = true; // Or implement logic to toggle ascending/descending
        fetchTasks({ filter, sort: sortOption })
            .then(fetchedTasks => {
                tasks = fetchedTasks;
            })
            .catch(error => {
                console.error('Error fetching tasks:', error);
            });
    }

    // Watch for changes in filter and sort options and reload tasks
    $: if (filterOption || sortOption) {
        loadTasks();
    }
</script>

<div class='m-4 p-3'>
    <h1 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-100">{title}</h1>

    <!-- Filter and Sort Controls -->
    <div class="mb-4">
        <select bind:value={filterOption}>
            <option value="all">All Tasks</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
        </select>
        <select bind:value={sortOption}>
            <option value="deadline">Sort by Deadline</option>
            <option value="created">Sort by Creation Date</option>
        </select>
     </div>

    {#each tasks as task (task.task_id)}
        <Task
            title={task.title}
            description={task.description}
            deadline={task.deadline}
            isCompleted={task.isCompleted}
            task_id={task.task_id}
        />
    {/each}
</div>
