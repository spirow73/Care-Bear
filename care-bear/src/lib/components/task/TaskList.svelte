<script>
    import Task from './Task.svelte';

    export let title = '';
    export let tasks = [];
    export let limit;
</script>

<div class="p-4 border rounded bg-white dark:bg-gray-500 dark:border-gray-700 m-3">
    <h1 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-100">{title}</h1>

    {#if limit}
        {#each tasks.slice().reverse().slice(0, limit) as task}
            <Task
                title={task.title}
                description={task.description}
                deadline={task.deadline}
                isCompleted={task.isCompleted}
                task_id={task.task_id}
            />
        {/each}
    {:else}
        {#each tasks.slice().reverse() as task}
            <Task
                title={task.title}
                description={task.description}
                deadline={task.deadline}
                isCompleted={task.isCompleted}
                task_id={task.task_id}
            />
        {/each}
    {/if}
</div>
