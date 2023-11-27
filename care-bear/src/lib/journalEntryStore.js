// Importing necessary functions from external modules/files
import { writable } from 'svelte/store';
import { fetchJournalEntries, addJournalEntry, deleteJournalEntry } from './supabaseJournal';

// Creating a Svelte writable store to hold journal entries
const journalEntries = writable([]);
// Variable to hold the ID of the currently selected journal entry
let selectedJournalId = null;

// Function to load initial journal entries asynchronously
async function loadInitialEntries() {
  try {
    // Fetch initial entries from an external source (e.g., a database)
    const initialEntries = await fetchJournalEntries();
    // Set the initial entries in the Svelte store
    journalEntries.set(initialEntries);
  } catch (error) {
    console.error('Error loading initial entries:', error);
    // Handle error appropriately (e.g., display an error message)
  }
}

// Load initial entries when the code runs
loadInitialEntries();

// Function to fetch new journal entries asynchronously at intervals
async function fetchNewEntries() {
  try {
    // Fetch new entries from the external source
    const newEntries = await fetchJournalEntries();
    // Update the Svelte store with the new entries
    journalEntries.set(newEntries);
  } catch (error) {
    console.error('Error fetching new entries:', error);
    // Handle error appropriately
  }
}

// Set up a polling mechanism to fetch new entries every 5 seconds
const pollingInterval = setInterval(fetchNewEntries, 5000);

// Function to stop the polling mechanism
function stopPolling() {
  clearInterval(pollingInterval);
}

// Exported object containing methods and data related to journal entries
export const journalEntryStore = {
  // Method to subscribe to changes in the journalEntries store
  subscribe(callback) {
    // Bind subscribe to the context and return the subscription
    return journalEntries.subscribe(callback);
  },
  // Method to add a new entry to the database and update the local store
  async addEntryToDb(userId, newEntry) {
    try {
      // Add the new entry to the external database
      await addJournalEntry(newEntry);
      // Update the local store by adding the new entry
      const entries = journalEntries.update(entries => [...entries, newEntry]);
      journalEntries.set(entries);
    } catch (error) {
      console.error('Error adding entry:', error);
      // Handle error appropriately
    }
  },
  // Method to update the content of a journal entry in the database and local store
  async updateEntryContent(entryId, newContent) {
    try {
      // Update the entry content in the external database
      await supabase.from('journal_entry').update({ content: newContent }).eq('id', entryId);
      // Update the content in the local store directly
      const updatedEntries = journalEntries.update(entries => {
        return entries.map(entry => {
          if (entry.id === entryId) {
            return { ...entry, content: newContent };
          }
          return entry;
        });
      });
      journalEntries.set(updatedEntries);
    } catch (error) {
      console.error('Error updating entry:', error);
      // Handle error appropriately
    }
  },
  // Method to delete a journal entry from the database and local store
  async deleteEntryFromDb(entryId) {
    try {
      // Delete the entry from the external database
      await deleteJournalEntry(entryId);
      // Remove the deleted entry from the local store
      const updatedEntries = journalEntries.update(entries =>
        entries.filter(entry => entry.id !== entryId)
      );
      journalEntries.set(updatedEntries);
    } catch (error) {
      console.error('Error deleting entry:', error);
      // Handle error appropriately
    }
  },
  // Method to get entries for a specific journal from the database
  async getEntriesForJournal(journalId) {
    try {
      // Set the selected journal ID
      selectedJournalId = journalId;
      // Fetch entries associated with the given journal ID from the database
      const { data, error } = await supabase.from('journal_entry').select('*').eq('journal_id', journalId);

      if (error) {
        throw new Error(`Error fetching entries for the journal: ${error.message}`);
      }

      return data || [];
    } catch (error) {
      console.error('Error fetching entries for journal:', error);
      // Handle error appropriately
      return [];
    }
  },
  // Method to expose the currently selected journal ID
  get selectedJournalId() {
    return selectedJournalId;
  },
  // Expose the function to stop the polling mechanism
  stopPolling,
};
