<script>
    //This is a component of the table header on a list component that opens a settings panel when clicked
    //Eventually, it will bind several values that will be used to configure the list component

    import { ToolbarButton } from 'flowbite-svelte';
</script>


<ToolbarButton size="xs" color="default">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>      
</ToolbarButton>