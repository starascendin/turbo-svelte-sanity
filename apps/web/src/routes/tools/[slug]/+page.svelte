<!-- <script>
	/** @type {import('./$types').PageData} */
	export let data;
	
</script>

<h1>{data.title}</h1>
<div>{@html data.content}</div> -->

<script lang="ts">
	import { posts } from '$lib/stores.js';
	import { BlogPage } from '$lib/components/Blog';

	import type { PageData } from './$types';
	export let data: PageData;

	console.log('#slug posts data', posts);
</script>

<BlogPage {data} />
