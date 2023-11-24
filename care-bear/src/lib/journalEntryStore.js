import { writable } from 'svelte/store';
import { fetchJournalEntries, addJournalEntry, deleteJournalEntry } from './supabaseJournal';

// Create a writable Svelte store for journal entries
const journalEntries = writable([]);

// Function to load initial journal entries from the database
async function loadInitialEntries() {
  const initialEntries = await fetchJournalEntries();
  journalEntries.set(initialEntries);
}

// Load initial entries when the store is first imported
loadInitialEntries();

async function getEntryContent(entryId) {
  const { data, error } = await supabase.from('journal_entry').select('content').eq('id', entryId).single();

  if (error) {
    throw new Error(`Error fetching entry content: ${error.message}`);
  }

  return data ? data.content : null;
}

// Function to add a new entry to the database and update the store
async function addEntryToDb(userId, newEntry) {
  await addJournalEntry(newEntry);
  journalEntries.update(existingEntries => [...existingEntries, newEntry]);
}

async function updateEntryContent(entryId, newContent) {
  const { data, error } = await supabase.from('journal_entry').update({ content: newContent }).eq('id', entryId);

  if (error) {
    console.error('Error updating entry content:', error.message);
    throw error;
  } else {
    console.log('Entry content updated:', data);
    return data;
  }
}

// Function to delete an entry from the database and update the store
async function deleteEntryFromDb(entryId) {
  await deleteJournalEntry(entryId);
  journalEntries.update(existingEntries => existingEntries.filter(entry => entry.id !== entryId));
}

// Function to periodically fetch new entries and update the store
async function fetchNewEntries() {
  const newEntries = await fetchJournalEntries(); // Fetch the latest entries from the database
  journalEntries.set(newEntries);
}

// Start polling to fetch new entries every 5 seconds (adjust as needed)
const pollingInterval = setInterval(fetchNewEntries, 5000);

// Function to stop polling (if needed)
function stopPolling() {
  clearInterval(pollingInterval);
}

// Exporting the store and functions
export const journalEntryStore = {
  subscribe: journalEntries.subscribe,
  addEntryToDb,
  updateEntryContent,
  deleteEntryFromDb,
  getEntryContent,
  loadInitialEntries,
  stopPolling,
};
