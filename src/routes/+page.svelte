<script lang="ts">
    import List from "../lib/list/List.svelte";
    //import ListItem from './lib/list/ListItem.svelte';
    import Info from "../lib/list/Info.svelte";
    import { Card } from "flowbite-svelte";
    import { writable } from "svelte/store";
    import  {Selected} from "../lib/selected";
    import type { Item } from "../lib/selected"


    export let data;
  
  </script>
  
  <main class="flex">

    <div class="bottom grow gap-1">
      <div>
        <List items={data?.clients} />
        <List name="Contracts" columns={[
          ["Name", true],

          ["Months left", false]
        ]}/>
      </div>
      <div>
        <List
        name="Locations"
        columns={[
          ["Name", true],
          ["Address", true],
        ]}
        items={data?.locations}
      />
      <List
        name="Calls"
        columns={[
          ["CallID", true],
          ["Date", true],
          ["3rd thing", false],
        ]}
        items={data?.calls}
      />
      </div>
  
      
      <List
        name="Devices"
        columns={[
          ["Model#", true],
          ["Serial#", true],
        ]}
        items={data?.devices}
      />
      
    </div>
    <div class="top gap-1">
      <Info  />
      <!-- <Value  /> -->
    </div>
  </main>
  
  <style>
    .top {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      gap: 15px 0px;
    }
    .bottom {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      flex-wrap: wrap;
      gap: 15px 0px;
    }

  </style>
  