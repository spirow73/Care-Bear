<script lang="ts">
	import Button from './Button.svelte';
	export let primaryText = 'Primary text';
	export let secondaryText = 'Secondary text';
	export let primaryHandle;
	export let secondaryHandle; // Explicitly define the type of secondaryHandle prop
</script>

<div class="flex flex-col md:flex-row">
	<Button text={secondaryText} variant="secondary" onClick={secondaryHandle} />
	<Button text={primaryText} variant="primary" onClick={primaryHandle} />
</div>
