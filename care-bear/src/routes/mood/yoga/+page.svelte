<!-- YogaPage.svelte -->

<script>
    let yogaActivities = [
      {
        name: 'Mountain Pose',
        description: 'Stand with your feet together, arms by your sides, and weight evenly distributed. Lift your arms overhead with palms facing each other.',
        videoUrl: 'https://www.youtube.com/embed/NYhH8Gr35cI?si=Ct4ZYGBbkzn0fMnc'
      },
      {
        name: 'Downward Facing Dog',
        description: 'Start on your hands and knees, lift your hips towards the ceiling, straighten your legs, and press your heels into the floor.',
        videoUrl: 'https://www.youtube.com/embed/j97SSGsnCAQ?si=VrMKP3ZcJ6wl1wuB'
      },
      // Add more yoga activities as needed
    ];
  </script>
  
  <div class="bg-gray-100 font-sans min-h-screen">
  
    <!-- Header -->
    <header class="bg-blue-500 text-white text-center py-4">
      <h1 class="text-4xl font-bold">Yoga for Relaxation</h1>
      <p class="text-lg">Reduce stress and find inner peace</p>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto my-8">
  
      <!-- Yoga Activities List -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Yoga Activities</h2>
        <ul>
          {#each yogaActivities as { name, description, videoUrl }}
            <li class="mb-4 pt-9">
              <h3 class="text-xl font-bold mb-2">{name}</h3>
              <p class="text-gray-700">{description}</p>
              <div class="aspect-w-16 aspect-h-9">
                <iframe src={videoUrl} frameborder="0" allowfullscreen class="w-full h-full"></iframe>
              </div>
            </li>
          {/each}
        </ul>
      </section>
  
      <!-- Instructions -->
      <section>
        <h2 class="text-2xl font-bold mb-4">How to Perform Yoga Exercises</h2>
        <p class="text-gray-700">
          Follow these general instructions to make the most out of your yoga practice:
        </p>
        <ul class="list-disc pl-4">
          <li class="mb-2">Find a quiet and comfortable space.</li>
          <li class="mb-2">Use a yoga mat for added comfort.</li>
          <li class="mb-2">Breathe deeply and mindfully throughout each pose.</li>
          <li class="mb-2">Listen to your body and modify poses as needed.</li>
          <li class="mb-2">Stay consistent with your practice for best results.</li>
        </ul>
      </section>
  
    </main>
  
    <!-- Footer -->
    <footer class="bg-gray-200 text-gray-700 text-center py-4">
      <p>&copy; 2023 Yoga for Relaxation. All rights reserved.</p>
    </footer>
  
  </div>
  