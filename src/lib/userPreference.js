// src/lib/services/userPreferences.js
import { supabase } from '$lib/supabaseClient';


export async function fetchUserPreferences(userId) {
    let { data, error } = await supabase
        .from('user_preferences')
        .select('reminder_enabled')
        .eq('user_id', userId)
        .single();

    if (error) throw error;
    return data ? data.reminder_enabled : false;
}

export async function updateUserPreferences(userId, reminderEnabled) {
    let { error } = await supabase
        .from('user_preferences')
        .update({ reminder_enabled: reminderEnabled })
        .eq('user_id', userId);

    if (error) throw error;
}
