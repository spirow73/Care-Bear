// taskStore.js
import { writable } from 'svelte/store';
import { fetchTasks, addTask, deleteTask } from './supabaseClient';

const tasks = writable([]);

// Cargar tareas desde la base de datos al inicio de la aplicación
fetchTasks().then(initialTasks => {
  tasks.set(initialTasks);
});

// Agregar una tarea a la base de datos y actualizar el estado
async function addTaskToDb(newTask) {
  await addTask(newTask);
  tasks.update(existingTasks => [...existingTasks, newTask]);
}

// Eliminar una tarea de la base de datos y actualizar el estado
async function deleteTaskFromDb(id) {
  await deleteTask(id);
  tasks.update(existingTasks => existingTasks.filter(task => task.id !== id));
}

export { tasks, addTaskToDb, deleteTaskFromDb };