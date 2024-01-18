import { supabase } from './supabaseClient';
import { get } from 'svelte/store';
import user from './userStore';

async function registerUser(email, password) {
	const { data, error } = await supabase.auth.signUp({
		email: email,
		password: password
	});

	if (!error && data) {
		user.setSession(data);
	}

	if (error) {
		console.error('Error logging in:', error);
		return error;
	}
}

async function loginUser(email, password) {
	const { data, error } = await supabase.auth.signInWithPassword({
		email: email,
		password: password
	});

	if (!error && data) {
		// Pasamos el objeto completo a 'setSession'
		user.setSession(data);
	}

	if (error) {
		console.error('Error logging in:', error);
		return error;
	}
	return data;
}

function logOut() {
	user.logOut();
	supabase.auth.signOut();
}

export { registerUser, loginUser, logOut };
