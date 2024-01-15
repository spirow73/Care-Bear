<!-- App.svelte -->

<script>
	let happyExercise = [
    {
        title: "Outdoor Jogging",
        description: [
            "Take a joyful jog in a nearby park or around your neighborhood.",
            "Focus on your breathing and let the rhythmic movement clear your mind of stress.",
            "Listen to uplifting music or an engaging podcast to make your jog more enjoyable.",
            "Set achievable goals for your jog, such as reaching a specific distance or completing intervals.",
            "Use this time to disconnect from screens and immerse yourself in the natural surroundings."
        ]
    },
    {
        title: "Swimming Session",
        description: [
            "Dive into a pool or the ocean for a refreshing and happy swim.",
            "Opt for a mix of strokes to engage different muscle groups and promote relaxation.",
            "Practice mindful breathing in the water to enhance the calming effects of swimming.",
            "Consider joining a water aerobics class for a social and stress-relieving workout.",
            "Appreciate the sensation of weightlessness in the water as it eases tension in your body."
        ]
    },
    {
        title: "Rock Climbing",
        description: [
            "Try indoor or outdoor rock climbing for a thrilling and physically engaging experience.",
            "Focus on each climb as a metaphor for overcoming challenges in your life.",
            "Engage in bouldering for a more intense and problem-solving aspect of rock climbing.",
            "Join a climbing group or take a class to combine the activity with a social element.",
            "Celebrate your achievements, whether reaching a new height or completing a challenging route."
        ]
    },
    {
        title: "Rollerblading Fun",
        description: [
            "Glide through your surroundings on rollerblades, embracing the feeling of freedom.",
            "Rollerblade in a scenic location, enjoying the sights as you cruise.",
            "Invite friends to join you for a rollerblading adventure for added enjoyment.",
            "Incorporate playful moves and turns to make your rollerblading session more enjoyable.",
            "Appreciate the wind in your hair and the sense of motion to alleviate stress."
        ]
    },
    {
        title: "Ultimate Frisbee",
        description: [
            "Gather friends for a game of Ultimate Frisbee, combining teamwork and enjoyment.",
            "Focus on the friendly competition and teamwork aspects to distract from stressors.",
            "Engage in quick sprints and agile movements, which can be energizing and stress-relieving.",
            "Encourage a positive and supportive atmosphere among players to enhance the experience.",
            "Celebrate each successful throw and catch to foster a sense of accomplishment."
        ]
    },
    {
        title: "Picnic and Outdoor Games",
        description: [
            "Have a picnic in the park and engage in outdoor games like badminton or bocce.",
            "Organize a friendly tournament to add a playful competitive element to your picnic.",
            "Bring healthy and delicious snacks to fuel your energy during the outdoor games.",
            "Take breaks between games to relax, enjoy the scenery, and socialize with friends.",
            "Capture the moments with photos to create lasting memories of your stress-relieving day."
        ]
    },
    {
        title: "Nature Walk and Bird Watching",
        description: [
            "Go for a leisurely nature walk and enjoy bird watching as you stroll.",
            "Bring binoculars to get a closer look at different bird species and their behaviors.",
            "Practice mindful walking by focusing on each step and the sounds of nature around you.",
            "Use bird watching as a meditative activity to shift your focus away from stress.",
            "Learn about local birds and their habitats to deepen your connection with nature."
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
    <h1 class="text-4xl font-bold">Happy</h1>
    <p class="text-lg">Find calmness and inner peace</p>
  </header>

  <!-- Main Content -->
  <main class="container mx-auto my-8">
    <!-- Breathing Techniques -->
    <section>
      <h2 class="text-2xl font-bold mb-4"> Techniques To Help Out Your Mood</h2>
      <div class="bg-slate-300 p-8 rounded-lg">
      {#each happyExercise as { title, description }}
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