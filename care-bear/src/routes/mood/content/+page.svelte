<!-- App.svelte -->

<script>
	let contentExercise = [

        {
        title: 'Practice Gratitude',
        description: [
           "Take a few minutes each day to reflect on positive aspects of your life.",
           "Write down things you are grateful for, such as your health, family, or friends.",
           "Express gratitude for the people in your life, letting them know how much you appreciate them.",
              "Practice gratitude for the simple things in life, such as a beautiful sunset or a delicious meal.",
                "Reflect on the things you have accomplished, celebrating your achievements and successes.",
                "Practice gratitude for the challenges you have overcome, recognizing your strength and resilience.",
                "Express gratitude for the opportunities in your life, such as a new job or a new relationship.",
                "Establish rituals, such as expressing gratitude before meals or before bedtime, to make it a consistent practice."

        ]
    },
        
    {
        title: "Volunteer for a Cause",
        description: [
             "Reflect on your interests, skills, and passions to find a volunteer opportunity that aligns with them..",
             "Look for local or online organizations that focus on causes you care about.",
             "Browse through volunteer opportunities offered by different organizations to find a good match.",
             "Reach out to the volunteer coordinators of chosen organizations to inquire about available roles.",
             "Attend any orientations or informational sessions offered by the organization to understand their mission and expectations",
             "Begin your volunteer work, staying committed to the agreed-upon schedule and tasks.",
             "Periodically reflect on your volunteering experience to assess its impact on you and the community.",
             "Ask for feedback from the organization to understand how you can improve or contribute more effectively.",


            
        ]
    },
    {
        title: "Explore Local Cafe",
        description: [
          "Look for cafes in your area through online search engines, review websites, or recommendations from friends..",
         "Read reviews and ratings to get an idea of the atmosphere, menu, and overall customer experience.",
         "Identify the type of cafe you prefer, whether it's cozy, trendy, or specializes in a specific type of cuisine or beverage.",
         "Choose a date and time that suits you and your companions, if any, to visit the cafe.",
         "Look for any special offers, events, or promotions the cafe might have during your planned visit.",
         "Head to the cafe at the chosen time, keeping in mind any reservation requirements.",
         "Order your favorite food or beverage, or try something new to add variety to your experience.",
         "If you enjoy the cafe's atmosphere or your order, take a photo to capture the moment and share it with others.",
         "Consider leaving a review online to share your experience and help others discover the cafe."



        ]
    },
    {
        title: "Attend a Mindfulness retreat",
        description: [
            "Look for mindfulness retreats that align with your preferences.",
            "Decide on the location and duration of the retreat based on your availability and comfort level..",
            "Review the accommodations and facilities provided to ensure they meet your needs and preferences.",
            "Check the retreat's cost, including accommodation, meals, and any additional fees.",
            "Follow the registration or application process outlined by the retreat organizers..",
            "Inform friends, family, or colleagues about your absence during the retreat period.",
            "Mentally prepare for the retreat by setting an intention or goal for your experience.",
            "Engage fully in the retreat activities, whether it's meditation, workshops, or mindful walks.",
            "Build connections with fellow retreat participants during communal activities or designated social times.",
            "Embrace the opportunity to deepen your mindfulness practice.",
            "Take the mindfulness practices and insights gained during the retreat into your daily life."
,
        ]
    },
    {
        title: "Take a day trip",
        description: [
            "Gather information about the destination, identify key attractions, and create a day itinerary..",
            "Create a schedule for your blog or vlog to stay consistent and motivated.",
            "Invite friends or family to contribute to your blog or vlog, fostering a sense of togetherness.",
            "Explore different blog or vlog formats to find the one that suits you best.",
            
        ]
    },
    {
        title: "Attend a Festival",
        description: [
            "Clearly define the purpose of your day trip and choose a destination within reasonable travel distance.",
            "Attend a festival or carnival to enjoy the lively atmosphere and festivities.",
            "Stay informed about the weather forecast and any specific conditions that might affect your plans.",
            "Pack essentials such as comfortable clothing, snacks, water, a map, and any specific items for planned activities.",
            "Decide on your mode of transportation, ensuring it aligns with your itinerary and time constraints.",
            "Verify the opening and closing hours of attractions to optimize your time during the day.",
            "Share your itinerary and expected return time with a friend or family member for safety.",
            "Remain open to spontaneity, and immerse yourself in the experience, capturing memories along the way."

            
        ]
    },
    {
        title: "Listen to podcast",
        description: [
            "Download a podcast app or use an online platform such as Spotify, Apple Podcasts, or Google Podcasts.",
            "Browse through different podcast categories to find topics that interest you.",
            "Once you find a podcast you like, subscribe to it to receive new episodes automatically.",
            "If you prefer offline listening, download episodes while connected to Wi-Fi to listen later without using data.",
            "Some platforms allow you to create playlists. Organize your favorite episodes or create themed playlists.",
            "Open the app, select the podcast or episode, and start listening. Enjoy the content at your own pace."
            
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
    <h1 class="text-4xl font-bold">Content</h1>
    <p class="text-lg">Find calmness and inner peace</p>
  </header>

  <!-- Main Content -->
  <main class="container mx-auto my-8">
    <!-- Breathing Techniques -->
    <section>
      <h2 class="text-2xl font-bold mb-4"> Techniques To Improve Out Your Mood</h2>
      <div class="bg-slate-300 p-8 rounded-lg">
      {#each contentExercise as { title, description }}
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
