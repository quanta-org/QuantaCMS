import { error } from '@sveltejs/kit';
import type { PageServerLoad, RequestEvent } from './$types';
import { PrismaClient } from '@prisma/client';

export const load = (async (event: RequestEvent) => {
    const prisma = new PrismaClient();

    return {
        clients: await prisma.client.findMany({ take: 50 }),
        locations: await prisma.location.findMany({ take: 50 }),
        devices: await prisma.device.findMany({ take: 50 }),
        calls: await prisma.serviceCall.findMany({ take: 50 }),
        contracts: await prisma.contract.findMany({ take: 50 })
    }
}) satisfies PageServerLoad;