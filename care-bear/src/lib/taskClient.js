
// Fetch all tasks from the database
import { supabase } from './supabaseClient';

// Fetch tasks with optional filters and sorting
export async function fetchTasks({ filter = {}, sort = 'deadline', ascending = true } = {}) {
    try {
        let query = supabase.from('task').select('*');

        // Apply filtering
        if (filter.isCompleted !== undefined) {
            query = query.eq('isCompleted', filter.isCompleted);
        }

        // Apply sorting
        query = query.order(sort, { ascending });

        const { data, error } = await query;
        if (error) {
            throw new Error(error.message);
        }
        return data.map(task => ({
            ...task,
            deadline: new Date(task.deadline) // Ensure deadline is a Date object
        }));
    } catch (error) {
        console.error('Error fetching tasks:', error);
        throw error;
    }
}

export async function fetchLast3Tasks() {
	try {
		const { data, error } = await supabase
			.from('task')
			.select('*')
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
