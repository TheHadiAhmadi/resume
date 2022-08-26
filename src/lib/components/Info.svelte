<script>
  import Icon from "./Icon.svelte";

  export let icon;
  export let link = false;
  export let value;
</script>


<div class="py-1 text-sm flex items-center text-gray-700 bg-gradient-to-b from-transparent to-transparent via-black/5">
  <Icon name={icon} />

  {#if link}
    <a href={value}>{value}</a>
  {:else}
    <span>{value}</span>
  {/if}
</div>
