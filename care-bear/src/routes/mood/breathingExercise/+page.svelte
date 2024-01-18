<!-- App.svelte -->

<script>
	let breathingExercise = [
		{
			title: 'Deep Breathing(Diaphragmatic or Abdominal Breathing)',
			description: [
				'Sit or lie down in a comfortable position',
				'Place one hand on your chest and the other on your abdomen.',
				'Inhale deeply through your nose, allowing your diaphragm to expand and your abdomen to rise.',
				'Exhale slowly through your mouth, letting your abdomen fall.',
				'Focus on making your breaths slow and deep.'
			]
		},
		{
			title: '4-7-8 Breathing',
			description: [
				'Sit or lie down in a comfortable position.',
				'Inhale through your nose for 4 seconds.',
				'Hold your breath for 7 seconds.',
				'Exhale through your mouth for 8 seconds.',
				'Repeat until you feel calm.'
			]
		},
		{
			title: 'Alternate Nostril Breathing (Nadi Shodhana)',
			description: [
				'Sit in a comfortable position with your legs crossed.',
				'Use your right thumb to close off your right nostril and inhale through your left nostril.',
				'Close off your left nostril with your right ring finger, release your right nostril, and exhale',
				'Inhale through the right nostril',
				'Close off the right nostril, release the left nostril, and exhale.',
				'This completes one cycle. Repeat for several cycles.'
			]
		},
		{
			title: 'Resonant Breathing',
			description: [
				'Sit or lie down in a comfortable position.',
				'Inhale for 5 seconds.',
				'Exhale for 5 seconds.',
				'Repeat for several minutes.'
			]
		}
	];
	let selectedTitle = null;

const toggleDescription = (title) => {
  selectedTitle = selectedTitle === title ? null : title;
};
</script>

<div class="bg-cover bg-center" style="background-image: url('https://img.freepik.com/premium-photo/dreamy-ocean-coast-summer_360074-15698.jpg');">
<div class="bg-gray-100 font-sans min-h-screen">
  <!-- Header -->
  <header class="bg-orange-200 text-black text-center py-4">
	<h1 class="text-4xl font-bold">Breathing Exercise</h1>
	<p class="text-lg">Find calmness and inner peace</p>
  </header>

  <!-- Main Content -->
  <main class="container mx-auto my-8">
	<!-- Breathing Techniques -->
	<section>
	  <h2 class="text-2xl font-bold mb-4">Breathing Techniques</h2>
	  <div class="bg-slate-300 p-8 rounded-lg">
	  {#each breathingExercise as { title, description }}
		<div class="bg-white rounded-lg shadow-md p-6 mb-8">
		  <h3 class="text-xl font-bold mb-2" on:click={() => toggleDescription(title)}>
			{title}
		  </h3>
		  {#if selectedTitle === title}
			{#each description as step}
			  <p class="text-gray-700 mb-2">{step}</p>
			{/each}
		  {/if}
		</div>
	  {/each}
	  </div>
	</section>
  </main>
</div>
</div>
