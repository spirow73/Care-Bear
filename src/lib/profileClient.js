import { supabase } from './supabaseClient';
import user from './userStore';
import { get } from 'svelte/store';

export async function fetchProfile() {
	const currentUser = get(user);
	const user_id = currentUser.user.id;
	if (!currentUser || !currentUser.user || !currentUser.user.id) {
		throw new Error('No user ID found in the store.');
	}

	const { data, error } = await supabase.from('profile').select('*').eq('user_id', user_id);

	if (error) {
		console.error('Error fetching profile:', error);
		return null;
	} else {
		return data[0];
	}
}

export async function createProfile(profile) {
	const currentUser = get(user);
	const user_id = currentUser.user.id;
	if (!currentUser || !currentUser.user || !currentUser.user.id) {
		throw new Error('No user ID found in the store.');
	}

	profile.user_id = user_id;

	const { data, error } = await supabase.from('profile').insert([profile]).select();

	if (error) {
		console.error('Error creating profile:', error);
		throw error;
	}

	return data[0];
}

export async function updateProfile(profile) {
	const currentUser = get(user);
	const user_id = currentUser.user.id;
	if (!currentUser || !currentUser.user || !currentUser.user.id) {
		throw new Error('No user ID found in the store.');
	}

	profile.user_id = user_id;

	const { data, error } = await supabase
		.from('profile')
		.update(profile)
		.eq('user_id', user_id)
		.select();

	if (error) {
		console.error('Error updating profile:', error);
		throw error;
	}

	return data[0];
}
