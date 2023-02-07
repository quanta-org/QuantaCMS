import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
    const Chrysler = await prisma.client.upsert({
        where: { uid: "1" },
        update: {},
        create: {
            name: "Chrysler",
            salesRep: { create: { name: "Brad Allen", comments: ""}},
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
        where: { uid: "2" },
        update: {},
        create: {
            name: "SpartanNash",
            salesRep: {},
            locations: {
                create: {
                    name: "SpartanNash",
                    address: "444 Spartan Wy",

                    devices: {
                        create: [{
                            serialNum: "1234",
                            modelNum: "Model A",
                        },
                        {
                            serialNum: "1235",
                            modelNum: "Model A",
                        },
                        {
                            serialNum: "2345",
                            modelNum: "Model B",
                        }]
                    },
                    
                }
            }
        }
    });

    // //get ids for chrysler locations
    // let ids = await prisma.location.findMany({
    //     where: { client: { name: "Chrysler" } },
    //     select: { uid: true }
    // });
    // let uids = ids.map((id) => id.uid);

    // //create devices for chrysler locations
    // uids.forEach(async (uid) => {
    //     await prisma.device.createMany({
    //         data: [{
    //             serialNum: "1234"+uid,
    //             modelNum: "Model A",
    //             location: { connect: { uid: uid } }
    //         },
    //         {
    //             serialNum: "1235"+uid,
    //             modelNum: "Model A",
    //             location: { connect: { uid: uid } }
    //         },
    //         {
    //             serialNum: "2345"+uid,
    //             modelNum: "Model B",
    //             location: { connect: { uid: uid } }
    //         }]
    //     });
    // });



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