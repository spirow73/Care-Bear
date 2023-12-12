<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation'

	let responses = {};
	const totalQuestions = 20;
	const questions = [
		{
			id: 'q1',
			text: 'When under pressure, I strongly prefer to seek support from others rather than retreat inward.'
		},
		{
			id: 'q2',
			text: "I tend to meticulously plan every detail when I'm stressed rather than adapt on the fly."
		},
		{
			id: 'q3',
			text: 'During stressful times, I prefer engaging activities over quiet solitude.'
		},
		{
			id: 'q4',
			text: 'Deadlines motivate me even more during stressful times.'
		},
		{
			id: 'q5',
			text: 'When stressed, I become more detail-oriented rather than overlooking small things.'
		},
		{
			id: 'q6',
			text: 'I experience physical symptoms like headaches or digestive issues when stressed.'
		},
		{
			id: 'q7',
			text: 'I tend to express my stress openly rather than keep it hidden from others.'
		},
		{
			id: 'q8',
			text: 'Stress pushes me to take charge and lead rather than step back and let others take control.'
		},
		{
			id: 'q9',
			text: 'I confront stress head-on rather than seek distractions to cope.'
		},
		{
			id: 'q10',
			text: 'I find comfort in routine during stressful times rather than seek novelty.'
		},
		{
			id: 'q11',
			text: 'When stressed, I become more analytical rather than rely on intuition to make decisions.'
		},
		{
			id: 'q12',
			text: 'Stress makes me more focused on my own needs rather than empathetic towards others.'
		},
		{
			id: 'q13',
			text: 'I prefer finding solutions on my own rather than talking through problems when stressed.'
		},
		{
			id: 'q14',
			text: 'When stressed, I become more organized rather than less structured in my approach.'
		},
		{
			id: 'q15',
			text: 'I trust my own instincts during stress rather than seek reassurance from others.'
		},
		{
			id: 'q16',
			text: 'I feel more energized rather than drained during stressful periods.'
		},
		{
			id: 'q17',
			text: 'I seek immediate solutions rather than take time to consider all options when stressed.'
		},
		{
			id: 'q18',
			text: 'Stress leads me to seek comfort in familiar settings rather than explore new environments.'
		},
		{
			id: 'q19',
			text: 'I become more assertive rather than passive when dealing with stress.'
		},
		{
			id: 'q20',
			text: 'During stress, I prefer to process emotions internally rather than talk them through.'
		}
	];

	for (let i = 1; i <= totalQuestions; i++) {
		responses[`q${i}`] = '';
	}

	const handleSubmit = () => {
		console.log(responses);
		calculateStressor();
	};

	//logic for stressors calc
	function calculateStressor() {
    let stressorType = '';
    const agreeCount = Object.values(responses).filter(
        (response) => response === 'Agree' || response === 'Strongly Agree'
    ).length;

    const disagreeCount = Object.values(responses).filter(
        (response) => response === 'Disagree' || response === 'Strongly Disagree'
    ).length;

		// needs to be edited, those are random
		if (agreeCount >= 16) {
            stressorType = {
                title: 'Problem-Focused Coping Preference',
                traits: 'Strong inclination towards seeking support from others and meticulous planning during stress.',
                explanation: 'Tendency to tackle stressors directly by addressing the problem head-on and seeking practical solutions. Support from others and structured planning are primary coping mechanisms.'
            };
        } else if (disagreeCount >= 16) {
            stressorType = {
                title: 'Emotion-Focused Coping Preference',
                traits: 'Reliance on solitude and adaptability during stress.',
                explanation: 'Prioritizing managing emotions over directly addressing stressors. Solitude and adaptability are primary coping mechanisms, emphasizing emotional regulation and internal processing.'
            };
        } else if (agreeCount >= 12 && disagreeCount < 6) {
            stressorType = {
                title: 'Social Support-Centered Coping Style',
                traits: 'Preference for seeking support from others and expressing stress openly.',
                explanation: 'Reliance on social networks for stress relief and expressing stress openly for emotional support and problem-solving.'
            };
        } else if (disagreeCount >= 12 && agreeCount < 6) {
            stressorType = {
                title: 'Avoidance Coping Style',
                traits: 'Tendency to retreat inward, seek distractions, and avoid confronting stress directly.',
                explanation: 'Coping through distraction, avoiding direct confrontation of stressors, and seeking escape or relief from stress.'
            };
        } else if (agreeCount >= 8 && disagreeCount < 10) {
            stressorType = {
                title: 'Adaptive Coping Style',
                traits: 'Flexibility in coping strategies, balancing problem-solving and emotional management.',
                explanation: 'Demonstrates adaptability by using a mix of problem-focused and emotion-focused strategies based on the nature of stressors.'
            };
        } else {
            stressorType = {
                title: 'Reactive Coping Style',
                traits: 'Overwhelmed by stress, less structured approach, and heightened emotional responses.',
                explanation: 'Difficulty in maintaining structured plans, feeling overwhelmed by stress, and displaying heightened emotional reactions.'
            };
        }
    displayStressor(stressorType);
}

	//logic for displaying (messy)
	function displayStressor(stressor) {
    const stressorType = encodeURIComponent(stressor.title); // Encode stressor type for URL
    goto(`/advice?stressor=${stressorType}`) ;
}

	function showPopup() {
		const popup = document.getElementById('popup');
		popup.classList.remove('hidden');
	}

	onMount(() => {
		showPopup();
	});

	function closePopup() {
		const popup = document.getElementById('popup');
		popup.classList.add('hidden');
	}
