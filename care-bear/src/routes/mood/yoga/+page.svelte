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
  <header class="bg-orange-200 text-black text-center py-8">
      <h1 class="text-4xl font-bold">Yoga for Relaxation</h1>
      <p class="text-lg">Reduce stress and find inner peace</p>
  </header>

  <!-- Main Content -->
  <main class="container mx-auto my-8">

      <!-- Yoga Activities List -->
      <section class="grid gap-6 md:grid-cols-2">
          {#each yogaActivities as { name, description, videoUrl }}
              <div class="bg-white rounded-lg overflow-hidden shadow-md">
                  <div class="aspect-w-16 aspect-h-9">
                      <iframe src={videoUrl} frameborder="0" allowfullscreen class="w-full h-full"></iframe>
                  </div>
                  <div class="p-6">
                      <h3 class="text-xl font-bold mb-2">{name}</h3>
                      <p class="text-gray-700">{description}</p>
                  </div>
              </div>
          {/each}
      </section>

      <!-- Instructions -->
      <section class="mt-12">
        <h2 class="text-2xl font-bold mb-4">How to Perform Yoga Exercises</h2>
        <div class="bg-white rounded-lg p-6 shadow-md">
            <ul class="text-gray-800">
                <li class="mb-4">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="font-semibold">Find a quiet and comfortable space.</span>
                    </div>
                </li>
                <li class="mb-4">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="font-semibold">Use a yoga mat for added comfort.</span>
                    </div>
                </li>
                <li class="mb-4">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="font-semibold">Breathe deeply and mindfully throughout each pose.</span>
                    </div>
                </li>
                <li class="mb-4">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="font-semibold">Listen to your body and modify poses as needed.</span>
                    </div>
                </li>
                <li class="mb-4">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="font-semibold">Stay consistent with your practice for best results.</span>
                    </div>
                </li>
            </ul>
        </div>
    </section>



  </main>

  <!-- Footer -->
  <footer class="bg-gray-200 text-gray-700 text-center py-4">
      <p>&copy; 2023 Yoga for Relaxation. All rights reserved.</p>
  </footer>

</div>
