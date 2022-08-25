<script>

  export let lang;
  export let level;
</script>

<div
        class="flex flex-row items-baseline border border-gray-400 bg-gradient-to-b from-gray-400/10 to-gray-300"
      >
        <div class="p-1 w-1/3 text-center">{lang}</div>
        <div
          class="p-1 px-4 border-l text-gray-800 text-center border-gray-400"
        >
          {level}
        </div>
      </div>

