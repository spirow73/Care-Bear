<script>
	import Profile from '../../lib/components/Profile.svelte';
	// import { createProfile, fetchProfile } from '../../lib/profileClient.js';
	// import { onMount } from 'svelte';

	// let profile = {
	// 	user_name: 'Maurice',
	// 	personal_goals: 'I want to be a better person.',
	// 	user_icon: 'Elephant'
	// };

	// onMount(async () => {
	// 	let response = await fetchProfile();
	// 	console.log(response);
	// });
</script>

<svelte:head>
	<title>User Profile</title>
</svelte:head>

<body>
	<Profile />
</body>
