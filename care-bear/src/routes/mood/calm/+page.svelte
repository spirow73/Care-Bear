<!-- App.svelte -->

<script>
	let calmExercise = [
		{
			title: 'Read a book',
			description: [
				'Read a book that you enjoy. Choose a genre that you find uplifting and inspiring.',
				'Create a cozy reading nook at home, enhancing the environment for relaxation.',
				'Schedule regular reading sessions to incorporate joy into your daily routine.',
				'Join a book club to connect with others who share your passion for reading.',
				'Visit a local library or bookstore to discover new books and authors.',
				'Share your favorite books with friends or family, creating a sense of togetherness.',
				'Explore audiobooks for a convenient and engaging reading experience.',
				'Read outdoors to connect with nature and enhance the uplifting experience.',
				'Celebrate personal achievements or milestones by treating yourself to a new book.',
				'Combine reading with gratitude by reflecting on positive aspects of your life.'
			]
		},
		{
			title: 'Take a Nature Walk',
			description: [
				'Take a nature walk, enjoying the calming effects of being outdoors.',
				'Choose scenic trails with vibrant colors and natural beauty for a visually uplifting experience.',
				'Practice mindful walking, appreciating each step and the serenity of the surroundings.',
				'Invite friends for a group walk, fostering a sense of camaraderie and shared joy.',
				'Bring a camera to capture moments of beauty and create a visual diary of happiness.',
				'Plan a picnic at the end of your walk, combining outdoor activity with a delightful meal.',
				'Explore sunrise or sunset walks, connecting with the changing colors of the sky.',
				'Engage in wildlife observation during your walks, connecting with the natural world.',
				'Celebrate personal achievements or milestones by treating yourself to a special walk.',
				'Include moments of laughter and lightheartedness during your walking adventures.'
			]
		},

		{
			title: 'Write in a Journal',
			description: [
				'Set aside dedicated time for journaling, whether it is in the morning or before bed.',
				'Write freely without judgment, expressing your thoughts, feelings, and experiences.',
				'Experiment with different journaling techniques, such as gratitude lists or stream-of-consciousness writing.',
				'Create a peaceful journaling space at home, enhancing the environment for relaxation.',
				'Use journaling as a form of self-care, prioritizing your mental and emotional well-being.',
				'Share your journaling practice with friends or family, creating a sense of togetherness.',
				'Make journaling a consistent practice to promote self-reflection and emotional well-being.'
			]
		},
		{
			title: 'Watch the clouds',
			description: [
				'Choose a location with a clear and unobstructed view of the sky.',
				'Consider using a blanket or reclining chair for comfort.',
				'Opt for a day with clear skies or scattered clouds for better visibility.',
				'Late morning or early afternoon is often ideal when the sun is high.',
				'Take a few moments to relax and clear your mind of distractions.',
				'Focus on the clouds, observing their movement, patterns, and shape.',
				'Allow your imagination to run wild as you observe cloud formations.',
				'Enjoy cloud watching alone for personal reflection or invite friends and family to join.',
				'Enhance the experience by bringing a snack or refreshing drink.',
				'Consider bringing a camera to capture moments of beauty and create a visual diary of happiness.'
			]
		},
		{
			title: 'Star Gazing',
			description: [
				'Look for open areas with an unobstructed view of the sky.',
				'Stargazing is often best when the moon is in its crescent phase or not visible',
				'Consider using a blanket or reclining chair for comfort.',
				'Allow your eyes to adjust to the darkness for better visibility.',
				'Take a few moments to relax and clear your mind of distractions.',
				'Focus on the stars, observing their brightness, patterns and shape.',
				'Allow your imagination to run wild as you observe the night sky.',
				'Enjoy stargazing alone for personal reflection or invite friends and family to join.',
				'Enhance the experience by bringing a snack or refreshing drink.',
				'Consider bringing a telescope or binoculars for a closer look at the stars.'
			]
		},
		{
			title: 'learn a new skill',
			description: [
				'Choose a skill that you find interesting or enjoyable.',
				'Consider skills that you have always wanted to learn but never had the time.',
				'Explore online courses or tutorials to learn at your own pace.',
				'Join a local class or workshop to learn with others who share your interests.',
				'Practice your new skill regularly to build confidence and mastery.',
				'Share your new skill with friends or family, creating a sense of togetherness.',
				'Celebrate personal achievements or milestones by treating yourself to a new skill.',
				'Combine learning with gratitude by reflecting on positive aspects of your life.'
			]
		},
		{
			title: 'Create a Vision Board',
			description: [
				'Choose a theme for your vision board, such as career, relationships or travel.',
				'Gather images and words that represent your vision for the future.',
				'Use a poster board or cork board to create your vision board.',
				'Arrange the images and words on your vision board in a way that is visually pleasing.',
				'Display your vision board in a prominent location to keep it visible.',
				'Spend a few moments each day reflecting on your vision board.',
				'Share your vision board with friends or family, creating a sense of togetherness.'
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
			<h1 class="text-4xl font-bold">Calm</h1>
			<p class="text-lg">Find calmness and inner peace</p>
		</header>

		<!-- Main Content -->
		<main class="container mx-auto my-8">
			<!-- Breathing Techniques -->
			<section>
				<h2 class="text-2xl font-bold mb-4">Techniques To Help Out Your Mood</h2>
				<div class="bg-slate-300 p-8 rounded-lg">
				{#each calmExercise as { title, description }}
					<div class="bg-white rounded-lg shadow-md p-6 mb-8"  on:click={() => toggleDescription(title)}>
						<h3 class="text-xl font-bold mb-2">
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
