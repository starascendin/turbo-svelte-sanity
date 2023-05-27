import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {

    // BL: This should be call to Sanity for a blog post. If exists, return it.
    if (params.slug === 'hello-world') {
        return {
            title: 'Hello world!',
            content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
        };
    }

    throw error(404, 'Not found');
}