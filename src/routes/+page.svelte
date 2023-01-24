<script lang="ts">
    import List from "../lib/list/List.svelte";
    //import ListItem from './lib/list/ListItem.svelte';
    import Info from "../lib/list/Info.svelte";
    import { Card } from "flowbite-svelte";
    import { writable } from "svelte/store";
    import  {Selected} from "../lib/selected";
    import type { Item } from "../lib/selected"
  
  </script>
  
  <main class="flex">

    <div class="bottom grow gap-1">
      <div>
        <List items={[{ name: "Chrysler", type: "Client" }, {name: "SpartanNash", type: "Client"}]} />
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
        items={[
          { name: "Belvidere", address: "123 Main St", type: "Location", backendID: "12", },
          {
            name: "Indiana Transmission",
            address: "123 Indiana Blvd",
            type: "Location",
            backendID: "123",
          },
          { name: "Jefferson North", address: "333 Jefferson St", type: "Location", backendID: "12345"},
          { name: "Sterling Heights", address: "123 Main St", type: "Location", backendID: "123456" },
          { name: "SpartanNash", address: "444 Spartan Wy", type: "Location", backendID: "1234567" },
        ]}
      />
      <List
        name="Calls"
        columns={[
          ["CallID", true],
          ["Date", true],
          ["3rd thing", false],
        ]}
        items={[
          {
            callid: "8675309",
            date: "08/07/22",
            client: "Chrysler",
            type: "Call",
          },
          { callid: "8675310", date: "07/10/22", client: "Mopar", type: "Call" },
          { callid: "8675311", date: "06/12/22", client: "Mopar", type: "Call" },
          { callid: "8675312", date: "05/02/22", client: "Mopar", type: "Call" },
        ]}
      />
      </div>
  
      
      <List
        name="Devices"
        columns={[
          ["Model#", true],
          ["Serial#", true],
        ]}
        items={[
          { model: "2365", serial: "8675309", client: "Chrysler", type: "Device"},
          { model: "2365", serial: "8675310", client: "Mopar", type: "Device"},
          { model: "2365", serial: "8675311", client: "Mopar", type: "Device"},
          { model: "2365", serial: "8675312", client: "Mopar", type: "Device"},
          { model: "2365", serial: "8675313", client: "Chrysler", type: "Device"},
          { model: "2365", serial: "8675314", client: "Chrysler", type: "Device"},
          { model: "2365", serial: "8675315", client: "Chrysler", type: "Device"},
          { model: "2365", serial: "8675316", client: "Chrysler", type: "Device"},
          { model: "2365", serial: "8675317", client: "Ford", type: "Device"},
          { model: "2365", serial: "8675318", client: "Ford", type: "Device"},

        ]}
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
  