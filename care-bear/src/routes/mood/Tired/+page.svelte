<!-- App.svelte -->

<script>
	let tiredExercise = [

  {
			name: 'Wall Sit',
			infor:
				'A wall sit is a simple but effective static exercise that primarily targets the muscles in your lower body, especially the quadriceps, hamstrings, and glutes.',
			videoUrl: 'https://www.youtube.com/embed/n6ZfqLbtF5M?si=YHKkfjpOvLMc5z_I'
		},
    {
			name: 'Balance Exercise',
			infor:
				'Work on your balance with exercises like standing on one leg or heel-to-toe walking',
        

			videoUrl: 'https://www.youtube.com/embed/k-xtL7NO0fw?si=ft7fzu-qvDHI8kN0'
		},
    {
      
        mood: 'Tired',
        title: 'Yoga',
        description: [
            'Practice gentle yoga poses or a short yoga sequence to improve flexibility, release tension, and increase energy flow.',
            'Focus on controlled breathing to enhance the mind-body connection and promote relaxation.',
            'Experiment with different yoga styles, such as Hatha or Vinyasa, to find what suits your energy levels.',
            'Use yoga props like blocks or straps to assist in maintaining proper form and prevent strain.',
            'Consider following online yoga classes or apps for guided sessions tailored to your fatigue level.'
        ]
    },
    {
        mood: 'Tired',
        title: 'Reading',
        description: [
            'Choose a book in a genre that captivates your interest, providing an escape from daily stressors.',
            'Set aside a dedicated time for reading, creating a peaceful ritual to unwind before bedtime.',
            'Explore audiobooks for a different sensory experience, allowing you to "read" while engaged in other activities.',
            'Create a cozy reading nook with comfortable seating, good lighting, and your favorite book accessories.',
            'Join a book club or online reading community to share thoughts and recommendations with fellow readers.'
        ]
    },
    {
        mood: 'Tired',
        title: 'Take a Shower or Bath',
        description: [
            'Adjust water temperature to your preference, opting for a warm bath to relax muscles or a cool shower for a refreshing sensation.',
            'Enhance the experience with scented shower gels or bath salts, choosing calming fragrances like lavender or chamomile.',
            'Incorporate gentle exfoliation into your routine to promote skin health and invigorate your senses.',
            'Practice mindfulness in the shower, focusing on the sensation of water and the sound of it cascading.',
            'Consider adding soothing background music or nature sounds to create a spa-like atmosphere.'
        ]
    },
    {
        mood: 'Tired',
        title: 'Visualization',
        description: [
            'Find a quiet space and sit or lie down in a comfortable position to minimize distractions.',
            'Visualize a specific location that brings you joy, such as a beach, forest, or mountainside.',
            'Engage multiple senses by imagining the sounds, smells, and textures of your chosen peaceful place.',
            'Use visualization to set positive intentions or envision achieving your goals for an added motivational boost.',
            'Combine visualization with deep breathing to enhance relaxation and focus on the present moment.'
        ]
    },
    {
        mood: 'Tired',
        title: 'Play with a Pet',
        description: [
            'Engage in interactive games with your pet, such as fetch or hide-and-seek, to promote physical activity for both of you.',
            'Take your pet for a leisurely stroll outdoors to enjoy the benefits of fresh air and natural surroundings.',
            'Cuddle with your pet, as physical touch can release oxytocin, a hormone associated with bonding and stress reduction.',
            'Use pet toys or puzzles to stimulate their mind, fostering a sense of playfulness and energy.',
            'Capture joyful moments with your pet through photos or videos to cherish and revisit during low-energy times.'
        ]
    },
    {
        mood: 'Tired',
        title: 'Powerful Sniff',
        description: [
            'Experiment with a variety of essential oils to discover scents that invigorate and uplift your mood.',
            'Use a diffuser to disperse essential oils into the air, creating a pleasant and energizing atmosphere.',
            'Carry a small vial of your favorite energizing scent to inhale whenever you need a quick pick-me-up.',
            'Combine aromatherapy with relaxation techniques, such as deep breathing, to enhance its calming effects.',
            'Explore the benefits of aromatherapy blends designed specifically for combating fatigue and boosting alertness.'
        ]
    },
    {
        mood: 'Tired',
        title: 'Expressive Writing',
        description: [
            'Allocate dedicated time for expressive writing, allowing yourself the freedom to explore thoughts and emotions without judgment.',
            'Experiment with different writing prompts or guided journals to spark creativity and self-reflection.',
            'Use expressive writing as a tool for problem-solving, gaining insights into challenges, and generating potential solutions.',
            'Consider sharing your writing with a trusted friend or keeping it private, depending on your comfort level.',
            'Establish a consistent writing routine to harness the therapeutic benefits of self-expression and emotional release.'
        ]
    }
    // Add more activities with descriptions as needed
];

let selectedTitle = null;

const toggleDescription = (title) => {
  selectedTitle = selectedTitle === title ? null : title;
};
</script>

<div class="bg-gray-100 font-sans min-h-screen">
<!-- Header -->
<header class="bg-orange-200 text-black text-center py-8">
  <h1 class="text-4xl font-bold">TIRED </h1>
  <p class="text-lg">Reduce stress and find inner peace</p>
</header>

<!-- Main Content -->
<main class="container mx-auto my-5">
  <!-- Yoga Activities List -->
  <section class="grid gap-5 md:grid-cols-2">
    {#each tiredExercise.slice(0, 2) as { name, infor, videoUrl }}
      <div class="bg-white rounded-lg overflow-hidden shadow-md">
        <div class="aspect-w-16 aspect-h-9">
          <iframe src={videoUrl} frameborder="0" allowfullscreen class="w-full h-full" />
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold mb-2">{name}</h3>
          <p class="text-gray-700">{infor}</p>
        </div>
      </div>
    {/each}
  </section>

  <!-- Tired Techniques -->
  <section class="mt-14">
    <h2 class="text-2xl font-bold mb-4">Techniques To Help Out Your Mood</h2>
    <div class="bg-slate-300 p-8 rounded-lg">
    {#each tiredExercise.slice(2) as { title, description }}
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

<div class="bg-cover bg-center" style="background-image: url('https://img.freepik.com/premium-photo/dreamy-ocean-coast-summer_360074-15698.jpg');">
<div class="bg-gray-100 font-sans min-h-screen">

  <!-- Main Content -->
  <main class="container mx-auto my-8">
    <!-- Additional content for the "Tired" section -->
  </main>
</div>
</div>