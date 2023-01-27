import type { Item, Client, Location, Call, Device, Contract } from '../lib/selected';

let result = {
    clients: [{
        ID: "1",
        name: "Chrysler",
    }],
    locations: [{ name: "Belvidere", address: "123 Main St", type: "Location", backendID: "12", },
    {
        name: "Indiana Transmission",
        address: "123 Indiana Blvd",
        type: "Location",
        ID: "123",
    },
    { name: "Jefferson North", address: "333 Jefferson St", type: "Location", ID: "12345" },
    { name: "Sterling Heights", address: "123 Main St", type: "Location", ID: "123456" },
    { name: "SpartanNash", address: "444 Spartan Wy", type: "Location", ID: "1234567" },
    ],
    calls: [{
        ID: "1",
        timespent: "40",
    }],
    devices: [{
        ID: "1",
        serial: "1234",
        model: "Model A",

    },
    {
        ID: "2",
        serial: "1235",
        model: "Model A",
    },
    {
        ID: "3",
        serial: "2345",
        model: "Model B",
    }
    ],
    contracts: [{
        ID: "1",
        end: "2024-01-01",
    }]
}



function getAss(s: string): string[] {
    let a = [];

    //only "upward" associations
    let sa = []; //SELECT * FROM wherever WHERE whatever = whatever
    
    if (sa.length > 0) { //if there are associations...
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
}

export const load = () => {
    return result;
};