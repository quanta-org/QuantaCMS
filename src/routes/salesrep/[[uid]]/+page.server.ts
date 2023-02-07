import type { Actions, PageServerLoad } from './$types';
import { prisma } from '$lib/database';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
	create: async ({ request, url }) => {
		const data = await request.formData();
		const name = data.get('name');
		const comments = data.get('comments');

		const user = await prisma.salesRep.create({
            data: {
                name: name as string,
                comments: comments as string
            }
        });

        throw redirect(302, url.origin);
	},
    update: async ({ request, url }) => {
        const data = await request.formData();
        const name = data.get('name');
        const comments = data.get('comments');
        const uid = data.get('uid');

        const user = await prisma.salesRep.update({
            where: {
                uid: uid as string
            },
            data: {
                name: name as string,
                comments: comments as string
            }
        });

        throw redirect(302, url.origin);
    },
    delete: async ({ request, url }) => {
        const data = await request.formData();
        const uid = data.get('uid');

        try{
            await prisma.salesRep.delete({
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
	let salesRep;
	if (params.uid) {
		salesRep = await prisma.salesRep.findUnique({
			where: {
				uid: params.uid
			}
		});

        if(!salesRep) {
            throw redirect(302, url.origin);
        }
	}

	return {
		salesRep: salesRep
	};
}) satisfies PageServerLoad;
