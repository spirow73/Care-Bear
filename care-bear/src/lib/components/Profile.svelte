<script>
    import { onMount } from 'svelte';
    import { reminderEnabled } from '../reminderStore.js';
    import { shareData } from '../shareData.js';
    import { checkForUpcomingReminders } from '../taskStore.js'
    import { supabase } from '../supabaseClient.js';
    import * as ProfileInfo from '../profileInfo.js';

    
    $: if ($reminderEnabled) {
    // Enable reminder checks
    checkForUpcomingReminders();
} else {
    // Disable reminders or clear any set intervals if applicable
}
 

    let personalGoals = '';
    let userProfile = { name: '', email: '', avatarUrl: '/src/lib/components/images/elephant.png' };
    let icons = [
        { name: 'Elephant', path: 'src/lib/components/images/elephant.png' },
        { name: 'Bee', path: 'src/lib/components/images/bee.png' },
        { name: 'Whale', path: 'src/lib/components/images/whale.png' },
        { name: 'Cat', path: 'src/lib/components/images/cat.png' },
        { name: 'Koala', path: 'src/lib/components/images/koala.png' },
        { name: 'Chameleon', path: 'src/lib/components/images/chameleon.png' },
        { name: 'Turtle', path: 'src/lib/components/images/turtle.png' },
        { name: 'Fox', path: 'src/lib/components/images/fox.png' },
        // Add more icon objects here
    ];
      // Initialize privacySettings object
  let privacySettings = {
    shareData: false // Set a default value
  };


    let updateStatus = '';
    // Function to handle icon selection
    function handleIconSelect(event) {
        const selectedIcon = icons.find(icon => icon.name === event.target.value);
        userProfile.avatarUrl = selectedIcon.path;
    }
    
    
    
    onMount(async () => {
        const user = supabase.auth.user();
        if (user) {
            const profile = await ProfileInfo.fetchUserProfile(supabase, user.id);
            if (profile) {
                userProfile = profile;
                // Other initialization code...
            }
        }
            // Load reminder settings from local storage
    const storedReminderSetting = localStorage.getItem('enableReminders');
    if (storedReminderSetting !== null) {
        reminderSettings.enableReminders = storedReminderSetting === 'true';
    }
    });

    async function updateProfile(name, email) {
    const user = supabase.auth.user()

    if (user) {
        const { data, error } = await supabase
            .from('user')
            .update({ username, email })
            .eq('id', user.id)

        if (error) {
            console.error('Error updating profile:', error);
        } else {
            // Profile updated successfully
        }
    }
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

<div class="max-w-screen-md mx-auto mt-10 rounded-lg bg-fuchsia-100 dark:bg-gray-800 shadow-lg">
    <div class="p-6">
        <div class="flex items-center space-x-6 mb-6">
            <img src={userProfile.avatarUrl} alt="User Avatar" class="h-16 w-16 rounded-full object-cover" />
            <div>
                <h1 class="text-2xl font-bold text-gray-800 dark:text-white">{userProfile.name}</h1>
                <p class="text-sm text-gray-600 dark:text-gray-300">{userProfile.email}</p>
            </div>
        </div>

                <!-- Icon Selection Dropdown -->
                <div class="mb-6">
                    <label for="icon-select" class="font-bold mb-2 block dark:text-gray-300">Choose an Icon:</label>
                    <select id="icon-select" on:change={handleIconSelect} class="rounded-md border-gray-300 border p-2 w-full dark:border-gray-600 dark:bg-gray-700 dark:text-white">
                        {#each icons as icon}
                            <option value={icon.name}>{icon.name}</option>
                        {/each}
                    </select>
                </div>

        <!-- Personal Goals -->
        <div class="mb-6">
            <label for="personalGoals" class="font-bold mb-2 block dark:text-gray-300">Personal Goals:</label>
            <textarea id="personalGoals" bind:value={personalGoals} placeholder="Enter your goals..." class="rounded-md border-gray-300 border p-2 w-full dark:border-gray-600 dark:bg-gray-700 dark:text-white" rows="4" />
        </div>

        <!-- Privacy Settings -->
        <div class="mb-6">
            <label class="flex items-center dark:text-gray-300">
                <input type="checkbox" bind:checked={$shareData}>
                <span class="ml-2">Share data for research purposes</span>
            </label>
        </div>
        <!-- Reminder Settings -->
        <div class="mb-6">
            <label class="flex items-center dark:text-gray-300">
                <input type="checkbox" bind:checked={$reminderEnabled}>
                <span class="ml-2">Enable Reminders</span>
            </label>
        </div>

            <!-- Profile Update Status Message -->
    {#if updateStatus}
    <div class="my-4 p-3 bg-green-200 text-green-800 rounded">
        {updateStatus}
    </div>
{/if}


        <!-- Update Profile Form -->
        <form on:submit|preventDefault={updateProfile} class="mt-6">
            <div class="mb-4">
                <label for="name" class="font-bold mb-2 block dark:text-gray-300">Name:</label>
                <input type="text" id="name" bind:value={userProfile.name} class="rounded-md border-gray-300 border p-2 w-full dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
            </div>
            <div class="mb-4">
                <label for="email" class="font-bold mb-2 block dark:text-gray-300">Email:</label>
                <input type="email" id="email" bind:value={userProfile.email} class="rounded-md border-gray-300 border p-2 w-full dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
            </div>
            <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400">Update Profile</button>
        </form>
 <br>
                <!-- Account Management -->
                <div class="flex justify-start space-x-2">
                    <button on:click={changePassword} class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">Change Password</button>
                    <button on:click={deleteAccount} class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400">Delete Account</button>
                </div>
    </div>

</div>


