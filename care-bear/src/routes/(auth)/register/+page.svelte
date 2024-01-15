<script>
	import ButtonContainer from '$lib/components/generic/ButtonContainer.svelte';
	import InputField from '$lib/components/generic/InputField.svelte';
	import { goto } from '$app/navigation';
	import { registerUser } from '$lib/auth';

	let username = '';
	let email = '';
	let password = '';
	let confirmPassword = '';
	let errorMessage = '';

	async function handleSubmit(event) {
		// Evita el comportamiento por defecto del formulario (recargar la página)
		event.preventDefault();
		await handleSignUpClick();
	}

	async function handleSignUpClick() {
		if (password !== confirmPassword) {
			errorMessage = 'Las contraseñas no coinciden';
		} else {
			try {
				// Suponiendo que registerUser es una función asíncrona
				await registerUser(email, password);
				// Redirige al usuario a la página principal tras un registro exitoso
				goto('/');
			} catch (error) {
				// Manejar errores de registro, si los hay
				errorMessage = 'Error en el registro: ' + error.message;
			}
		}
	}

	function handleLoginClick() {
		// Logic to handle login goes here
		goto('/login');
	}
</script>

<form
	on:submit|preventDefault={handleSubmit}
	class="flex flex-col items-center justify-center min-h-screen m-5"
>
	<h1 class="text-5xl font-bold text-gray-800 mb-10 text-center">Sign up</h1>
	<div class="space-y-4">
		<!-- Tus InputField existentes... -->

		<!-- Mensaje de error para las contraseñas -->
		<InputField type="email" placeholder="E-mail" bind:value={email} />
		<InputField type="password" placeholder="Password" bind:value={password} />
		<!-- Error message for the password -->
		{#if errorMessage}
			<p class="text-red-500">{errorMessage}</p>
		{/if}
		<InputField type="password" placeholder="Confirm password" bind:value={confirmPassword} />

		<ButtonContainer
			primaryText="Sign-up"
			secondaryText="Login"
			primaryHandle={handleSignUpClick}
			secondaryHandle={handleLoginClick}
		/>
	</div>
</form>
