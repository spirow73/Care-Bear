<!-- YourPage.svelte -->
<script>
	import MoodAdder from '$lib/components/mood/MoodAdder.svelte';
	import MoodAdviser from '$lib/components/mood/MoodAdviser.svelte';
  
	let selectedMoodFromAdder = '';
  
	const handleConfirmMood = (event) => {
	  selectedMoodFromAdder = event.detail;
	};
  </script>
  
  <body>
	<MoodAdder on:confirmMood={handleConfirmMood} />
	<MoodAdviser {selectedMoodFromAdder} />
  </body>
  
