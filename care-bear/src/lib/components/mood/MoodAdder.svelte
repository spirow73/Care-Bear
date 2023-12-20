<script>
	import depressed from '$lib/components/images/depressed.png';
	import happy from '$lib/components/images/happy.png';
	import sad from '$lib/components/images/sad.png';
	import stressed from '$lib/components/images/stressed.png';
	import tired from '$lib/components/images/tired.png';
	import upset from '$lib/components/images/upset.png';
	import { addMoodEntryToDB } from '$lib/moodStore';
	import theme from '../../../stores/themeStore.js';


	import { createEventDispatcher, onMount } from 'svelte';
	import toast, { Toaster } from 'svelte-french-toast';
	import MoodAdvisor from './MoodAdviser.svelte';

let isMobile = false;

onMount(() => {
	const mobileMediaQuery = window.matchMedia('(max-width: 767px)');
	isMobile = mobileMediaQuery.matches;

	const handleResize = (e) => {
		isMobile = e.matches;
	};

	mobileMediaQuery.addEventListener('change', handleResize);
});

	const moods = {
		1: { description: 'Happy', image: happy },
		2: { description: 'Sad', image: sad },
		3: { description: 'Stressed', image: stressed },
		4: { description: 'Depressed', image: depressed },
		5: { description: 'Tired', image: tired },
		6: { description: 'Upset', image: upset }
	};

	const dispatch = createEventDispatcher();
	let user = { id: 1 };
	let moodConfirmed = false;

	    let currentTheme;
    $: currentTheme = $theme;

	const selectMood = async (moodId) => {
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
			moodConfirmed = false;
		}
	};
	const confirmMood = async (moodId) => {
    if (selectedMood !== '' && !moodConfirmed) {
      const timestamp = new Date().toISOString();
      await addMoodEntryToDB({ mood: parseInt(moodId), user_id: user.id, timestamp });
      moodConfirmed = true;
	  dispatch('confirmMood', { detail: selectedMood });

      toast.success('Mood added successfully!', {
        duration: 3000,
        hasIcon: true,
        icon: '👍',
        style: 'background: #84B59F'
      });
    }
  };
	let selectedMood = '';

</script>

<!-- Wide screens -->
<Toaster/>
<main class={`hidden lg:block max-w-screen-md mx-auto mt-10 p-6 ${currentTheme === 'dark' ? 'bg-gray-800 text-white' : 'lg:flex lg:flex-wrap lg:justify-center lg:gap-4 sm:w-full'}`}>
    <h1 class="text-2xl font-bold mb-4 text-center">How are you feeling today?</h1>
	<div class="hidden lg:w-1/4 cursor-pointer p-4 m-2 rounded-lg transition-transform transform hover:scale-105 hidden lg:block"></div>
	<div class="flex flex-wrap justify-center lg:w-3/4">
		{#each Object.keys(moods) as moodId}
			<div
				id={`mood_${moodId}`}
				class={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 cursor-pointer p-4 m-2 rounded-lg transition-transform transform hover:scale-105 shadow-md ${
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
	{#if selectedMood !== '' && !moodConfirmed}
	<p class="mt-4 text-center lg:w-full hidden lg:block">
	  You selected mood: <b>{selectedMood}</b>
	</p>
	<div class="flex justify-center items-center">
	  <button
		class="mt-2 bg-button-1 text-black p-2 rounded hover:bg-button-2 text-center"
		on:click={() => confirmMood(Object.keys(moods).find((key) => moods[key].description === selectedMood))}
	  >
		Confirm Mood
	  </button>
	</div>
  {/if}
  {#if moodConfirmed}
    <MoodAdvisor {selectedMood} />
  {/if}
</main>


<!-- Mobile -->
<Toaster />
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
                class="mt-2 bg-button-1 text-white p-2 rounded hover:bg-button-2"
                on:click={() =>
                    confirmMood(Object.keys(moods).find((key) => moods[key].description === selectedMood))}
                >Confirm Mood</button
            >
        </div>
		{#if moodConfirmed}
		<MoodAdvisor {selectedMood} />
	  {/if}
    {/if}
</main>