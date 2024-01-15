<!-- App.svelte -->

<script>
	let nuetralExercise = [
		{
			title: 'Take a Break:',
			description: [
				'Recognize the signs of confusion or mental fatigue, and give yourself permission to take a break.',
				'Step away from the task or situation causing confusion, creating physical and mental distance.',
				'Engage in a brief physical activity or stretch to release tension and refresh your mind.',
				'Practice mindfulness or deep breathing exercises to center yourself and alleviate stress.',
				'Take a short walk outside to get fresh air, allowing for a change of scenery and perspective.',
				'Set a timer for a predetermined break duration to ensure you return to the situation with renewed focus.',
				'Listen to calming music or nature sounds to create a soothing environment during your break.',
				'Use the break to enjoy a healthy snack or hydrate, promoting both physical and mental well-being.',
				'Avoid engaging in activities that may add to the confusion; instead, opt for relaxing and rejuvenating actions.',
				'Return to the task or situation with a clearer mind, equipped to tackle challenges with enhanced clarity and confidence.'
			]
		},

		
		{
			title: 'Go for a Drive',
			description: [
				'Escape the routine and clear your mind by embarking on a refreshing drive.',
				'Select a scenic route or destination that appeals to your sense of adventure or relaxation.',
				'Prepare a playlist of your favorite music, creating a personalized soundtrack for the journey.',
				'Drive with the windows down to feel the breeze and connect with the surroundings.',
				'Choose off-peak hours to minimize traffic and enhance the tranquility of the drive.',
				'Allow your thoughts to wander as you enjoy the changing landscapes and open road ahead.',
				'Explore new areas or revisit familiar ones, fostering a sense of exploration and discovery.',
				'Pause at viewpoints or interesting locations to take in the scenery and capture the moment.',
				'Embrace the freedom of the open road, using the drive as an opportunity for solitude and reflection.',
				'Return from the drive with a refreshed perspective and a sense of rejuvenation, ready to face whatever lies ahead.'
			]
		},
		{
			title: 'Play Video Games',
			description: [
				'Indulge in a captivating and immersive gaming experience to unwind and recharge.',
				"Select games that align with your preferences, whether it's action, strategy, adventure, or relaxation-focused genres.",
				'Create a comfortable gaming environment with proper lighting, seating, and gaming accessories.',
				'Set realistic time limits to balance gaming with other responsibilities and activities.',
				'Explore single-player narratives or engage in multiplayer experiences for social connections.',
				"Immerse yourself in the game's storyline, graphics, and gameplay mechanics for maximum enjoyment.",
				'Switch between gaming genres to keep the experience diverse and prevent monotony.',
				'Take breaks during extended gaming sessions to avoid physical strain and maintain focus.',
				'Join online gaming communities or participate in multiplayer modes to connect with fellow gamers.',
				'Reflect on the positive aspects of gaming, such as problem-solving skills, strategic thinking, and entertainment value.'
			]
		},
		{
        title: 'Painting or Drawing',
			description: [
				'Unlock your creativity and express yourself through the artistic endeavors of painting or drawing.',
				'Gather high-quality art supplies, including paints, brushes, canvases, or sketchbooks, to enhance your creative experience.',
				"Choose a subject that inspires you, whether it's a scene from nature, a portrait, or abstract concepts that ignite your imagination.",
				'Experiment with different techniques and styles, allowing yourself the freedom to explore and discover your artistic preferences.',
				'Create a dedicated art space that fosters focus and inspiration, optimizing your creative process.',
				'Immerse yourself in the meditative and therapeutic aspects of the artistic process, letting your mind wander as you create.',
				'Share your creations with others or join art communities to receive feedback, encouragement, and inspiration.',
				'Embrace imperfections and view mistakes as opportunities for growth, fostering a positive and nurturing attitude toward your art.',
				'Reflect on the emotions and thoughts that emerge during your artistic sessions, adding depth and personal meaning to your creations.',
				'Make painting or drawing a consistent practice, allowing your skills to evolve and witnessing the transformative power of self-expression.'
			]
		},
		{
			title: 'Play a Musical Instrument',
			description: [
				'Engage your creativity and soothe your mind by playing a musical instrument of your choice.',
				"Select an instrument that resonates with you, whether it's a guitar, piano, flute, or any other musical device.",
				'Create a dedicated practice space with good lighting and minimal distractions for an immersive musical experience.',
				'Start with beginner-friendly tunes or scales and gradually progress to more complex pieces as your skills improve.',
				'Explore various music genres to broaden your musical repertoire and keep your practice sessions dynamic.',
				'Follow online tutorials, sheet music, or learn by ear to diversify your learning methods and techniques.',
				'Experiment with composing your own music or improvising to unleash your musical creativity.',
				'Share your musical talents with friends or family, fostering a sense of connection through the joy of music.',
				'Embrace the therapeutic benefits of playing an instrument, as it can help reduce stress and elevate your mood.',
				'Make playing a musical instrument a consistent part of your routine, enjoying the endless possibilities for self-expression and musical exploration.'
			]
		},
		{
			title: 'Watch a Documentary:',
			description: [
				'Expand your knowledge and gain new perspectives by immersing yourself in a thought-provoking documentary.',
				'Choose a documentary that aligns with your interests or explores a topic you want to learn more about.',
				'Create a comfortable viewing space with minimal distractions to enhance your documentary-watching experience.',
				'Engage actively with the content by taking notes or discussing key points with others for a deeper understanding.',
				'Explore documentaries across different genres, including history, science, nature, or social issues.',
				"Reflect on the documentary's themes, challenging yourself to consider alternative viewpoints and insights.",
				'Share your thoughts and recommendations with friends or social media, sparking meaningful conversations.',
				'Select documentaries that inspire action or encourage positive changes in your life or community.',
				'Use documentaries as a tool for lifelong learning, continuously exploring diverse subjects and staying informed.',
				'Make watching documentaries a regular habit, combining entertainment with valuable insights and knowledge.'
			]
		},
		{
			title: 'Explore Art Galleries or Museums:',
			description: [
				'Immerse yourself in the rich tapestry of artistic and cultural expression by visiting art galleries or museums.',
				'Research and choose a gallery or museum that showcases artworks or exhibits aligned with your interests.',
				'Set aside sufficient time to fully appreciate the diverse collection, allowing for a leisurely and immersive experience.',
				"Observe each artwork with an open mind, considering the artist's perspective and the historical or cultural context.",
				'Take advantage of guided tours or audio guides to gain deeper insights into the background and significance of each piece.',
				'Engage with interactive exhibits or installations, fostering a more personal and interactive connection with the art.',
				'Capture the moment by taking photos or sketching, allowing you to revisit and reflect on your favorite pieces later.',
				'Attend special events, lectures, or workshops offered by the gallery or museum to enhance your understanding of the exhibits.',
				'Share your experience with friends or fellow art enthusiasts, discussing your favorite artworks and the emotions they evoke.',
				'Make exploring art galleries and museums a recurring activity, fostering a continual appreciation for the diverse world of artistic expression.'
			]
		}
	];

	let selectedTitle = null;

	const toggleDescription = (title) => {
		selectedTitle = selectedTitle === title ? null : title;
	};
</script>

<div
	class="bg-cover bg-center"
	style="background-image: url('https://img.freepik.com/premium-photo/dreamy-ocean-coast-summer_360074-15698.jpg');"
>
	<div class="bg-gray-100 font-sans min-h-screen">
		<!-- Header -->
		<header class="bg-orange-200 text-black text-center py-4">
			<h1 class="text-4xl font-bold">Nuetral</h1>
			<p class="text-lg">Find calmness and inner peace</p>
		</header>

		<!-- Main Content -->
		<main class="container mx-auto my-8">
			<!-- Breathing Techniques -->
			<section>
				<h2 class="text-2xl font-bold mb-4">Techniques To Improve Out Your Mood</h2>
				{#each nuetralExercise as { title, description }}
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
			</section>
		</main>
	</div>
</div>
