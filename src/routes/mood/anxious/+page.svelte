<!-- App.svelte -->

<script>
	let anxiousExercise = [

        {
        title: 'Consult a Professional',
        description: [
            "If anxiety persists and significantly impacts your daily life, it's important to recognize the need for professional assistance.",
            "Identify and research mental health professionals, such as psychologists, psychiatrists, or therapists, in your area.",
            "Ensure that the professional has the necessary credentials and specializes in anxiety or related mental health issues.",
            "Ask for referrals from friends, family, or your primary care physician to find trusted professionals..",
            "Contact the chosen professional to schedule an initial appointment or consultation.",
            "Before the appointment, prepare a list of concerns, symptoms, and any relevant information about your anxiety.",
            "During the appointment, be open and honest about your experiences, feelings, and challenges related to anxiety..",
            "Work collaboratively with the professional to develop a personalized treatment plan, which may include therapy, medication, or a combination of approaches.",
          
        ]
    },
        
    {
        title: "Read a Comforting Book",
        description: [
 
            "Choose a genre that brings you comfort, whether it's fiction, non-fiction, self-help, or a familiar favorite.",
            "Find a quiet and comfortable place to read where you can relax without distractions.",
            "Set the mood with soft lighting, a cozy blanket, and perhaps a warm beverage.",
            "Opt for a book by an author whose writing style and stories you find soothing and familiar.",
            "Play soft background music or ambient sounds to enhance the reading experience.",
            "Turn off notifications on your phone or other devices to minimize interruptions.",
            "Allow yourself to read at a pace that feels comfortable, savoring each word and sentence.",
            "Connect emotionally with the content; immerse yourself in the story or absorb the wisdom from non-fiction.",
            "Pause occasionally to reflect on the material, allowing its messages to resonate with you on a deeper level."



            
        ]
    },
    {
        title: "Connect with Loved Ones",
        description: [
          "Recognize friends or family members who offer support and understanding.",
         "Decide whether to connect in person, through a phone call, video call, or messaging.",
         "Allocate specific time to connect, ensuring you have a focused and uninterrupted conversation.",
         "Share your thoughts and feelings openly, allowing for a genuine and authentic conversation.",
         "Actively listen to the responses and experiences of your loved ones, fostering a two-way conversation.",
         "Minimize distractions during the conversation to maintain a meaningful connection.",
         "Discuss positive and uplifting experiences to create a positive atmosphere.",
         "If needed, seek comfort and advice from your loved ones to alleviate anxiety.",
         "Conclude the conversation by expressing gratitude for their support and connection, reinforcing positive connections."

        ]
    },
    {
        title: "Watch a Feel-Good Movie",
        description: [
            "Select a movie known for its positive and uplifting themes. Look for genres like comedy, romance, or family films.",
            "Think about your personal preferences and what type of movie brings you joy. It could be a classic favorite or something new.",
            "Set up a comfortable and cozy environment with cushions, blankets, and dim lighting to enhance the viewing experience..",
            "Make or gather some snacks like popcorn, chocolate, or your favorite comfort food to enjoy during the movie..",
            "Silence your phone and minimize any potential distractions to fully immerse yourself in the movie.",
            "Allow yourself to become engrossed in the storyline, characters, and positive messages conveyed by the film.",
            "Embrace the moments of humor, warmth, or inspiration in the movie, and let yourself laugh and relax.",
            "Reflect on the movie's themes and messages, and consider how they relate to your own life.",

        ]
    },
    {
        title: "Practice Affirmations",
        description: [
         "Affirmations are positive statements about yourself, your abilities, or your life. Identify areas where you seek positivity and encouragement.",
        "Tailor affirmations to address your specific needs, goals, or challenges. Make them resonate with your personal aspirations.",
        "Phrase affirmations in the present tense as if they are already true. This helps shift your mindset and create a sense of immediacy.",
         "While affirmations are positive, ensure they remain realistic and achievable. Believability is crucial for their effectiveness.",  
         "Repeat affirmations regularly, such as daily or multiple times per day. This helps reinforce their message and impact your mindset.",
           "Frame affirmations with positive and empowering language. Avoid negative terms to maintain an optimistic focus.",
           "Write down affirmations to make them more tangible and concrete. This also helps you remember them and refer to them as needed.",
              "Say affirmations aloud to hear them and internalize their message. This can be especially helpful when you need a confidence boost.",

        ]
    },
    {
        title: "Use a Stress Ball",
        description: [
       "Stress balls are small, squeezable objects designed to be held in the hand, providing a physical outlet for stress and tension.",
            "Squeezing a stress ball engages the muscles in the hand and forearm, helping to release physical tension and promote relaxation.",
            "The act of squeezing and releasing a stress ball mimics a stress reduction technique, helping to redirect nervous energy and focus the mind.",
            "Repeated squeezing and releasing of the stress ball can have a calming and rhythmic effect, promoting a sense of control and stability..",
            "Using a stress ball fosters a connection between the mind and body, encouraging mindfulness and a break from anxious thoughts.",
            
        ]
    },
    {
        title: "Disconnect from Technology",
        description: [
            "Allocate specific times during the day to disconnect from electronic devices",
            "Designate certain areas, such as bedrooms or dining areas, as tech-free zones to promote relaxation.",
            "Disable non-essential notifications on your devices to reduce interruptions.",
            "Dedicate a day or part of a day to a complete digital detox, avoiding phones, computers, and other electronic devices.",
            "Instead of relying on your phone for wake-up alarms, use a traditional alarm clock to start your day without screen exposure.",
            "Engage in activities that don't involve screens, such as reading a physical book, going for a walk, or practicing a hobby.",
            "When spending time with others, focus on being present without constant phone checking or digital distractions.",
            "Establish clear boundaries for when work-related devices should be turned off to maintain work-life balance.",
            "Take note of how disconnecting from technology impacts your mood, stress levels, and overall well-being",
            "Adjust your habits based on these observations."
        ]
    },
   
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
    <h1 class="text-4xl font-bold">Anxious</h1>
    <p class="text-lg">Find calmness and inner peace</p>
  </header>

  <!-- Main Content -->
  <main class="container mx-auto my-8">
    <!-- Breathing Techniques -->
    <section>
      <h2 class="text-2xl font-bold mb-4"> Techniques To Improve Out Your Mood</h2>
      <div class="bg-slate-300 p-8 rounded-lg">
      {#each anxiousExercise as { title, description }}
        <div class="bg-white rounded-lg shadow-md p-6 mb-8" on:click={() => toggleDescription(title)}>
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
