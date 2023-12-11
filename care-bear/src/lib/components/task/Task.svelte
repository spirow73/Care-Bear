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

<div class="border rounded p-4 mb-2 bg-brown-900 dark:bg-gray-700 dark:border-gray-600">
    <div class="flex justify-between">
        <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200">{title}</h2>
        <button on:click={handleDelete} class="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-500">
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
    <p class="text-gray-600 dark:text-gray-300">{formattedDeadline}</p>
    <p class="text-gray-600 dark:text-gray-300">{description}</p>
    <p class={isCompleted ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
        {isCompleted ? 'Completed' : 'Pending'}
    </p>
</div>
