import type { Actions, RequestEvent, PageServerLoad } from "./$types";
import { PrismaClient } from '@prisma/client';

export const actions = {
    default: async (event: RequestEvent) => {
        const data = await event.request.formData();
        const prisma = new PrismaClient();
        const name = data.get('name');
        const comments = data.get('comments');

        const user = await prisma.salesRep.create({
            data: {
                name: name as string,
                comments: comments as string
            }
        });
        
        console.log(user);
    }
} satisfies Actions;

export const load = ((event: RequestEvent) => {
    let salesRep;
    if(event.url.searchParams.has("id")){
        const prisma = new PrismaClient();
        salesRep = prisma.salesRep.findUnique({
            where: {
                uid: event.url.searchParams.get("id") as string
            }
        })
    }

    return {
        salesRep: salesRep
    }
}) satisfies PageServerLoad;