<script>
	import { onMount } from 'svelte';
	let darkMode = false;
	let enableDarkMode, disableDarkMode, isDarkReaderEnabled;

	onMount(() => {
		// Importación dinámica para asegurar que se carga en el cliente
		import('darkreader').then((darkReader) => {
			enableDarkMode = darkReader.auto;
			disableDarkMode = darkReader.disable;
			isDarkReaderEnabled = darkReader.isEnabled;

			if (!isDarkReaderEnabled()) {
				enableDarkMode({
					brightness: 100,
					contrast: 90,
					sepia: 10
				});
				darkMode = true;
			} else {
				darkMode = isDarkReaderEnabled();
			}
		});
	});

	function toggleDarkMode() {
		if (darkMode) {
			disableDarkMode();
		} else {
			enableDarkMode({
				brightness: 100,
				contrast: 90,
				sepia: 10
			});
		}
		darkMode = !darkMode;
	}
</script>

<button on:click={toggleDarkMode}>
	{darkMode ? '☀️' : '🌙'}
</button>
