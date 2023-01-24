<script>
    import {Card, Accordion, AccordionItem} from 'flowbite-svelte'
    import ContractView from '../ContractView.svelte';
    import {Selected, SelectedExpanded} from "../selected";


    //We want the accordion to be open by default if there is only one item
    //We also want items to be sorted by position in type hierarchy

</script>



<Card size="xl" class="m-2">
    <Accordion multiple class="w-60">
        {#each $Selected as item, i}
          <AccordionItem bind:open={$SelectedExpanded[i]}>
            <div slot="header">{item.ID}</div>
            <!-- TODO: how are we going to find the type of the item? should we change the backend -->
            <code>fetch GET /api/ITEMTYPE/{item.ID}</code>
          </AccordionItem>
        {/each}
      </Accordion>
</Card>