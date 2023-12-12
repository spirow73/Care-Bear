<script>
	import Calendar from '$lib/components/calendar/Calendar.svelte';
	import theme from '../../stores/themeStore.js';
	$: darkModeClass = $theme === 'dark' ? 'dark' : '';
</script>

<div class="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 h-screen">
	<div
		class="w-12/12 sm:w-10/12 lg:w-6/12 border border-gray-300 p-2 sm:p-4 bg-brown-900 rounded-lg overflow-auto"
	>
		<Calendar />
	</div>
</div>
