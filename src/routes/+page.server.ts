import type { PageServerLoad, RequestEvent } from './$types';
import { prisma } from '$lib/database';

export const load = (async (event: RequestEvent) => {

    return {
        clients: await prisma.client.findMany({ take: 50, include: { salesRep: true } }),
        locations: await prisma.location.findMany({ take: 50 }),
        devices: await prisma.device.findMany({ take: 50 }),
        calls: await prisma.serviceCall.findMany({ take: 50 }),
        contracts: await prisma.contract.findMany({ take: 50 }),
        salesReps: await prisma.salesRep.findMany({ take: 50 })
    }
}) satisfies PageServerLoad;