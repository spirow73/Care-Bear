// journalStore.js

// Importing the 'writable' function from the 'svelte/store' library
import { writable } from 'svelte/store';

// Importing functions for interacting with the journal data
import { fetchJournals, addJournal, deleteJournal } from './journalClient';

// Creating a Svelte writable store initialized with an empty array
const journals = writable([]);

// Asynchronous function to load initial journals from an external data source
async function loadInitialJournals() {
  // Fetching the initial journals data
  const initialJournals = await fetchJournals();
  // Setting the initial journals data in the 'journals' store
  journals.set(initialJournals);
}

// Calling the function to load initial journals when the module is imported
loadInitialJournals();

// Asynchronous function to retrieve the title of a specific journal using its ID
async function getJournalTitle(journalId) {
  // Fetching journal title from an external source using Supabase
  const { data, error } = await supabase.from('journal').select('title').eq('journal_id', journalId).single();

  // Handling any potential errors in fetching the title
  if (error) {
    throw new Error(`Error fetching journal title: ${error.message}`);
  }

  // Returning the title if available, otherwise returning null
  return data ? data.title : null;
}

// Asynchronous function to add a new journal to the database and update the store
async function addJournalToDb(userId, newJournal) {
  // Adding the new journal to the database using the 'addJournal' function
  await addJournal(newJournal);
  // Updating the 'journals' store by adding the new journal to the existing array
  journals.update(existingJournals => [...existingJournals, newJournal]);
}

// Asynchronous function to delete a journal from the database and update the store
async function deleteJournalFromDb(journalId) {
  // Deleting the journal from the database using the 'deleteJournal' function
  await deleteJournal(journalId);
  // Updating the 'journals' store by filtering out the deleted journal
  journals.update(existingJournals => existingJournals.filter(journal => journal.journal_id !== journalId));
}

// Asynchronous function to fetch new journals and update the store periodically
async function fetchNewJournals() {
  // Fetching new journals data from an external source
  const newJournals = await fetchJournals();
  // Setting the new journals data in the 'journals' store
  journals.set(newJournals);
}

// Setting up a polling interval to fetch new journals every 5 seconds (5000 milliseconds)
const pollingInterval = setInterval(fetchNewJournals, 5000);

// Function to stop the polling interval for fetching new journals
function stopPolling() {
  clearInterval(pollingInterval);
}

// Exporting an object containing various functionalities and the 'journals' store for external use
export const journalStore = {
  subscribe: journals.subscribe, // Allowing subscription to changes in the 'journals' store
  addJournalToDb, // Exposing the function to add a journal to the database
  deleteJournalFromDb, // Exposing the function to delete a journal from the database
  loadInitialJournals, // Exposing the function to load initial journals
  getJournalTitle, // Exposing the function to retrieve a journal title
  stopPolling, // Exposing the function to stop the polling interval
};
