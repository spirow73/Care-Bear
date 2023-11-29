<script>
  import { addMoodEntryToDB } from '$lib/moodStore';
  import depressed from "../../../images/depressed.png";
  import happy from "../../../images/happy.png";
  import sad from "../../../images/sad.png";
  import stressed from "../../../images/stressed.png";
  import tired from "../../../images/tired.png";
  import upset from "../../../images/upset.png";
  
  const moods = {
    1: { description: 'Happy', image: happy },
    2: { description: 'Sad', image: sad },
    3: { description: 'Stressed', image: stressed },
    4: { description: 'Depressed', image: depressed },
    5: { description: 'Tired', image: tired },
    6: { description: 'Upset', image: upset },
  };

  let selectedMood = '';
  let user = { id: 1 };

  const selectMood = async (moodId) => {
    selectedMood = moods[moodId].description;
  };

  const confirmMood = async (moodId) => {
    if (selectedMood !== '') {
      const timestamp = new Date().toISOString();
      await addMoodEntryToDB({ mood: parseInt(moodId), user_id: user.id, timestamp });
    }
  };
</script>

<main class="max-w-screen-md mx-auto mt-10 p-6">
  <h1 class="text-2xl font-bold mb-4 text-center">How are you feeling today?</h1>
  <div class="flex flex-wrap justify-center">
    {#each Object.keys(moods) as moodId}
      <div
        class={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 cursor-pointer p-4 m-2 border-rounded ${
          selectedMood === moodId ? 'border-black' : 'bg-orange-200'
        }`}
        on:click={() => selectMood(moodId)}
      >
        <img
          class="h-auto max-w-xs md:max-w-lg rounded-lg mx-auto"
          src={moods[moodId].image}
          alt={`${moods[moodId].description} emoji`}
        />
        <div class="mt-2 text-center">{moods[moodId].description}</div>
      </div>
    {/each}
  </div>
  {#if selectedMood !== ''}
  <p class="mt-4 text-center">You selected mood:<b>{selectedMood}</b></p>
  <div class="flex justify-center">
 <button class="mt-2 bg-orange-200 text-black p-2 rounded  hover:text-white" on:click={() => confirmMood(Object.keys(moods).find(key => moods[key].description === selectedMood))}>Confirm Mood</button>
  </div>
{/if}

</main>
