import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fgwaebsqadsqrrnvjbwg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZnd2FlYnNxYWRzcXJybnZqYndnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg3NTkxNTMsImV4cCI6MjAxNDMzNTE1M30.WBw-m6lZEaNZcM9a8Cj9RuXPLpbEFSG3CZovcpzNA0g';

const supabase = createClient(supabaseUrl, supabaseKey);

export async function fetchTasks() {
    const { data, error } = await supabase.from('tasks').select('*');
    if (error) {
      console.error('Error fetching tasks:', error);
    } else {
      return data;
    }
  }

// supabaseClient.js
export async function addTask(newTask) {
    const { data, error } = await supabase
      .from('tasks')
      .upsert([newTask]);
  
    if (error) {
      console.error('Error al agregar la tarea:', error);
    } else {
      console.log('Tarea agregada exitosamente:', data);
      // Puedes realizar alguna acción adicional si es necesario
    }
  }
  
  
  export default supabase;

