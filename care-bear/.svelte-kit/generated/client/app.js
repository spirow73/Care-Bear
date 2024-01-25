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
	() => import('./nodes/23'),
	() => import('./nodes/24'),
	() => import('./nodes/25'),
	() => import('./nodes/26'),
	() => import('./nodes/27'),
	() => import('./nodes/28'),
	() => import('./nodes/29'),
	() => import('./nodes/30'),
	() => import('./nodes/31'),
	() => import('./nodes/32'),
	() => import('./nodes/33'),
	() => import('./nodes/34'),
	() => import('./nodes/35'),
	() => import('./nodes/36')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/advice": [6],
		"/advice/survey": [7],
		"/calendar": [8],
		"/journal": [9],
		"/journal/[id]": [10],
		"/(auth)/login": [3],
		"/moodActivities": [33],
		"/mood": [11],
		"/mood/Tired": [30],
		"/mood/anxious": [12],
		"/mood/breathingExercise": [13],
		"/mood/calm": [14],
		"/mood/confused": [15],
		"/mood/content": [16],
		"/mood/depressed": [17],
		"/mood/energetic": [18],
		"/mood/excited": [19],
		"/mood/frustrated": [20],
		"/mood/happy": [21],
		"/mood/history": [22],
		"/mood/lonely": [23],
		"/mood/loved": [24],
		"/mood/meditation": [25],
		"/mood/nuetral": [26],
		"/mood/sad": [27],
		"/mood/side": [28],
		"/mood/stressed": [29],
		"/mood/upset": [31],
		"/mood/yoga": [32],
		"/profile": [34],
		"/(auth)/register": [4],
		"/task": [35],
		"/tracker": [36],
		"/(auth)/welcome": [5]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';