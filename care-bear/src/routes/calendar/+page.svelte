<script>
	import Calendar from '$lib/components/calendar/Calendar.svelte';
	import theme from '../../stores/themeStore.js';
	$: darkModeClass = $theme === 'dark' ? 'dark' : '';
</script>

<!-- Contenedor Principal -->
<div class="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 h-screen">
	<!-- Calendario con bordes redondeados y sombra para un efecto elevado -->
	<div
		class={`w-full sm:w-10/12 lg:w-8/12 ${darkModeClass} p-4 bg-white rounded-2xl shadow-lg overflow-auto cotton-candy`}
	>
		<Calendar />
	</div>
</div>

<style>
	/* Tema Cotton Candy con un gradiente suave */
	.cotton-candy {
		background: linear-gradient(135deg, rgba(255, 188, 217, 1), rgba(191, 223, 255, 1));
		color: #333; /* Color de texto para mejorar la legibilidad */
	}
</style>
