import { writable } from 'svelte/store';
import { supabase } from './supabase'; // Supabase client setup

const createJournalEntryStore = () => {
  const { subscribe, set, update } = writable([]);

  const fetchEntries = async (userId) => {
    try {
      const { data, error } = await supabase
        .from('journal_entries')
        .select('*')
        .eq('user_id', userId);

      if (error) {
        throw error;
      }

      set(data || []);
    } catch (error) {
      console.error('Error fetching journal entries:', error.message);
    }
  };

  const addEntry = async (userId, newEntry) => {
    try {
      const { data, error } = await supabase
        .from('journal_entries')
        .insert({ user_id: userId, entry: newEntry });

      if (error) {
        throw error;
      }

      update(entries => [...entries, data[0]]);
    } catch (error) {
      console.error('Error adding journal entry:', error.message);
    }
  };

  const updateEntry = async (entryId, updatedContent) => {
    try {
      const { error } = await supabase
        .from('journal_entries')
        .update({ entry: updatedContent })
        .eq('id', entryId);

      if (error) {
        throw error;
      }

      update(entries => {
        const index = entries.findIndex(entry => entry.id === entryId);
        if (index !== -1) {
          entries[index].entry = updatedContent;
        }
        return entries;
      });
    } catch (error) {
      console.error('Error updating journal entry:', error.message);
    }
  };

  const deleteEntry = async (entryId) => {
    try {
      const { error } = await supabase
        .from('journal_entries')
        .delete()
        .eq('id', entryId);

      if (error) {
        throw error;
      }

      update(entries => entries.filter(entry => entry.id !== entryId));
    } catch (error) {
      console.error('Error deleting journal entry:', error.message);
    }
  };

  return {
    subscribe,
    fetchEntries,
    addEntry,
    updateEntry,
    deleteEntry,
  };
};

export const journalEntryStore = createJournalEntryStore();
