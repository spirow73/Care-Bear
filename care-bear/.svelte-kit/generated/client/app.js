export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/advice": [3],
		"/advice/survey": [4],
		"/auth": [5],
		"/auth/login": [6],
		"/auth/sign-up": [7],
		"/calendar": [8],
		"/journal": [9],
		"/journal/[id]": [10],
		"/moodActivities": [19],
		"/mood": [11],
		"/mood/Tired": [12],
		"/mood/breathingExercise": [13],
		"/mood/history": [14],
		"/mood/meditation": [15],
		"/mood/sad": [16],
		"/mood/upset": [17],
		"/mood/yoga": [18],
		"/profile": [20],
		"/task": [21],
		"/tracker": [22]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';