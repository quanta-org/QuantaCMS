<script>
  import {Skeleton, } from 'flowbite-svelte'

  export let item = {};
</script>


{#if item.name == "Chrysler"}
  <p>Chrysler</p>
  <p>Client since 20XX</p>
{:else if item.name == "Belvidere" }
  <p>Belvidere</p>
{:else if item.serial == "8675309" }
  <p>Zebra 2365 Printer</p>
  <p>Serial: 8675309</p>
  <p>Installed 8 October 2020</p>
  <p>Invoice # 4444</p>
  <p>Lifetime service costs: $300</p>
  <p>Lifetime service revenue: $900</p>



{:else if item.callid == "8675309" }
  <h1>Call 8675309</h1>
  <p>7 August 2022</p>
  <p>Fixed 4 devices</p>
  <p>30min onsite, 80min drive</p>
  <p>No parts used</p>
  <p>Total cost: $180</p>
  <a href="">2 attachments</a>
{:else if item.name == "thing4"}

{:else}
  <Skeleton class="" />
{/if}