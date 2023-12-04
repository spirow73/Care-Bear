<script>
	import Mood from '$lib/components/mood/Mood.svelte';
	import { onMount } from 'svelte';
	import bear from '../images/bear.png';
	import off from '../images/off.png';
	import on from '../images/on.png';

	import TaskList from '$lib/components/task/TaskList.svelte';
	import { loadDbTasks, tasks } from '$lib/taskStore';

	onMount(async () => {
		await loadDbTasks();
	});

	let isOn = false;

	const toggleImage = () => {
		isOn = !isOn;
		let moodEntries = [];

		onMount(async () => {
			moodEntries = await fetchLatestMoodEntries();
		});
	};

	// Lista de moods con sus emojis correspondientes
	const moods = [
		{ description: 'Happy', emoji: '😊' },
		{ description: 'Sad', emoji: '😢' },
		{ description: 'Angry', emoji: '😠' },
		{ description: 'Excited', emoji: '🤩' },
		{ description: 'Calm', emoji: '😌' },
		{ description: 'Angry', emoji: '😠' },
		{ description: 'Excited', emoji: '🤩' },
		{ description: 'Calm', emoji: '😌' }
	];
</script>

<div class="flex flex-col items-center justify-self-start mt-4">
	<!-- First Image (Bear) -->
	<div class="object-none object-top">
		<img class="max-w-full max-h-full" src={bear} alt={bear} />
	</div>

	<!-- Second Image (Off) -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="object-none object-top mt-4 cursor-pointer" on:click={toggleImage}>
		<img class="max-w-full max-h-full" src={isOn ? on : off} alt={isOn ? 'On' : 'Off'} />
	</div>
</div>

<div class="container mx-auto p-4">
	<div class="flex flex-col md:flex-row gap-4">
		<!-- Columna para la lista de tareas -->
		<div class="flex-1">
			<h2 class="text-2xl font-bold mb-4 text-center">Your last tasks</h2>
			<TaskList tasks={$tasks} limit="3" />
		</div>

		<div class="flex-1 text-center">
			<h2 class="text-2xl font-bold mb-4">Last moods</h2>
			<div class="bg-orange-200 rounded-lg">
				<Mood />
			</div>
			
		</div>

		<!-- Columna para los
		<div class="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {#each moods as mood}
				<MoodCard mood={mood.description} emoji={mood.emoji} />
			{/each}
		</div>
        -->
	</div>
</div>

<style>
	div:focus {
		outline: none; /* Remove the default focus style for better aesthetics */
	}
</style>
