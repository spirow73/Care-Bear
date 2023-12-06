// taskStore.js
import { writable } from 'svelte/store';
import { fetchTasks, createTask, updateTask, deleteTask } from './taskClient';

export let tasks = writable([]);

export async function loadDbTasks() {
	try {
		tasks.set(await fetchTasks());
	} catch (error) {
		console.error('Error loading tasks:', error);
	}
}

export async function addDbTask(task) {
	console.log('addDbTask:', task); // Depuración para ver qué se recibe
	try {
		const newTask = await createTask(task);
		console.log('newTask:', newTask); // Depuración para ver qué se recibe
		// Change the newTask deadline to a Date object (it is a ISO string)
		newTask.deadline = new Date(newTask.deadline);
		if (newTask) {
			tasks.update((currentTasks) => [...currentTasks, newTask]);
		} else {
			console.error('Received null or undefined task');
		}
	} catch (error) {
		console.error('Error adding task:', error);
	}
}

export async function updateDbTask(task_id, updatedTask) {
	try {
		const newTask = await updateTask(task_id, updatedTask);
		// Asegúrate de que la fecha de plazo (deadline) es un objeto Date
		newTask.deadline = new Date(newTask.deadline);
		tasks.update((tasks) =>
			tasks.map((task) => (task.task_id === task_id ? { ...task, ...newTask } : task))
		);
	} catch (error) {
		console.error('Error updating task:', error);
	}
}

export async function removeDbTask(task_id) {
	try {
		await deleteTask(task_id);
		tasks.update((tasks) => tasks.filter((task) => task.task_id !== task_id));
	} catch (error) {
		console.error('Error removing task:', error);
	}
}
