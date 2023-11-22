<!-- MoodActivitiesPage.svelte -->

<script>
  let selectedActivity = "";

  function selectActivity(activity) {
    selectedActivity = activity;
  }

  function goToSelectedActivity() {
    if (selectedActivity) {
      window.location.href = `/activity/${selectedActivity.toLowerCase()}`;
    }
  }
</script>

<style>
  /* Add your Svelte styles here */
</style>

<main class="max-w-md mt-10 p-6 text-center">
  <h1 class="text-2xl font-bold mb-4">Choose a Mood Activity</h1>
  <div class="flex justify-center">
    <div
      class="{ 'cursor-pointer p-4 m-2 border rounded ' + (selectedActivity === 'yoga' ? 'bg-blue-500' : 'bg-gray-500') }"
      on:click={() => selectActivity('yoga')}
    >
      Yoga
    </div>
    <div
      class="{ 'cursor-pointer p-4 m-2 border rounded ' + (selectedActivity === 'meditation' ? 'bg-blue-800' : 'bg-gray-500') }"
      on:click={() => selectActivity('meditation')}
    >
      Meditation
    </div>
    <div
      class="{ 'cursor-pointer p-4 m-2 border rounded ' + (selectedActivity === 'calm-music' ? 'bg-green-500' : 'bg-gray-500') }"
      on:click={() => selectActivity('calm-music')}
    >
      Calm Music
    </div>
  </div>
  {#if selectedActivity !== ""}
    <p class="mt-4">You selected: {selectedActivity}</p>
    <button on:click={goToSelectedActivity} class="mt-2 bg-blue-500 text-white p-2 rounded cursor-pointer">
      Go to {selectedActivity}
    </button>
  {/if}
</main>
