import { supabase } from './supabaseClient';

// Fetch all tasks from the database
export async function fetchTasks() {
	try {
		const { data, error } = await supabase.from('task').select('*');
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

export async function createTask(task) {
	try {
		const { data, error } = await supabase.from('task').insert([task]).select();
		if (error) {
			throw error;
		}
		console.log('createTask return:', data); // Null
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
