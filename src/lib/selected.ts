import { writable, type Writable } from "svelte/store";


interface Item {
    [key: string]: string;
    backendID: string;
    type: ItemType;
}

type ItemType = "Client" | "Location" | "Device" | "Call" | "Contract";

const Selected:Writable<Item[]> = writable([]);

const Expanded:Writable<boolean[]> = writable([]);


export  { Selected, Expanded};
export type { Item, ItemType };