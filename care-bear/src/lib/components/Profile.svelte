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
        // Update privacy settings in database
    }
</script>

<div class="container">
    <h1>User Profile</h1>
    {#if userProfile}
        <div class="profile-info">
            <p><strong>Name:</strong> {userProfile.name}</p>
            <p><strong>Email:</strong> {userProfile.email}</p>
        </div>

        <!-- Customization Options -->
        <div class="form-group">
            <label for="theme">App Theme:</label>
            <select id="theme" bind:value={userProfile.theme}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <!-- More themes can be added -->
            </select>
        </div>

        <!-- Personal Goals -->
        <div class="form-group">
            <label for="personalGoals">Personal Goals:</label>
            <textarea id="personalGoals" bind:value={personalGoals} placeholder="Enter your goals..."></textarea>
        </div>

        <!-- Privacy Settings -->
        <div class="form-group">
            <label>
                <input type="checkbox" bind:checked={privacySettings.shareData} on:change={togglePrivacySetting}>
                Share data for research purposes
            </label>
        </div>

        <!-- Account Management -->
        <button on:click={changePassword}>Change Password</button>
        <button on:click={deleteAccount}>Delete Account</button>

        <form on:submit|preventDefault={updateProfile}>
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" bind:value={userProfile.name} />
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" bind:value={userProfile.email} />
            </div>
            <button type="submit">Update Profile</button>
        </form>
    {/if}
</div>

<style>
    .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
    }
    .form-group {
        margin-bottom: 15px;
    }
    label, input, select, textarea, button {
        display: block;
        width: 100%;
    }
    input, select, textarea, button {
        padding: 8px;
        margin-top: 5px;
    }
    button {
        background-color: #4a90e2;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    button:hover {
        background-color: #3a7fd5;
    }
    textarea {
        height: 100px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
</style>
