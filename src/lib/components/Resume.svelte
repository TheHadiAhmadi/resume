<script>
    import Header from "./Header.svelte";
    import Main from "./Main.svelte";
    import Sidebar from "./Sidebar.svelte";
  
    export let data;
    $: console.log(data)
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
  