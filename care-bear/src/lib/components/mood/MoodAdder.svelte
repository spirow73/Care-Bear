<script>
	import { addMoodEntryToDB } from '$lib/moodStore';
	import depressed from '../../../images/depressed.png';
	import happy from '../../../images/happy.png';
	import sad from '../../../images/sad.png';
	import stressed from '../../../images/stressed.png';
	import tired from '../../../images/tired.png';
	import upset from '../../../images/upset.png';
	import theme from '../../../stores/themeStore.js';


	const moods = {
		1: { description: 'Happy', image: happy },
		2: { description: 'Sad', image: sad },
		3: { description: 'Stressed', image: stressed },
		4: { description: 'Depressed', image: depressed },
		5: { description: 'Tired', image: tired },
		6: { description: 'Upset', image: upset }
	};

	let selectedMood = '';
	let selectedMoodId = '';
	let user = { id: 1 };

	    let currentTheme;
    $: currentTheme = $theme;

	const selectMood = async (moodId) => {
		selectedMoodId = moodId;
		selectedMood = moods[moodId].description;

		Object.keys(moods).forEach((key) => {
			const element = document.getElementById(`mood_${key}`);
			if (element) {
				element.classList.remove('border', 'border-black');
			}
		});

		const selectedElement = document.getElementById(`mood_${moodId}`);
		if (selectedElement) {
			selectedElement.classList.add('border', 'border-black');
		}
	};

	const confirmMood = async () => {
		if (selectedMood !== '') {
			const timestamp = new Date().toISOString();
			await addMoodEntryToDB({ mood: parseInt(selectedMoodId), user_id: user.id, timestamp });
		}
	};

	let showActivities = false;
	let activityPage = '';

	const toggleActivities = () => {
		showActivities = !showActivities;
	};

	const setActivityPage = () => {
		const lowerCaseSelectedMood = selectedMood.toLowerCase();

		if (lowerCaseSelectedMood === 'happy') {
			activityPage = './mood/meditation';
		} else if (lowerCaseSelectedMood === 'sad') {
			activityPage = './mood/sad';
		} else if (lowerCaseSelectedMood === 'upset') {
			activityPage = './mood/upset';
		} else if (lowerCaseSelectedMood === 'stressed') {
			activityPage = './mood/breathingExercise';
		} else if (lowerCaseSelectedMood === 'tired') {
			activityPage = './mood/Tired';
		} else if (lowerCaseSelectedMood === 'depressed') {
			activityPage = './mood/yoga';
		} else {
			console.error(`Unexpected mood: ${selectedMood}`);
			activityPage = '';
		}
	};
</script>

<!-- Wide screens -->
<main class={`max-w-screen-md mx-auto mt-10 p-6 ${currentTheme === 'dark' ? 'bg-gray-800 text-white' : 'lg:flex lg:flex-wrap lg:justify-center lg:gap-4 sm:w-full'}`}>
    <h1 class="text-2xl font-bold mb-4 text-center">How are you feeling today?</h1>
	<div class="hidden lg:w-1/4 cursor-pointer p-4 m-2 rounded-lg transition-transform transform hover:scale-105 hidden lg:block"></div>
	<div class="flex flex-wrap justify-center lg:w-3/4">
		{#each Object.keys(moods) as moodId}
			<div
				id={`mood_${moodId}`}
				class={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 cursor-pointer p-4 m-2 rounded-lg transition-transform transform hover:scale-105 ${
					selectedMood === moodId ? 'border border-red' : 'bg-orange-200'
				}`}
				on:click={() => selectMood(moodId)}
			>
				<img
					class="h-auto max-w-xs md:max-w-lg rounded-lg mx-auto transition-transform transform hover:scale-105"
					src={moods[moodId].image}
					alt={`${moods[moodId].description} emoji`}
				/>
				<div class="mt-2 text-center">{moods[moodId].description}</div>
			</div>
		{/each}
	</div>
	{#if selectedMood !== ''}
		<p class="mt-4 text-center lg:w-full hidden lg:block">You selected mood: <b>{selectedMood}</b></p>
		<div class="flex justify-center lg:w-full hidden lg:block">
			<button
				class="mt-2 bg-orange-200 text-black p-2 rounded hover:text-white"
				on:click={() => {
					toggleActivities();
					setActivityPage();
					confirmMood();
				}}
			>Confirm Mood</button>
		</div>
		{#if showActivities}
			<!-- Show activities for the selected mood -->
			<div  class="p-9 ... bg-orange-200 pt-6 pb-8 rounded-md">
				<!-- Add your activities content here -->
				{#if activityPage !== ''}
					<a href={activityPage}>View Activities for {selectedMood}</a>
				{/if}
			</div>
		{/if}
	{/if}
</main>

<!-- Mobile -->
<main class="max-w-screen-md mx-auto mt-10 p-6 lg:hidden">
	<h1 class="text-2xl font-bold mb-4 text-center">How are you feeling today?</h1>
	<div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center overflow-y-auto max-h-96 lg:hidden">
		{#each Object.keys(moods) as moodId}
			<div
				id={`mood_${moodId}`}
				class={`w-32 cursor-pointer p-4 m-2 rounded-lg transition-transform transform hover:scale-105 ${
					selectedMood === moodId ? 'border border-red' : 'bg-orange-200'
				}`}
				on:click={() => selectMood(moodId)}
			>
				<img
					class="h-auto w-full rounded-lg mx-auto transition-transform transform hover:scale-105"
					src={moods[moodId].image}
					alt={`${moods[moodId].description} emoji`}
				/>
				<div class="mt-2 text-center">{moods[moodId].description}</div>
			</div>
		{/each}
	</div>
	{#if selectedMood !== ''}
		<p class="mt-4 text-center lg:hidden">You selected mood: <b>{selectedMood}</b></p>
		<div class="flex justify-center lg:hidden">
			<button
				class="mt-2 bg-orange-200 text-black p-2 rounded hover:text-white"
				on:click={() => {
					toggleActivities();
				
					setActivityPage();
					confirmMood();
				}}
			>Confirm Mood</button>
		</div>
		{#if showActivities}
			<!-- Show activities for the selected mood -->
			<div class="lg:hidden">
				<!-- Add your activities content here -->
				{#if activityPage !== ''}
					<a href={activityPage} class="text-blue-500 underline">View Activities for {selectedMood}</a>
				{/if}
			</div>
		{/if}
	{/if}
</main>
