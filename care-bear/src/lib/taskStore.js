// taskStore.js
import { writable, get } from 'svelte/store';
import { fetchTasks, createTask, updateTask, deleteTask } from './taskClient';

const tasks = writable([]);

export async function loadDbTasks() {
	try {
		tasks.set(await fetchTasks());
	} catch (error) {
		console.error('Error loading tasks:', error);
	}
}

export async function addDbTask(task) {
	try {
		const newTask = await createTask(task);
		if (newTask) {
			newTask.deadline = new Date(newTask.deadline); // Convertir deadline a objeto Date
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
		if (newTask) {
			newTask.deadline = new Date(newTask.deadline); // Convertir deadline a objeto Date
			tasks.update((tasks) => tasks.map((task) => (task.task_id === task_id ? newTask : task)));
		}
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

export function getTasksForMonth(year, month) {
	const tasksForMonth = get(tasks).filter((task) => {
		const taskDate = new Date(task.deadline);
		return taskDate.getFullYear() === year && taskDate.getMonth() === month;
	});

	const eventsByDay = tasksForMonth.reduce((acc, task) => {
		const day = new Date(task.deadline).getDate();
		if (!acc[day]) {
			acc[day] = [];
		}
		acc[day].push(task);
		return acc;
	}, {});

	return eventsByDay;
}

export default {
	subscribe: tasks.subscribe,
	loadDbTasks,
	addDbTask,
	updateDbTask,
	removeDbTask,
	getTasksForMonth
};
