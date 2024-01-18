<script>
	import { onMount } from 'svelte';
	import { createProfile, fetchProfile, updateProfile } from '../profileClient.js';
	import toast, { Toaster } from 'svelte-french-toast';

	let updateStatus = '';
	let icons = [
		{ name: 'Elephant', path: 'src/lib/components/images/elephant.png' },
		{ name: 'Bee', path: 'src/lib/components/images/bee.png' },
		{ name: 'Whale', path: 'src/lib/components/images/whale.png' },
		{ name: 'Cat', path: 'src/lib/components/images/cat.png' },
		{ name: 'Koala', path: 'src/lib/components/images/koala.png' },
		{ name: 'Chameleon', path: 'src/lib/components/images/chameleon.png' },
		{ name: 'Turtle', path: 'src/lib/components/images/turtle.png' },
		{ name: 'Fox', path: 'src/lib/components/images/fox.png' }
		// Add more icon objects here
	];

	let profile = {
		user_name: '',
		personal_goals: '',
		user_icon: icons[0].name // Guarda el nombre del icono
	};
	function handleIconChange(event) {
		const iconName = event.target.value;
		profile.user_icon = iconName; // Actualiza el nombre del icono
		iconPath = getIconPath(iconName); // Actualiza iconPath con la nueva ruta
	}

	// Esta función ahora devuelve directamente el resultado de find()
	const getIconPath = (iconName) => {
		const icon = icons.find((icon) => icon.name === iconName);
		return icon ? icon.path : '';
	};

	let iconPath = getIconPath(profile.user_icon); // Inicializa iconPath con la ruta del icono actual

	let isProfileNew = true; // Flag para determinar si el perfil es nuevo

	onMount(async () => {
		let fetchedProfile = await fetchProfile();
		console.log(fetchedProfile);
		console.log(fetchedProfile);
		if (fetchedProfile) {
			profile = fetchedProfile;
			iconPath = getIconPath(profile.user_icon); // Asegúrate de que user_icon sea el nombre
			isProfileNew = false; // El perfil ya existe
		}
	});

	const handleSubmit = async () => {
		if (isProfileNew) {
			// Crea un nuevo perfil si el perfil es nuevo
			console.log(profile);
			await createProfile(profile);
		} else {
			// Actualiza el perfil existente
			await updateProfile(profile);
			console.log(profile);
		}
		toast.success('Profile updated!', {
			style: 'background: #84B59F'
		});
	};
</script>

<Toaster />
<div class="max-w-screen-md mx-auto mt-10 rounded-lg bg-fuchsia-100 dark:bg-gray-800 shadow-lg">
	<div class="p-6">
		<form on:submit|preventDefault={handleSubmit}>
			<!-- Icon Selection Dropdown -->
			<div class="mb-6">
				<img src={iconPath} alt="User Avatar" class="h-16 w-16 rounded-full object-cover" />

				<p class="font-bold mb-2 block dark:text-gray-300">
					Welcome, {profile.user_name}
				</p>
				<label for="icon-select" class="font-bold mb-2 block dark:text-gray-300"
					>Choose an Icon:</label
				>
				<select
					id="icon-select"
					on:change={handleIconChange}
					class="rounded-md border-gray-300 border p-2 w-full dark:border-gray-600 dark:bg-gray-700 dark:text-white"
				>
					{#each icons as icon}
						<option value={icon.name}>{icon.name}</option>
					{/each}
				</select>
			</div>

			<!-- Personal Goals -->
			<div class="mb-6">
				<label for="personalGoals" class="font-bold mb-2 block dark:text-gray-300"
					>Personal Goals:</label
				>
				<textarea
					id="personalGoals"
					bind:value={profile.personal_goals}
					placeholder="Enter your goals..."
					class="rounded-md border-gray-300 border p-2 w-full dark:border-gray-600 dark:bg-gray-700 dark:text-white"
					rows="4"
				/>
			</div>

			<!-- Profile Update Status Message -->
			{#if updateStatus}
				<div class="my-4 p-3 bg-green-200 text-green-800 rounded">
					{updateStatus}
				</div>
			{/if}

			<!-- Name Input -->
			<div class="mb-4">
				<label for="name" class="font-bold mb-2 block dark:text-gray-300">Name:</label>
				<input
					type="text"
					id="name"
					bind:value={profile.user_name}
					class="rounded-md border-gray-300 border p-2 w-full dark:border-gray-600 dark:bg-gray-700 dark:text-white"
				/>
			</div>

			<button
				type="submit"
				class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
			>
				{isProfileNew ? 'Create Profile' : 'Update Profile'}
			</button>
		</form>

		<!-- Account Management -->
		<div class="flex justify-start space-x-2 mt-4">
			<!-- <button
				on:click={changePassword}
				class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
			>
				Change Password
			</button> -->
			<!-- <button
				on:click={deleteAccount}
				class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
			>
				Delete Account
			</button> -->
		</div>
	</div>
</div>
