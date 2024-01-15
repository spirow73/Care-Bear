// User data store

const userStore = writable({
	id: null,
	userName: null,
	email: null,
	avatar: null,
	session: null
});

export default {
	subscribe: userStore.subscribe,
	setUser: (user, session) => userStore.set({ user, session }),
	logOut: () => userStore.set({ user: null, session: null })
};
