// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://djhxrvvfyaoduxzlowlf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqaHhydnZmeWFvZHV4emxvd2xmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA0ODU2MDEsImV4cCI6MjAxNjA2MTYwMX0.N5ILlFpgSQp_k8o4XKNOZIyJ5alm1kQkxDCk8VNC2js'; 

const supabase = createClient(supabaseUrl, supabaseKey);

export async function fetchJournalEntries(userId) {
  try {
    const { data, error } = await supabase
      .from('journal_entries')
      .select('*')
      .eq('user_id', userId);

    if (error) {
      console.error('Error fetching journal entries:', error.message);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching journal entries:', error.message);
    return [];
  }
}

export async function addJournalEntry(userId, newEntry) {
  try {
    const { data, error } = await supabase
      .from('journal_entries')
      .insert({ user_id: userId, ...newEntry });

    if (error) {
      throw error;
    }

    return data[0];
  } catch (error) {
    console.error('Error adding journal entry:', error.message);
    throw error;
  }
}

export async function updateJournalEntry(entryId, updatedContent) {
  try {
    const { error } = await supabase
      .from('journal_entries')
      .update({ entry: updatedContent })
      .eq('id', entryId);

    if (error) {
      throw error;
    }
  } catch (error) {
    console.error('Error updating journal entry:', error.message);
    throw error;
  }
}

export async function deleteJournalEntry(entryId) {
  try {
    const { error } = await supabase
      .from('journal_entries')
      .delete()
      .eq('id', entryId);

    if (error) {
      throw error;
    }
  } catch (error) {
    console.error('Error deleting journal entry:', error.message);
    throw error;
  }
}

export default supabase;
