<script>
	import ButtonContainer from '$lib/components/generic/ButtonContainer.svelte';
	import InputField from '$lib/components/generic/InputField.svelte';
	import { goto } from '$app/navigation';
	import { loginUser } from '$lib/auth';

	let email = '';
	let password = '';

	async function handleLoginClick() {
		await loginUser(email, password);
		goto('/'); // Redirige solo si el inicio de sesión es exitoso
	}

	function handleGetStartedClick() {
		goto('/register');
	}

	async function handleSubmit(event) {
		event.preventDefault();
		await handleLoginClick(); // Solo maneja el inicio de sesión, no redirige
	}
</script>

<form
	on:submit|preventDefault={handleSubmit}
	class="flex flex-col items-center justify-center min-h-screen m-4"
>
	<h1 class="text-5xl font-bold text-gray-800 mb-10 text-center">Login into Care bear</h1>
	<div class="space-y-4">
		<InputField type="text" placeholder="Email" bind:value={email} />
		<InputField type="password" placeholder="Password" bind:value={password} />
		<ButtonContainer
			primaryText="Login"
			primaryHandle={handleLoginClick}
			secondaryText="Get Started"
			secondaryHandle={handleGetStartedClick}
		/>
	</div>
</form>
