<script>
    import { Card, Accordion, AccordionItem } from "flowbite-svelte";
    import InfoView from "./InfoView.svelte";
    import {Selected, SelectedExpanded} from "./selected";

</script>

<Card size="xl" class="m-2">
    <Accordion multiple class="">
        {#each $Selected as item, i}
            <AccordionItem bind:open={$SelectedExpanded[i]}>
                <div slot="header">{item.name}</div>
                <div class="inline-block">
                    <InfoView />
                    <br/>
                    <InfoView />
                </div>
                <img class="inline-block max-h-52"
                    src="https://canvasjs.com/wp-content/uploads/images/gallery/javascript-charts/overview/javascript-charts-graphs-index-data-label.png"
                />
            </AccordionItem>
        {/each}
    </Accordion>
</Card>
