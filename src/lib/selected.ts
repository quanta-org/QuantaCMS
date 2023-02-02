import { writable, type Writable } from "svelte/store";


// //the old item interface
// interface Item {
//     [key: string]: string;
//     backendID: string;
//     type: ItemType;
// }

type ItemType = "Client" | "Location" | "Device" | "Call" | "Contract";

//newer, cooler item interface
interface Item{
    [key:string]: string, //for now its just strings 
    uid: string;
}

interface Client extends Item{
    name: string;
}

interface Location extends Item{
    name: string;
    address: string;
}

interface Device extends Item{
    serial: string;
    model: string;
}

interface Call extends Item{
    date: string;
    timeSpent: string;
}

interface Contract extends Item{
    name: string;
    end: string;
}

//All selected elements
const Selected:Writable<Item[]> = writable([]);

//All selected elements as an array of whether they are expanded or not
const SelectedExpanded:Writable<boolean[]> = writable([]);

//All selected elements as an array of their backendIDs
const SelectedID:Writable<string[]> = writable([]);


export  { Selected, SelectedExpanded, SelectedID};
export type {Item, Client, Location, Device, Call, Contract };