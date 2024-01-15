<script>
	import ButtonContainer from '$lib/components/generic/ButtonContainer.svelte';
	import InputField from '$lib/components/generic/InputField.svelte';
	import { goto } from '$app/navigation';
	import { loginUser } from '$lib/auth';
	import user from '$lib/userStore';

	let email = '';
	let password = '';

	let error = '';

	async function handleLoginClick() {
		await loginUser(email, password);
		if ($user.user) {
			goto('/');
		}
		error = 'Login failed';
	}

	function handleGetStartedClick() {
		goto('/register');
	}

	async function handleSubmit(event) {
		event.preventDefault();
		let loginSuccess = handleLoginClick(); // Asegúrate de que handleLoginClick devuelve true/false basado en el éxito del login
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

		<p>{error}</p>
	</div>
</form>
