<script>
	export let entry;
	export let onEditContent;
</script>

<div class="mt-6">
	<div
		class="relative p-4 bg-fuchsia-100 shadow-lg rounded-lg mb-6 transition-all hover:shadow-xl"
	>
		{#if entry.content}
			<div class="text-gray-800 whitespace-pre-line">{entry.content}</div>
			<button
				class="absolute bottom-0 right-0 mb-4 mr-4 text-lg p-2"
				on:click={onEditContent}
				title="Edit"
			>
				✏️
			</button>
		{:else}
			<div class="flex justify-center items-center h-32">
				<!-- Aumenta la altura para contenido vacío -->
				<button
					class="px-4 py-2 bg-button-1 text-white rounded-full hover:bg-button-2 transition-colors"
					on:click={onEditContent}
				>
					Add Content
				</button>
			</div>
		{/if}
	</div>
</div>