<script>
    import { onMount } from 'svelte';

    let userProfile = {};

    onMount(async () => {
        const user = supabase.auth.user();
        if (user) {
            const { data, error } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', user.id)
                .single();

            if (error) console.error('Error fetching profile:', error);
            else userProfile = data;
        }
    });

    async function updateProfile() {
        // Function to update user profile details
        // Implement the logic to update the profile in Supabase
    }
</script>

<div class="container">
    <h1>User Profile</h1>
    {#if userProfile}
        <div class="profile-info">
            <p><strong>Name:</strong> {userProfile.name}</p>
            <p><strong>Email:</strong> {userProfile.email}</p>
            <!-- More fields can be added here -->
        </div>

        <form on:submit|preventDefault={updateProfile}>
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" bind:value={userProfile.name} />
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" bind:value={userProfile.email} />
            </div>
            <!-- Additional fields for profile update -->
            <button type="submit">Update Profile</button>
        </form>
    {/if}
</div>

<style>
    /* CSS styles */
    .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
    }
    .form-group {
        margin-bottom: 15px;
    }
    label, input, button {
        display: block;
        width: 100%;
    }
    input, button {
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
</style>
