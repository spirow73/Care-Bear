import { supabase } from './supabaseClient';
import user from './userStore';
import { get } from 'svelte/store';

export async function fetchJournals() {
	try {
		// Obtén el estado actual del userStore
		const currentUser = get(user);

		// Verifica si hay un usuario y un ID de usuario en la store
		if (!currentUser || !currentUser.user || !currentUser.user.id) {
			throw new Error('No user ID found in the store.');
		}

		// Utiliza el ID del usuario para obtener los journals asociados
		const { data, error } = await supabase
			.from('journal')
			.select('*, journal_entry:journal_id ( * )')
			.eq('user_id', currentUser.user.id); // Asume que tus journals tienen un campo 'user_id'
		if (error) throw error;
		return data;
	} catch (error) {
		console.error('Error fetching journals:', error);
		throw error;
	}
}

export async function fetchJournalById(journalId) {
	try {
		const { data, error } = await supabase
			.from('journal')
			.select('*')
			.eq('journal_id', journalId)
			.single();
		if (error) throw error;
		return data;
	} catch (error) {
		console.error('Error fetching journal:', error);
		throw error;
	}
}

export async function createJournal(journal) {
	try {
		const currentUser = get(user);
		if (!currentUser || !currentUser.user || !currentUser.user.id) {
			throw new Error('No user ID found in the store.');
		}

		// Añade el ID del usuario al objeto del journal antes de insertarlo
		journal.user_id = currentUser.user.id;

		console.log(journal);

		const { data, error } = await supabase.from('journal').insert([journal]).select();
		if (error) throw error;
		return data[0];
	} catch (error) {
		console.error('Error creating journal:', error);
		throw error;
	}
}

export async function updateJournal(journalId, updatedFields) {
	try {
		const { data, error } = await supabase
			.from('journal')
			.update(updatedFields)
			.eq('journal_id', journalId)
			.select();
		if (error) throw error;
		return data[0];
	} catch (error) {
		console.error('Error updating journal:', error);
		throw error;
	}
}

export async function deleteJournal(journalId) {
	try {
		// Elimina todas las entradas de journal asociadas
		const { error: deleteEntriesError } = await supabase
			.from('journal_entry') // Asegúrate de que este es el nombre correcto de la tabla
			.delete()
			.eq('journal_id', journalId)
			.select();
		if (deleteEntriesError) throw deleteEntriesError;

		// Una vez que todas las entradas estén eliminadas, elimina el journal
		const { data, error: deleteJournalError } = await supabase
			.from('journal')
			.delete()
			.eq('journal_id', journalId)
			.select();
		if (deleteJournalError) throw deleteJournalError;

		return data;
	} catch (error) {
		console.error('Error deleting journal and its entries:', error);
		throw error;
	}
}

export async function createJournalEntry(journalId, userId, newEntryData) {
	try {
		// Desestructura el objeto newEntryData para asegurarte de que todos los campos
		// sean pasados individualmente y no como un objeto.
		const { title, content } = newEntryData;

		const entry = {
			title,
			content,
			user_id: userId,
			journal_id: journalId,
			// Si tu base de datos no crea automáticamente el timestamp, deberías añadirlo aquí.
			// Y como no se si se crea automáticamente, puedes omitir esta línea.
			timestamp: new Date().toISOString()
		};

		const { data, error } = await supabase.from('journal_entry').insert([entry]).select();

		if (error) {
			throw error;
		}

		return data[0]; // Devuelve la entrada recién creada
	} catch (error) {
		console.error('Error creating journal entry:', error);
		throw error;
	}
}

export async function editJournalEntry(entryId, updatedEntryData) {
	try {
		const { data, error } = await supabase
			.from('journal_entry')
			.update(updatedEntryData)
			.eq('journal_entry_id', entryId)
			.select();

		if (error) {
			throw error;
		}

		return data[0];
	} catch (error) {
		console.error('Error updating journal entry:', error);
		throw error;
	}
}

// Eliminar una entrada de journal por ID
export async function deleteJournalEntry(entryId) {
	try {
		// Elimina la entrada de journal de la base de datos
		const { data, error } = await supabase
			.from('journal_entry') // Asegúrate de que este es el nombre correcto de la tabla
			.delete()
			.eq('journal_entry_id', entryId);
		if (error) throw error;

		return data;
	} catch (error) {
		console.error('Error deleting journal entry:', error);
		throw error;
	}
}
