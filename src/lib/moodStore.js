import { writable } from 'svelte/store';
import { addMoodEntry, fetchLatestMoodEntries } from './moodClient';

const mood = writable([]);

fetchLatestMoodEntries().then((initialMood) => {
	mood.set(initialMood);
});

async function addMoodEntryToDB(newMoodEntry) {
	try {
		await addMoodEntry(newMoodEntry);
		mood.update((existingMood) => [...existingMood, newMoodEntry]);
	} catch (error) {
		console.error('Error adding mood entry:', error);
	}
}

function logOut() {
	mood.set([]);
}

export { addMoodEntryToDB, logOut, mood };
