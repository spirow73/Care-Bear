<script>
	export let color = undefined;
	export let count;
</script>

<div class="flex flex-col items-center">
	<span class={`notification-mark bg-${color}-500 mb-1`} />
	<!-- <p class="text-xs text-gray-500">{count}</p> -->
</div>

<style>
	.notification-mark {
		display: inline-block;
		width: 6px;
		height: 6px;
		border-radius: 50%;
	}
</style>
