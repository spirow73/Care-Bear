<script>
	import '../app.css';

	const animations = {
		enter: (node) => {
			node.animate(
				{
					opacity: [0, 1],
					transform: ['translateY(-10px)', 'translateY(0)']
				},
				{
					duration: 300,
					easing: 'ease-in-out'
				}
			);
		},
		leave: (node) => {
			node.animate(
				{
					opacity: [1, 0],
					transform: ['translateY(0)', 'translateY(-10px)']
				},
				{
					duration: 300,
					easing: 'ease-in-out'
				}
			);
		}
	};
</script>

<div class="bg-gray-100 min-h-screen">
	<nav class="bg-orange-200 p-6 shadow-md">
		<div class="container flex flex-wrap items-center justify-between">
			<div class="flex items-center flex-shrink-0 text-black mr-6">
				<a
					href="/"
					class="transition-all block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"
					use:animations.enter
					use:animations.leave
				>
					<span class="font-semibold text-xl tracking-tight">Care Bear</span>
				</a>
			</div>

			<div class="block lg:hidden">
				<button
					class="flex items-center px-3 py-2 border rounded text-black border-black-400 hover:text-white hover:border-white"
				>
					<svg
						class="fill-current h-3 w-3"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						title="Menu"
					>
						<path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
					</svg>
				</button>
			</div>

			<div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block">
				<div class="text-sm lg:flex-grow">
					<a
						href="/"
						class="transition-all block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"
						use:animations.enter
						use:animations.leave
					>
						Home
					</a>

					<a
						href="/journal"
						class="transition-all block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"
						use:animations.enter
						use:animations.leave
					>
						Journal
					</a>

					<a
						href="/task"
						class="transition-all block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"
						use:animations.enter
						use:animations.leave
					>
						Tasks
					</a>

					<a
						href="/mood"
						class="transition-all block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"
						use:animations.enter
						use:animations.leave
					>
						Mood
					</a>

					<a
						href="/calendar"
						class="transition-all block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"
						use:animations.enter
						use:animations.leave
					>
						Calendar
					</a>

					<a
						href="/profile"
						class="transition-all block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"
						use:animations.enter
						use:animations.leave
					>
						Profile
					</a>
				</div>
			</div>
		</div>
	</nav>
	
	<slot />
	
</div>
<body class="bg-cover bg-center" style="background-image: url('https://img.freepik.com/premium-photo/dreamy-ocean-coast-summer_360074-15698.jpg');">
</body>

