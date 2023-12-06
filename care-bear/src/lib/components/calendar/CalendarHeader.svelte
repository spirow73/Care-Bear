<script>
	export let changeMonth;
	export let selectedDate;
</script>

<div class="flex justify-between items-center button-container mb-10">
	<button
		class="bg-orange-200 hover:bg-orange-300 text-white font-bold py-2 px-4 rounded"
		on:click={() => changeMonth(-1)}
		aria-label="Previous Month"
	>
		&lt; Prev
	</button>
	<span
		class="text-xl font-bold text-orange-300"
		id="month-year"
		role="heading"
		aria-level="2"
		aria-live="assertive"
	>
		{selectedDate
			? `${selectedDate.toLocaleString('default', {
					month: 'long'
			  })} ${selectedDate.getFullYear()}`
			: 'Loading...'}
	</span>
	<button
		class="bg-orange-200 hover:bg-orange-300 text-white font-bold py-2 px-4 rounded"
		on:click={() => changeMonth(1)}
		aria-label="Next Month"
	>
		Next &gt;
	</button>
</div>
