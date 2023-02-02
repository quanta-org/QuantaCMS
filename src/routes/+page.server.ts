import type { PageServerLoad, RequestEvent } from './$types';
import { prisma } from '$lib/database';
import type { Client, Location, Device, ServiceCall, Contract, SalesRep } from '@prisma/client';


type Item = Client | Location | Device | ServiceCall | Contract | SalesRep;


function isClient(i: Item): i is Client {
    return (i as Client).salesRepId !== undefined;
}

function isLocation(i: Item): i is Location {
    return (i as Location).address !== undefined;
}

function isDevice(i: Item): i is Device {
    return (i as Device).serialNum !== undefined;
}

function isServiceCall(i: Item): i is ServiceCall {
    return (i as ServiceCall).minutesThere !== undefined;
}

function isContract(i: Item): i is Contract {
    return (i as Contract).end !== undefined;
}

function isSalesRep(i: Item): i is SalesRep {
    return (i as SalesRep).name !== undefined && (i as SalesRep).comments !== undefined;
}

function getAssClients(i: Item) {
    if (isClient(i)) {
        return [i];
    } else if (isLocation(i)) {
        return [prisma.client.findUnique({ where: { uid: i.clientId } })];
    } else if (isDevice(i)) {
        // not sure how to do this
        // could await location
        // or perform 2 queries
    } else if (isServiceCall(i) || isContract(i)) {
        // not implemented
        // await devices

        // return client from first device
    }

    // default case with no selected item
    return prisma.client.findMany({ take: 50, include: { salesRep: true } });
}

function getAssLocations(i: Item) {
    if (isLocation(i)) {
        return [i];
    } else if (isClient(i)) {
        return prisma.location.findMany({ where: { clientId: i.uid }, take: 50 });
    } else if (isDevice(i)) {
        return [prisma.location.findUnique({ where: { uid: i.locationId } })];
    } else if (isServiceCall(i) || isContract(i)) {
        return []; //not implemented
        // await devices
        // return all calls/contracts from all devices
        
    }

    // default case with no selected item
    return prisma.location.findMany({ take: 50 });
}

function getAssDevices(i: Item) {
    if (isDevice(i)) {
        return [i];
    } else if (isServiceCall(i)) {
        return []; //not implemented
    } else if (isLocation(i)) {
        return prisma.device.findMany({ where: { locationId: i.uid }, take: 50 });
    } else if (isClient(i)) {
        return prisma.device.findMany({ where: { location: { clientId: i.uid } }, take: 50 });
    } else if (isContract(i)) {
        //return prisma.device.findMany({ where: { contractId: i.uid }, take: 50 });
    }

    // default case with no selected item
    return prisma.device.findMany({ take: 50 });
}

function getAssCalls(i: Item) {
    if (isServiceCall(i)) {
        return [i];
    } else {
        // not implemented
        // await devices

        // return all calls from all devices
    }

    // default case with no selected item
    return prisma.serviceCall.findMany({ take: 50 });
}

function getAssContracts(i: Item) {
    if (isContract(i)) {
        return [i];
    } else {
        // not implemented
        // await devices

        // return all contracts from all devices
    }

    // default case with no selected item
    return prisma.contract.findMany({ take: 50 });
}

export const load = (async (event) => {
    console.log(event.url.searchParams.entries());
    

    //let item = await prisma.client.findUnique({ where: { uid: event.params.uid } });
    let item = {uid: "1"} as Item;


    return {
        clients: await prisma.client.findMany({ take: 50, include: { salesRep: true } }),
        locations: await prisma.location.findMany({ take: 50 }),
        devices: await prisma.device.findMany({ take: 50 }),
        calls: await prisma.serviceCall.findMany({ take: 50 }),
        contracts: await prisma.contract.findMany({ take: 50 }),
        salesReps: await prisma.salesRep.findMany({ take: 50 })
    }
}) satisfies PageServerLoad;