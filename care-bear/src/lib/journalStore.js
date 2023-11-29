import { writable } from 'svelte/store';
import {
	fetchJournals,
	fetchJournalById,
	createJournal,
	updateJournal,
	deleteJournal
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
