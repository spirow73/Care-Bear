<!-- MoodPage.svelte -->

<script>
    let selectedMood = "";
  
    function selectMood(mood) {
      selectedMood = mood;
    }
  </script>
  
  <style>
    /* Add your Svelte styles here */
  </style>
  <main class="max-w-md mx-auto mt-10 p-6">
    <h1 class="text-2xl font-bold mb-4">How are you feeling today?</h1>
    <div class="flex">
      <div
        class="{ 'cursor-pointer p-4 m-2 border rounded ' + (selectedMood === 'happy' ? 'bg-blue-500' : 'bg-gray-500') }"
        on:click={() => selectMood('happy')}
      >
      <img class="h-auto max-w-lg rounded-lg" src="https://web-holidays.com/wp-content/uploads/2020/06/emoji.png" alt="image description">
      
        Happy
      </div>
      <div
        class="{ 'cursor-pointer p-4 m-2 border rounded ' + (selectedMood === 'sad' ? 'bg-blue-800' : 'bg-gray-500') }"
        on:click={() => selectMood('sad')}
      >
        Sad
      </div>
      <div
        class="{ 'cursor-pointer p-4 m-2 border rounded ' + (selectedMood === 'stressed' ? 'bg-blue-900' : 'bg-gray-500') }"
        on:click={() => selectMood('stressed')}
      >
        Stressed
      </div>
    </div>
    {#if selectedMood !== ""}
      <p class="mt-4">You selected: {selectedMood}</p>
    {/if}
  </main>
  