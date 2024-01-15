<script>
	export let title;
	export let description;
	export let formattedDeadline;
</script>

<div>
	<h2 class="text-xl font-semibold">{title}</h2>
	<p class="text-black">{description}</p>
	<p class="text-slate-500">Deadline: {formattedDeadline}</p>
</div>
