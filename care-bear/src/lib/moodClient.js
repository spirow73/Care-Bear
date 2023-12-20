import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://djhxrvvfyaoduxzlowlf.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqaHhydnZmeWFvZHV4emxvd2xmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA0ODU2MDEsImV4cCI6MjAxNjA2MTYwMX0.N5ILlFpgSQp_k8o4XKNOZIyJ5alm1kQkxDCk8VNC2js';

const supabase = createClient(supabaseUrl, supabaseKey);

function formatDateForSupabase(date) {
	const pad = (number) => (number < 10 ? '0' : '') + number;
  
	const year = date.getFullYear();
	const month = pad(date.getMonth() + 1);
	const day = pad(date.getDate());
	const hours = pad(date.getHours());
	const minutes = pad(date.getMinutes());
	const seconds = pad(date.getSeconds());
  
	return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }
  

export async function fetchLatestMoodEntries(date, limit) {
	const { data, error } = await supabase
	  .from('mood_entry')
	  .select(
		`
		  timestamp,
		  mood_entry_id,
		  mood:mood(moodref_id, description)
		`
	  )
	  .gte('timestamp', formatDateForSupabase(new Date(date)))
	  .lt('timestamp', formatDateForSupabase(new Date(date.getTime() + 24 * 60 * 60 * 1000)))
	  

	  .order('mood_entry_id', { ascending: false })
	  .limit(limit);
  
	if (error) {
	  console.error('Error fetching mood entries:', error);
	  return [];
	} else {
	  const latestEntries = data.map((entry) => ({
		mood_entry_id: entry.mood_entry_id,
		mood_description: entry.mood ? entry.mood.description : 'No moods registered yet',
		timestamp: new Date(entry.timestamp).toString(), // Parse timestamp string into Date object
	  }));
  
	  return latestEntries;
	}
  }
  
  
  

export async function addMoodEntry({ mood, user_id, timestamp }) {
	const newMoodEntry = {
		mood,
		user_id,
		timestamp
	};

	const { data, error } = await supabase.from('mood_entry').upsert([newMoodEntry]);
	console.log(data);

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
