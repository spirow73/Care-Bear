import { describe, expect, test, vi } from 'vitest';
import { registerUser, loginUser, logOut } from './auth';
import { supabase } from './supabaseClient';
import user from './userStore';

describe('registerUser', () => {
    test('should register a new user', async () => {
        const email = 'test@example.com';
        const password = 'password123';

        // Ajusta el mock para que refleje cómo se llama realmente a la función
        supabase.auth.signUp = vi.fn().mockResolvedValue({ user: { email, password } });

        // Llama a la función registerUser
        await registerUser(email, password);

        // Ajusta la aserción para que coincida con la forma en que se espera que se llame a la función
        expect(supabase.auth.signUp).toHaveBeenCalledWith({ email, password });
    });
});

describe('loginUser', () => {
    test('should log in a user and return data', async () => {
        const email = 'test@example.com';
        const password = 'password123';

        // Mock the supabase.auth.signInWithPassword function
        supabase.auth.signInWithPassword = vi.fn().mockResolvedValue({
            data: { userId: 1, email },
            error: null,
        });

        // También mockea user.setSession como un espía
        user.setSession = vi.fn();

        // Asegúrate de que el mock refleje cómo se llama realmente a la función
        // Llama a la función loginUser
        const result = await loginUser(email, password);

        // Ajusta la aserción para que coincida con la llamada esperada
        expect(result).toEqual({ userId: 1, email });
        expect(supabase.auth.signInWithPassword).toHaveBeenCalledWith({ email, password });
    });
});

describe('logOut', () => {
    test('should log out the user', () => {
        // Mock the supabase.auth.signOut function
        supabase.auth.signOut = vi.fn();

        // Call the logOut function
        logOut();

        // Assertions
        expect(supabase.auth.signOut).toHaveBeenCalled();
    });
});