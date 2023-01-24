import { writable, type Writable } from "svelte/store";


interface Item {
    [key: string]: string;
    backendID: string;
    type: ItemType;
}

type ItemType = "Client" | "Location" | "Device" | "Call" | "Contract";

//All selected elements
const Selected:Writable<Item[]> = writable([]);

//All selected elements as an array of whether they are expanded or not
const SelectedExpanded:Writable<boolean[]> = writable([]);

//All selected elements as an array of their backendIDs
const SelectedID:Writable<string[]> = writable([]);


export  { Selected, SelectedExpanded, SelectedID};
export type { Item, ItemType };