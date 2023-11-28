import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://djhxrvvfyaoduxzlowlf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqaHhydnZmeWFvZHV4emxvd2xmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA0ODU2MDEsImV4cCI6MjAxNjA2MTYwMX0.N5ILlFpgSQp_k8o4XKNOZIyJ5alm1kQkxDCk8VNC2js';

const supabase = createClient(supabaseUrl, supabaseKey);

// const { data: realTimeData, error: realTimeError } = supabase
//   .from('mood_entry')
//   .on(['INSERT', 'UPDATE'], (payload) => {
//     // Handle real-time insert/update events (new or modified mood entry)
//     const updatedEntryIndex = moodEntries.findIndex(entry => entry.mood_entry_id === payload.new.mood_entry_id);

//     if (updatedEntryIndex !== -1) {
//       moodEntries[updatedEntryIndex] = payload.new;
//     } else {
//       moodEntries = [payload.new, ...moodEntries.slice(0, 2)];
//     }
//   })
//   .subscribe();
// moodClient.js
export async function fetchLatestMoodEntries() {
    const { data, error } = await supabase
      .from('mood_entry')
      .select(`
        mood_entry_id,
        timestamp,
        mood:mood(moodref_id, description)
      `)
      .order('timestamp', { ascending: false })
      .limit(3);
  
    if (error) {
      console.error('Error fetching mood entries:', error);
      return [];
    } else {
      const latestEntries = data.map((entry) => ({
        mood_entry_id: entry.mood_entry_id,
        timestamp: entry.timestamp,
        mood_description: entry.mood ? entry.mood.description : 'Unknown Mood',
      }));
  
      return latestEntries;
    }
  }
  

  export async function addMoodEntry({ mood, user_id, timestamp }) {
    const newMoodEntry = {
      mood,
      user_id,
      timestamp,
    };
  
    const { data, error } = await supabase.from('mood_entry').upsert([newMoodEntry]);
  
    if (error) {
      console.error('Error adding mood entry:', error);
    } else {
      console.log('Mood entry added:', data);
    }
  }

  export async function updateMoodEntry(updatedEntry) {
    const { data, error } = await supabase
      .from('mood_entry')
      .update(updatedEntry)
      .eq('mood_entry_id', updatedEntry.mood_entry_id);
  
    if (error) {
      console.error('Error updating mood entry:', error);
    } else {
      console.log('Mood entry updated:', data);
    }
  }

  export default supabase;