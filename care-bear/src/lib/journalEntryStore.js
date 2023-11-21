import { writable } from 'svelte/store';
import supabase from './supabaseJournal';

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
      throw error;
    }
  };

  const addEntry = async (userId, newEntry) => {
    try {
      const { data, error } = await supabase
        .from('journal_entries')
        .insert({ user_id: userId, ...newEntry });

      if (error) {
        throw error;
      }

      update(entries => [...entries, data[0]]);
    } catch (error) {
      console.error('Error adding journal entry:', error.message);
      throw error;
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
        const updatedEntries = entries.map(entry => {
          if (entry.id === entryId) {
            return { ...entry, entry: updatedContent };
          }
          return entry;
        });
        return updatedEntries;
      });
    } catch (error) {
      console.error('Error updating journal entry:', error.message);
      throw error;
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
      throw error;
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
