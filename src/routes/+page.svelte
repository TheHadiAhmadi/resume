<script>
  import Header from "$lib/components/Header.svelte";
  import Main from "../lib/components/Main.svelte";
  import Sidebar from "../lib/components/Sidebar.svelte";

  export let data;
</script>

<div class="flex bg-gray-200 flex-col">
  <Header name={data.name} header={data.header} />
  <div class="flex">
    <Main
      overview={data.overview}
      experiences={data.experiences}
      projects={data.projects}
    />
    <Sidebar skills={data.skills} contact={data.contact} />
  </div>
</div>
