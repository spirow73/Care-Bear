<script>
	import ButtonContainer from '$lib/components/generic/ButtonContainer.svelte';
	import { goto } from '$app/navigation';
	import bear from '$lib/components/images/bear.png';

	function handleLoginClick(event) {
		event.preventDefault(); // Prevenir el comportamiento predeterminado
		goto('/login');
	}

	function handleGetStartedClick(event) {
		event.preventDefault(); // Prevenir el comportamiento predeterminado
		goto('/register');
	}
</script>

<div class="flex flex-col items-center justify-center min-h-screen">
	<h1 class="text-5xl font-bold text-gray-800 mb-5 text-center">Welcome to Care Bear</h1>

	<div class="object-none object-top mb-5">
		<img class="max-w-full max-h-full" src={bear} alt={bear} />
	</div>

	<ButtonContainer
		primaryText="Login"
		secondaryText="Get Started"
		primaryHandle={handleLoginClick}
		secondaryHandle={handleGetStartedClick}
	/>
</div>
