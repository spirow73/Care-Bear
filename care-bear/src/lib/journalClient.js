import { supabase } from './supabaseClient';

export async function fetchJournals() {
	try {
		let { data, error } = await supabase.from('journal').select(`
		  *,
		  journal_entry:journal_id ( * )
		`);
		if (error) throw error;
		// La respuesta incluirá cada journal con un array 'journal_entry' de sus entradas correspondientes
		return data;
	} catch (error) {
		console.error('Error fetching journals:', error);
		throw error;
	}
}

export async function fetchJournalById(journalId) {
	try {
		let { data, error } = await supabase
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
		let { data, error } = await supabase.from('journal').insert([journal]).select();
		if (error) throw error;
		return data[0];
	} catch (error) {
		console.error('Error creating journal:', error);
		throw error;
	}
}

export async function updateJournal(journalId, updatedFields) {
	try {
		let { data, error } = await supabase
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
		let { data, error } = await supabase
			.from('journal')
			.delete()
			.eq('journal_id', journalId)
			.select();
		if (error) throw error;
		return data[0];
	} catch (error) {
		console.error('Error deleting journal:', error);
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
