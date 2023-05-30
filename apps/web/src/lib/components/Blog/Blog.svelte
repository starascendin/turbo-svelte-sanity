<!-- This component is a Card for a blog post, rendering on main page as a list -->

<script lang="ts">
	import {
		Section,
		ArticleAuthor,
		ArticleBody,
		ArticleHead,
		ArticleWrapper,
		BlogHead,
		BlogBodyWrapper
	} from 'flowbite-svelte-blocks';
	import { ArrowSmallRight, VideoCamera, Newspaper, Home } from 'svelte-heros';
	import { PortableText } from '@portabletext/svelte';
	import dayjs from 'dayjs';
	import utc from 'dayjs/plugin/utc';
	import relativeTime from 'dayjs/plugin/relativeTime';

	dayjs.extend(utc);
	dayjs.extend(relativeTime);
	import { onMount } from 'svelte';

	let protocol = '';
	let host = '';
	let postLink = '';

	onMount(() => {
		protocol = window.location.protocol;
		host = window.location.host;
		postLink = `http://${host}/tools/${blog.slug.current}`;
	});

	export let blog: any;
</script>

<ArticleWrapper>
	<ArticleHead>
		<div class="flex space-x-4">
			{#each blog.categories as category (category)}
				<span
					class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800"
				>
					<VideoCamera variation="solid" size="14" />
					<span class="ml-1">{category}</span>
				</span>
			{/each}
		</div>
		<span class="text-sm"> {dayjs().to(dayjs(blog._createdAt))}</span>
	</ArticleHead>
	<a href={postLink}>
		<ArticleBody>
			<svelte:fragment slot="h2">{blog.title}</svelte:fragment>
			<svelte:fragment slot="paragraph">
				<p class="mb-5 font-light text-gray-500 dark:text-gray-400">
					{blog.excerpt}
				</p>
			</svelte:fragment>
		</ArticleBody>
	</a>
	<ArticleAuthor>
		<svelte:fragment slot="author">
			<img
				class="w-7 h-7 rounded-full"
				src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
				alt={blog.author}
			/>
			<span class="font-medium dark:text-white"> {blog.author} </span>
		</svelte:fragment>
		<a
			href={postLink}
			class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
		>
			What's inside?
			<ArrowSmallRight class="ml-2" />
		</a>
	</ArticleAuthor>
</ArticleWrapper>
