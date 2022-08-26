<script>
import ExperienceCard from "./ExperienceCard.svelte";

  import MainSection from "./MainSection.svelte";
import Project from "./Project.svelte";

  export let overview = '';
  export let experiences = [];
  export let projects = [];
</script>

<div class="bg-gray-300 p-4 w-full">
  <MainSection title="Overview">
    {overview}
  </MainSection>
  <MainSection title="Experience">
      {#each experiences as experience}
      <ExperienceCard {experience} />
    
    {/each}
</MainSection>
  <MainSection title="Projects">
      {#each projects as project}
        <Project {project} />
      {/each}
  </MainSection>
</div>
