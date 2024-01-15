<!-- App.svelte -->

<script>
	let lonelyExercise = [
		{
			title: 'Reach Out to a Friend',
			description: [
				'Create a warm and inviting ambiance by hosting a delightful tea party with friends or family.',
				'Curate a diverse selection of teas to cater to various tastes, ensuring a delightful experience for everyone.',
				'Prepare an array of delectable snacks and treats, such as cookies, scones, or sandwiches, to complement the tea.',
				'Set up a dedicated tea area with a well-adorned table, comfortable seating, and gentle lighting for a relaxed atmosphere.',
				'Encourage engaging conversations and shared laughter, focusing on the joy of creating memories together.',
				'Consider introducing a theme to your tea party, such as a specific type of tea or cuisine, to add a creative and unique touch.',
				'Capture the beautiful moments with photos or videos, preserving the cherished memories of your tea party.',
				'Embrace the simplicity of the moment, savoring each sip of tea and relishing the company of your loved ones.',
				'Transform tea parties into a recurring tradition, fostering relaxation and togetherness in each gathering.',
				'Extend the joy by inviting friends or neighbors to join, broadening the circle of loved ones who share in the delight of tea parties.'
			]
		},

		{
			title: 'Join a Social Group Online:',
			description: [
				'Immerse yourself in a vibrant online community by joining a social group aligned with your interests.',
				'Explore platforms that cater to diverse hobbies, ensuring you find a group that resonates with your passions.',
				'Participate in discussions, share experiences, and connect with like-minded individuals from various backgrounds.',
				'Contribute positively to the group by offering insights, support, or engaging in collaborative projects.',
				'Take advantage of virtual events organized by the group, fostering a sense of community and shared experiences.',
				'Encourage open communication and celebrate diversity, creating an inclusive environment for all members.',
				'Share your own knowledge and learn from others, cultivating a rich exchange of ideas within the social group.',
				'Attend virtual meetups or video calls to strengthen connections with fellow group members on a more personal level.',
				'Embrace the potential for lasting friendships and a sense of belonging that online social groups can provide.',
				'Explore different groups or platforms to expand your network and find communities that truly resonate with your interests.'
			]
		},
		{
			title: 'Attend a Meetup Event:',
			description: [
				'Expand your social horizons by attending local meetup events tailored to your interests and hobbies.',
				'Explore meetup platforms to discover a diverse range of events happening in your community.',
				"Choose events aligned with your passions, whether it's hiking, book clubs, or tech discussions.",
				'Engage actively in event discussions and forums to connect with attendees before the meetup.',
				'Embrace the opportunity to meet new people in a casual and friendly environment.',
				'Be open to trying new activities or joining discussions that pique your curiosity.',
				'Exchange contact information with attendees you connect with, fostering potential friendships.',
				'Attend post-event gatherings or follow-up activities to deepen connections with newfound friends.',
				'Share your own interests or expertise by suggesting or hosting a meetup event in the future.',
				'Make attending meetup events a regular part of your social calendar, expanding your network and enriching your social life.'
			]
		},
		{
			title: 'Take Photos of Your Surroundings:',
			description: [
				'Rediscover the beauty in your everyday surroundings by capturing moments through photography.',
				'Grab your camera or use your smartphone to document interesting scenes, landscapes, or objects.',
				'Experiment with different angles, lighting, and perspectives to add a creative touch to your photos.',
				'Focus on details, textures, and colors, finding beauty in the simplicity of your environment.',
				'Explore various settings, from urban areas to natural landscapes, to diversify your photo collection.',
				'Share your photos on social media or create a personal gallery to showcase your unique perspective.',
				'Reflect on the stories each photo tells, appreciating the small and significant moments captured.',
				'Use photography as a mindful practice, encouraging you to be present and observant in your surroundings.',
				'Consider joining online photography communities to share your work and connect with fellow enthusiasts.',
				'Transform this into a regular habit, allowing photography to be a creative outlet that brings joy and appreciation to your life.'
			]
		},
		{
			title: 'Organize Your Living Space:',
			description: [
				'Revitalize your living space by decluttering and reorganizing, creating a harmonious and inviting environment.',
				'Start with a clear plan, identifying specific areas or items that need attention within your living space.',
				'Sort through belongings, categorizing items into keep, donate, or discard piles for effective decluttering.',
				'Invest in storage solutions such as bins, baskets, and shelves to create organized and functional spaces.',
				'Consider rearranging furniture to optimize the flow and aesthetics of your living area.',
				'Add personal touches like plants, artwork, or decor to enhance the visual appeal and comfort of your space.',
				'Tackle one area at a time to prevent feeling overwhelmed and ensure thorough organization.',
				'Create designated spaces for daily essentials, reducing the likelihood of future clutter accumulation.',
				'Celebrate the accomplishment of an organized living space, recognizing the positive impact on your well-being.',
				'Maintain the order by incorporating simple daily habits to prevent clutter from accumulating in the future.'
			]
		},
		{
			title: 'Join a Book Club:',
			description: [
				'Immerse yourself in the joy of shared reading experiences by joining a vibrant book club.',
				'Explore local book clubs or online platforms that align with your literary preferences and schedule.',
				'Participate in discussions, exchanging diverse perspectives and insights with fellow book enthusiasts.',
				'Read a variety of genres, expanding your literary horizons and discovering new authors and perspectives.',
				'Embrace the opportunity to delve into thought-provoking conversations about characters, plots, and themes.',
				'Attend book club meetings regularly, engaging in thoughtful conversations that deepen your understanding of literature.',
				'Consider hosting discussions or suggesting books, actively contributing to the dynamic of the book club.',
				'Build meaningful connections with fellow members, fostering a sense of camaraderie and shared passion for reading.',
				'Celebrate the joy of discovering and discussing books together, creating lasting memories within the book club community.',
				'Continue exploring different book clubs or genres, ensuring a rich and diverse reading experience in your literary journey.'
			]
		},
		{
			title: 'Reconnect with Old Friends:',
			description: [
				'Rediscover the joy of past connections by reaching out to friends from your past.',
				"Reflect on fond memories and consider the friends you'd like to reconnect with after some time apart.",
				'Use social media platforms or traditional methods to initiate contact, expressing your desire to reconnect.',
				'Share updates about your life and inquire about their experiences, creating a space for open communication.',
				'Arrange a virtual catch-up through video calls or plan to meet in person if feasible.',
				'Recall shared experiences and inside jokes, fostering a sense of nostalgia and camaraderie.',
				'Be genuine in your conversations, allowing for both the celebration of past connections and the exploration of new common interests.',
				'Organize group activities or gatherings to facilitate a broader reconnection with a circle of old friends.',
				'Appreciate the value of longstanding friendships, recognizing the unique bond that time and shared history create.',
				'Nurture rekindled connections by staying in touch regularly, making the effort to sustain and deepen renewed friendships.'
			]
		},
		{
			title: 'Plan Your Future Travel:',
			description: [
				'Ignite a sense of anticipation and excitement by planning your future travel adventures.',
				'Create a list of dream destinations and experiences, inspiring your travel aspirations.',
				'Research each destination thoroughly, exploring attractions, local culture, and unique activities.',
				'Establish a realistic budget and savings plan to make your travel dreams a tangible and achievable goal.',
				'Consult travel forums, blogs, and recommendations to gather valuable insights and tips for each destination.',
				'Create a detailed itinerary, including accommodations, transportation, and a list of must-see landmarks or activities.',
				'Visualize your travel experiences by creating mood boards or scrapbooks, adding a creative and personal touch.',
				'Connect with fellow travelers or friends who share similar travel interests, fostering a sense of camaraderie.',
				'Consider solo trips or group adventures, tailoring your travel plans to suit your preferred style.',
				'Immerse yourself in the excitement of future travel, using the planning process as a source of motivation and joy.'
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
			<h1 class="text-4xl font-bold">Lonely</h1>
			<p class="text-lg">Find calmness and inner peace</p>
		</header>

		<!-- Main Content -->
		<main class="container mx-auto my-8">
			<!-- Breathing Techniques -->
			<section>
				<h2 class="text-2xl font-bold mb-4">Techniques To Improve Out Your Mood</h2>
				<div class="bg-slate-300 p-8 rounded-lg">
				{#each lonelyExercise as { title, description }}
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
