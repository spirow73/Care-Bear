<script>
	import { onMount } from 'svelte';
	import '../app.css';
	import profile from '$lib/components/images/profile.png';
	import DarkModeButton from '$lib/components/generic/DarkModeButton.svelte';
	import user from '$lib/userStore';
	import Button from '$lib/components/generic/Button.svelte';

	const handleLogout = (event) => {
		event.preventDefault(); // Previene la navegación
		user.logOut(); // Suponiendo que esto es una acción sincrónica
		window.location.href = '/welcome'; // Redirige después del logout
	};

	const animations = {
		enter: (node) => {
			node.animate(
				{
					opacity: [0, 1],
					transform: ['translateY(-10px)', 'translateY(0)']
				},
				{
					duration: 300,
					easing: 'ease-in-out'
				}
			);
		},
		leave: (node) => {
			node.animate(
				{
					opacity: [1, 0],
					transform: ['translateY(0)', 'translateY(-10px)']
				},
				{
					duration: 300,
					easing: 'ease-in-out'
				}
			);
		}
	};

	let isMenuOpen = false;

	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
		const mobileNav = document.querySelector('.mobilenav');
		mobileNav.classList.toggle('hidden');
	};

	onMount(() => {
		const menuButton = document.querySelector('.menu-button');
		const mobileNav = document.querySelector('.mobilenav');

		menuButton.addEventListener('click', () => {
			toggleMenu();
		});

		// Close mobile menu when a link is clicked
		mobileNav.querySelectorAll('a').forEach((link) => {
			link.addEventListener('click', () => {
				toggleMenu();
			});
		});
	});
</script>

<div class="min-h-screen">
	<nav class="cotton-candy p-6 shadow-md">
		<div class="container flex flex-wrap items-center justify-between">
			<div class="flex items-center flex-shrink-0 text-black mr-6">
				<a
					href="/"
					class="transition-all block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"
					use:animations.enter
					use:animations.leave
				>
					<span class="font-semibold text-xl tracking-tight">Care Bear</span>
				</a>
			</div>

			<div class="block lg:hidden">
				<button
					class=" menu-button flex items-center px-3 py-2 border rounded text-black border-black-400 hover:text-white hover:border-white"
				>
					<svg
						class="fill-current h-3 w-3"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						title="Menu"
					>
						<path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
					</svg>
				</button>
			</div>

			<div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mobilenav">
				<div class="text-sm lg:flex-grow">
					{#if $user.user}
						<a
							href="/"
							class="transition-all block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"
							use:animations.enter
							use:animations.leave
						>
							Home
						</a>

						<a
							href="/journal"
							class="transition-all block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"
							use:animations.enter
							use:animations.leave
						>
							Journal
						</a>

						<a
							href="/task"
							class="transition-all block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"
							use:animations.enter
							use:animations.leave
						>
							Tasks
						</a>

						<a
							href="/mood"
							class="transition-all block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"
							use:animations.enter
							use:animations.leave
						>
							Mood
						</a>

						<a
							href="/calendar"
							class="transition-all block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"
							use:animations.enter
							use:animations.leave
						>
							Calendar
						</a>
						<a
							href="/advice"
							class="transition-all block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"
							use:animations.enter
							use:animations.leave
						>
							Advice
						</a>
						<a
							href="/profile"
							class="transition-all block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"
							use:animations.enter
							use:animations.leave
						>
							Profile
						</a>

						<a
							href="/welcome"
							class="button-style transition-all block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"
							on:click={handleLogout}
							use:animations.enter
							use:animations.leave
						>
							LogOut
						</a>
						<!-- {:else}
						<a
							href="/welcome"
							class="button-style transition-all block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"
							use:animations.enter
							use:animations.leave
						>
							Login / Register
						</a> -->
					{/if}

					<DarkModeButton />
				</div>
			</div>
		</div>
	</nav>

	<slot />
</div>

<!-- <body class="bg-cover bg-center" style="background-image: url('https://img.freepik.com/premium-photo/dreamy-ocean-coast-summer_360074-15698.jpg');"> -->
<!-- </body> -->

<style>
	.cotton-candy {
		background: linear-gradient(95deg, rgb(249, 196, 232), rgb(229, 215, 255), rgb(171, 219, 254));
	}
	:global(body) {
		background-image: url('$lib/components/images/background.png');
		background-size: cover; /* Adjust the sizing as needed */
		background-repeat: no-repeat;
		background-attachment: fixed;
		height: 100vh;
		margin: 0;
	}

	.button-style {
		padding: 10px 20px; /* Agrega un relleno para darle tamaño al botón */
		background-color: #007bff; /* Color de fondo del botón */
		color: white; /* Color del texto */
		border: none; /* Sin borde */
		border-radius: 5px; /* Bordes redondeados */
		text-align: center; /* Alinea el texto al centro */
		text-decoration: none; /* Quita la subrayado del enlace */
		font-weight: bold; /* Hace el texto más grueso */
		transition: background-color 0.3s, transform 0.3s; /* Suaviza la transición de colores y transformación */
	}

	.button-style:hover,
	.button-style:focus {
		background-color: #0056b3; /* Cambia el color de fondo al pasar el ratón por encima */
		transform: scale(1.05); /* Ligeramente más grande al pasar el ratón por encima */
	}

	.button-style:active {
		background-color: #004085; /* Color de fondo cuando se hace clic */
		transform: scale(0.95); /* Ligeramente más pequeño al hacer clic */
	}
</style>
