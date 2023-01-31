import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
    const Chrysler = await prisma.client.upsert({
        where: { name: "Chrysler" },
        update: {},
        create: {
            name: "Chrysler",
            locations: {
                createMany: {
                    data: [{
                        name: "Belvidere", address: "1234 Main St",
                        devices: {
                            createMany: {
                                data: [{
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
                                }
                                ]
                            }
                        }
                    },
                    {
                        name: "Indiana Transmission",
                        address: "123 Indiana Blvd",
                        devices: {
                            createMany: {
                                data: [{
                                    serialNum: "2234",
                                    modelNum: "Model A",
                                },
                                {
                                    serialNum: "2235",
                                    modelNum: "Model A",
                                },
                                {
                                    serialNum: "3345",
                                    modelNum: "Model B",
                                }
                                ]
                            }
                        }
                    },
                    {
                        name: "Jefferson North",
                        address: "333 Jefferson St",
                        devices: {
                            createMany: {
                                data: [{
                                    serialNum: "3234",
                                    modelNum: "Model A",
                                },
                                {
                                    serialNum: "3235",
                                    modelNum: "Model A",
                                },
                                {
                                    serialNum: "4345",
                                    modelNum: "Model B",
                                }
                                ]
                            }
                        }
                    },
                    {
                        name: "Sterling Heights",
                        address: "123 Main St",
                        devices: {
                            createMany: {
                                data: [{
                                    serialNum: "4234",
                                    modelNum: "Model A",
                                },
                                {
                                    serialNum: "4235",
                                    modelNum: "Model A",
                                },
                                {
                                    serialNum: "5345",
                                    modelNum: "Model B",
                                }
                                ]
                            }
                        }
                    },
                    
                ]
                }
            },
        }
    });

    const SpartanNash = await prisma.client.upsert({
        where: { name: "SpartanNash" },
        update: {},
        create: {
            name: "SpartanNash",
            locations: {
                create: {
                    name: "SpartanNash",
                    address: "444 Spartan Wy",

                    devices: {
                        createMany: {
                            data: [{
                                serialNum: "5234",
                                modelNum: "Model A",
                            },
                            {
                                serialNum: "5235",
                                modelNum: "Model A",
                            },
                            {
                                serialNum: "6345",
                                modelNum: "Model B",
                            }
                            ]
                        }
                    }
                }
            }
        }
    });


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