<script>
	import bear from "../images/bear.png"
	import off from "../images/off.png"
	import on from "../images/on.png"


	let isOn = false;

  const toggleImage = () => {
    isOn = !isOn;
  };
</script>
<div class="flex flex-col items-center justify-self-start">
	<!-- First Image (Bear) -->
	<div class="object-none object-top">
	  <img class="max-w-full max-h-full " src={bear} alt={bear}>
	</div>
  
	<!-- Second Image (Off) -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="object-none object-top mt-4 cursor-pointer" on:click={toggleImage}>
		<img class="max-w-full max-h-full" src={isOn ? on : off} alt={isOn ? 'On' : 'Off'}>
	  </div>
  </div>
  <div class="grid grid-cols-6 gap-4">
	
  <div class="col-start-1 col-end-3">
	<a href="/tasks">
	<ul class="bg-orange-200 ml-12 text-center border-solid border-solid border-2 border-black rounded-full">
	  <li>Task 1</li>
	  <li>TAsk 2</li>
	  <li>Task 3</li>
	  <!-- Add more list items as needed -->
	</ul>
</a>
</div>
<div class="col-end-7 col-span-2 bg-orange-200 mr-20 text-center border-solid border-2 border-black rounded-full">
	<a href="/mood">
	<h2>moods</h2>
	<h2>moods</h2>
	<h2>moods</h2>
</a>
</div>
</div>




 


  <style>
	div:focus {
	  outline: none; /* Remove the default focus style for better aesthetics */
	}
  </style>
  
  
  