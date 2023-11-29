<script>
	// Importing the journalEntryStore module from '$lib/journalEntryStore.js'
	import { journalEntryStore } from '$lib/journalEntryStore.js';

	// Declaring a variable 'entry' that will be used in the component
	export let entry;

	// Async function to handle editing content
	async function onEditContent() {}
</script>

<div class="mt-6">
	<!-- Container div for displaying entry content -->
	<div
		class="relative p-4 bg-white shadow-lg rounded-lg mb-6 transition-all hover:shadow-xl bg-gray-50"
	>
		<!-- Checking if entry content exists -->
		{#if entry.content}
			<!-- Displaying the entry content -->
			<div class="text-gray-800 whitespace-pre-line">{entry.content}</div>
			<!-- Button for editing content -->
			<button
				class="absolute bottom-0 right-0 mb-4 mr-4 text-lg p-2"
				on:click={onEditContent}
				title="Edit"
			>
				✏️ <!-- Edit icon -->
			</button>
		{:else}
			<!-- Displaying a section for adding content if entry content does not exist -->
			<div class="flex justify-center items-center h-32">
				<!-- Button to initiate content addition -->
				<button
					class="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
					on:click={onEditContent}
				>
					Add Content
				</button>
			</div>
		{/if}
	</div>
</div>
