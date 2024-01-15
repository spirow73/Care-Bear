<!-- App.svelte -->

<script>
	let excitedExercise = [

        {
        title: 'Dance your Favorite Song',
        description: [
            'Dance to your favorite song, expressing yourself through movement.',
            'Immerse yourself in the rhythm, letting the music elevate your mood.',
            'Try incorporating spontaneous movements and freestyle dancing for added joy.',
            'Invite friends or family to join a dance party, fostering a sense of togetherness.',
            'Create themed dance playlists to match your mood and make each session unique.',
            'Experiment with dance styles you haven\'t tried before for a diverse and enjoyable experience.',
            'Capture moments of your dance sessions on video to relive and share the positive energy.',

        ]
    },
        
    {
        title: "Plan a Movie Marathon",
        description: [
            "Plan a movie marathon with your favorite films or TV shows.",
            "Choose uplifting and inspiring movies to boost your mood.",
            "Create a cozy movie-watching space at home, enhancing the environment for relaxation.",
            "Invite friends or family to join your movie marathon, fostering a sense of togetherness.",
            "Prepare a special snack or meal to enjoy during your movie marathon.",
            "Explore new genres or films you haven't seen before for a diverse and enjoyable experience.",
            
        ]
    },
    {
        title: "Visit an Escape Room:",
        description: [
          "Visit an escape room with friends or family for a fun and challenging experience.",
         "Choose an escape room with a theme that interests you, such as a mystery or adventure.",
         "Invite friends or family to join your escape room adventure, fostering a sense of togetherness.",

        ]
    },
    {
        title: "Host a Game Night",
        description: [
            "Host a game night with friends or family for a fun and social experience.",
            "Choose games that you enjoy and that are easy to learn, such as card games or board games.",
            "Invite friends or family to join your game night, fostering a sense of togetherness.",
            "Prepare a special snack or meal to enjoy during your game night.",
            "Explore new games you haven't played before for a diverse and enjoyable experience.",
            "Capture moments of your game night on video to relive and share the positive energy."

        ]
    },
    {
        title: "Start a Blog or Vlog",
        description: [
         "Start a blog or vlog to share your thoughts and experiences with others.",
            "Choose a topic that interests you and that you are passionate about.",
            "Create a schedule for your blog or vlog to stay consistent and motivated.",
            "Invite friends or family to contribute to your blog or vlog, fostering a sense of togetherness.",
            "Explore different blog or vlog formats to find the one that suits you best.",
            
        ]
    },
    {
        title: "Attend a Festival",
        description: [
       "Attend a festival or carnival to enjoy the lively atmosphere and festivities.",
            "Choose a festival that interests you, such as a music festival or cultural festival.",
            "Invite friends or family to join you at the festival, fostering a sense of togetherness.",
            "Capture moments of your festival experience on video to relive and share the positive energy.",
            "Explore different festivals to find the ones that suit you best.",
            
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
        title: "Go to a Theme Park",
        description: [
            "Visit a theme park to enjoy the rides and attractions.",
            "Choose a theme park that interests you, such as a water park or amusement park.",
            "Invite friends or family to join you at the theme park, fostering a sense of togetherness.",
            "Capture moments of your theme park experience on video to relive and share the positive energy.",
            "Explore different theme parks to find the ones that suit you best.",
            "Plan your theme park visit during off-peak hours to avoid crowds and long lines.",
            "Try new rides and attractions to add variety and excitement to your theme park experience.",
            "Enjoy the food and snacks available at the theme park, making the most of your visit.",
            "Take breaks between rides and attractions to rest and recharge, pacing yourself for a full day of fun."
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
    <h1 class="text-4xl font-bold">Excited</h1>
    <p class="text-lg">Find calmness and inner peace</p>
  </header>

  <!-- Main Content -->
  <main class="container mx-auto my-8">
    <!-- Breathing Techniques -->
    <section>
      <h2 class="text-2xl font-bold mb-4"> Techniques To Improve Out Your Mood</h2>
      <div class="bg-slate-300 p-8 rounded-lg">
      {#each excitedExercise as { title, description }}
        <div class="bg-white rounded-lg shadow-md p-6 mb-8"  on:click={() => toggleDescription(title)}>
          <h3 class="text-xl font-bold mb-2">
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
