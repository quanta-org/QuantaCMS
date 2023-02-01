import type { Actions, PageServerLoad } from './$types';
import { prisma } from '$lib/database';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
	create: async ({ request, url }) => {
		const data = await request.formData();
		const address = data.get('address');
		const clientId = data.get('clientId');

		await prisma.location.create({
            data: {
                address: address as string,
                clientId: clientId as string
            }
        });

        throw redirect(302, url.origin);
	},
    update: async ({ request, url }) => {
        const data = await request.formData();
        const address = data.get('address');
		const clientId = data.get('clientId');
        const uid = data.get('uid');

        await prisma.location.update({
            where: {
                uid: uid as string
            },
            data: {
                address: address as string,
                clientId: clientId as string
            }
        });

        throw redirect(302, url.origin);
    },
    delete: async ({ request, url }) => {
        const data = await request.formData();
        const uid = data.get('uid');

        try {
            await prisma.location.delete({
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

	let location;
	if (params.uid) {
		location = await prisma.location.findUnique({
			where: {
				uid: params.uid
			}
		});

        if(!location) {
            throw redirect(302, url.origin);
        }
	}

    let clients = await prisma.client.findMany();

	return {
		location: location,
        clients: clients,
	};
}) satisfies PageServerLoad;
