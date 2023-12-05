<!-- App.svelte -->

<script>
    import { Router, Route } from "svelte-routing";
    import MoodActivitiesPage from "./MoodActivitiesPage.svelte";
    import MoodExcerciseYoga from "./MoodExcerciseYoga.svelte";
    import MoodExerciseMeditate from "./MoodExerciseMeditate.svelte";
    import './tailwind.css';

  
    // Define routes
    const routes = [
      { name: "/", component: MoodActivitiesPage },
      { name: "/activity/yoga", component: MoodExcerciseYoga. },
      { name: "/activity/meditation", component: MoodExerciseMeditate },
    ];
  </script>
  
  <Router {routes}>
    {#each $routes as { component, ...route }}
      <Route {...route} {component} />
    {/each}
  </Router>
  