<!-- Button.svelte -->
<script>
	export let text = 'Button';
	export let onClick;
	let classes = 'bg-grey-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded';
</script>

<button on:click={onClick} class={classes}>{text}</button>
