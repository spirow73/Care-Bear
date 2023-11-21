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
  
  <main class="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-md">
    <h1 class="text-2xl font-bold mb-4">How are you feeling today?</h1>
    <div class="flex">
      <div
        class="{ 'cursor-pointer p-4 m-2 border rounded bg-blue-200': selectedMood === 'happy', 'cursor-pointer p-4 m-2 border rounded bg-gray-200': selectedMood !== 'happy' }"
        on:click={() => selectMood('happy')}
      >
        Happy
      </div>
      <div
        class="{ 'cursor-pointer p-4 m-2 border rounded bg-blue-200': selectedMood === 'sad', 'cursor-pointer p-4 m-2 border rounded bg-gray-200': selectedMood !== 'sad' }"
        on:click={() => selectMood('sad')}
      >
        Sad
      </div>
      <div
        class="{ 'cursor-pointer p-4 m-2 border rounded bg-blue-200': selectedMood === 'stressed', 'cursor-pointer p-4 m-2 border rounded bg-gray-200': selectedMood !== 'stressed' }"
        on:click={() => selectMood('stressed')}
      >
        Stressed
      </div>
    </div>
    {#if selectedMood !== ""}
      <p class="mt-4">You selected: {selectedMood}</p>
    {/if}
  </main>
  