<script lang="ts">
    import {
        Accordion,
        AccordionItem,
        Card,
        Table,
        TableBody,
        TableBodyCell,
        TableBodyRow,
        TableHead,
        TableHeadCell,
        Checkbox,
        TableSearch,
        Button,
        Chevron,
    } from "flowbite-svelte";
    import ConfigButton from "./ConfigButton.svelte";
    import Row from "./Row.svelte";
    import SortSelector from "./SortSelector.svelte";
    import ColumnConfig from "./ColumnConfig.svelte";
    import {Selected, SelectedID, SelectedExpanded} from "../selected";
    import type { Item } from "../selected"

    export let name = "Clients";
    export let columns: [string, boolean][] = [["name", true]];


    export let items: Item[] = [];



    let sortColumn = 0;
    let sortAsc = false;
    // $: sortedItems = items.sort((a, b) => {
    //     if (a[columns[sortColumn][0]] < b[columns[sortColumn][0]]) {
    //         return sortAsc ? -1 : 1;
    //     } else if (a[columns[sortColumn][0]] > b[columns[sortColumn][0]]) {
    //         return sortAsc ? 1 : -1;
    //     } else {
    //         return 0;
    //     }
    // });

    let searchTerm = "";
    $: filteredItems = items.filter((item) => {
        for (const prop in item) {
            if (
                item[prop].toLowerCase().indexOf(searchTerm.toLowerCase()) !==
                -1
            ) {
                return true;
            }
        }
    });


</script>



<Card class="items-center h-fit" size="lg">
    <h1>{name}</h1>
    <Table hoverable={true} class="p-2 overflow-y-auto" divClass="">
        <TableSearch
            placeholder="Search here!"
            hoverable={true}
            bind:inputValue={searchTerm}
        >
            <TableHead>

                {#each columns as column}
                    {#if column[1]}
                        <TableHeadCell>
                            <div class="flex flex-col w-min">
                                {column[0]}
                                <SortSelector/>
                            </div>
                        </TableHeadCell>
                    {/if}
                {/each}

                <TableHeadCell>
                    <ColumnConfig bind:columns />
                    <ConfigButton />
                </TableHeadCell>
            </TableHead>
            <TableBody>
                {#each filteredItems as item}
                <Row {item} {columns}/>
                {/each}
            </TableBody>
            <tfoot>
                <tr class="font-semibold text-gray-900 dark:text-white">
                    <th scope="row" class="py-3 px-6 text-base">Total</th>
                    <td class="py-3 px-6">3</td>
                    <td class="py-3 px-6">21,000</td>
                </tr>
            </tfoot>
        </TableSearch>
    </Table>
</Card>
