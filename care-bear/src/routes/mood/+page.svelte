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
  <main class="max-w-md  mt-10 p-6 ">
    <h1 class="text-2xl font-bold mb-4">How are you feeling today?</h1>
    <div class="flex">
      <div
        class="{ 'cursor-pointer p-4 m-2 border rounded ' + (selectedMood === 'happy' ? 'bg-blue-500' : 'bg-gray-500') }"
        on:click={() => selectMood('happy')}
      >
      <img class="h-auto max-w-xs"src="https://web-holidays.com/wp-content/uploads/2020/06/emoji.png" alt="image description">
      
        Happy
      </div>
      <div
        class="{ 'cursor-pointer p-4 m-2 border rounded ' + (selectedMood === 'sad' ? 'bg-blue-800' : 'bg-gray-500') }"
        on:click={() => selectMood('sad')}
      >
      <img class="h-auto max-w-xs ms-auto" src="http://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Icon_-_Sad_Emoji_grande.png?v=1542436016" alt="image description">

        Sad
      </div>
      <div
        class="{ 'cursor-pointer p-4 m-2 border rounded ' + (selectedMood === 'stressed' ? 'bg-blue-900' : 'bg-gray-500') }"
        on:click={() => selectMood('stressed')}
      >
      <img class="h-auto max-w-xl mx-auto" src="https://emoji.gg/assets/emoji/5721_NYOOO.png" alt="image description">

        Stressed
      </div>
    </div>
    {#if selectedMood !== ""}
      <p class="mt-4">You selected: {selectedMood}</p>
    {/if}
  </main>
  