import type { Actions, RequestEvent, PageServerLoad } from "./$types";
import { PrismaClient } from '@prisma/client';

export const actions = {
    default: async (event: RequestEvent) => {
        const data = await event.request.formData();
        const name = data.get('name');
        const salesRepId = data.get('salesRepId');
        
        console.log(event);
    }
} satisfies Actions;

export const load = ((event: RequestEvent) => {
    const prisma = new PrismaClient();

    console.log("test");
}) satisfies PageServerLoad;