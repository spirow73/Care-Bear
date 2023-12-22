<!-- MoodAdviser.svelte -->

<script>
	import { afterUpdate, onMount } from 'svelte';
  
	export let selectedMood;
	let activityPage = '';
	let showDefaultActivities = true;
  
	const setActivityPage = () => {
	  const lowerCaseSelectedMood = selectedMood ? selectedMood.toLowerCase() : '';
	  if (lowerCaseSelectedMood === 'happy') {
		activityPage = './mood/happy';
	  } else if (lowerCaseSelectedMood === 'sad') {
		activityPage = './mood/sad';
	  } else if (lowerCaseSelectedMood === 'upset') {
		activityPage = './mood/upset';
	  } else if (lowerCaseSelectedMood === 'stressed') {
		activityPage = './mood/stressed';
	  } else if (lowerCaseSelectedMood === 'tired') {
		activityPage = './mood/Tired';
	  } else if (lowerCaseSelectedMood === 'depressed') {
		activityPage = './mood/depressed';
	  } else {
		activityPage = '';
	  }
  
	  // Update showDefaultActivities based on whether a mood is selected
	  showDefaultActivities = !selectedMood;
	};
  
	// Run setActivityPage on mount and after each update
	onMount(() => {
	  setActivityPage();
	});
  
	afterUpdate(() => {
	  setActivityPage();
	});
  </script>
  
  {#if showDefaultActivities && !activityPage}
	<div class="pt-9">
	  <h1 class="text-2xl font-bold text-center">Mood Activities</h1>
	  <div class="max-w-md mx-auto mt-10 p-6 space-y-4">
		<a href="./mood/yoga" class="block text-black-200 hover:text-white">
		  <div class="p-9 ... bg-orange-200 pt-6 pb-8 rounded-md shadow-md">Yoga</div>
		</a>
		<a href="./mood/meditation" class="block text-black-200 hover:text-white">
		  <div class="p-9 ... bg-orange-200 pt-6 pb-8 rounded-md">Meditation</div>
		</a>
		<a href="./mood/breathingExercise" class="block text-black-200 hover:text-white">
		  <div class="p-9 ... bg-orange-200 pt-6 pb-8 rounded-md">Breathing Exercise</div>
		</a>
	
	  </div>
	</div>
  {:else if selectedMood && activityPage}
	<div class="pt-9">
	  <h1 class="text-2xl font-bold text-center">See activities to improve your current mood</h1>
	  <div class="max-w-md mx-auto mt-10 p-6 space-y-4">
		<a href={activityPage} class="block text-black-200 hover:text-white">
		  <div class="p-9 ... bg-orange-200 pt-6 pb-8 rounded-md text-center shadow-md">Exercises to help  your current Mood "{selectedMood}"</div>
		</a>
	  </div>
	</div>
  {/if}
  