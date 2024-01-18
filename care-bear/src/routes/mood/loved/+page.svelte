<!-- App.svelte -->

<script>
	let lovedExercise = [
		{
			title: 'Express Gratitude',
			description: [
				'Cultivate a positive atmosphere by actively expressing gratitude towards those who impact your life.',
				'Regularly take a moment to reflect on the positive contributions and support you receive from others.',
				'Communicate your appreciation through verbal expressions, acknowledging specific acts of kindness or support.',
				'Write heartfelt thank-you notes or messages, detailing the impact of the actions for a more personal touch.',
				'Consider surprise gestures like small gifts or acts of kindness to reciprocate and amplify gratitude.',
				'Express gratitude not only for favors but also for the qualities and strengths you admire in others.',
				'Foster an environment of appreciation in your social circles, encouraging others to express gratitude.',
				'Practice gratitude daily, making it a habit to acknowledge the positive aspects of your life.',
				'Share your gratitude openly, creating a ripple effect of positivity and strengthening interpersonal bonds.',
				'Embrace the transformative power of gratitude as a tool for fostering joy, connection, and overall well-being.'
			]
		},

		{
			title: 'Plan a Thank You Dinner',
			description: [
				'Express gratitude and appreciation by organizing a heartfelt thank-you dinner for loved ones.',
				'Choose a suitable venue, whether at home or a favorite restaurant, for an intimate and comfortable setting.',
				'Curate a menu that features favorite dishes or special treats to make the dinner extra memorable.',
				'Send thoughtful invitations, expressing the purpose of the dinner and the importance of their presence.',
				'Set a warm and inviting ambiance with decor that complements the occasion, such as candles or flowers.',
				'During the dinner, verbally express your gratitude, highlighting specific reasons for appreciation.',
				'Consider incorporating a thank-you gesture, such as small gifts or personalized notes for each guest.',
				'Create a relaxed atmosphere where everyone can share their thoughts and feelings of gratitude.',
				'Capture the moments with photos, preserving the memories of a special evening filled with gratitude.',
				'Make thank-you dinners a periodic tradition, deepening connections and fostering a culture of appreciation.'
			]
		},
		{
			title: 'Creat a Memory Jar',
			description: [
				'Embark on a heartwarming journey of preserving cherished memories by creating a memory jar.',
				'Select a beautiful jar or container to serve as the vessel for storing precious moments.',
				'Encourage everyone involved to write down their favorite memories on small pieces of paper.',
				'Include significant dates, achievements, and heartwarming experiences that hold sentimental value.',
				'Decorate the jar with personal touches, making it a visually appealing and meaningful keepsake.',
				'Place the memories in the jar throughout the year, creating a growing collection of joyful moments.',
				'Set aside a special time periodically to gather and read the shared memories, reliving those special times.',
				'Consider expanding the concept by creating separate memory jars for different themes or family members.',
				'Share the joy with others by creating additional memory jars as thoughtful gifts for friends or family.',
				'Celebrate the beautiful tapestry of shared experiences and the enduring bonds that memories create.'
			]
		},
		{
			title: 'Host a Game Night',
			description: [
				'Create a lively and entertaining atmosphere by hosting a game night with friends or family.',
				'Select a variety of games that cater to different interests and preferences, ensuring everyone can participate.',
				'Set up a designated game area with ample seating, good lighting, and a table for board games or cards.',
				'Encourage friendly competition and laughter, focusing on the joy of shared gameplay experiences.',
				'Rotate through different games to keep the night dynamic and engaging for everyone involved.',
				'Include a mix of classic favorites and newer games to cater to diverse tastes and age groups.',
				'Prepare some snacks or refreshments to keep energy levels up during the gaming sessions.',
				'Capture the fun moments with photos or videos, creating lasting memories of the game night.',
				'Consider incorporating themed game nights, adding a creative twist to the overall experience.',
				'Make hosting game nights a regular occurrence, fostering camaraderie and building traditions with loved ones.'
			]
		},
		{
			title: 'Have a Heart-to-Heart Conversation',
			description: [
				'Initiate a meaningful and open-hearted conversation to strengthen emotional connections.',
				'Choose a quiet and comfortable setting, free from distractions, to facilitate honest dialogue.',
				'Start by expressing your feelings and inviting others to share their thoughts in a safe space.',
				'Practice active listening, giving each person the opportunity to speak and be heard without judgment.',
				'Encourage vulnerability by sharing personal experiences, fostering a deeper understanding of one another.',
				'Explore topics that matter, such as dreams, fears, and aspirations, to deepen the emotional bond.',
				'Be patient and allow the conversation to unfold organically, respecting the pace and emotions of each participant.',
				'Express gratitude for the shared moments and insights, reinforcing the value of open communication.',
				'Consider making heart-to-heart conversations a regular practice, creating a culture of emotional intimacy.',
				'Celebrate the strengthening of relationships that come from honest and heartfelt exchanges.'
			]
		},
		{
			title: 'Enjoy a Picnic in the Backyard',
			description: [
				'Create a delightful outdoor experience by organizing a picnic in the comfort of your backyard.',
				'Prepare a picnic basket with an assortment of your favorite snacks, sandwiches, and refreshing beverages.',
				'Spread out a cozy blanket on the grass and arrange comfortable cushions for a relaxed seating area.',
				'Consider adding themed decorations or ambient lighting to create a charming picnic atmosphere.',
				"Engage in light conversation, savoring the delicious food and enjoying each other's company.",
				'Incorporate outdoor games or activities like frisbee, badminton, or simply basking in the sunshine.',
				'Capture the moment with photos or even a sketchbook, preserving the memories of your backyard picnic.',
				'Embrace the simplicity of nature, listening to the sounds around you and appreciating the beauty of your surroundings.',
				'Make it a recurring event, turning backyard picnics into a cherished tradition for relaxation and togetherness.',
				'Invite friends or neighbors to join, expanding the joy of backyard picnics to a wider circle of loved ones.'
			]
		},
		{
			title: 'Share a Movie Night',
			description: [
				'Organize a cozy movie night to create shared cinematic experiences with loved ones.',
				"Curate a selection of films that resonate with everyone's tastes and preferences.",
				'Set up a comfortable viewing space with blankets, cushions, and dim lighting for a relaxed atmosphere.',
				'Prepare some favorite snacks or indulge in classic movie treats to enhance the overall experience.',
				'Encourage open discussion during or after the movies, sharing thoughts and favorite scenes.',
				'Consider thematic movie nights, exploring genres or series for variety and enjoyment.',
				'Rotate the responsibility of movie selection, ensuring everyone gets a chance to contribute.',
				'Capture the essence of the evening by taking photos or creating a simple movie night journal.',
				'Celebrate the joy of shared stories and emotions that movies bring, deepening connections.',
				'Make it a regular tradition, strengthening bonds through the simple pleasure of enjoying films together.'
			]
		},
		{
			title: 'Create a Family or Friend Photo Album',
			description: [
				'Preserve cherished memories by crafting a personalized photo album with loved ones.',
				'Select a theme, such as a memorable family vacation or a special event, for your album.',
				'Curate photos that evoke joy and hold sentimental value, capturing the essence of the chosen theme.',
				'Arrange the photos thoughtfully to weave a visual narrative or convey a specific message.',
				'Enhance the storytelling experience by adding captions or brief descriptions to each photo.',
				'Share the completed photo album with friends or family, fostering a deeper sense of togetherness.',
				'Consider creating multiple copies of the album to distribute among loved ones as meaningful gifts.',
				'Reflect on the captured memories, taking a moment to appreciate and celebrate the positive moments.',
				'Transform the creation process into a collaborative project by making the photo album with friends or family.',
				'Enjoy the collaborative experience, strengthening bonds as you collectively contribute to the shared project.'
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
			<h1 class="text-4xl font-bold">Loved</h1>
			<p class="text-lg">Find calmness and inner peace</p>
		</header>

		<!-- Main Content -->
		<main class="container mx-auto my-8">
			<!-- Breathing Techniques -->
			<section>
				<h2 class="text-2xl font-bold mb-4">Techniques To Improve Out Your Mood</h2>
				<div class="bg-slate-300 p-8 rounded-lg">
				{#each lovedExercise as { title, description }}
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
