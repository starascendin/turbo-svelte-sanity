import { error } from '@sveltejs/kit';

import { getPost } from '$lib/utils/sanity'

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const post = await getPost(params.slug);
	if (post) return post;

    // // BL: This should be call to Sanity for a blog post. If exists, return it.
    // if (params.slug === 'hello-world') {
    //     return {
    //         title: 'Hello world!',
    //         content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
    //     };
    // }

    throw error(404, 'Not found');
}