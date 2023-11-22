<!-- App.svelte -->

<script>
  let meditationTechniques = [
    {
      title: "Mindful Breathing",
      description:
      [
        "Focus on your breath, inhaling and exhaling slowly and mindfully.",
        "Start by finding a comfortable seated position. You can sit on a chair with your feet flat on the floor or cross-legged on a cushion..",
        "Keep your back straight but not rigid. This allows for easy and natural breathing",
        "Rest your hands on your knees or in your lap.",
        "Close your eyes or lower your gaze.",
        "Bring your attention to your breath. Notice each inhale and exhale. Observe the rise and fall of your belly as you breathe.",
        "If your mind wanders, gently bring your attention back to your breath.",
        "Continue to focus on your breath for 5 to 10 minutes, or longer if you prefer.",
        
      ],
      videoUrl: "https://www.youtube.com/embed/1ZYbU82GVz4?si=HPVuuz5uaIDVooLu",
    },
    {
      title: "Body Scan Meditation",
      description: [
        "Start by lying down on your back in a comfortable and quiet space. You can use a yoga mat or lie directly on a carpeted floor.",
        "Close your eyes to eliminate visual distractions and promote inward focus",
        "Begin by taking a few deep breaths. Inhale slowly through your nose, allowing your abdomen to rise, and exhale gently through your mouth",
        "As you scan each body part, bring a gentle awareness to any areas of tension or discomfort. Imagine your breath flowing into those areas, releasing tension with each exhale",
        "If your mind starts to wander, gently guide it back to the body part you're focusing on. The goal is to stay present in the sensations of each moment.",
        "There's no rush. Take your time with each body part, and if you notice areas of tension, try to soften and release it with your breath.",
        "Conclude the body scan by bringing your attention to your body as a whole. Feel the sensations of your entire body at once.",
        "When you're ready to end the meditation, slowly become aware of your surroundings. Begin to move your fingers and toes, and when you feel ready, open your eyes",
      ],
      videoUrl: "https://www.youtube.com/embed/lE6RYpe9IT0?si=8qxVW9OnfYfv5ZMC",
    },
    {
      title: "Loving-Kindness Meditation",
      description:
      [
        "Begin by finding a comfortable seated position. You can sit on a cushion or chair with your back straight and your hands resting on your lap",
        "Take a few deep breaths to center yourself. Inhale slowly through your nose, allowing your chest and abdomen to rise, and exhale gently through your mouth",
        "Start by directing loving-kindness towards yourself. Repeat in your mind or aloud phrases such as",
        "May I be happy.",
        "May I be healthy.",
        "May I be safe.",
        "May I live with ease.",
        "Broaden your loving-kindness to include all living beings. You can use phrases like",
        "May all beings be happy.",
        "May all beings be healthy.",
        "May all beings be safe.",
        "May all beings live with ease.",
        "Continue repeating the phrases, allowing the feelings of loving-kindness to deepen. Feel the warmth and compassion in your heart as you extend these wishes to yourself and others.",
      ],
      videoUrl: "https://www.youtube.com/embed/lFcSrYw-ARY?si=SKopuvqTHO0Vmv-N",
    },
    {
      title: "Guided Visualization",
      description: "Imagine a peaceful place or scenario, engaging all your senses in the visualization.",
      videoUrl:"https://www.youtube.com/embed/eWLVBP3VrO4?si=FpUyBW9959ID1Y1B",
    },
    {
      title: "Mantra Meditation",
      description: "Repeat a calming word or phrase to quiet the mind and enhance focus.",
      videoUrl: "https://www.youtube.com/embed/QZbuj3RJcjI?si=LXnep4T8JPeQ1gbu",
    },
    {
      title: "Walking Meditation",
      description: "Practice mindfulness while walking, paying attention to each step and your surroundings.",
      videoUrl:"https://www.youtube.com/embed/Kad5ZP0unoY?si=TsNpMI25r5UhAlw9",
    },
    {
      title: "Body-Mind Connection",
      description: "Focus on the connection between your mind and body, promoting relaxation.",
      videoUrl:"https://www.youtube.com/embed/NzhFPZIqqm4?si=DKZET_TuGh6_PdLs",
    },
    {
      title: "Progressive Muscle Relaxation",
      description: "Systematically tense and then release different muscle groups to induce relaxation.",
      videoUrl: "https://www.youtube.com/embed/RaF0fZKMiJ4?si=DqSCms-anEo8HKXm",
    },
    {
      title: "Breath Counting Meditation",
      description: "Count your breaths to bring awareness to the present moment and calm the mind.",
      videoUrl: "https://www.youtube.com/embed/y8NDRElMWwk?si=KKuJskMlZpwXLGDq",
    },
    {
      title: "Chakra Meditation",
      description: "Focus on energy centers in the body (chakras) to balance and harmonize your energy.",
      videoUrl: "https://www.youtube.com/embed/DZhNgVyIrHw&si",
    },
    // Add more meditation techniques
  ];
</script>



<div class="bg-gray-100 font-sans min-h-screen">

  <!-- Header -->
  <header class="bg-blue-500 text-white text-center py-4">
    <h1 class="text-4xl font-bold">Meditation Techniques</h1>
    <p class="text-lg">Find calmness and inner peace</p>
  </header>

  <!-- Main Content -->
  <main class="container mx-auto my-8">

    <!-- Meditation Techniques -->
    <section>
      <h2 class="text-2xl font-bold mb-4">Meditation Techniques</h2>
      {#each meditationTechniques as { title, description, videoUrl }}
        <div class="flex mb-8">
          <div class="w-3/4 pr-4">
            <h3 class="text-xl font-bold mb-2">{title}</h3>
            {#each description as step (index)}
              <p class="text-gray-700 mb-2">{step}</p>
            {/each}
          </div>
          <div class="w-1/4">
            <div class="aspect-w-16 aspect-h-9">
              <iframe src={videoUrl} frameborder="0" allowfullscreen class="w-full h-full"></iframe>
            </div>
          </div>
        </div>
      {/each}
    </section>

  </main>

  <!-- Footer -->
  <footer class="bg-gray-200 text-gray-700 text-center py-4">
    <p>&copy; 2023 Meditation Techniques. All rights reserved.</p>
  </footer>

</div>
