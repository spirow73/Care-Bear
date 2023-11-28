<script>
    import MoodAdder from "$lib/components/mood/MoodAdder.svelte";
</script>

    <MoodAdder />


<div class="pt-9">
    <h1 class="text-2xl font-bold text-center">Select Activities For Your Mood</h1>
    <div class="max-w-md mx-auto mt-10 p-6 space-y-4">
        <a href="/mood/yoga" class="block text-black-200 hover:text-white">
            <div class="p-9 ... bg-orange-200 pt-6 pb-8 rounded-md">Yoga</div>
        </a>
        <a href="/mood/meditation" class="block text-black-200 hover:text-white">
            <div class="p-9 ... bg-orange-200 pt-6 pb-8 rounded-md">Meditation</div>
        </a>
        <a href="/mood/breathingExercise" class="block text-black-200 hover:text-white">
            <div class="p-9 ... bg-orange-200 pt-6 pb-8 rounded-md">Breathing Exercise</div>
        </a>
    </div>
</div>
