<script>
	import '../app.css';
</script>

<div class="bg-gray-100 min-h-screen">
	<nav class="flex items-center justify-between flex-wrap bg-orange-200 p-6">
		<div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
			<div class="text-sm lg:flex-grow">
				<a href="/" class="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-white mr-4">
					Home
				</a>
				<a
					href="/journal"
					class="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-white mr-4"
				>
					Journal
				</a>
				<a
					href="/task"
					class="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-white mr-4"
				>
					Tasks
				</a>
				<a
					href="/mood"
					class="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-white mr-4"
				>
					Mood
				</a>
				<a
					href="/calendar"
					class="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-white mr-4"
				>
					Calendar
				</a>
			</div>
		</div>
	</nav>

	<slot />
</div>
