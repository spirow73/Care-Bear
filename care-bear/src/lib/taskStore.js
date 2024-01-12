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

export function getTasksForDay(year, month, day) {
	const tasksForDay = get(tasks).filter((task) => {
		const taskDate = new Date(task.deadline);
		return (
			taskDate.getFullYear() === year && taskDate.getMonth() === month && taskDate.getDate() === day
		);
	});

	return tasksForDay;
}

export async function toggleTaskCompletion(task_id, isCompleted) {
	try {
		const updatedTask = await updateTask(task_id, { isCompleted: !isCompleted });
		if (updatedTask) {
			tasks.update((currentTasks) =>
				currentTasks.map((task) => (task.task_id === task_id ? { ...task, ...updatedTask } : task))
			);
		} else {
			console.error('No se recibió una tarea actualizada del servidor');
		}
	} catch (error) {
		console.error('Error al alternar la completitud de la tarea:', error);
	}
}

// Function to check for tasks nearing their deadline
export function checkForUpcomingTasks() {
	const currentTime = new Date();
	const upcomingTasks = get(tasks).filter((task) => {
		const deadline = new Date(task.deadline);
		const timeDiff = deadline - currentTime;
		// Check if the task is within one hour
		return timeDiff > 0 && timeDiff <= 3600000; // 3600000 ms = 1 hour
	});

	upcomingTasks.forEach((task) => {
		// Trigger notification for each upcoming task
		triggerNotification(task);
	});
}

export function checkForUpcomingReminders() {
	const currentTime = new Date();
	const oneHour = 60 * 60 * 1000; // One hour in milliseconds

	const upcomingTasks = get(tasks).filter((task) => {
		const deadline = new Date(task.deadline);
		return deadline - currentTime <= oneHour && deadline > currentTime;
	});

	upcomingTasks.forEach((task) => {
		triggerReminder(task);
	});
}

function triggerReminder(task) {
	if (Notification.permission === 'granted') {
		new Notification(`Reminder: Task '${task.title}' is due in less than one hour.`);
	}
}

// Regularly check for reminders
setInterval(checkForUpcomingReminders, 5 * 60 * 1000); // Check every 5 minutes

function logOut() {
	// Clear all tasks
	tasks.set([]);
}

export default {
	subscribe: tasks.subscribe,
	loadDbTasks,
	addDbTask,
	updateDbTask,
	removeDbTask,
	getTasksForMonth,
	getTasksForDay,
	logOut
};
