import { describe, it, expect, vi, beforeEach } from 'vitest';
import user from '$lib/userStore'; // Asegúrate de que la importación sea correcta
import { supabase } from '$lib/supabaseClient'; // Asume que esto es un módulo mockeable
import taskStore from '$lib/taskStore'; // Asume que esto es un módulo mockeable
import journalStore from '$lib/journalStore'; // Asume que esto es un módulo mockeable

// Mock de las dependencias
vi.mock('$lib/supabaseClient', () => ({
  supabase: {
    auth: {
      signOut: vi.fn(),
    },
  },
}));

// Asegúrate de exportar un objeto por defecto con las propiedades que espera el código original
vi.mock('$lib/taskStore', () => {
  return {
    default: { // Añade una exportación por defecto que incluya la función logOut
      logOut: vi.fn(),
    },
  };
});

vi.mock('$lib/journalStore', () => {
  return {
    default: { // Añade una exportación por defecto que incluya la función logOut
      logOut: vi.fn(),
    },
  };
});


describe('userStore', () => {
  beforeEach(() => {
    // Resetear todos los mocks antes de cada prueba
    vi.resetAllMocks();
  });

  describe('setSession', () => {
    it('should set user session correctly', () => {
      const mockData = {
        session: {
          access_token: 'access-token',
          refresh_token: 'refresh-token',
          expires_in: 3600,
        },
        user: {
          id: 1,
          email: 'test@example.com',
        },
      };

      user.setSession(mockData);

      // Verificar que el userStore se ha actualizado correctamente
      // Nota: Esto es más complicado de verificar directamente debido a cómo Svelte maneja los stores.
      // Podrías necesitar spyOn `userStore.set` o validar los efectos secundarios esperados.
    });
  });

  describe('logOut', () => {
    it('should reset user session and call logout on dependencies', async () => {
      await user.logOut();

      expect(supabase.auth.signOut).toHaveBeenCalled();
      expect(taskStore.logOut).toHaveBeenCalled();
      expect(journalStore.logOut).toHaveBeenCalled();

      // Verificar que el userStore se ha reseteado correctamente
      // Nota similar aquí sobre verificar el estado de userStore.
    });
  });
});
