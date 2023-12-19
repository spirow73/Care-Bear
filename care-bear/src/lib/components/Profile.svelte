<script>
    import { onMount } from 'svelte';
    import theme from '../../stores/themeStore.js';

    let userProfile = { name: '', email: '', avatarUrl: '/default-avatar.png' };
    let icons = [
        { name: 'Elephant', path: 'src/images/elephant.png' },
        { name: 'Bee', path: 'src/images/bee.png' },
        { name: 'Whale', path: 'src/images/whale.png' },
        { name: 'Cat', path: 'src/images/cat.png' },
        // Add more icon objects here
    ];
    let personalGoals = '';
    let privacySettings = { shareData: true };
    let reminderSettings = {
        enableReminders: false,
        reminderFrequency: 'daily', // 'daily', 'weekly', or 'monthly'
    };

        // Function to handle icon selection
        function handleIconSelect(event) {
        const selectedIcon = icons.find(icon => icon.name === event.target.value);
        userProfile.avatarUrl = selectedIcon.path;
    }

    onMount(async () => {
        const user = supabase.auth.user();
        if (user) {
            const { data, error } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', user.id)
                .single();

            if (error) {
                console.error('Error fetching profile:', error);
            } else {
                userProfile = data;
                personalGoals = data.personalGoals || '';
                privacySettings.shareData = data.shareData || false;
                updateThemeClass();
            }
        }
    });

    function updateThemeClass() {
        if (userProfile.theme === 'dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }

    function toggleDarkMode() {
        userProfile.theme = userProfile.theme === 'light' ? 'dark' : 'light';
        updateThemeClass();
        // Update the user profile in your database if needed
    }

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




<div class="max-w-screen-md mx-auto mt-10 rounded-lg bg-orange-200 dark:bg-gray-800 shadow-lg">
    <div class="p-6">
        <div class="flex items-center space-x-6 mb-6">
            <img src={userProfile.avatarUrl} alt="User Avatar" class="h-16 w-16 rounded-full object-cover" />
            {#if userProfile.name && userProfile.email}
            <div>
                <h1 class="text-2xl font-bold text-gray-800 dark:text-white">{userProfile.name}</h1>
                <p class="text-sm text-gray-600 dark:text-gray-300">{userProfile.email}</p>
            </div>
        {/if}
        
            
  
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

        <!-- Customization Options -->
        <div class="mb-6">
            <label for="theme" class="font-bold mb-2 block dark:text-gray-300">App Theme:</label>
            <select id="theme" class="rounded-md border-gray-300 border p-2 w-full dark:border-gray-600 dark:bg-gray-700 dark:text-white" on:change={toggleDarkMode}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
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
                <input type="checkbox" bind:checked={privacySettings.shareData} on:change={togglePrivacySetting} class="rounded border-gray-300 h-5 w-5 dark:border-gray-600 dark:bg-gray-700" />
                <span class="ml-2">Share data for research purposes</span>
            </label>
        </div>
        <!-- Reminder Settings -->
        <div class="mb-6">
            <label class="flex items-center dark:text-gray-300">
                <input type="checkbox" bind:checked={reminderSettings.enableReminders} on:change={toggleReminders} class="rounded border-gray-300 h-5 w-5 dark:border-gray-600 dark:bg-gray-700" />
                <span class="ml-2">Enable Reminders</span>
            </label>
        
            <div class="mt-4">
                <label for="reminderFrequency" class="font-bold mb-2 block dark:text-gray-300">Reminder Frequency:</label>
                <select id="reminderFrequency" bind:value={reminderSettings.reminderFrequency} on:change={changeReminderFrequency} class="rounded-md border-gray-300 border p-2 w-full dark:border-gray-600 dark:bg-gray-700 dark:text-white">
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                </select>
            </div>
        </div>
        <!-- Account Management -->
        <div class="flex justify-start space-x-2">
            <button on:click={changePassword} class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">Change Password</button>
            <button on:click={deleteAccount} class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400">Delete Account</button>
        </div>


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
    
    </div>

</div>


