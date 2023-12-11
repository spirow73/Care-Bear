<script>
    import MoodAdder from '$lib/components/mood/MoodAdder.svelte';
    import theme from '../../stores/themeStore.js'; // Import theme store

    // Reactive statement to get current theme
    let currentTheme;
    $: currentTheme = $theme === 'dark' ? 'dark' : '';
</script>

<body class={currentTheme}>
    <MoodAdder />

    <div class="pt-9">
        <h1 class="text-2xl font-bold text-center">Select Activities For Your Mood</h1>
        <div class="max-w-md mx-auto mt-10 p-6 space-y-4">
            <a href="./mood/yoga" class={`block ${currentTheme === 'dark' ? 'text-white hover:text-gray-200' : 'text-black-200 hover:text-white'}`}>
                <div class={`p-9 ... ${currentTheme === 'dark' ? 'bg-gray-700' : 'bg-orange-200'} pt-6 pb-8 rounded-md`}>Yoga</div>
            </a>
            <a href="./mood/meditation" class={`block ${currentTheme === 'dark' ? 'text-white hover:text-gray-200' : 'text-black-200 hover:text-white'}`}>
                <div class={`p-9 ... ${currentTheme === 'dark' ? 'bg-gray-700' : 'bg-orange-200'} pt-6 pb-8 rounded-md`}>Meditation</div>
            </a>
            <a href="./mood/breathingExercise" class={`block ${currentTheme === 'dark' ? 'text-white hover:text-gray-200' : 'text-black-200 hover:text-white'}`}>
                <div class={`p-9 ... ${currentTheme === 'dark' ? 'bg-gray-700' : 'bg-orange-200'} pt-6 pb-8 rounded-md`}>Breathing Exercise</div>
            </a>
            <a href="./mood/history" class={`block ${currentTheme === 'dark' ? 'text-white hover:text-gray-200' : 'text-black-200 hover:text-white'}`}>
                <div class={`p-9 ... ${currentTheme === 'dark' ? 'bg-gray-700' : 'bg-orange-200'} pt-6 pb-8 rounded-md`}>History</div>
            </a>
        </div>
    </div>
</body>
