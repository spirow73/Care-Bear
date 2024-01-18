<!-- App.svelte -->

<script>
	let stressedExercise = [
    {
        title: "Nature Walks:",
        description: [
            "A slow, mindful walk in a natural setting can have both physical and mental health benefits.",
            "Immerse yourself in the sights, sounds, and scents of nature to promote relaxation.",
            "Focus on the sensation of each step, allowing your mind to be present in the moment.",
            "Take deep breaths and appreciate the beauty of your surroundings during your nature walk.",
            "Consider incorporating mindfulness techniques, such as observing the colors and textures around you."
        ]
    },
    {
        title: "Gardening: ",
        description: [
            "Engaging in gardening activities, such as digging, planting, and weeding, can be a therapeutic way to connect with nature.",
            "Feel the soil in your hands and enjoy the tactile experience of working with plants.",
            "Create a personalized garden space that reflects your preferences and brings you joy.",
            "Take breaks to observe the growth of your plants and appreciate the natural cycle of life.",
            "Consider growing herbs or flowers with pleasant fragrances to enhance the sensory experience."
        ]
    },
    {
        title: "Zumba: ",
        description: [
            "Dance-based fitness classes like Zumba can be a fun and energetic way to relieve stress.",
            "Let loose and express yourself through dynamic dance movements and music.",
            "Join a Zumba class with friends to add a social component to your workout routine.",
            "Focus on the joy of movement rather than perfection, and allow yourself to have fun.",
            "Zumba can be a great way to improve cardiovascular health while enjoying lively music."
        ]
    },
    {
        title: "Play with Pets:",
        description: [
            "Activities like playing fetch with a dog or spending time with other pets can be both joyful and stress-reducing.",
            "Engaging in playful activities with pets can boost your mood and provide a sense of companionship.",
            "Consider exploring new outdoor spaces with your pet for added physical activity.",
            "The unconditional love and excitement of pets can create a positive and uplifting atmosphere.",
            "Regular interactions with pets have been shown to reduce stress hormones and promote relaxation."
        ]
    },
    {
        title: "Play an Instrument: ",
        description: [
            "While not a traditional exercise, playing music can be a great way to relax and reduce stress.",
            "Express your emotions through playing an instrument, creating a therapeutic outlet.",
            "Experiment with different genres of music to find what resonates most with your mood.",
            "Consider joining a music group or band to enhance the social aspect of playing an instrument.",
            "Playing an instrument can serve as a mindful activity, requiring focus and concentration."
        ]
    },
    {
        title: "Play a Sport:",
        description: [
            "Engage in sports like tennis, basketball, or soccer to combine physical activity with social interaction.",
            "Participating in team sports fosters a sense of camaraderie and teamwork.",
            "Choose a sport that you enjoy, making the exercise feel like a recreational activity.",
            "Set achievable goals in your chosen sport to enhance motivation and a sense of accomplishment.",
            "Sports provide an excellent outlet for stress as the focus shifts to the game and physical performance."
        ]
    },
    {
        title: "Boxing:",
        description: [
            "Whether using a heavy bag or participating in a class, boxing can be a powerful way to release stress and tension.",
            "Channel your stress into controlled and purposeful boxing movements.",
            "Incorporate boxing workouts into your routine for both physical and mental conditioning.",
            "Consider taking a boxing class to learn proper techniques and engage in a supportive community.",
            "Boxing can serve as a powerful form of self-expression, allowing you to release pent-up energy and frustration."
        ]
    }
]



let selectedTitle = null;

const toggleDescription = (title) => {
  selectedTitle = selectedTitle === title ? null : title;
};
</script>

<div class="bg-cover bg-center" style="background-image: url('https://img.freepik.com/premium-photo/dreamy-ocean-coast-summer_360074-15698.jpg');">
<div class="bg-gray-100 font-sans min-h-screen">
  <!-- Header -->
  <header class="bg-orange-200 text-black text-center py-4">
    <h1 class="text-4xl font-bold">Stressed</h1>
    <p class="text-lg">Find calmness and inner peace</p>
  </header>

  <!-- Main Content -->
  <main class="container mx-auto my-8">
    <!-- Breathing Techniques -->
    <section>
      <h2 class="text-2xl font-bold mb-4"> Techniques To Help Out Your Mood</h2>
      <div class="bg-slate-300 p-8 rounded-lg">
      {#each stressedExercise as { title, description }}
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