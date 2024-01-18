import { supabase } from './supabaseClient.js';

const LOCAL_STORAGE_KEY = 'userProfile';

export async function fetchUserProfile(supabase, userId) {
    const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

    if (error) {
        console.error('Error fetching profile:', error);
        return null;
    } else {
        // Save the fetched profile data to local storage
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
        return data;
    }
}

export function getUserProfile() {
    const storedProfile = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedProfile) {
        return JSON.parse(storedProfile);
    }
    return null; // Or return a default profile object
}

export async function updateUserProfile(supabase, userId, updatedProfile) {
    const { error } = await supabase
        .from('profiles')
        .update({ ...updatedProfile })
        .eq('id', userId);

    if (error) {
        console.error('Error updating profile:', error);
        return false;
    } else {
        // Update local storage with the new profile data
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedProfile));
        return true;
    }
}
