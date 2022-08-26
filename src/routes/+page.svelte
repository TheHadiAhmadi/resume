<script>
  import Header from "$lib/components/Header.svelte";
  import Main from "../lib/components/Main.svelte";
  import Sidebar from "../lib/components/Sidebar.svelte";
  import { page } from "$app/stores";

  let ubeac = [
    {
      role: "Frontend Developer",
      isRemote: true,
      company: {
        name: "uBeac",
        logo: "/ubeac-logo.jpeg",
        location: {
          country: "Canada",
          city: "Toronto",
        },
      },
      isFulltime: true,
      date: {
        start: "Dec 2021",
        end: "Present",
      },

      description: `in uBeac we're working on Developing a Component library for svelte which we
          developed more than 60 Customizable & Performant UI components to make web development easier`,
    },
  ];

  const name = $page.url.searchParams.get("name");
  if (name) ubeac = [];
  let data = {
    name: name ?? "Hadi Ahmadi",
    header: "Fullstack Web Developer",
    contact: [
      { name: "www", value: "https://hadiahmadi.pages.dev" },
      { name: "github", value: "https://github/thehadiahmadi" },
      { name: "linkedin", value: "https://linkedin.com/in/thehadiahmadi" },
      { name: "twitter", value: "https://twitter/thehadiahmadi" },
      { name: "phone", value: "+93767245001" },
    ],
    skills: [
      "Svelte",
      "React",
      "Nodejs",
      "PHP",
      "Typescript",
      "MongoDB",
      "TailwindCSS",
      "Bootstrap",
      "PostgreSQL",
      "Deno",
    ],

    overview: `
        I am FullStack Web Developer with more than 2 year of web development
    experience. I have experience building Frontends using vanilla and modern
    JavaScript frameworks especially React and Svelte, backends using PHP and
    Node.js and Working with databases like MySQL, PostgreSQL and MongoDB.
        `,
    experiences: ubeac,
    projects: ["Todo", "Chat App", "Minibase", "Games", "Svind"],
  };
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
