<script>
  import { onMount, setContext } from 'svelte';

  
   const moodActivities = [
    
      {

       mood:'depressed',
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
      mood:'depressed',
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
      mood:'depressed',
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
      mood:'depressed',
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
      mood:'depressed',
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
      mood:'depressed',
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
      mood:'depressed',
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
      mood:'depressed',
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
  },
  {
      mood:'happy',
      title: "Outdoor Jogging:",
      description: [
          "Take a joyful jog in a nearby park or around your neighborhood.",
          "Focus on your breathing and let the rhythmic movement clear your mind of stress.",
          "Listen to uplifting music or an engaging podcast to make your jog more enjoyable.",
          "Set achievable goals for your jog, such as reaching a specific distance or completing intervals.",
          "Use this time to disconnect from screens and immerse yourself in the natural surroundings."
      ]
  },
  {
      mood:'happy',
      title: "Swimming Session:",
      description: [
          "Dive into a pool or the ocean for a refreshing and happy swim.",
          "Opt for a mix of strokes to engage different muscle groups and promote relaxation.",
          "Practice mindful breathing in the water to enhance the calming effects of swimming.",
          "Consider joining a water aerobics class for a social and stress-relieving workout.",
          "Appreciate the sensation of weightlessness in the water as it eases tension in your body."
      ]
  },
  {
      mood:'happy',
      title: "Rock Climbing:",
      description: [
          "Try indoor or outdoor rock climbing for a thrilling and physically engaging experience.",
          "Focus on each climb as a metaphor for overcoming challenges in your life.",
          "Engage in bouldering for a more intense and problem-solving aspect of rock climbing.",
          "Join a climbing group or take a class to combine the activity with a social element.",
          "Celebrate your achievements, whether reaching a new height or completing a challenging route."
      ]
  },
  {
      mood:'happy',
      title: "Rollerblading Fun:",
      description: [
          "Glide through your surroundings on rollerblades, embracing the feeling of freedom.",
          "Rollerblade in a scenic location, enjoying the sights as you cruise.",
          "Invite friends to join you for a rollerblading adventure for added enjoyment.",
          "Incorporate playful moves and turns to make your rollerblading session more enjoyable.",
          "Appreciate the wind in your hair and the sense of motion to alleviate stress."
      ]
  },
  {
      mood:'happy',
      title: "Ultimate Frisbee:",
      description: [
          "Gather friends for a game of Ultimate Frisbee, combining teamwork and enjoyment.",
          "Focus on the friendly competition and teamwork aspects to distract from stressors.",
          "Engage in quick sprints and agile movements, which can be energizing and stress-relieving.",
          "Encourage a positive and supportive atmosphere among players to enhance the experience.",
          "Celebrate each successful throw and catch to foster a sense of accomplishment."
      ]
  },
  {
      mood:'happy',
      title: "Picnic and Outdoor Games:",
      description: [
          "Have a picnic in the park and engage in outdoor games like badminton or bocce.",
          "Organize a friendly tournament to add a playful competitive element to your picnic.",
          "Bring healthy and delicious snacks to fuel your energy during the outdoor games.",
          "Take breaks between games to relax, enjoy the scenery, and socialize with friends.",
          "Capture the moments with photos to create lasting memories of your stress-relieving day."
      ]
  },
  {
      mood:'happy',
      title: "Nature Walk and Bird Watching:",
      description: [
          "Go for a leisurely nature walk and enjoy bird watching as you stroll.",
          "Bring binoculars to get a closer look at different bird species and their behaviors.",
          "Practice mindful walking by focusing on each step and the sounds of nature around you.",
          "Use bird watching as a meditative activity to shift your focus away from stress.",
          "Learn about local birds and their habitats to deepen your connection with nature."
      ]
  },
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
      title: 'Dance:',
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
  },
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
  },
  {
        mood:'stressed',
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
        mood:'stressed',
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
        mood:'stressed',
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
        mood:'stressed',
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
        mood:'stressed',
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
        mood:'stressed',
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
        mood:'stressed',
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

let sortedMoodActivities = [];
  let activeMood = null;
  let activeMoodType = null;

  function toggleActive(mood, moodType) {
    if (activeMood === mood && activeMoodType === moodType) {
      activeMood = null;
      activeMoodType = null;
    } else {
      activeMood = mood;
      activeMoodType = moodType;
    }
  }

  function formatDescription(description) {
    const boldRegex = /\*\*(.*?)\*\*/g;
    return description.split('\n').map((line) => {
      return line.replace(boldRegex, '<strong>$1</strong>');
    }).join('<br>');
  }

  onMount(() => {
    // Extract all unique moods
    const allMoods = [...new Set(moodActivities.map(item => item.mood))];
    
    // Group mood types by their associated mood
    sortedMoodActivities = allMoods.map(mood => {
      return {
        mood,
        moodTypes: moodActivities.filter(activity => activity.mood === mood),
        
      };
    });
    
  });
</script>

<style>
  .card {
    @apply border border-gray-300 p-4 rounded-lg cursor-pointer;
  }

  .card.active {
    @apply bg-blue-100; 
  }

  .title {
    @apply font-bold text-xl mb-2 cursor-pointer;
  }

  .description {
    @apply font-normal;
  }
</style>

<div class="flex items-center justify-center min-h-screen">
  <div class="max-w-lg p-6 bg-white shadow-lg rounded-lg">
    <h1 class="text-3xl font-bold mb-8 text-center">Mood Activities</h1>
    {#each sortedMoodActivities as { mood, moodTypes }}
      <div class="card">
        <h2 class="title" on:click={() => toggleActive(mood, null)}>{mood}</h2>
        {#if activeMood === mood}
          {#each moodTypes as { title, description }}
            <div class="card" on:click={() => toggleActive(mood, title)}>
              <h3 class="title">{title}</h3>
              {#if activeMoodType === title}
                <p class="description" style="white-space: pre-line">{@html formatDescription(description)}</p>
              {/if}
            </div>
          {/each}
        {/if}
      </div>
    {/each}
  </div>
</div>