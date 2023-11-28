<script>
    import Mood from '$lib/components/mood/Mood.svelte';
    import { onMount } from 'svelte';
    import bear from "../images/bear.png";
    import off from "../images/off.png";
    import on from "../images/on.png";

    let isOn = false;

    const toggleImage = () => {
        isOn = !isOn;
        let moodEntries = [];

        onMount(async () => {
            moodEntries = await fetchLatestMoodEntries();
        });
    };
</script>

<div class="flex flex-col items-center justify-self-start mt-4">
    <!-- First Image (Bear) -->
    <div class="object-none object-top">
        <img class="max-w-full max-h-full" src={bear} alt={bear}>
    </div>

    <!-- Second Image (Off) -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="object-none object-top mt-4 cursor-pointer" on:click={toggleImage}>
        <img class="max-w-full max-h-full" src={isOn ? on : off} alt={isOn ? 'On' : 'Off'}>
    </div>
</div>

<div class="grid grid-cols-1 lg:grid-cols-6 gap-4 mt-4">
    <div class="lg:col-start-1 lg:col-end-4 col-span-1 lg:col-span-2">
        <a href="/tasks">
            <ul class="bg-orange-200 ml-0 lg:ml-12 text-center border-solid border-solid border-2 border-black rounded-full">
                <li>Task 1</li>
                <li>Task 2</li>
                <li>Task 3</li>
                <!-- Add more list items as needed -->
            </ul>
        </a>
    </div>
    <div class="lg:col-start-4 lg:col-end-7 col-span-1 lg:col-span-2 bg-orange-200 mt-4 lg:mr-4 text-center border-solid border-2 border-black rounded-full">
        <Mood />
    </div>
    <div class="lg:col-start-6 lg:col-end-7 col-span-1 lg:col-span-1 bg-orange-200 mt-4 lg:mr-20 text-center border-solid border-2 border-black rounded-full">
        <!-- Placeholder for future content if needed -->
    </div>
</div>

<style>
    div:focus {
        outline: none; /* Remove the default focus style for better aesthetics */
    }
</style>
