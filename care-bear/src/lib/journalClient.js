// supabaseJournalClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://djhxrvvfyaoduxzlowlf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqaHhydnZmeWFvZHV4emxvd2xmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA0ODU2MDEsImV4cCI6MjAxNjA2MTYwMX0.N5ILlFpgSQp_k8o4XKNOZIyJ5alm1kQkxDCk8VNC2js';
const supabase = createClient(supabaseUrl, supabaseKey);

async function fetchJournals() {
  const { data, error } = await supabase.from('journal').select('*');

  if (error) {
    console.error('Error fetching journals:', error.message);
    return [];
  } else {
    console.log('Journals:', data);
    return data || [];
  }
}

async function addJournal(newJournal) {
  const { data, error } = await supabase.from('journal').upsert([newJournal]);

  if (error) {
    console.error('Error adding journal:', error.message);
  } else {
    console.log('Journal added:', data);
  }
}

async function deleteJournal(journalId) {
  const { data, error } = await supabase.from('journal').delete().eq('journal_id', journalId);

  if (error) {
    console.error('Error deleting journal:', error.message);
  } else {
    console.log('Journal deleted successfully');
  }
}

export { fetchJournals, addJournal, deleteJournal, supabase as supabaseJournalClient };
