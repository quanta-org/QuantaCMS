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


export const load = () => {
    return result;
};