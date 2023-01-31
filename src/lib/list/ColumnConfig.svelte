<script>
    //This is a component of the table header on a list component that opens a menu to add a column when clicked
    //It has a bound property called columns that is an array of 2 length arrays that contain the column name and a boolean, the boolean is true if the column is selected

    import { Button, ToolbarButton, Dropdown, DropdownItem, DropdownDivider, Checkbox} from 'flowbite-svelte';

    export let columns = [];

    let open = false;
</script>


<ToolbarButton class=" text-gray-900 bg-white dark:text-white dark:bg-gray-800" size="xs">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z" />
      </svg>
        
</ToolbarButton>
<Dropdown bind:open >
    <!-- <DropdownItem class="hover:bg-gray-100 dark:hover:bg-gray-600"><Checkbox>Item 1</Checkbox></DropdownItem>
    <DropdownItem class="hover:bg-gray-100 dark:hover:bg-gray-600"><Checkbox>Item 2</Checkbox></DropdownItem>
    <DropdownItem class="hover:bg-gray-100 dark:hover:bg-gray-600"><Checkbox>Item 3</Checkbox></DropdownItem> -->
    {#each columns as column}
        <DropdownItem on:click={() => {open = false; column[1] = !column[1]}} class="hover:bg-gray-100 dark:hover:bg-gray-600"><Checkbox  bind:checked={column[1]}>{column[0]}</Checkbox></DropdownItem>
    {/each}
</Dropdown>