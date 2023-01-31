<script>
    //The sort selector is a tiny arrow that appears next to each column header
    //Clicking it will sort the table by that column
    //The sort selector is a child of the table header
    //It has a bound property called direction that is either "asc" or "desc"
    //It has a bound property called column that is the name of the column to sort by

    import { ToolbarButton } from "flowbite-svelte";
    

    export let direction = "asc";
    export let column = "";
</script>

<ToolbarButton class="w-full m-auto ml-0" size="xs" on:click={() => {
    if (direction == "asc") {
        direction = "desc";
    } else {
        direction = "asc";
    }
}}>
{#if (direction=="asc")}
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
  
{:else}
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
  </svg>
  
{/if}
</ToolbarButton>