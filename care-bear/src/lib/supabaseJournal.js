import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://djhxrvvfyaoduxzlowlf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqaHhydnZmeWFvZHV4emxvd2xmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA0ODU2MDEsImV4cCI6MjAxNjA2MTYwMX0.N5ILlFpgSQp_k8o4XKNOZIyJ5alm1kQkxDCk8VNC2js';
const supabase = createClient(supabaseUrl, supabaseKey);

async function fetchJournalEntries() {
  const { data, error } = await supabase.from('journal_entry').select('*');

  if (error) {
    console.error('Error fetching journal entries:', error.message);
    return [];
  } else {
    console.log('Journal entries:', data);
    return data || [];
  }
}

async function addJournalEntry(newEntry) {
  const { data, error } = await supabase.from('journal_entry').upsert([newEntry]);

  if (error) {
    console.error('Error adding journal entry:', error.message);
  } else {
    console.log('Journal entry added:', data);
  }
}

async function deleteJournalEntry(journalId) {
  const { data, error } = await supabase.from('journal').delete().eq('id', journalId);

  if (error) {
    console.error('Error deleting journal entry:', error.message);
  } else {
    console.log('Journal entry deleted successfully');
  }
}

export { fetchJournalEntries, addJournalEntry, deleteJournalEntry, supabase as journalEntryStore };

