<script>
	import ButtonContainer from '../../components/ButtonContainer.svelte';
	import InputField from '../../components/InputField.svelte';
	import { goto } from '$app/navigation';

	let username = '';
	let email = '';
	let password = '';
	let confirmPassword = '';

	function handleSignUpClick() {
		alert(`Signing up with: ${username} and password: ${password}`);
	}

	function handleLoginClick() {
		// Logic to handle login goes here
		goto('/login');
	}
</script>

<div class="flex flex-col items-center justify-center min-h-screen m-5">
	<h1 class="text-5xl font-bold text-gray-800 mb-10 text-center">Sign up</h1>
	<div class="space-y-4">
		<InputField type="text" placeholder="User name" bind:value={username} />
		<InputField type="email" placeholder="E-mail" bind:value={email} />
		<InputField type="password" placeholder="Password" bind:value={password} />
		<InputField type="password" placeholder="Confirm password" bind:value={confirmPassword} />

		<ButtonContainer
			primaryText="Sign-up"
			secondaryText="Login"
			primaryHandle={handleSignUpClick}
			secondaryHandle={handleLoginClick}
		/>
	</div>
</div>
