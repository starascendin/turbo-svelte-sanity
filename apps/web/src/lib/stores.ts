import { writable, type Writable } from 'svelte/store';

export const logo: Writable<unknown> = writable(null);

export const posts: Writable<unknown> = writable([]);
export const timeout = writable(false);
