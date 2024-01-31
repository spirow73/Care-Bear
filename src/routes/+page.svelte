<script>
	import SpeechToText from '$lib/components/Speech_To_Text.svelte';
	import bear from '$lib/components/images/bear.png';
	import bearOff from '$lib/components/images/bearOff.png';
	import off from '$lib/components/images/off.png';
	import on from '$lib/components/images/on.png';
	import Mood from '$lib/components/mood/Mood.svelte';
	import TaskList from '$lib/components/task/TaskList.svelte';
	import taskstore from '$lib/taskStore';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import user from '$lib/userStore';

	let moodEntries = [];

	onMount(async () => {
		if (!$user.user) {
			goto('/welcome');
			return;
		}
		await taskstore.loadDbTasks();
		moodEntries = await fetchLatestMoodEntries();
	});

	let isOn = false;

	const toggleImage = () => {
		isOn = !isOn;
		let moodEntries = [];
	};

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

<body>
	<div class="flex flex-col items-center justify-self-start mt-4">
		<!-- Bear Image -->
		{#if isOn}
			<div class="object-none object-top">
				<img class="max-w-full max-h-full" src={bear} alt={bear} />
			</div>
		{:else}
			<div class="object-none object-top">
				<img class="max-w-full max-h-full" src={bearOff} alt={bearOff} />
			</div>
		{/if}

		<!-- On/Off Button -->
		<div class="object-none object-top mt-4 cursor-pointer" on:click={toggleImage}>
			<img class="max-w-full max-h-full" src={isOn ? on : off} alt={isOn ? 'On' : 'Off'} />
		</div>
	</div>

	<!-- <SpeechToText /> -->

	<div class="container mx-auto p-4">
		<div class="flex flex-col md:flex-row gap-4">
			<div class="flex-1">
				<h2 class="text-2xl font-bold mb-4 text-center">Your last tasks</h2>
				<TaskList tasks={$taskstore} limit="3" />
			</div>

			<div class="flex-1 text-center">
				<h2 class="text-2xl font-bold mb-4">Last moods</h2>
				<Mood />
			</div>
		</div>
	</div>
</body>

<style>
	div:focus {
		outline: none; /* Remove the default focus style for better aesthetics */
	}
</style>
