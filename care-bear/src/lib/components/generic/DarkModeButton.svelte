<script>
	import { onMount } from 'svelte';
	let darkMode = false;
	let enableDarkMode, disableDarkMode, isDarkReaderEnabled;

	onMount(() => {
		// Dynamic import to ensure it loads on the client-side
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

<!-- Slider Toggle -->
<label class="switch">
	<input type="checkbox" checked={darkMode} on:change={toggleDarkMode} />
	<span class="slider round">
		<span class="icon" style="justify-content: {darkMode ? 'flex-start' : 'flex-end'};">
			{darkMode ? '🌙' : '☀️'}
		</span>
	</span>
</label>

<style>
	.switch {
		position: relative;
		display: inline-block;
		width: 60px; /* Adjust size as necessary */
		height: 34px; /* Adjust size as necessary */
	}

	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #ccc;
		-webkit-transition: 0.4s;
		transition: 0.4s;
		display: flex;
		align-items: center;
	}

	.icon {
		display: flex;
		flex: 1;
		padding: 0 5px; /* Ensure padding for icons */
	}

	.slider:before {
		content: '';
		position: absolute;
		height: 26px;
		width: 26px;
		left: 4px;
		bottom: 4px;
		background-color: white;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	input:checked + .slider {
		background-color: #2196f3;
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(26px);
		-ms-transform: translateX(26px);
		transform: translateX(26px);
	}

	/* Rounded sliders */
	.slider.round {
		border-radius: 34px;
	}

	.slider.round:before {
		border-radius: 50%;
	}

	/* Responsive Slider Size */
	@media (max-width: 600px) {
		.switch {
			width: 50px; /* Smaller width for smaller screens */
			height: 25px; /* Smaller height for smaller screens */
		}

		.slider:before {
			height: 21px;
			width: 21px;
		}
	}
</style>
