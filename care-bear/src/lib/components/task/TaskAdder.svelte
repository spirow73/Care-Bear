<script>
    import { tasks, loadDbTasks, addDbTask, updateDbTask, removeDbTask } from '$lib/taskStore.js';
    import { onMount } from 'svelte';
    import Calendar from '../Calendar.svelte';

    onMount(async () => {
        await loadDbTasks();
    });

    export let title = 'Add Task';
    export let calendarDate;

    $: formattedDeadline = new Date(calendarDate).toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    let newTask = {
        user_id: 1,
        title: '',
        description: '',
        deadline: '', 
        isCompleted: false
    };

    let dateData = {
        date: '', 
        time: '' 
    };

    let addTask = async () => {
        // ... existing addTask logic ...
    };

    // ... additional script content ...
</script>

<div class="p-4 m-3 border rounded bg-orange-200 dark:bg-gray-700 dark:border-gray-600">
    <h3 class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{title}</h3>
    <input
        type="text"
        placeholder="Title"
        bind:value={newTask.title}
        class="border rounded p-2 mb-2 bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
    />
    <input
        type="text"
        placeholder="Description"
        bind:value={newTask.description}
        class="border rounded p-2 mb-2 bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
    />
    <div class="flex mb-2">
        {#if calendarDate}
            <p class="text-gray-800 dark:text-gray-200">{formattedDeadline}</p>
        {:else}
            <input type="date" bind:value={dateData.date} class="border rounded p-2 mr-2 bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200" />
        {/if}
        <input type="time" bind:value={dateData.time} class="border rounded p-2 bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200" />
    </div>
    <button
        on:click={addTask}
        class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded dark:hover:bg-blue-700"
    >
        Add Task
    </button>
</div>
