import type { RequestEvent, RequestHandler } from './$types';
import { PrismaClient } from '@prisma/client';

export const GET = (async (event: RequestEvent) => {
    const prisma = new PrismaClient();
    let slices = await prisma.pizzaSlice.findMany();

    return new Response(JSON.stringify(slices));
}) satisfies RequestHandler;