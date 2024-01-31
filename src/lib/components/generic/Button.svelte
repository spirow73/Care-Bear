<!-- Button.svelte -->
<script lang="ts">
	export let text = 'Button'; // Default button text
	export let variant = 'primary'; // Default button variant
	export let onClick; // Explicitly define the type of secondaryHandle prop

	// Define base classes for all buttons
	let baseClasses =
		'w-64 h-12 text-lg font-semibold rounded-full shadow-lg transition duration-300 ease-in-out focus:outline-none';

	// Add specific classes based on button variant
	let variantClasses = {
		primary: 'flex-auto m-2 bg-blue-500 hover:bg-blue-600 text-white',
		secondary: 'flex-auto m-2 bg-white text-gray-700 hover:border-gray-400 border border-gray-300'
	};

	// Combine base classes with variants
	let classes = `${baseClasses} ${variantClasses[variant] || ''}`;
</script>

<button on:click={onClick} class={classes}>
	{text}
</button>
