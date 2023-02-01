import type { Actions, PageServerLoad } from './$types';
import { prisma } from '$lib/database';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
	create: async ({ request, url }) => {
		const data = await request.formData();
		const name = data.get('name');
		const salesRepId = data.get('salesRepId');

		const user = await prisma.client.create({
            data: {
                name: name as string,
                salesRepId: salesRepId as string
            }
        });

        throw redirect(302, url.origin);
	},
    update: async ({ request, url }) => {
        const data = await request.formData();
        const name = data.get('name');
        const salesRepId = data.get('salesRepId');
        const uid = data.get('uid');

        const user = await prisma.client.update({
            where: {
                uid: uid as string
            },
            data: {
                name: name as string,
                salesRepId: salesRepId as string
            }
        });

        throw redirect(302, url.origin);
    },
    delete: async ({ request, url }) => {
        const data = await request.formData();
        const uid = data.get('uid');

        try {
            await prisma.client.delete({
                where: {
                    uid: uid as string,
                },
            })
        } catch (err) {
            return fail(400, { error: true });
        }

        throw redirect(302, url.origin);
    }
} satisfies Actions;

export const load = (async ({ params, url }) => {

	let client;
	if (params.uid) {
		client = await prisma.client.findUnique({
			where: {
				uid: params.uid
			}
		});

        if(!client) {
            throw redirect(302, url.origin);
        }
	}

    let salesReps = await prisma.salesRep.findMany();

	return {
		client: client,
        salesReps: salesReps,
	};
}) satisfies PageServerLoad;
