<!-- App.svelte -->

<script>
	let frustratedExercise = [
		{
			title: 'Deep Breathing',
			description: [
				'Tap into the therapeutic benefits of deep breathing to foster relaxation and reduce stress.',
				'Choose a quiet and comfortable space where you can sit or lie down without interruptions.',
				'Inhale slowly and deeply through your nose, allowing your lungs to fill with air and your abdomen to rise.',
				'Exhale slowly and completely through your mouth, feeling your abdomen fall as you release the breath.',
				'Focus your attention on the sensation of your breath, creating a mindful connection to the present moment.',
				'Practice diaphragmatic breathing by emphasizing the expansion of your lower lungs for a more profound effect.',
				'Incorporate a rhythmic pattern, such as counting or guided breathing exercises, to enhance the relaxation response.',
				"Extend the exhalation phase to promote a sense of calmness and activate the body's parasympathetic nervous system.",
				'Integrate deep breathing into your daily routine as a proactive tool for stress management and overall well-being.',
				'Use deep breathing whenever you feel anxious, overwhelmed, or as a mindful practice for mental clarity and relaxation.'
			]
		},

		{
			title: 'Drink Herbal Tea',
			description: [
				'Indulge in the soothing ritual of drinking herbal tea to promote relaxation and enhance well-being.',
				'Select a herbal tea variety that aligns with your taste preferences and desired effects, such as calming chamomile or invigorating peppermint.',
				'Boil water and steep the herbal tea bag or loose leaves for the recommended duration to extract the full flavor and benefits.',
				'Create a calming environment by sipping your herbal tea in a quiet and comfortable space.',
				'Engage your senses by inhaling the aromatic steam rising from the tea, allowing the fragrance to contribute to the overall experience.',
				'Sip the herbal tea slowly, savoring each sip and paying attention to the flavors and sensations.',
				'Embrace the warmth of the tea as it soothes your throat and comforts your body, fostering a sense of relaxation.',
				'Consider incorporating mindfulness or meditation practices while enjoying your herbal tea for a holistic relaxation experience.',
				'Explore different herbal teas and their unique properties, tailoring your selection to your mood or specific wellness goals.',
				'Make drinking herbal tea a daily self-care ritual, incorporating it into moments of reflection, relaxation, and mindful presence.'
			]
		},
		{
			title: 'Take a Day Off',
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
			title: 'Constructive Problem-Solving ',
			description: [
				'Approach challenges with a positive and solution-oriented mindset to foster constructive problem-solving.',
				'Acknowledge the issue at hand, breaking it down into manageable components for a clearer understanding.',
				'Consider potential solutions, weighing their pros and cons, and evaluating their feasibility.',
				'Collaborate with others, seeking input and diverse perspectives to enrich the pool of possible solutions.',
				'Prioritize solutions based on their impact and alignment with your goals or values.',
				'Develop an action plan outlining the steps required to implement the chosen solution effectively.',
				'Be adaptable and open to adjusting your approach as needed, recognizing that problem-solving is often an iterative process.',
				'Embrace a growth mindset, viewing challenges as opportunities for learning and personal development.',
				'Reflect on the outcomes of your problem-solving efforts, extracting valuable lessons for future situations.',
				'Integrate constructive problem-solving into your daily life, fostering resilience and a proactive approach to overcoming obstacles.'
			]
		},
		{
			title: 'Create a Positive Playlist ',
			description: [
				'Craft a mood-boosting playlist filled with songs that radiate positivity and uplift your spirits.',
				'Explore diverse genres, choosing tracks with upbeat tempos, empowering lyrics, and melodies that resonate with you.',
				'Curate a seamless flow of music, transitioning from one feel-good song to the next for an immersive experience.',
				'Include songs that hold sentimental value or trigger positive memories, enhancing the emotional connection to the playlist.',
				'Discover new music regularly and add fresh, uplifting tunes to keep your playlist dynamic and inspiring.',
				'Listen to your positive playlist during various activities, such as exercising, commuting, or unwinding at home.',
				'Share your playlist with friends or family, spreading the joy and creating a collective musical experience.',
				'Create themed playlists for specific moods or occasions, tailoring your musical selection to different aspects of positivity.',
				'Allow your positive playlist to be a source of motivation, turning to it during challenging times or when you need an energy boost.',
				'Make updating and enjoying your positive playlist a regular practice, integrating it into your routine for a continuous infusion of good vibes and positivity.'
			]
		},
		{
			title: 'Watch a Documentary',
			description: [
				'Embark on an enlightening journey by watching a documentary that piques your interest or explores a new subject.',
				"Choose a documentary that aligns with your curiosity, whether it's about history, science, nature, or social issues.",
				'Create a conducive viewing environment with minimal distractions, allowing you to fully immerse yourself in the documentary.',
				'Engage actively with the content by taking notes, pausing to reflect, or discussing key points with others.',
				'Explore a variety of documentary styles, from investigative journalism to visually stunning nature documentaries.',
				'Consider documentaries that challenge your perspectives and encourage critical thinking about the world around you.',
				'Share your thoughts and recommendations with friends or on social media, fostering meaningful conversations.',
				'Select documentaries with a call to action or positive message, inspiring personal growth or societal change.',
				'Incorporate documentary-watching into your routine, making it a regular activity for both entertainment and lifelong learning.',
				'Celebrate the power of documentaries to educate, inspire, and broaden your understanding of the diverse and complex world we live in.'
			]
		},
		{
			title: 'Bird Watching',
			description: [
				'Immerse yourself in the wonders of nature by taking up the delightful hobby of bird watching.',
				'Select a serene location, such as a park, nature reserve, or your backyard, where bird activity is prevalent.',
				'Invest in a pair of binoculars to enhance your ability to observe and identify birds from a distance.',
				'Bring along a field guide or use bird identification apps to learn about the different species you encounter.',
				'Practice patience and quiet observation, allowing birds to go about their natural behaviors undisturbed.',
				'Document your sightings in a bird journal, noting the species, behavior, and any unique characteristics you observe.',
				'Join local bird watching groups or online communities to connect with fellow enthusiasts, share insights, and learn from others.',
				'Consider creating a bird-friendly environment at home by setting up feeders and bird baths to attract a variety of species.',
				'Embrace the meditative aspects of bird watching, enjoying the tranquility of nature and the beauty of avian life.',
				'Make bird watching a regular practice, fostering a deeper appreciation for the diverse bird species that inhabit your surroundings.'
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
			<h1 class="text-4xl font-bold">Frustrated</h1>
			<p class="text-lg">Find calmness and inner peace</p>
		</header>

		<!-- Main Content -->
		<main class="container mx-auto my-8">
			<!-- Breathing Techniques -->
			<section>
				<h2 class="text-2xl font-bold mb-4">Techniques To Improve Out Your Mood</h2>
				<div class="bg-slate-300 p-8 rounded-lg">
				{#each frustratedExercise as { title, description }}
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
