import { Prisma, PrismaClient, type Client, type Device, type Location, type Device } from '@prisma/client'

const prisma = new PrismaClient();

//import type { Item, Client, Location, Call, Device, Contract } from '../lib/selected';

let result = {
    clients: [{
        uid: "1",
        name: "Chrysler",
    }],
    locations: [{ name: "Belvidere", address: "123 Main St", type: "Location", backendID: "12", },
    {
        name: "Indiana Transmission",
        address: "123 Indiana Blvd",
        type: "Location",
        uid: "123",
    },
    { name: "Jefferson North", address: "333 Jefferson St", type: "Location", ID: "12345" },
    { name: "Sterling Heights", address: "123 Main St", type: "Location", ID: "123456" },
    { name: "SpartanNash", address: "444 Spartan Wy", type: "Location", ID: "1234567" },
    ],
    calls: [{
        uid: "1",
        timespent: "40",
    }],
    devices: [{
        uid: "1",
        serial: "1234",
        model: "Model A",

    },
    {
        uid: "2",
        serial: "1235",
        model: "Model A",
    },
    {
        uid: "3",
        serial: "2345",
        model: "Model B",
    }
    ],
    contracts: [{
        uid: "1",
        end: "2024-01-01",
    }]
}



async function getDeviceAss(entry: Device): Promise<[Location, Client, (Contract | null), ServiceCall[]]> {

    let entryy = await prisma.device.findUnique({
        where: { uid: entry.uid },
        include: { location: { include: { client: true } }, serviceCalls: true }
    });
    

    return [entryy.location, entryy.location.client, entryy.contract, entryy.serviceCalls];
}

async function getLocationAss(entry: string) {

    let entryy = await prisma.location.findUnique({
        where: { uid: entry.uid },
        include: { client: true }
    });
    
    //get all devices for location
    let devices = await prisma.device.findMany({
        where: { locationId: entryy.uid },
    });

    //get all associations for all devices
    let deviceAss = await Promise.all(devices.map(async (device) => {
        return await getDeviceAss(device);
    }));


    return [entryy, entryy.client, ...deviceAss];
}

async function getClientAss(entry: string) {
        let entryy = await prisma.client.findUnique({
            where: { uid: entry },
            include: { locations: true }
        });
    
        //get all associations for all locations
        let locationAss = await Promise.all(entryy.locations.map(async (location) => {
            return await getLocationAss(location);
        }));
    
        return [entryy, ...locationAss];

}

async function getContactAss(entry: string) {
    let entryy = await prisma.contract.findUnique({
        where: { uid: entry },
        include: { devices: true }
    });

    //get all associations for all devices
    let deviceAss = await Promise.all(entryy.devices.map(async (device) => {
        return await getDeviceAss(device);
    }));

    return [entryy, ...deviceAss];
}

async function getAssUp(entry: Contract): [] {
}


async function getAssUp(entry: string): [] {
    let a = [];


    let sa = [];
    if (getType(entry) == "Device") {
        let entry: Device = entry;

        //get device location
        let loc = await prisma.location.findUnique({
            where: { uid: entry.locationId }
        });

        //get client for location
        let cli = await prisma.client.findUnique({
            where: { uid: loc.clientId }
        });

        //get contract for location
        let con = await prisma.contract.findUnique({
            where: { uid: entry.contractId }

        } else if (getType(entry) == "Location") {
        } else if (getType(entry) == "Client") {
        } else if (getType(entry) == "Call") {
        } else if (getType(entry) == "Contract") {
        } else if (getType(entry) == "RepairEvent") {
        } else {
        }
        //only "upward" associations
        //let sa:Location[] = []; //SELECT * FROM wherever WHERE whatever = whatever
        let sa = await prisma.client.findMany({
            where: {}
        });

        sa[0].


            if(sa.length > 0) { //if there are associations...
            sa.forEach((item) => { //...recursively find associations for those
                a.push(...getAss(item));
            });

        } else { //else, if this is the end of the line
            a.push(s);
        }
        return a;
    }


    //unused for now, this would be used for the multi-select
    //version if that ever gets made

    function getAssociations(selected: string[]) {
        let associations: string[] = [];

        //for each selected device
        selected.filter((item) => item.type == "Device").forEach((device) => {
            associations.push(...getAss(device));
        });

        //for each selected location
        selected.filter((item) => item.type == "Location").forEach((location) => {
            associations.push(...getAss(location));
        });

        //for each selected call
        selected.filter((item) => item.type == "Call").forEach((call) => {
            associations.push(...getAss(call));
        });

        //for each selected contract
        selected.filter((item) => item.type == "Contract").forEach((contract) => {
            associations.push(...getAss(contract));
        });

        //for each selected client
        selected.filter((item) => item.type == "Client").forEach((client) => {
            associations.push(...getAss(client));
        });

        return associations;
    }

    //for each selected contract

    //for each selected client


    export const load = () => {
        return result;
    };