</script>

<!-- 
popup explainging what the survey is for
 -->

<div
	class="popup fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50 hidden"
	id="popup"
>
	<div class="popup-content bg-amber-50 p-8 rounded shadow-md max-w-xl">
		<p class="mb-4">Welcome!</p>
		<p class="mb-4">
			Thank you for taking this survey. It is made to help our users to find what their stressor is
			and based on that personalize some advice that could help them lesser their levels of stress.
		</p>
		<p class="mb-4">
			Please note that your responses should primarily lean towards "agreement" or "disagreement."
			While "neutral" is an option, we encourage you to use it sparingly, reserving it for
			situations where you truly cannot lean toward either agreement or disagreement. Your input is
			valuable, so try to provide a clear stance whenever possible.
		</p>
		<p class="mb-4">
			Your thoughtful responses help us gather accurate insights that we will use to help you. Let's
			get started!
		</p>
		<div class="response-buttons flex justify-between">
			<button
				id="agree-btn"
				class="bg-green-500 hover:bg-green-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				on:click={closePopup}>Understood</button
			>
		</div>
	</div>
</div>

<!-- Form for questions -->
<form class="max-w-md mx-auto p-6 bg-amber-50 rounded shadow-md" on:submit|preventDefault={handleSubmit}>
	<!-- Loop through questions -->
	{#each questions as question}
	  <div class="border-2 border-rose-200 rounded p-4 mb-4">
		<label class="block mb-4" for="{question.id}">Question {question.id.substr(1)}: {question.text}</label>
		<div class="grid grid-cols-5 gap-4">
		  <!-- Loop through answers -->
		  {#each ['Strongly Agree', 'Agree', 'Neutral', 'Disagree', 'Strongly Disagree'] as answer}
			<label class="block mb-2 font-semibold" for="{question.id}">
			  <input
				class="mr-2 appearance-none border-2 rounded-full w-4 h-4 checked:bg-transparent checked:border-transparent"
				type="radio"
				bind:group={responses[question.id]}
				value={answer}
				style="
				  background-color: {answer === 'Strongly Agree' ? '#2ecc71' : answer === 'Agree' ? '#00b894' : answer === 'Neutral' ? '#dfe6e9' : answer === 'Disagree' ? '#e74c3c' : '#c0392b'};
				  border-color: {answer === 'Strongly Agree' ? '#27ae60' : answer === 'Agree' ? '#00a896' : answer === 'Neutral' ? '#bdc3c7' : answer === 'Disagree' ? '#c0392b' : '#96281b'};
				  background: {responses[question.id] === answer ? (answer === 'Strongly Agree' ? '#27ae60' : answer === 'Agree' ? '#00a896' : answer === 'Neutral' ? '#bdc3c7' : answer === 'Disagree' ? '#c0392b' : '#96281b') : 'transparent'};
				"
			  /> {answer}
			</label>
		  {/each}
		</div>
	  </div>
	{/each}
  
	<button
		class="mt-4 bg-button-1 hover:bg-button-2 text-white font-bold py-2 px-4 rounded"
		type="submit">Submit</button
	>

  </form>  
	<!-- not sure if we want 30Qs, i have them just in case, to add them is easy -->	

<!-- Displays the final stressor -->
<div class="mt-6 text-center hidden flex items-center justify-center" id="stressor">...</div>
