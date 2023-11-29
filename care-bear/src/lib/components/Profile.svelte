<script>
	import { onMount } from 'svelte';

	let userProfile = {};
	let personalGoals = '';
	let privacySettings = { shareData: true };

	onMount(async () => {
		const user = supabase.auth.user();
		if (user) {
			const { data, error } = await supabase
				.from('profiles')
				.select('*')
				.eq('id', user.id)
				.single();

			if (error) console.error('Error fetching profile:', error);
			else {
				userProfile = data;
				personalGoals = data.personalGoals || '';
				privacySettings.shareData = data.shareData || false;
			}
		}
	});

	async function updateProfile() {
		// Implement the logic to update the profile in Supabase,
		// including personal goals and privacy settings
	}

	async function changePassword() {
		// Logic to handle password change
	}

	async function deleteAccount() {
		// Logic to handle account deletion
	}

	function togglePrivacySetting() {
		privacySettings.shareData = !privacySettings.shareData;
		// Update privacy settings in the database
	}
</script>

<div class="max-w-screen-md mx-auto mt-10 p-6 rounded-lg bg-white shadow-lg">
	<h1 class="text-2xl font-bold mb-4 text-center">User Profile</h1>
	{#if userProfile}
		<div class="profile-info mb-6">
			<p><strong>Name:</strong> {userProfile.name}</p>
			<p><strong>Email:</strong> {userProfile.email}</p>
		</div>

		<!-- Customization Options -->
		<div class="form-group mb-6">
			<label for="theme" class="font-bold mb-2 block">App Theme:</label>
			<select
				id="theme"
				class="rounded-md border-gray-300 border p-2 w-full"
				bind:value={userProfile.theme}
			>
				<option value="light">Light</option>
				<option value="dark">Dark</option>
				<!-- More themes can be added -->
			</select>
		</div>

		<!-- Personal Goals -->
		<div class="form-group mb-6">
			<label for="personalGoals" class="font-bold mb-2 block">Personal Goals:</label>
			<textarea
				id="personalGoals"
				bind:value={personalGoals}
				placeholder="Enter your goals..."
				class="rounded-md border-gray-300 border p-2 w-full"
				rows="4"
			/>
		</div>

		<!-- Privacy Settings -->
		<div class="form-group mb-6">
			<label class="flex items-center">
				<input
					type="checkbox"
					bind:checked={privacySettings.shareData}
					on:change={togglePrivacySetting}
					class="form-checkbox rounded border-gray-300 border h-5 w-5"
				/>
				<span class="ml-2">Share data for research purposes</span>
			</label>
		</div>

		<!-- Account Management -->
		<div class="flex justify-start space-x-2">
			<button
				on:click={changePassword}
				class="bg-blue-300 text-black px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 hover:bg-blue-600"
				>Change Password</button
			>
			<button
				on:click={deleteAccount}
				class="bg-red-300 text-black px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-400 hover:bg-red-600"
				>Delete Account</button
			>
		</div>

		<!-- Update Profile Form -->
		<form on:submit|preventDefault={updateProfile} class="mt-6">
			<div class="form-group mb-4">
				<label for="name" class="font-bold mb-2 block">Name:</label>
				<input
					type="text"
					id="name"
					bind:value={userProfile.name}
					class="rounded-md border-gray-300 border p-2 w-full"
				/>
			</div>
			<div class="form-group mb-4">
				<label for="email" class="font-bold mb-2 block">Email:</label>
				<input
					type="email"
					id="email"
					bind:value={userProfile.email}
					class="rounded-md border-gray-300 border p-2 w-full"
				/>
			</div>
			<button
				type="submit"
				class="bg-green-300 text-black px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400 hover:bg-green-600"
				>Update Profile</button
			>
		</form>
	{/if}
</div>
