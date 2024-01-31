import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://djhxrvvfyaoduxzlowlf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqaHhydnZmeWFvZHV4emxvd2xmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA0ODU2MDEsImV4cCI6MjAxNjA2MTYwMX0.N5ILlFpgSQp_k8o4XKNOZIyJ5alm1kQkxDCk8VNC2js';

const supabase = createClient(supabaseUrl, supabaseKey);

async function seedTasks() {
    try {
        
        const tasksData = [
          { title: 'Go to the store', description: 'Ineed to buy food for today', deadline: '2023-11-04', isCompleted:'true', user_id:1 },
          { title: 'Finish homework', description: 'My homework is almost done, i need to do the rest', deadline: '2023-12-02', isCompleted:'false', user_id:1 },
          { title: 'Go to the gym', description: 'I have to workout today', deadline:'2023-10-08', isCompleted:'true', user_id:1}
        
        ];
        const { data, error } = await supabase.from('task').insert(tasksData);

        if (error) {
          console.error('Error seeding tasks:', error.message);
          return;
        }
    
        console.log('Tasks seeded successfully:', data);
      } catch (error) {
        console.error('Error seeding tasks:', error.message);
      }
}

async function seedJournal() {
    try {
        
        const journalData = [
          { title: 'Travel journal', description: 'To write down all my amazing adventures', user_id:1},
          { title: 'Feelings journal', description: 'A privarte place for my thoughts and feelings', user_id:1},
          { title: 'Dream journal', description: 'A place to write down my dreams', user_id:1}
        
        ];
        const { data, error } = await supabase.from('journal').insert(journalData);

        if (error) {
          console.error('Error seeding journals:', error.message);
          return;
        }
    
        console.log('journals seeded successfully:', data);
      } catch (error) {
        console.error('Error seeding journals:', error.message);
      }
}

async function seedJournalEntries() {
    try {
        
        const journalEntryData = [
            { title: 'Today was a really fun day and I hung out with friends!', timestamp: '2023-12-01',content:'got to hang out with my best friends to day, it was a waky fun time.', journal_id: 15, user_id:1},
            { title: 'Another exciting day!', timestamp: '2023-12-02',content:'Went out on a hike today and got to see a fox!', journal_id: 15, user_id:1 },
            { title: 'Had a bad day at work.', timestamp: '2023-12-03',content:'Today i was feeling depressed because a customer at work was mean.', journal_id:16, user_id:1}
        ];
        const { data, error } = await supabase.from('journal_entry').insert(journalEntryData);

        if (error) {
          console.error('Error seeding entries:', error.message);
          return;
        }
    
        console.log('Entries seeded successfully:', data);
      } catch (error) {
        console.error('Error seeding entries:', error.message);
      }
}

seedTasks();
seedJournal();
seedJournalEntries();