import { writable, get } from 'svelte/store';
import {
	fetchJournals,
	fetchJournalById,
	createJournal,
	updateJournal,
	deleteJournal,
	editJournalEntry
} from './journalClient';

// Este es el store que mantendrá los datos de tus journals
export const journals = writable([]);

// Carga inicial de los journals desde la base de datos
export async function loadJournals() {
	try {
		const loadedJournals = await fetchJournals();
		journals.set(loadedJournals);
	} catch (error) {
		console.error('Error loading journals:', error);
	}
}

// Añadir un nuevo journal
export async function addJournal(newJournalData) {
	try {
		const newJournal = await createJournal(newJournalData);
		journals.update((currentJournals) => {
			return [newJournal, ...currentJournals];
		});
	} catch (error) {
		console.error('Error adding a new journal:', error);
	}
}

// Actualizar un journal existente
export async function editJournal(journalId, updatedJournalData) {
	try {
		const updatedJournal = await updateJournal(journalId, updatedJournalData);
		journals.update((currentJournals) => {
			return currentJournals.map((journal) =>
				journal.id === updatedJournal.id ? updatedJournal : journal
			);
		});
	} catch (error) {
		console.error('Error updating journal:', error);
	}
}

// Eliminar un journal
export async function removeJournal(journalId) {
	try {
		await deleteJournal(journalId);
		journals.update((currentJournals) => {
			return currentJournals.filter((journal) => journal.id !== journalId);
		});
	} catch (error) {
		console.error('Error removing journal:', error);
	}
}

// Cargar un journal específico por ID - opcional, dependiendo de tu uso
export async function getJournal(journalId) {
	try {
		const journal = await fetchJournalById(journalId);
		return journal;
	} catch (error) {
		console.error('Error fetching a specific journal:', error);
	}
}

// Función para obtener todas las entradas de un journal específico por ID
export async function getJournalEntries(journalId) {
	let loadedJournals = get(journals);

	// Si el store está vacío, carga los datos antes de intentar acceder a ellos
	if (loadedJournals.length === 0) {
		await loadJournals();
		loadedJournals = get(journals);
	}

	const journal = loadedJournals.find((j) => j.journal_id === journalId);

	// Devuelve las entradas de ese journal, si existen
	return journal ? journal.journal_entry : [];
}

export async function updateJournalEntryInStore(entryId, updatedEntryData) {
	try {
		// Primero actualiza la entrada en la base de datos
		const updatedEntry = await editJournalEntry(entryId, updatedEntryData);

		// Actualiza el store
		journals.update((currentJournals) => {
			return currentJournals.map((journal) => {
				// Comprueba si el journal actual contiene la entrada que estamos actualizando
				if (journal.journal_entry.some((entry) => entry.journal_entry_id === entryId)) {
					// Actualiza la entrada específica dentro del journal
					return {
						...journal,
						journal_entry: journal.journal_entry.map((entry) => {
							if (entry.journal_entry_id === entryId) {
								return { ...entry, ...updatedEntry };
							}
							return entry;
						})
					};
				}
				return journal;
			});
		});

		console.log(get(journals));
		return updatedEntry;
	} catch (error) {
		console.error('Error updating journal entry in store:', error);
	}
}
