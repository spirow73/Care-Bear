<!-- App.svelte -->

<script>
	let upsetExercise = [
    {
        mood: 'Upset',
        title: 'Read Uplifting Quotes or Literature:',
        description: [
            'Explore literature or quotes that inspire and uplift you. Words of wisdom can provide comfort and perspective.',
            'Consider keeping a collection of your favorite quotes for easy access during moments of fatigue.',
            'Reflect on the meaning behind the quotes and how they apply to your own life.',
            'Share your favorite quotes with friends or on social media to spread positivity.',
            'Create a habit of reading uplifting literature as part of your daily routine.'
        ]
    },
    {
        mood: 'Upset',
        title: 'Mindful Walking:',
        description: [
            'Take a slow and mindful walk, paying attention to each step. Focus on your surroundings, the sensation of your feet on the ground, and the rhythm of your breath.',
            'Practice gratitude during your walk by appreciating the beauty of nature and simple pleasures.',
            'Use walking as a form of active meditation, allowing your mind to wander freely without judgment.',
            'Combine mindful walking with deep breathing exercises to enhance relaxation.',
            'Consider walking in a natural setting like a park or beach for added tranquility.'
        ]
    },
    {
        mood: 'Upset',
        title: 'Watch a Comforting Movie or TV Show:',
        description: [
            'Choose a movie or TV show that brings you comfort or makes you laugh. Entertainment can be a great distraction and mood lifter.',
            'Create a designated "feel-good" playlist of movies and shows for quick access.',
            'Schedule regular movie nights as a self-care ritual to unwind and relax.',
            'Explore genres that evoke positive emotions, such as comedy, feel-good dramas, or animated films.',
            'Share your favorite comfort movies with friends or family to create shared moments of joy.'
        ]
    },
    {
        mood: 'Upset',
        title: 'Listen to Soothing Music:',
        description: [
            'Choose calming music or instrumental tracks. Allow the music to create a peaceful atmosphere and soothe your emotions.',
            'Create personalized playlists for different moods, including relaxation, focus, and positivity.',
            'Experiment with genres like classical, ambient, or nature sounds for a serene listening experience.',
            'Combine music with other calming activities like meditation or a warm bath for enhanced relaxation.',
            'Attend live music events or concerts to immerse yourself in a positive and uplifting musical environment.'
        ]
    },
    {
        mood: 'Upset',
        title: 'Reach Out to a Friend:',
        description: [
            'Connect with a trusted friend or family member. Share your feelings and allow them to provide support and perspective.',
            'Prioritize open communication and honesty in your conversations to foster a deeper connection.',
            'Schedule regular check-ins with friends to maintain a strong support network.',
            'Engage in active listening during conversations, ensuring that both parties feel heard and understood.',
            'Consider joining social or interest-based groups to expand your circle of supportive connections.'
        ]
    },
    {
        mood: 'Upset',
        title: 'Cuddle with a Pet:',
        description: [
            'Spend time with a pet if you have one. The companionship and unconditional love of animals can be comforting during difficult times.',
            'Engage in interactive play with your pet to boost both of your moods and create joyful moments.',
            'Take your pet for a leisurely walk to combine the benefits of physical activity and companionship.',
            'Consider adopting a pet if you dont have one, as the presence of animals can have positive effects on mental well-being.',
            'Share your affection and gratitude with your pet, reinforcing the bond between you and promoting a sense of security.'
        ]
    },
    {
        mood: 'Upset',
        title: 'Journaling:',
        description: [
            'Write down your thoughts and emotions in a journal. Expressing your feelings on paper can help you gain clarity and release pent-up emotions.',
            'Establish a consistent journaling routine, whether it is daily reflections or during challenging moments.',
            'Use prompts or writing exercises to inspire creativity and self-discovery in your journal entries.',
            'Reflect on positive experiences and achievements to cultivate a mindset of gratitude.',
            'Consider journaling as a form of self-therapy, allowing you to process emotions and track personal growth over time.'
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
    <h1 class="text-4xl font-bold">Upset</h1>
    <p class="text-lg">Find calmness and inner peace</p>
  </header>

  <!-- Main Content -->
  <main class="container mx-auto my-8">
    <!-- Breathing Techniques -->
    <section>
      <h2 class="text-2xl font-bold mb-4"> Techniques To Help Out Your Mood</h2>
      <div class="bg-slate-300 p-8 rounded-lg">
      {#each upsetExercise as { title, description }}
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
