<script>
	import { addMoodEntry } from '$lib/moodClient';

	let selectedMood = '';
	const emojiToMoodMap = {
    '😊': 1, // Happy
    '😢': 2, // Sad
    '😫': 3, // Stressed
  };
  let user = { id: 1 };
  const selectMood = async (emoji) => {
    selectedMood = emoji;
    const moodValue = emojiToMoodMap[selectedMood];

    if (moodValue) {
      // Pass user_id to addMoodEntry
      const timestamp = new Date().toISOString(); // Current timestamp
      await addMoodEntry({ mood: moodValue, user_id: user.id, timestamp });
    }
  };
</script>

<main class="max-w-md mx-auto mt-10 p-6">
  <h1 class="text-2xl font-bold mb-4">How are you feeling today?</h1>
  <div class="flex">
    <div class="flex flex-wrap justify-center">
      <div
        class="cursor-pointer p-4 m-2 border rounded bg-gray-500"
        on:click={() => selectMood('😊')}
      >
        {#if selectedMood === '😊'}
          <img
            class="h-auto max-w-xs md:max-w-lg rounded-lg"
            src="https://web-holidays.com/wp-content/uploads/2020/06/emoji.png"
            alt="Happy emoji"
          />
        {/if}
        <div class="mt-2 text-center">Happy</div>
      </div>

      <div
        class="cursor-pointer p-4 m-2 border rounded bg-gray-500"
        on:click={() => selectMood('😢')}
      >
        {#if selectedMood === '😢'}
          <img
            class="h-auto max-w-xs md:max-w-lg rounded-lg"
            src="http://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Icon_-_Sad_Emoji_grande.png?v=1542436016"
            alt="Sad emoji"
          />
        {/if}
        <div class="mt-2 text-center">Sad</div>
      </div>

      <div
        class="cursor-pointer p-4 m-2 border rounded bg-gray-500"
        on:click={() => selectMood('😫')}
      >
        {#if selectedMood === '😫'}
          <img
            class="h-auto max-w-xs md:max-w-lg rounded-lg"
            src="https://emoji.gg/assets/emoji/5721_NYOOO.png"
            alt="Stressed emoji"
          />
        {/if}
        <div class="mt-2 text-center">Stressed</div>
      </div>
    </div>
  </div>
  {#if selectedMood !== ''}
    <p class="mt-4">You selected mood: {selectedMood}</p>
  {/if}
</main>

<div class="pt-9">
	<h1 class="text-2xl font-bold text-center">Select Activities For Your Mood</h1>
	<div class="flex flex-nowrap max-w-md mx-auto mt-10 p-6 space-x-4">
		<a
			href="/mood/yoga"
			class="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-white mr-4"
		>
			<div class="p-9 ... bg-slate-500 pt-6 pb-8 rounded-md">Yoga</div>
		</a>
		<a
			href="/mood/meditation"
			class="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-white mr-4"
		>
			<div class="p-9 ... bg-slate-500 pt-6 pb-8 rounded-md">Meditation</div>
		</a>

		<a
			href="/mood/breathingExercise"
			class="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-white mr-4"
		>
			<div class="p-9 ... bg-slate-500 pt-6 pb-8 rounded-md">Breathing Exercise</div>
		</a>
	</div>
</div>
