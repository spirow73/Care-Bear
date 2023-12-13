import { supabase } from './supabaseClient';

// Fetch tasks from the database with optional filters and sort options
export async function fetchTasks({ filter = {}, sort = 'deadline' } = {}) {
    try {
        let query = supabase.from('task').select('*');

        // Apply filter for completion status if provided
        if (filter.isCompleted !== undefined) {
            query = query.eq('isCompleted', filter.isCompleted);
        }

        // Apply sorting based on the sort option
        query = query.order(sort, { ascending: true });

        const { data, error } = await query;
        if (error) {
            throw new Error(error.message);
        }

        return data.map((task) => ({
            ...task,
            deadline: new Date(task.deadline) // Ensure deadline is a Date object
        }));
    } catch (error) {
        console.error('Error fetching tasks:', error);
        throw error;
    }
}

// Other functions (fetchLast3Tasks, createTask, updateTask, deleteTask) remain unchanged



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
