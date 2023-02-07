import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {

    const brad = await prisma.salesRep.upsert({
        where: { name: "Brad Allen" },
        update: {},
        create: {
            name: "Brad Allen",
            comments: "",
        }
    });

    const Chrysler = await prisma.client.upsert({
        where: { name: "Chrysler" },
        update: {},
        create: {
            name: "Chrysler",
            salesRep: { connect: { name: "Brad Allen" } },
            locations: {
                createMany:{ data: [{
                    name: "Belvidere", address: "1234 Main St",
                },
                {
                    name: "Indiana Transmission", address: "123 Indiana Blvd",
                },
                {
                    name: "Jefferson North", address: "333 Jefferson St",
                },
                {
                    name: "Sterling Heights", address: "123 Main St",
                }]}
            },
        }
    });

    const SpartanNash = await prisma.client.upsert({
        where: { name: "SpartanNash" },
        update: {},
        create: {
            name: "SpartanNash",
            salesRep: { connect: { name: "Brad Allen" } },
            locations: {
                create: {
                    name: "SpartanNash",
                    address: "444 Spartan Wy",
                }
            }
        }
    });

    //get ids for all locations
    const locs = await prisma.location.findMany({
        take: 50,
        select: { uid: true }
    });
    const uids = locs.map((id) => id.uid);

    //create contract to be used for model a devices
    const nocon = await prisma.contract.upsert({
        where: { uid: "1" },
        update: {},
        create: {
            uid: "1",
            start: new Date(),
            end: new Date(),
            comments: "This is a test contract. It is expired.",
            type: "EXP-Maintenance",
        }
    });

    //create contract to be used for model b devices
    const con = await prisma.contract.upsert({
        where: { uid: "2" },
        update: {},
        create: {
            uid: "2",
            start: new Date(),
            end: new Date("2024-01-01"),
            comments: "This is a test contract",
            type: "Maintenance",
        }
    });

    

    //create devices for all locations
    //creates two model a devices and a model b device
    uids.forEach(async (locId, i) => {
        await prisma.device.upsert({
            where: { serialNum: "1234"+i },
            include: { location: true },
            update: {},
            create: {
                serialNum: "1234"+i,
                modelNum: "Model A",
                installed: new Date(),
                location: { connect: { uid: locId } },
                contract: { connect: { uid: "1" } }
            }
        });
        await prisma.device.upsert({
            where: { serialNum: "5678"+i },
            include: { location: true },
            update: {},
            create: {
                serialNum: "5678"+i,
                modelNum: "Model A",
                installed: new Date(),
                location: { connect: { uid: locId } },
                contract: { connect: { uid: "1" } }
            }
        });
        await prisma.device.upsert({
            where: { serialNum: "9012"+i },
            include: { location: true },
            update: {},
            create: {
                serialNum: "9012"+i,
                modelNum: "Model B",
                installed: new Date(),
                location: { connect: { uid: locId } },
                contract: { connect: { uid: "2" } }
            }
        });
        
    });



    // // const calls = await prisma.serviceCall.createMany({
    //     data: [{
    //         uid: "1",
    //         minutesThere: 40,
    //         device: { connect: { uid: "1" } }
    //     },
    //     {
    //         uid: "2",
    //         minutesThere: 30,
    //         device: { connect: { uid: "2" } }
    //     },
    //     {
    //         uid: "3",
    //         minutesThere: 20,
    //         device: { connect: { uid: "3" } }
    //     },
    //     {
    //         uid: "4",
    //         minutesThere: 10,
    //         device: { connect: { uid: "4" } }
    //     },
    //     {
    //         uid: "5",
    //         minutesThere: 5,
    //         devices: { connect: { uid: "5" } }
    //     }]
    // });

    // const contracts = await prisma.contract.createMany({
    //     data: [{
    //         uid: "1",
    //         end: "2024-01-01",
    //         device: { connect: { uid: "1" } }
    //     },
    //     {
    //         uid: "2",
    //         end: "2024-01-01",
    //         device: { connect: { uid: "2" } }
    //     },
    //     {
    //         uid: "3",
    //         end: "2024-01-01",
    //         device: { connect: { uid: "3" } }
    //     },
    //     {
    //         uid: "4",
    //         end: "2024-01-01",
    //         device: { connect: { uid: "4" } }
    //     },
    //     {
    //         uid: "5",
    //         end: "2024-01-01",
    //         device: { connect: { uid: "5" } }
    //     }]where: {},
    //     data: {
//
//    });
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })