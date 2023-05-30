<script lang="ts">
	import { Section, BlogHead, BlogBodyWrapper } from 'flowbite-svelte-blocks';
	import { Checkbox } from 'flowbite-svelte';

	import { ExampleDiv, SectionHeader, SectionBlock } from './utils';
	import { ArrowSmallRight, VideoCamera, Newspaper, Home } from 'svelte-heros';
	import { SearchCategories } from '$lib/components/SearchCategories';
	import { Blog as BlogCard } from '$lib/components/Blog';
	import { posts } from '$lib/stores.js';

	const breadcrumb_title = 'Blog Sections';
	const title = 'Blog';
	const dir = 'marketing';
	const description =
		'Get started with a collection of website sections related to the blog area of your website including blog posts, article pages, comments, categories, and more.';

	// TODO: These needs to be replaced w/ posts from sanity
	export let data;

	let blogs = [...data.posts];

	let categories = Array.from(new Set(blogs.map((blog) => blog.categories).flat()));
	let selectedCategories = new Set();
	let filteredBlogs = [...blogs];

	function handleCheckboxChange(category: string, event: any) {
		console.log(category, event.target.checked);
		if (event.target.checked) {
			selectedCategories.add(category);
		} else {
			selectedCategories.delete(category);
		}

		if (selectedCategories.size > 0) {
			filteredBlogs = blogs.filter((blog) =>
				blog.categories.some((category) => selectedCategories.has(category))
			);
		} else {
			filteredBlogs = blogs;
		}
		console.log('#filteredBlogs', filteredBlogs);
	}
</script>

<ExampleDiv>
	<Section name="blog">
		<BlogHead>
			<svelte:fragment slot="h2">AI Tools</svelte:fragment>
			<svelte:fragment slot="paragraph">
				<!-- Select + Filtering by categories -->
				<div class="container">
					<div class="categories">
						{#each categories as category (category)}
							<label for="">
								<Checkbox on:change={(e) => handleCheckboxChange(category, e)} />
								{category}
							</label>
						{/each}
					</div>
				</div>
			</svelte:fragment>
		</BlogHead>
		<BlogBodyWrapper>
			{#each filteredBlogs as blog (blog._id)}
				<BlogCard {blog} />
			{/each}
		</BlogBodyWrapper>
	</Section>
</ExampleDiv>
