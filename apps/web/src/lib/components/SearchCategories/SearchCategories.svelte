<script lang="ts">
	import { Checkbox } from 'flowbite-svelte';

	let blogs = [
		{ name: 'Blog 1', category: 'Tech', body: 'Tech blog body...' },
		{ name: 'Blog 2', category: 'Lifestyle', body: 'Lifestyle blog body...' },
		{ name: 'Blog 3', category: 'Food', body: 'Food blog body...' }
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

	// $: {
	// 	if (selectedCategories.length > 0) {
	// 		filteredBlogs = blogs.filter((blog) => selectedCategories.includes(blog.category));
	// 	} else {
	// 		filteredBlogs = blogs;
	// 	}
	// 	console.log('#filteredBlogs', filteredBlogs);
	// }
</script>

<div class="container">
	<div class="categories">
		{#each categories as category (category)}
			<label for="">
				<Checkbox on:change={(e) => handleCheckboxChange(category, e)} />
				{category}
			</label>
		{/each}
	</div>

	<div class="blogs">
		{#each filteredBlogs as blog (blog.name)}
			<div class="blog">
				<h2>{blog.name}</h2>
				<p>{blog.body}</p>
			</div>
		{/each}
	</div>
</div>
