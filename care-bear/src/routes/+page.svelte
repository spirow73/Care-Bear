<script>
	import bear from "../images/bear.png"
	import off from "../images/off.png"
	import on from "../images/on.png"


	let isOn = false;

  const toggleImage = () => {
    isOn = !isOn;
  };
</script>
<div class="flex flex-col items-center justify-self-start h-screen">
	<!-- First Image (Bear) -->
	<div class="object-none object-top">
	  <img class="max-w-full max-h-full " src={bear} alt={bear}>
	</div>
  
	<!-- Second Image (Off) -->
	<div class="object-none object-top mt-4 cursor-pointer" on:click={toggleImage}>
		<img class="max-w-full max-h-full" src={isOn ? on : off} alt={isOn ? 'On' : 'Off'}>
	  </div>

	  <div class="relative h-32 w-32 bg-orange-200">
		<div class="absolute inset-x-0 top-0 h-16 ...">tasks</div>
	  </div>
  </div>

 


  <style>
	div:focus {
	  outline: none; /* Remove the default focus style for better aesthetics */
	}
  </style>
  
  
  