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
    import ListItem from "./Row.svelte";
    import SortSelector from "./SortSelector.svelte";
    import ColumnConfig from "./ColumnConfig.svelte";
    import {Selected, SelectedID, SelectedExpanded} from "../selected";
    import type { Item, ItemType } from "../selected"

    export let name = "Clients";
    export let columns: [string, boolean][] = [["name", true]];


    export let items: Item[] = [
        { name: "thing1", type: "Client" },
        { name: "thing2", type: "Client" },
        { name: "thing3", type: "Client" },
        { name: "thing4", type: "Client" },
    ];



    let sortColumn = 0;
    let sortAsc = false;
    $: sortedItems = items.sort((a, b) => {
        if (a[columns[sortColumn][0]] < b[columns[sortColumn][0]]) {
            return sortAsc ? -1 : 1;
        } else if (a[columns[sortColumn][0]] > b[columns[sortColumn][0]]) {
            return sortAsc ? 1 : -1;
        } else {
            return 0;
        }
    });

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

    // let sortHandler = (event) => {
    //     console.log(event.currentTarget);
    //     if (column === sortColumn) {
    //         sortAsc = !sortAsc;
    //     } else {
    //         sortColumn = column;
    //         sortAsc = true;
    //     }
    // };
</script>

<!-- <div class="w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>
        <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            View all
        </a>
   </div>
   <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image">
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Neil Sims
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $320
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image">
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Bonnie Green
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $3467
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Michael image">
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Michael Gough
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $67
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Lana image">
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Lana Byrd
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $367
                    </div>
                </div>
            </li>
            <li class="pt-3 pb-0 sm:pt-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Thomas image">
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Thomes Lean
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $2367
                    </div>
                </div>
            </li>
        </ul>
   </div>
</div> -->

<Card class="items-center h-fit" size="lg">
    <!-- <Accordion>
        {#each items as item}
            <AccordionItem>
                <span slot="header">{item}</span>
                <ListItem {item} />
            </AccordionItem>
        {/each}
    </Accordion> -->
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
                            <Checkbox bind:group={$SelectedID} value={item.backendID} />
                        </TableBodyCell>
                    </TableBodyRow>
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
