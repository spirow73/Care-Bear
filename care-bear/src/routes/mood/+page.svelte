<script>
	let selectedMood = null;

	const selectMood = (mood) => {
		selectedMood = selectedMood === mood ? null : mood;
	};
</script>

<main class="max-w-md mx-auto mt-10 p-6">
	<h1 class="text-2xl font-bold mb-4">How are you feeling today?</h1>
	<div class="flex">
		<div class="flex flex-wrap justify-center">
			<div
				class={'cursor-pointer p-4 m-2 border rounded ' +
					(selectedMood === 'happy' ? 'bg-blue-500' : 'bg-gray-500')}
				on:click={() => selectMood('happy')}
			>
				{#if selectedMood === 'happy'}
					<img
						class="h-auto max-w-xs md:max-w-lg rounded-lg"
						src="https://web-holidays.com/wp-content/uploads/2020/06/emoji.png"
						alt="Happy emoji"
					/>
				{/if}
				<div class="mt-2 text-center">Happy</div>
			</div>

			<div
				class={'cursor-pointer p-4 m-2 border rounded ' +
					(selectedMood === 'sad' ? 'bg-blue-800' : 'bg-gray-500')}
				on:click={() => selectMood('sad')}
			>
				{#if selectedMood === 'sad'}
					<img
						class="h-auto max-w-xs md:max-w-lg rounded-lg"
						src="http://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Icon_-_Sad_Emoji_grande.png?v=1542436016"
						alt="Sad emoji"
					/>
				{/if}
				<div class="mt-2 text-center">Sad</div>
			</div>

			<div
				class={'cursor-pointer p-4 m-2 border rounded ' +
					(selectedMood === 'stressed' ? 'bg-blue-900' : 'bg-gray-500')}
				on:click={() => selectMood('stressed')}
			>
				{#if selectedMood === 'stressed'}
					<img
						class="h-auto max-w-xs md:max-w-lg rounded-lg"
						src="https://emoji.gg/assets/emoji/5721_NYOOO.png"
						alt="Stressed emoji"
					/>
				{/if}
				<div class="mt-2 text-center">Stressed</div>
			</div>
		</div>
	</div>
	{#if selectedMood !== ''}
		<p class="mt-4">You selected: {selectedMood}</p>
	{/if}
</main>
