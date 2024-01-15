<!-- App.svelte -->

<script>
	let energeticExercise = [
		{
			title: 'Go for a Run',
			description: [
				'Revitalize your mind and body by embracing the invigorating activity of running.',
				'Choose a scenic route or a favorite trail to make your run more enjoyable and engaging.',
				'Prioritize comfort by wearing appropriate running shoes and breathable athletic attire.',
				'Begin with a dynamic warm-up to prepare your muscles for the physical activity and prevent injuries.',
				"Set achievable goals, whether it's running a certain distance or completing a specific time duration.",
				'Listen to energizing music or podcasts to enhance your running experience and maintain motivation.',
				'Practice proper running form, focusing on maintaining a steady pace and controlled breathing.',
				'Celebrate your achievements, whether big or small, and acknowledge the positive impact on your physical and mental well-being.',
				'Consider incorporating interval training or varying your routes to add diversity to your running routine.',
				'Make running a regular part of your fitness regimen, enjoying the numerous health benefits and the sense of accomplishment it brings.'
			]
		},

		{
			title: 'Try High-Intensity Interval Training (HIIT)',
			description: [
				'Elevate your fitness routine by engaging in High-Intensity Interval Training (HIIT), a dynamic and efficient workout method.',
				'Start with a brief warm-up to prepare your body for the intensity of the workout and prevent injuries.',
				'Alternate between short bursts of intense exercise and brief periods of rest, maximizing calorie burn and cardiovascular benefits.',
				'Incorporate a variety of exercises such as jumping jacks, burpees, and mountain climbers to target different muscle groups.',
				'Tailor the intensity and duration to your fitness level, gradually increasing as your stamina improves.',
				'Utilize bodyweight exercises or include equipment like dumbbells for added resistance and challenge.',
				'Maintain proper form during each exercise to ensure effectiveness and reduce the risk of injury.',
				'Embrace the flexibility of HIIT, as it can be adapted to various time constraints, making it a time-efficient workout option.',
				'Celebrate your progress and the post-workout endorphin boost, enhancing your mood and overall well-being.',
				'Integrate HIIT sessions into your weekly fitness routine, enjoying the versatility and effectiveness of this impactful workout.'
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
			title: 'Photography Exploration',
			description: [
				'Unleash your creativity and capture the world through the lens of photography, embarking on an exciting visual journey.',
				"Equip yourself with a camera, whether it's a professional DSLR or a high-quality smartphone, to begin your photographic exploration.",
				'Explore various genres of photography, including landscapes, portraits, macro, or abstract, to diversify your visual storytelling.',
				'Experiment with different settings, lighting conditions, and perspectives, allowing for a dynamic and unique photographic style to emerge.',
				'Research and learn photography techniques, such as composition rules and editing skills, to enhance the quality of your images.',
				'Create themed photo projects to provide structure and focus to your exploration, fostering a deeper connection with your subjects.',
				'Share your photographs on social media platforms or photography communities to receive feedback and connect with fellow enthusiasts.',
				"Reflect on the stories each photograph tells, capturing the essence and emotion of the moments you've frozen in time.",
				'Immerse yourself in the world around you, paying attention to details and finding beauty in unexpected places.',
				'Make photography an ongoing passion, continually refining your skills and experiencing the world with a heightened sense of observation.'
			]
		},
		{
			title: 'Participate in an Escape Room Challenge',
			description: [
				'Embark on an exhilarating and immersive adventure by participating in an escape room challenge.',
				'Gather a group of friends or family members to join you in this collaborative and puzzle-solving experience.',
				"Choose an escape room with a theme that intrigues you, whether it's a mystery, adventure, or historical setting.",
				'Collaborate with your team to solve puzzles, decipher codes, and uncover hidden clues within the escape room.',
				'Engage in effective communication and teamwork to overcome challenges and progress through the storyline.',
				'Enjoy the thrill of racing against the clock, heightening the sense of urgency and excitement.',
				'Celebrate the accomplishment of successfully solving the escape room, fostering a sense of teamwork and achievement.',
				'Reflect on the experience, discussing the highlights and memorable moments with your fellow participants.',
				'Consider trying different escape rooms with varying levels of difficulty, keeping the challenge fresh and engaging.',
				'Make escape room challenges a periodic activity, creating lasting memories and strengthening bonds with your team.'
			]
		},
		{
			title: 'Go Indoor Rock Climbing',
			description: [
				'Embark on a thrilling and physically engaging adventure by trying indoor rock climbing.',
				'Visit a local indoor climbing gym that provides a safe and controlled environment for climbers of all skill levels.',
				'Attend an orientation session to familiarize yourself with the equipment, safety protocols, and basic climbing techniques.',
				'Begin with climbs suited to your skill level, gradually progressing to more challenging routes as you gain confidence.',
				'Engage your entire body in the climbing experience, utilizing strength, balance, and problem-solving skills.',
				'Embrace the supportive community within the climbing gym, where climbers often encourage and cheer each other on.',
				'Set personal goals for your climbs, challenging yourself to reach new heights and conquer different types of climbing routes.',
				"Celebrate your achievements, whether it's completing a challenging route or improving your climbing technique.",
				'Consider joining climbing classes or workshops to enhance your skills and meet fellow climbing enthusiasts.',
				'Make indoor rock climbing a regular part of your fitness routine, enjoying the physical and mental benefits of this dynamic and rewarding activity.'
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
			<h1 class="text-4xl font-bold">Energetic</h1>
			<p class="text-lg">Find calmness and inner peace</p>
		</header>

		<!-- Main Content -->
		<main class="container mx-auto my-8">
			<!-- Breathing Techniques -->
			<section>
				<h2 class="text-2xl font-bold mb-4">Techniques To Improve Out Your Mood</h2>
				<div class="bg-slate-300 p-8 rounded-lg">
				{#each energeticExercise as { title, description }}
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
