<!-- App.svelte -->

<script>
	let meditationTechniques = [
		{
			title: 'Mindful Breathing',
			description: [
				'Focus on your breath, inhaling and exhaling slowly and mindfully.',
				'Start by finding a comfortable seated position. You can sit on a chair with your feet flat on the floor or cross-legged on a cushion..',
				'Keep your back straight but not rigid. This allows for easy and natural breathing',
				'Rest your hands on your knees or in your lap.',
				'Close your eyes or lower your gaze.',
				'Bring your attention to your breath. Notice each inhale and exhale. Observe the rise and fall of your belly as you breathe.',
				'If your mind wanders, gently bring your attention back to your breath.',
				'Continue to focus on your breath for 5 to 10 minutes, or longer if you prefer.'
			],
			videoUrl: 'https://www.youtube.com/embed/1ZYbU82GVz4?si=HPVuuz5uaIDVooLu'
		},
		{
			title: 'Body Scan Meditation',
			description: [
				'Start by lying down on your back in a comfortable and quiet space. You can use a yoga mat or lie directly on a carpeted floor.',
				'Close your eyes to eliminate visual distractions and promote inward focus',
				'Begin by taking a few deep breaths. Inhale slowly through your nose, allowing your abdomen to rise, and exhale gently through your mouth',
				'As you scan each body part, bring a gentle awareness to any areas of tension or discomfort. Imagine your breath flowing into those areas, releasing tension with each exhale',
				"If your mind starts to wander, gently guide it back to the body part you're focusing on. The goal is to stay present in the sensations of each moment.",
				"There's no rush. Take your time with each body part, and if you notice areas of tension, try to soften and release it with your breath.",
				'Conclude the body scan by bringing your attention to your body as a whole. Feel the sensations of your entire body at once.',
				"When you're ready to end the meditation, slowly become aware of your surroundings. Begin to move your fingers and toes, and when you feel ready, open your eyes"
			],
			videoUrl: 'https://www.youtube.com/embed/lE6RYpe9IT0?si=8qxVW9OnfYfv5ZMC'
		},
		{
			title: 'Loving-Kindness Meditation',
			description: [
				'Begin by finding a comfortable seated position. You can sit on a cushion or chair with your back straight and your hands resting on your lap',
				'Take a few deep breaths to center yourself. Inhale slowly through your nose, allowing your chest and abdomen to rise, and exhale gently through your mouth',
				'Start by directing loving-kindness towards yourself. Repeat in your mind or aloud phrases such as',
				'May I be happy.',
				'May I be healthy.',
				'May I be safe.',
				'May I live with ease.',
				'Broaden your loving-kindness to include all living beings. You can use phrases like',
				'May all beings be happy.',
				'May all beings be healthy.',
				'May all beings be safe.',
				'May all beings live with ease.',
				'Continue repeating the phrases, allowing the feelings of loving-kindness to deepen. Feel the warmth and compassion in your heart as you extend these wishes to yourself and others.'
			],
			videoUrl: 'https://www.youtube.com/embed/lFcSrYw-ARY?si=SKopuvqTHO0Vmv-N'
		},
		{
			title: 'Guided Visualization',
			description: [
				"Choose a quiet and comfortable space where you won't be disturbed.",
				'Sit or lie down in a relaxed position. Close your eyes and take a few deep breaths to center yourself.',
				'Picture yourself in a tranquil and beautiful place. It could be a beach, a forest, a meadow, or any location that brings you a sense of peace.',
				'As you visualize this place, engage your senses. Notice the colors around you, the sounds of nature, and any fragrances in the air.',
				'Take a mental stroll through this peaceful place. Notice the details—the texture of the ground beneath you, the temperature of the air, and the gentle breeze',
				'As you explore this peaceful environment, let go of any tension or stress. Imagine it dissolving away with each breath you take.',
				'If your mind starts to wander, gently bring your focus back to the present moment and the visualization.',
				"When you're ready, slowly bring your awareness back to the present. Wiggle your fingers and toes, and open your eyes."
			],
			videoUrl: 'https://www.youtube.com/embed/eWLVBP3VrO4?si=FpUyBW9959ID1Y1B'
		},
		{
			title: 'Mantra Meditation',
			description: [
				'Select a word or phrase that holds personal significance for you. It could be a traditional mantra like OM or a word that represents qualities you want to cultivate, such as LOVE or PEACE.',
				'Sit in a comfortable and upright position. You can sit on a chair with your feet flat on the ground or cross-legged on a cushion. Keep your spine straight to allow for easy breathing.',
				'Close your eyes gently to minimize external distractions and turn your focus inward.',
				'Inhale deeply through your nose, and exhale slowly through your mouth. This helps to relax your body and prepare your mind for meditation.',
				"Repeat your mantra silently or aloud. If you're using a traditional mantra, you can synchronize it with your breath. For example, you can say OM on the inhale and OM on the exhale.",
				'If your mind starts to wander, gently bring your attention back to your mantra.',
				'Continue repeating your mantra for 5 to 10 minutes, or longer if you prefer.',
				"When you're ready to end the meditation, slowly become aware of your surroundings. Begin to move your fingers and toes, and when you feel ready, open your eyes.",
				'Take a few deep breaths to center yourself before returning to your day.'
			],
			videoUrl: 'https://www.youtube.com/embed/QZbuj3RJcjI?si=LXnep4T8JPeQ1gbu'
		},
		{
			title: 'Walking Meditation',
			description: [
				'Choose a quiet and relatively secluded area for your walking meditation. It could be indoors or outdoors, depending on your preference',
				'Begin by standing still with your feet hip-width apart. Take a few deep breaths to center yourself. Feel the connection between your feet and the ground.',
				'Adopt a comfortable yet upright posture. Relax your shoulders, and let your arms hang naturally by your sides.',
				'Begin to walk at a slower pace than usual. Be mindful of each step you take. Pay attention to the motion and sensations in your legs and feet.',
				'Coordinate your breath with your steps. For example, take one step with each inhale and one step with each exhale. This helps synchronize your breath and movement.',
				'As you walk, bring your full attention to the experience. Notice the sensation of your feet lifting, moving, and making contact with the ground. Be present with each step',
				'Allow your awareness to expand to your surroundings. Notice the sights, sounds, and smells as you walk. Engage your senses fully.',
				'If your mind starts to wander or gets caught up in thoughts, gently bring your focus back to the sensation of walking and breathing. Use the act of walking as an anchor for your attention',
				"If you're in a confined space, you can walk in a simple loop, turning around mindfully at the end of each path. If you're outdoors, choose a path that allows for a continuous, mindful walk.",
				'Continue walking meditation for 5 to 10 minutes, or longer if you prefer.',
				"When you're ready to end the meditation, slowly become aware of your surroundings. Begin to move your fingers and toes, and when you feel ready, open your eyes."
			],
			videoUrl: 'https://www.youtube.com/embed/Kad5ZP0unoY?si=TsNpMI25r5UhAlw9'
		},

		{
			title: 'Progressive Muscle Relaxation',
			description: [
				"Choose a quiet and comfortable space where you won't be disturbed.",
				'Sit in a comfortable chair with your feet flat on the floor, or lie down on your back. Close your eyes if it feels comfortable for you.',
				' Take a few deep breaths to center yourself. Inhale slowly through your nose, allowing your chest and abdomen to rise, and exhale gently through your mouth.',
				'Bring your attention to your body. Notice any areas of tension or discomfort.',
				'Begin to tense the muscles in your feet and toes. Hold for a few seconds, and then release. Notice the difference between the tension and relaxation.',
				'Continue to tense and release each muscle group in your body, working your way up from your feet to your head. You can use the following sequence:',
				'Sit in a comfortable chair with your feet flat on the floor, or lie down on your back. Close your eyes if it feels comfortable for you.',
				'Shrug your shoulders towards your ears, holding the tension, and then let them drop, releasing the tension.',
				'Gently tilt your head back, feeling the stretch in your neck, and then bring it back to a neutral position. Arch your back slightly, then return to a comfortable position.',
				'Take a moment to focus on your entire body. If there are any residual areas of tension, consciously let go and allow your body to relax completely.',
				'Spend a few moments breathing deeply and enjoying the overall sense of relaxation in your body.',
				"When you're ready to end the meditation, slowly become aware of your surroundings. Begin to move your fingers and toes, and when you feel ready, open your eyes."
			],
			videoUrl: 'https://www.youtube.com/embed/RaF0fZKMiJ4?si=DqSCms-anEo8HKXm'
		},
		{
			title: 'Breath Counting Meditation',
			description: [
				"Choose a quiet and comfortable space where you won't be disturbed.",
				'Sit in a comfortable position with your back straight. You can sit on a chair with your feet flat on the floor or cross-legged on a cushion.',
				'Close your eyes gently to minimize external distractions.',
				'Inhale deeply through your nose, allowing your lungs to fill with air. Exhale slowly through your mouth, releasing any tension. Repeat a few times to settle into the practice.',
				'Allow your breath to return to its natural rhythm. Observe the sensation of the breath as it enters and leaves your body.',
				'Begin counting your breaths. Inhale, and as you exhale, count one. Inhale again, and as you exhale, count two. Continue counting each exhale until you reach the count of ten.',
				'Once you reach ten, start over at one. If your mind wanders or you lose count, gently bring your focus back to the breath and start counting again from one. ',
				"Pay attention to the sensation of the breath—whether it's the coolness of the inhale, the warmth of the exhale, or the rise and fall of your chest or abdomen.",
				'If your mind starts to wander or if you become distracted by thoughts, gently acknowledge it, and without judgment, bring your attention back to the breath and the counting.',
				'Practice breath counting meditation for a predetermined amount of time, such as 5 to 10 minutes. Set a timer if needed.',
				"When you're ready to finish, allow your awareness to expand to your surroundings. Take a few deep breaths, and gently open your eyes."
			],
			videoUrl: 'https://www.youtube.com/embed/y8NDRElMWwk?si=KKuJskMlZpwXLGDq'
		},
		{
			title: 'Chakra Meditation',
			description: [
				"Choose a quiet and comfortable place where you won't be disturbed. Sit or lie down in a relaxed position.",
				'Close your eyes and take a few deep breaths to relax your body. Release any tension you may be holding in your muscles.',
				'Imagine roots extending from the base of your spine, connecting you to the Earth. Feel a sense of stability and grounding.',
				'Begin at the base of your spine and visualize each chakra one by one, starting with the Root Chakra and moving upward to the Crown Chakra.',
				'Root Chakra (Muladhara): Located at the base of the spine, associated with grounding and stability. Visualize a red spinning wheel of energy.',
				'Sacral Chakra (Svadhisthana): Located in the lower abdomen, associated with creativity and emotions. Visualize an orange spinning wheel of energy.',
				'Solar Plexus Chakra (Manipura): Located in the upper abdomen, associated with personal power and confidence. Visualize a yellow spinning wheel of energy.',
				'Heart Chakra (Anahata): Located in the center of the chest, associated with love and compassion. Visualize a green spinning wheel of energy.',
				'Throat Chakra (Vishuddha): Located in the throat, associated with communication and self-expression. Visualize a blue spinning wheel of energy',
				'Third Eye Chakra (Ajna): Located between the eyebrows, associated with intuition and insight. Visualize an indigo spinning wheel of energy.',
				'Crown Chakra (Sahasrara): Located at the top of the head, associated with spiritual connection. Visualize a violet or white spinning wheel of energy.',
				'As you focus on each chakra, imagine the energy flowing freely and evenly. Visualize any blockages or negativity being released and washed away.',
				'For each chakra, you can use positive affirmations related to the qualities associated with that energy center. Repeat these affirmations silently or aloud.',
				'Once you have focused on all seven chakras, take a few moments to simply sit in stillness, feeling the overall balance and harmony in your energy centers.'
			],
			videoUrl: 'https://www.youtube.com/embed/y8NDRElMWwk?si=KKuJskMlZpwXLGDq'
		}
		// Add more meditation techniques
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
	<h1 class="text-4xl font-bold">Meditation</h1>
	<p class="text-lg">Find calmness and inner peace</p>
  </header>

  <!-- Main Content -->
  <main class="container mx-auto my-8">
	<!-- Breathing Techniques -->
	<section>
	  <h2 class="text-2xl font-bold mb-4">Meditation Techniques</h2>
	  <div class="bg-slate-300 p-8 rounded-lg">
	  {#each meditationTechniques as { title, description }}
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