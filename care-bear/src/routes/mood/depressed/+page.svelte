<!-- App.svelte -->

<script>
	let depressedExercise = [

        {
        title: 'Reach Out to a Friend',
        description: [
            'Connect with a trusted friend or family member. Share your feelings and allow them to provide support and perspective.',
            'Prioritize open communication and honesty in your conversations to foster a deeper connection.',
            'Schedule regular check-ins with friends to maintain a strong support network.',
            'Engage in active listening during conversations, ensuring that both parties feel heard and understood.',
            'Consider joining social or interest-based groups to expand your circle of supportive connections.'
        ]
    },
        
    {
        title: "Dance Therapy",
        description: [
            "Dance to your favorite music, expressing yourself through movement.",
            "Immerse yourself in the rhythm, letting the music elevate your mood.",
            "Try incorporating spontaneous movements and freestyle dancing for added joy.",
            "Invite friends or family to join a dance party, fostering a sense of togetherness.",
            "Create themed dance playlists to match your mood and make each session unique.",
            "Experiment with dance styles you haven't tried before for a diverse and enjoyable experience.",
            "Capture moments of your dance sessions on video to relive and share the positive energy.",
            "Use dance as a celebration of personal victories or milestones, expressing happiness.",
            "Join local dance classes or workshops to learn new moves and connect with a community.",
            "Combine dance with gratitude by reflecting on positive aspects of your life while dancing."
        ]
    },
    {
        title: "Tai Chi",
        description: [
            "Practice Tai Chi, a gentle martial art that promotes relaxation and balance.",
            "Immerse yourself in the flowing movements, fostering a sense of tranquility.",
            "Perform Tai Chi outdoors to connect with nature and enhance the uplifting experience.",
            "Use Tai Chi as a moving meditation, focusing on the present moment and positive intentions.",
            "Incorporate deep and rhythmic breathing to enhance the mind-body connection.",
            "Try Tai Chi sequences that emphasize joy and positivity, lifting your spirits.",
            "Share the benefits of Tai Chi with friends or family by practicing together.",
            "Create a peaceful Tai Chi space at home, enhancing the environment for relaxation.",
            "Explore Tai Chi forms that emphasize happiness and positive energy.",
            "Combine Tai Chi with uplifting music to amplify the positive impact on your mood."
        ]
    },
    {
        title: "Hiking",
        description: [
            "Take a nature hike, enjoying the calming effects of being outdoors.",
            "Choose scenic trails with vibrant colors and natural beauty for a visually uplifting experience.",
            "Practice mindful walking, appreciating each step and the serenity of the surroundings.",
            "Invite friends for a group hike, fostering a sense of camaraderie and shared joy.",
            "Bring a camera to capture moments of beauty and create a visual diary of happiness.",
            "Plan a picnic at the end of your hike, combining outdoor activity with a delightful meal.",
            "Explore sunrise or sunset hikes, connecting with the changing colors of the sky.",
            "Engage in wildlife observation during your hikes, connecting with the natural world.",
            "Celebrate personal achievements or milestones by treating yourself to a special hike.",
            "Include moments of laughter and lightheartedness during your hiking adventures."
        ]
    },
    {
        title: "Functional Fitness Exercises",
        description: [
            "Incorporate exercises that mimic everyday movements for functional fitness.",
            "Focus on activities that bring joy, combining fitness with a positive experience.",
            "Include dynamic and playful movements to make your exercise routine enjoyable.",
            "Turn functional exercises into a game, adding an element of fun to your workouts.",
            "Create a personalized workout playlist with upbeat music to enhance your mood.",
            "Perform functional exercises in a beautiful outdoor setting to boost your happiness.",
            "Invite friends or family to join your functional fitness routine, making it a shared activity.",
            "Explore bodyweight exercises that engage multiple muscle groups, maximizing enjoyment.",
            "Set fitness goals that align with your passions, turning exercise into a source of fulfillment.",
            "Incorporate mindful movements into your functional exercises, enhancing the mind-body connection."
        ]
    },
    {
        title: "Trampoline Park",
        description: [
            "Visit a trampoline park for a fun and energetic bouncing session.",
            "Release your inner child by trying playful and acrobatic movements on the trampoline.",
            "Organize a group outing to the trampoline park for shared laughter and enjoyment.",
            "Experiment with jumping routines set to your favorite upbeat music for added joy.",
            "Participate in trampoline fitness classes, combining exercise with a lively atmosphere.",
            "Explore trampoline games like dodgeball or basketball, adding a social component to your visit.",
            "Document your trampoline adventures with photos or videos to cherish the happy moments.",
            "Celebrate personal victories or milestones with a visit to the trampoline park.",
            "Discover new trampoline tricks or techniques, turning your visit into a learning experience.",
            "Schedule regular trampoline sessions to incorporate joy into your fitness routine."
        ]
    },
    {
        title: "Cycling in Nature",
        description: [
            "Explore scenic trails on a bike to combine exercise with natural beauty.",
            "Cycle through lush landscapes, taking in the sights and sounds of the outdoors.",
            "Plan cycling routes that lead to joyful destinations, such as parks or scenic viewpoints.",
            "Invite friends for a group cycling adventure, creating shared memories of happiness.",
            "Use cycling as a mode of transportation for errands, infusing joy into everyday activities.",
            "Include moments of gratitude during your cycling journeys, appreciating the beauty around you.",
            "Embrace the feeling of freedom and liberation as you cycle through open spaces.",
            "Join cycling events or races, turning your passion for cycling into a celebratory experience.",
            "Cycle during sunrise or sunset, enhancing the experience with the beauty of changing light.",
            "Decorate your bike with vibrant colors or accessories, adding an element of fun to your rides."
        ]
    },
    {
        title: "Mindful Weightlifting",
        description: [
            "Practice mindful weightlifting, focusing on the sensations of each movement.",
            "Choose uplifting and motivating music to enhance your weightlifting sessions.",
            "Celebrate achievements and progress during your weightlifting journey, fostering joy.",
            "Share your weightlifting routine with friends or a workout buddy, adding a social element.",
            "Experiment with different weightlifting techniques or variations to keep it engaging.",
            "Turn weightlifting into a mindful ritual, setting positive intentions before each session.",
            "Create a dedicated and aesthetically pleasing workout space to uplift your mood.",
            "Incorporate playful elements into your weightlifting routine, turning it into a joyful activity.",
            "Combine weightlifting with visualization exercises, imagining positive outcomes.",
            "Celebrate personal records or milestones with a sense of accomplishment and joy."
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
    <h1 class="text-4xl font-bold">Depressed</h1>
    <p class="text-lg">Find calmness and inner peace</p>
  </header>

  <!-- Main Content -->
  <main class="container mx-auto my-8">
    <!-- Breathing Techniques -->
    <section>
      <h2 class="text-2xl font-bold mb-4"> Techniques To Improve Out Your Mood</h2>
      <div class="bg-slate-300 p-8 rounded-lg">
      {#each depressedExercise as { title, description }}
        <div class="bg-white rounded-lg shadow-md p-6 mb-8"on:click={() => toggleDescription(title)}>
          <h3 class="text-xl font-bold mb-2" >
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
