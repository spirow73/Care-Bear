import { supabase } from './supabaseClient';

async function loginWithGoogle() {
	const { data, error } = await supabase.auth.signInWithOAuth({
		provider: 'google'
	});

	console.log('data:', data);

	// Si no hay error y el usuario está presente
	if (!error && data) {
	}

	if (error) {
		console.error('Error logging in:', error);
	}
}

function logOut() {
	supabase.auth.signOut();
}

export { loginWithGoogle, logOut };

import { supabase } from './supabaseClient';

async function loginWithGoogle() {
  const { user, session, error } = await supabase.auth.signIn({
    provider: 'google',
  });

  if (error) {
    console.error('Error during login:', error);
    return { error };
  }

  return { user, session };
}
