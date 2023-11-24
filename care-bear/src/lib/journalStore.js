// journalStore.js
import { writable } from 'svelte/store';
import { fetchJournals, addJournal, deleteJournal } from './journalClient';

const journals = writable([]);

async function loadInitialJournals() {
  const initialJournals = await fetchJournals();
  journals.set(initialJournals);
}

loadInitialJournals();

async function getJournalTitle(journalId) {
  const { data, error } = await supabase.from('journal').select('title').eq('journal_id', journalId).single();

  if (error) {
    throw new Error(`Error fetching journal title: ${error.message}`);
  }

  return data ? data.title : null;
}

async function addJournalToDb(userId, newJournal) {
  await addJournal(newJournal);
  journals.update(existingJournals => [...existingJournals, newJournal]);
}

async function deleteJournalFromDb(journalId) {
  await deleteJournal(journalId);
  journals.update(existingJournals => existingJournals.filter(journal => journal.journal_id !== journalId));
}

async function fetchNewJournals() {
  const newJournals = await fetchJournals();
  journals.set(newJournals);
}

const pollingInterval = setInterval(fetchNewJournals, 5000);

function stopPolling() {
  clearInterval(pollingInterval);
}

export const journalStore = {
  subscribe: journals.subscribe,
  addJournalToDb,
  deleteJournalFromDb,
  loadInitialJournals,
  getJournalTitle,
  stopPolling,
};
