<script lang=ts>
    import {TableBodyRow, TableBodyCell, Checkbox } from "flowbite-svelte";
    import {Selected, SelectedID, SelectedExpanded} from "../selected";
    import type { Item } from "../selected"


    export let item:Item = {};
    export let columns = [];
</script>


<TableBodyRow>

    {#each columns as column}
        {#if column[1]}
            <TableBodyCell
                >{item[
                    column[0]
                        .toLowerCase()
                        .replace(/[^a-zA-Z ]/g, "")
                ]}</TableBodyCell
            >
        {/if}
    {/each}
    <TableBodyCell class="!p-4">
        <Checkbox bind:group={$SelectedID} value={item.ID} />
    </TableBodyCell>
</TableBodyRow>