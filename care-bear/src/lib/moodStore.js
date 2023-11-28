import { writable } from 'svelte/store';
import { addMoodEntry, fetchLatestMoodEntries } from './moodClient';

// ... rest of the code



const mood = writable([]);
fetchLatestMoodEntries().then(initialMood => {
    mood.set(initialMood);
  });

  async function addMoodEntryToDB(newMoodEntry) {
    try {
      await addMoodEntry(newMoodEntry);
      mood.update(existingMood => [...existingMood, newMoodEntry]);
    } catch (error) {
      console.error('Error adding mood entry:', error);
    }
  }
  export { addMoodEntryToDB, mood };
