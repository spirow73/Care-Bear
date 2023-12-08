<script>
    const stressManagementTechniques = [
        {
      title: 'Deep Breathing and Relaxation Techniques',
      description: `Engage in deep breathing exercises, progressive muscle relaxation, or mindfulness meditation. These practices activate the body's relaxation response, reducing stress hormones. \n
            - **Deep Breathing**: Find a comfortable, quiet place. Sit or lie down. Inhale deeply through your nose, letting your belly expand, hold for a few seconds, then exhale slowly through your mouth. Repeat this for several minutes. \n
            - **Progressive Muscle Relaxation**: Start by tensing and relaxing each muscle group, focusing on sensations as you release tension. You can find guided scripts online to assist. \n
            - **Mindfulness Meditation**: Start with short sessions, even just a few minutes a day. Focus on your breath, gently returning your attention if it wanders. Apps like Headspace or Calm offer guided meditations.`,
    },
    {
      title: 'Regular Exercise',
      description: `Participate in physical activities like walking, jogging, swimming, or yoga regularly. Exercise helps reduce stress hormones and promotes the release of endorphins, which elevate mood. \n
            - **Types of Exercise**: Choose activities you enjoy and can realistically incorporate into your routine. Consider starting with shorter sessions and gradually increasing duration or intensity. \n
            - **Consistency**: Don’t pressure yourself with a rigid schedule. Aim for regular movement rather than perfection. Even brief walks or stretching breaks can make a difference.`,
    },

    {
      title: 'Healthy Lifestyle',
      description: `Maintain a balanced diet, ensure adequate sleep, and limit caffeine and alcohol intake. A well-nourished body copes better with stress. \n
            - **Balanced Diet**: Include a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats in your meals. Limit processed foods and sugars. \n
            - **Sleep Hygiene**: Create a calming bedtime routine, minimize screen time before bed, and ensure a comfortable sleep environment. Aim for 7-9 hours of sleep per night.`,
    },
    {
      title: 'Social Support',
      description: `Build relationships and seek support from friends, family, or support groups. Social connections provide comfort, advice, and a sense of belonging, reducing stress. \n
            - **Connect Regularly**: Make an effort to reach out and spend time with loved ones, even if it’s just for a quick chat. Share your feelings and be open to listening to others. \n
            - **Support Groups**: Consider joining local or online groups focused on shared interests or concerns. It can be reassuring to connect with others facing similar challenges.`,
    },
    {
      title: 'Time Management',
      description: `Organize tasks, set realistic goals, and break tasks into smaller steps. Effective time management helps prevent feeling overwhelmed and reduces stress. \n
            - **Prioritize Tasks**: Use lists or apps to prioritize tasks. Tackle the most important tasks first and break larger tasks into smaller, manageable steps. \n
            - **Learn to Delegate**: Don’t hesitate to ask for help when needed. Delegating tasks can reduce your workload and stress levels.`,
    },
    {
      title: 'Mindfulness and Mind-Body Practices',
      description: `Practice activities like yoga, tai chi, or meditation. These practices combine physical movement, breathwork, and mindfulness, promoting relaxation and stress reduction. \n
            - **Start Slowly**: If you’re new to these practices, begin with short sessions and gradually increase duration or complexity. Focus on the process rather than perfection. \n
            - **Mindful Breathing**: Incorporate mindfulness into daily activities by focusing on your breath during routine tasks or moments of stress.`,
    },
    {
      title: 'Limit Stressors',
      description: `Identify stress triggers and try to limit exposure to them when possible. Set boundaries, say no to extra commitments, and manage stressors effectively. \n
            - **Identify Triggers**: Keep a journal to track situations or people that consistently stress you. Once identified, brainstorm ways to minimize exposure. \n
            - **Set Boundaries**: Learn to say no when necessary and create boundaries to protect your mental and emotional well-being.`,
    },
    {
      title: 'Cognitive Techniques',
      description: `Reframe stressful situations and focus on solutions. Challenge negative thoughts, adopt a positive mindset, and engage in problem-solving strategies. \n
            - **Mindfulness of Thoughts**: Notice negative thought patterns and challenge them. Ask yourself if there’s evidence against these thoughts or if there’s a more balanced perspective. \n
            - **Problem-Solving**: Break problems into smaller steps and brainstorm solutions. Focus on what you can control and take small, actionable steps.`,
    },
    {
      title: 'Hobbies and Relaxation',
      description: `Engage in activities you enjoy regularly. Pursuing hobbies and relaxation techniques can provide a sense of accomplishment and reduce stress levels. \n
            - **Schedule Time**: Prioritize time for activities you love, whether it’s reading, painting, gardening, or playing an instrument. \n
            - **Mindful Engagement**: Fully immerse yourself in these activities. Focus on the present moment and let go of worries or stressors.`,
    },
    {
      title: 'Professional Help',
      description: `If stress becomes overwhelming or chronic, seek help from a mental health professional. Therapists can provide effective strategies and support tailored to your situation. \n
            - **Recognizing the Need**: Don’t hesitate to seek help if stress feels unmanageable or persists despite your efforts. \n
            - **Therapeutic Support**: Therapists offer a safe space to explore stressors, coping strategies, and provide tools to manage stress effectively.`,
    }
  ];

  function formatDescription(description) {
    const boldRegex = /\*\*(.*?)\*\*/g;
    return description.split('\n').map((line) => {
      return line.replace(boldRegex, '<strong>$1</strong>');
    }).join('<br>');
  }
  
  let active = null;

  function toggleActive(index) {
    active === index ? (active = null) : (active = index);
  }
  </script>
  
  <style>
    .card {
      @apply border border-gray-300 p-4 rounded-lg;
    }
  
    .card.active {
      @apply bg-blue-100; /* Add a different background color for active cards */
    }
  
    .title {
      @apply font-bold text-xl mb-2;
    }
  
    .description {
      @apply font-normal;
    }
  
    .list-item {
      @apply font-bold;
    }
  </style>
  
  <div class="flex items-center justify-center min-h-screen">
    <div class="max-w-lg p-6 bg-white shadow-lg rounded-lg">
      <h1 class="text-3xl font-bold mb-8 text-center">Stress Reduction Advice</h1>
  
      <div class="space-y-6">
        {#each stressManagementTechniques as advice, index (advice.title)}
          <div class="{`card ${active === index && 'active'}`}" on:click={() => toggleActive(index)}>
            <h2 class="title">{advice.title}</h2>
            {#if active === index}
              <p class="description" style="white-space: pre-line">{@html formatDescription(advice.description)}</p>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </div>