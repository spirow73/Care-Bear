import { supabase } from './supabaseClient';
import { get } from 'svelte/store';
import user from './userStore'; // Asegúrate de que este es el nombre correcto de tu store de usuario

// Fetch tasks from the database with optional filters and sort options
export async function fetchTasks({ filter = {}, sort = 'deadline' } = {}) {
	try {
		const currentUser = get(user);
		if (!currentUser || !currentUser.user || !currentUser.user.id) {
			throw new Error('No user ID found in the store.');
		}

		let query = supabase.from('task').select('*').eq('user_id', currentUser.user.id); // Asume que la tabla 'task' tiene una columna 'user_id'

		if (filter.isCompleted !== undefined) {
			query = query.eq('isCompleted', filter.isCompleted);
		}

		query = query.order(sort, { ascending: true });

		const { data, error } = await query;
		if (error) {
			throw new Error(error.message);
		}

		return data.map((task) => ({
			...task,
			deadline: new Date(task.deadline)
		}));
	} catch (error) {
		console.error('Error fetching tasks:', error);
		throw error;
	}
}

// Other functions (fetchLast3Tasks, createTask, updateTask, deleteTask) remain unchanged

export async function fetchLast3Tasks() {
	try {
		const currentUser = get(user);
		if (!currentUser || !currentUser.user || !currentUser.user.id) {
			throw new Error('No user ID found in the store.');
		}

		const { data, error } = await supabase
			.from('task')
			.select('*')
			.eq('user_id', currentUser.user.id) // Filtra por el ID del usuario
			.order('created_at', { ascending: false })
			.limit(3);

		if (error) {
			throw new Error(error.message);
		}

		return data.map((task) => ({
			...task,
			deadline: new Date(task.deadline)
		}));
	} catch (error) {
		console.error('Error fetching last 3 tasks:', error);
		throw error;
	}
}

export async function createTask(task) {
	try {
		const currentUser = get(user);
		if (!currentUser || !currentUser.user || !currentUser.user.id) {
			throw new Error('No user ID found in the store.');
		}

		// Añade el ID del usuario al objeto de la tarea antes de insertarlo
		task.user_id = currentUser.user.id;

		const { data, error } = await supabase.from('task').insert([task]).select();
		if (error) {
			throw error;
		}

		return data[0];
	} catch (error) {
		console.error('Error creating task:', error);
		throw error;
	}
}

export async function updateTask(task_id, updatedTask) {
	const { data, error } = await supabase
		.from('task')
		.update(updatedTask)
		.eq('task_id', task_id)
		.select();
	if (error) {
		throw new Error(error.message);
	}
	return data[0];
}

export async function deleteTask(task_id) {
	const { data, error } = await supabase.from('task').delete().eq('task_id', task_id).select();
	if (error) {
		throw new Error(error.message);
	}
	return data[0];
}
