import { writable, get } from 'svelte/store';
import {
	fetchJournals,
	fetchJournalById,
	createJournal,
	updateJournal,
	deleteJournal,
	editJournalEntry,
	createJournalEntry,
	deleteJournalEntry
} from './journalClient';

const journals = writable([]);

export async function loadJournals() {
	try {
		const loadedJournals = await fetchJournals();
		journals.set(loadedJournals);
	} catch (error) {
		console.error('Error loading journals:', error);
	}
}

export async function addJournal(newJournalData) {
	try {
		const newJournal = await createJournal(newJournalData);
		if (newJournal) {
			const journalWithEntries = { ...newJournal, journal_entry: [] };
			journals.update((currentJournals) => [...currentJournals, journalWithEntries]);
		} else {
			console.error('Received null or undefined journal');
		}
	} catch (error) {
		console.error('Error adding a new journal:', error);
	}
}

export async function editJournal(journalId, updatedJournalData) {
	try {
		const updatedJournal = await updateJournal(journalId, updatedJournalData);
		journals.update((currentJournals) =>
			currentJournals.map((journal) =>
				journal.journal_id === updatedJournal.journal_id ? updatedJournal : journal
			)
		);
	} catch (error) {
		console.error('Error updating journal:', error);
	}
}

export async function removeJournal(journalId) {
	try {
		await deleteJournal(journalId);
		journals.update((currentJournals) =>
			currentJournals.filter((journal) => journal.journal_id !== journalId)
		);
	} catch (error) {
		console.error('Error removing journal:', error);
	}
}

export async function removeJournalEntry(entryId) {
	try {
		await deleteJournalEntry(entryId);
		journals.update((currentJournals) =>
			currentJournals.map((journal) => ({
				...journal,
				journal_entry: journal.journal_entry.filter((entry) => entry.entry_id !== entryId)
			}))
		);
	} catch (error) {
		console.error('Error removing journal entry:', error);
	}
}

export async function addJournalEntry(journalId, userId, newEntryData) {
	try {
		if (!newEntryData || !userId) {
			throw new Error('newEntryData or userId is undefined');
		}

		const newEntry = await createJournalEntry(journalId, userId, newEntryData);

		journals.update((currentJournals) =>
			currentJournals.map((journal) =>
				journal.journal_id === journalId
					? { ...journal, journal_entry: [...journal.journal_entry, newEntry] }
					: journal
			)
		);
	} catch (error) {
		console.error('Error adding new journal entry:', error);
	}
}

export async function editJournalEntryInStore(journalId, entryId, updatedEntryData) {
	try {
		const updatedEntry = await editJournalEntry(entryId, updatedEntryData);
		journals.update((currentJournals) =>
			currentJournals.map((journal) =>
				journal.journal_id === journalId
					? {
							...journal,
							journal_entry: journal.journal_entry.map((entry) =>
								entry.entry_id === entryId ? updatedEntry : entry
							)
					  }
					: journal
			)
		);
	} catch (error) {
		console.error('Error updating journal entry in store:', error);
	}
}

export async function deleteJournalEntryInStore(journalId, entryId) {
	try {
		await deleteJournalEntry(entryId);
		journals.update((currentJournals) =>
			currentJournals.map((journal) =>
				journal.journal_id === journalId
					? {
							...journal,
							journal_entry: journal.journal_entry.filter((entry) => entry.entry_id !== entryId)
					  }
					: journal
			)
		);
	} catch (error) {
		console.error('Error deleting journal entry:', error);
	}
}

function logOut() {
	journals.set([]);
}

export default {
	subscribe: journals.subscribe,
	loadJournals,
	addJournal,
	editJournal,
	removeJournal,
	removeJournalEntry,
	addJournalEntry,
	editJournalEntryInStore,
	deleteJournalEntryInStore,
	logOut
};
