<script>
	export let type = 'text';
	export let placeholder = '';
	export let value = '';

	function typeAction(node) {
		node.type = type;
	}
</script>

<div class="space-y-1">
	<div class="mb-4">
		<input
			class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			{placeholder}
			use:typeAction
			bind:value
		/>
	</div>
</div>
