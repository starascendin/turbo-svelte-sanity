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
		<span class="text-sm">14 days ago</span>
	</ArticleHead>
	<ArticleBody>
		<svelte:fragment slot="h2"><a href="/">{blog.title}</a></svelte:fragment>
		<svelte:fragment slot="paragraph">
			<p class="mb-5 font-light text-gray-500 dark:text-gray-400">
				{blog.excerpt}
			</p>
		</svelte:fragment>
	</ArticleBody>
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
			href="/"
			class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
		>
			Read more
			<ArrowSmallRight class="ml-2" />
		</a>
	</ArticleAuthor>
</ArticleWrapper>
