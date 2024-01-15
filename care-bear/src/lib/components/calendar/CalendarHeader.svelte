<script>
	export let changeMonth;
	export let selectedDate;
</script>

<!-- Contenedor de Navegación del Mes -->
<div class="flex justify-between items-center text-center mb-4">
	<!-- Botón Mes Anterior -->
	<button
		class="button px-4 py-2 text-white font-semibold rounded-lg shadow-md transition ease-in-out duration-300"
		on:click={() => changeMonth(-1)}
		aria-label="Previous Month"
	>
		&lt; Prev
	</button>
	<!-- Texto del Mes y Año -->
	<span
		class="text-lg sm:text-2xl lg:text-3xl font-bold text-fuchsia-800"
		id="month-year"
		role="heading"
		aria-level="2"
		aria-live="assertive"
	>
		{selectedDate
			? `${
					selectedDate.toLocaleString('default', { month: 'long' }).charAt(0).toUpperCase() +
					selectedDate.toLocaleString('default', { month: 'long' }).slice(1)
			  } ${selectedDate.getFullYear()}`
			: 'Loading...'}
	</span>
	<!-- Botón Mes Siguiente -->
	<button
		class="button px-4 py-2 text-white font-semibold rounded-lg shadow-md transition duration-300"
		on:click={() => changeMonth(1)}
		aria-label="Next Month"
	>
		Next &gt;
	</button>
</div>

<style>
	/* Estilos para botones con base en fucsia */
	.button {
		background-color: #9b305b; /* Color fucsia para botones */
	}

	.button:hover {
		background-color: #c94077; /* Color fucsia más claro para el hover */
	}

	/* Estilo para el texto del mes con un fucsia profundo */
	.text-fuchsia-800 {
		color: #9b305b; /* Fucsia oscuro para el texto del mes */
	}
</style>
