<script>
    import { onMount } from 'svelte';
  
    let recognition;
    let transcript = '';
  
    const startSpeechRecognition = () => {
      transcript = ''; // Clear the transcript when starting a new recognition
      recognition = new webkitSpeechRecognition();
      recognition.lang = 'en-US';
      recognition.continuous = true;
      recognition.interimResults = true; // Enable interim results
  
      let interimTranscript = '';
      let finalTranscript = '';
  
      recognition.onresult = (event) => {
        interimTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          const result = event.results[i];
          const speech = result[0].transcript;
  
          if (result.isFinal) {
            finalTranscript += ' ' + speech;
          } else {
            interimTranscript += ' ' + speech;
          }
        }
  
        // Use final if available, otherwise use interim
        transcript = finalTranscript || (interimTranscript && isLongPause(interimTranscript) ? interimTranscript : '');
      };
  
      recognition.onerror = (event) => {
        console.error('Speech recognition error', event.error);
        recognition.stop();
      };
  
      recognition.onend = () => {
        console.log('Speech recognition ended');
      };
  
      recognition.start();
    };
  
    const stopSpeechRecognition = () => {
      if (recognition) {
        transcript = ''; // Clear the transcript when stopping
        recognition.stop();
      }
    };
  
    const isLongPause = (speech) => {
      // Adjust this threshold as needed
      const pauseThreshold = 1000; // 1 second
      const lastSpeechTime = new Date().getTime();
      return new Date().getTime() - lastSpeechTime > pauseThreshold;
    };
  
    onMount(() => {
      if (!('webkitSpeechRecognition' in window)) {
        alert('Speech recognition is not supported in this browser.');
      }
    });
  </script>
  
  <style>
    /* Include Tailwind CSS classes */
    @import 'tailwindcss/base';
    @import 'tailwindcss/components';
    @import 'tailwindcss/utilities';
  </style>
  
  <div class="p-4">
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      on:click={startSpeechRecognition}
    >
      Start Speech Recognition
    </button>
    <button
      class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 ml-2 rounded"
      on:click={stopSpeechRecognition}
    >
      Stop Speech Recognition
    </button>
    <textarea
      class="mt-4 p-2 w-full border rounded"
      bind:value={transcript}
      placeholder="Real-time Speech-to-Text Translation"
    ></textarea>
  </div>
  