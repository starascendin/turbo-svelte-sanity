import { error } from '@sveltejs/kit';

import { getPost } from '$lib/utils/sanity'

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const post = await getPost(params.slug);
	if (post) return post;


    throw error(404, 'Not found');
}