<script>
  import Language from './Language.svelte';

  import Skill from "./Skill.svelte";

  import Info from "./Info.svelte";

  import SidebarCard from "./SidebarCard.svelte";
  export let contact = [];
  export let skills = [];
</script>

<div class="flex flex-col gap-2 mt-2">
  <SidebarCard title="Personal Info">
    <div class="flex flex-col">
      {#each contact as { name, value }}
        <Info icon={name} {value} />
      {/each}
    </div>
  </SidebarCard>
  <SidebarCard title="Skills">
    <div class="max-w-350px flex gap-1.5 flex-wrap">
      {#each skills as skill}
        <Skill>{skill}</Skill>
      {/each}
    </div>
  </SidebarCard>
  <SidebarCard title="Language">
    <div class="flex flex-col w-full items-stretch gap-1">
      <Language lang="Persian" level="Excellent" />
      <Language lang="English" level="Good" />
      <Language lang="Pashto" level="Good" />
    </div>
  </SidebarCard>
</div>
