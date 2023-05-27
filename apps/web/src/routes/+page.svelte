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
	import { Checkbox } from 'flowbite-svelte';

	import { ExampleDiv, SectionHeader, SectionBlock } from './utils';
	import { ArrowSmallRight, VideoCamera, Newspaper, Home } from 'svelte-heros';
	import { SearchCategories } from '$lib/components/SearchCategories';
	import { Blog } from '$lib/components/Blog';
	import { posts } from '$lib/stores.js';

	const breadcrumb_title = 'Blog Sections';
	const title = 'Blog';
	const dir = 'marketing';
	const description =
		'Get started with a collection of website sections related to the blog area of your website including blog posts, article pages, comments, categories, and more.';

	let blogs = [
		{
			title: 'title 1',
			name: 'Blog 1',
			author: 'Bryan Liu',
			category: 'Tech',
			body: 'Tech blog body...'
		},
		{
			title: 'title 2',
			name: 'Blog 2',
			author: 'Bryan Liu',
			category: 'Lifestyle',
			body: 'Lifestyle blog body...'
		},
		{
			title: 'title 3',
			name: 'Blog 3',
			author: 'Bryan Liu',
			category: 'Food',
			body: 'Food blog body...'
		}
		// ... more blogs
	];

	let categories = Array.from(new Set(blogs.map((blog) => blog.category)));

	let selectedCategories: any[] = [];
	let filteredBlogs = [...blogs];

	function handleCheckboxChange(category: string, event: any) {
		console.log(category, event.target.checked);
		if (event.target.checked) {
			selectedCategories.push(category);
		} else {
			selectedCategories = selectedCategories.filter((item) => item !== category);
		}
		if (selectedCategories.length > 0) {
			filteredBlogs = blogs.filter((blog) => selectedCategories.includes(blog.category));
		} else {
			filteredBlogs = blogs;
		}
	}
	export let data;
	console.log('#data', data);
	$posts = data.posts;
</script>

<ExampleDiv>
	<Section name="blog">
		<BlogHead>
			<svelte:fragment slot="h2">AI Tools</svelte:fragment>
			<svelte:fragment slot="paragraph">
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
			{#each filteredBlogs as blog (blog.name)}
				<Blog {blog} />
			{/each}
		</BlogBodyWrapper>
	</Section>
</ExampleDiv>
