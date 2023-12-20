<!--Login-->
<script>
	import ButtonContainer from '$lib/components/generic/ButtonContainer.svelte';
	import InputField from '$lib/components/generic/InputField.svelte';
	import { goto } from '$app/navigation';

	let username = '';
	let password = '';

	function handleLoginClick() {
		// Logic to handle login
		alert(`Signing up with: ${username} and password: ${password}`);
	}

	function handleGetStartedClick() {
		goto('/sign-up');
	}
</script>

<div class="flex flex-col items-center justify-center min-h-screen m-4">
	<h1 class="text-5xl font-bold text-gray-800 mb-10 text-center">Login into Care bear</h1>
	<div class="space-y-4">
		<InputField type="text" placeholder="User name" bind:value={username} />
		<InputField type="password" placeholder="Password" bind:value={password} />
		<ButtonContainer
			primaryText="Login"
			secondaryText="Get Started"
			primaryHandle={handleLoginClick}
			secondaryHandle={handleGetStartedClick}
		/>
	</div>
</div>
