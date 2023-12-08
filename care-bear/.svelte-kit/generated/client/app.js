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
	() => import('./nodes/22'),
	() => import('./nodes/23')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/auth": [3],
		"/auth/login": [4],
		"/auth/sign-up": [5],
		"/calendar": [6],
		"/journalv2": [9],
		"/journalv3": [10],
		"/journal": [7],
		"/journal/[id]": [8],
		"/moodActivities": [19],
		"/mood": [11],
		"/mood/Tired": [16],
		"/mood/breathingExercise": [12],
		"/mood/history": [13],
		"/mood/meditation": [14],
		"/mood/sad": [15],
		"/mood/upset": [17],
		"/mood/yoga": [18],
		"/profile": [20],
		"/survey": [21],
		"/task": [22],
		"/tracker": [23]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';