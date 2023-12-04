// Importing necessary functions from external modules/files
import { writable } from 'svelte/store';
import { fetchJournalsWithEntries, addJournalEntry, deleteJournalEntry } from './journalClient';

export const journalData = writable(null);

export async function loadJournals() {
	try {
		const journals = await fetchJournalsWithEntries();
		journalData.set(journals);
		console.log('journals', journals);
	} catch (error) {
		console.error('Error loading journals:', error);
	}
}
