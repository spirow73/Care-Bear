<script>
	import ButtonContainer from '$lib/components/generic/ButtonContainer.svelte';
	import { goto } from '$app/navigation';

	function handleLoginClick(event) {
		event.preventDefault(); // Prevenir el comportamiento predeterminado
		goto('/login');
	}

	function handleGetStartedClick(event) {
		event.preventDefault(); // Prevenir el comportamiento predeterminado
		goto('/sign-up');
	}
</script>

<div class="flex flex-col items-center justify-center min-h-screen m-4">
	<h1 class="text-5xl font-bold text-gray-800 mb-10 text-center">Welcome to Care Bear</h1>
	<ButtonContainer
		primaryText="Login"
		secondaryText="Get Started"
		primaryHandle={handleLoginClick}
		secondaryHandle={handleGetStartedClick}
	/>
</div>
