<!-- App.svelte -->

<script>
	let sadExercise = [
    {
        mood: 'Sad',
        title: 'Brisk Walking or Jogging:',
        description: [
            'Take a brisk walk or go for a jog in a nearby park or nature trail. The combination of fresh air, sunlight, and physical movement can help release endorphins, the body\'s natural mood lifters.',
            'Focus on the rhythmic pattern of your steps and the sounds of nature to create a meditative experience.',
            'Consider listening to uplifting music or a motivating podcast during your walk or jog.',
            'Invite a friend to join you for a walk or run, combining exercise with social interaction.',
            'Set small goals for distance or pace to create a sense of accomplishment.'
        ]
    },
    {
        mood: 'Sad',
        title: 'Dance',
        description: [
            'Put on your favorite music and dance to your heart\'s content. Dancing is a fun and effective way to boost your mood and increase energy levels.',
            'Experiment with different dance styles, from energetic and upbeat to slow and expressive.',
            'Dance in front of a mirror and allow yourself to express your emotions through movement.',
            'Join a dance class, either in-person or online, to learn new moves and connect with others.',
            'Create themed dance playlists for different moods to enhance the dance experience.'
        ]
    },
    {
        mood: 'Sad',
        title: 'Group Exercise Classes',
        description: [
            'Join a group exercise class at your local gym or community center. The social atmosphere and group energy can be motivating and energizing.',
            'Explore different classes such as yoga, spinning, or aerobics to find one that suits your preferences.',
            'Make friends in the class and schedule regular workout sessions together.',
            'Set personal fitness goals and celebrate achievements with your exercise class community.',
            'Engage in post-class social activities to further strengthen connections.'
        ]
    },
    {
        mood: 'Sad',
        title: 'Play Sports',
        description: [
            'Engage in a friendly game of basketball, tennis, or soccer with friends or family. The competitive nature of sports can be energizing and fun.',
            'Organize a weekly sports meetup to maintain a consistent exercise routine and socialize.',
            'Join a local sports league to meet new people with similar interests.',
            'Focus on the enjoyment of the game rather than the outcome to reduce stress and boost mood.',
            'Celebrate victories and improvements, no matter how small, with your sports team.'
        ]
    },
    {
        mood: 'Sad',
        title: 'Outdoor Activities',
        description: [
            'Spend time outdoors engaging in activities like gardening, hiking, or biking. The combination of fresh air and physical activity can boost energy levels and improve mood.',
            'Create a small garden space and enjoy the therapeutic benefits of planting and nurturing plants.',
            'Choose scenic hiking trails to make the experience more enjoyable and visually appealing.',
            'Bring a friend or family member along for outdoor activities to enhance social interaction.',
            'Capture the beauty of nature with photography during your outdoor excursions.'
        ]
    },
    {
        mood: 'Sad',
        title: 'Hiking',
        description: [
            'Explore a local hiking trail or nature park. The combination of fresh air, sunlight, and physical activity can boost energy levels and improve mood.',
            'Pack a picnic and make a day of your hiking adventure to combine exercise with leisure.',
            'Practice mindfulness during your hike by focusing on the sights, sounds, and sensations of nature.',
            'Hike with a pet for companionship and additional motivation.',
            'Set goals to conquer more challenging trails as your fitness level improves.'
        ]
    },
    {
        mood: 'Sad',
        title: 'Swimming',
        description: [
            'Go for a swim at your local pool or beach. Swimming is a low-impact exercise that can boost energy levels and improve mood.',
            'Experiment with different swimming strokes to keep the activity interesting.',
            'Incorporate water aerobics or water jogging for a full-body workout.',
            'Join a community swim club or class to meet others who share a love for swimming.',
            'Combine swimming with relaxation by taking short breaks to float or tread water.'
        ]
    }
    // Add more activities with descriptions as needed
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
    <h1 class="text-4xl font-bold">Sad</h1>
    <p class="text-lg">Find calmness and inner peace</p>
  </header>

  <!-- Main Content -->
  <main class="container mx-auto my-8">
    <!-- Breathing Techniques -->
    <section>
      <h2 class="text-2xl font-bold mb-4"> Techniques To Help Out Your Mood</h2>
      <div class="bg-slate-300 p-8 rounded-lg">
      {#each sadExercise as { title, description }}
        <div class="bg-white rounded-lg shadow-md p-6 mb-8" on:click={() => toggleDescription(title)}>
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