// Create a writable object with user id and session token
import { writable } from 'svelte/store';
import { supabase } from './supabaseClient';
import taskStore from './taskStore';
import journalStore from './journalStore';

const initialState = {
	accessToken: null,
	refreshToken: null,
	user: null,
	expiresAt: null
};

const userStore = writable(initialState);

const setSession = (data) => {
	if (data) {
		// Desestructura los campos relevantes de 'session' y 'user'
		const { session, user } = data;

		if (session && user) {
			// Asumiendo que la sesión contiene 'access_token', 'refresh_token', y 'expires_in'
			const { access_token, refresh_token, expires_in } = session;
			const expires_at = new Date().getTime() + expires_in * 1000; // Convierte 'expires_in' a una fecha de expiración

			userStore.set({
				accessToken: access_token,
				refreshToken: refresh_token,
				user: user,
				expiresAt: expires_at // Esto asume que 'expires_in' es el tiempo en segundos hasta que la sesión expire
			});
		} else {
			console.error('Error: La estructura de la sesión recibida de Supabase no es la esperada.');
			userStore.set(initialState);
		}
	} else {
		userStore.set(initialState);
	}
};

const logOut = async () => {
	await supabase.auth.signOut();
	userStore.set(initialState);
	taskStore.logOut();
	journalStore.logOut();

	console.log('Logged out');
};

export default {
	subscribe: userStore.subscribe,
	setSession,
	logOut
};
