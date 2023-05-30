<!-- 
Install the "flowbite-typography" NPM package to apply styles and format the article content: 

URL: https://flowbite.com/docs/components/typography/ 
-->

<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
	import dayjs from 'dayjs';

	import type { PageData } from './$types';
	export let data: PageData;
	console.log('#data', data);
	let dateTimeFormatted = dayjs(data._createdAt).format('YYYY-MM-DD');
</script>

<main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
	<div class="flex justify-between px-4 mx-auto max-w-screen-xl">
		<article
			class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"
		>
			<header class="mb-4 lg:mb-6 not-format">
				<address class="flex items-center mb-6 not-italic">
					<div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
						<!-- <img
							class="mr-4 w-16 h-16 rounded-full"
							src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
							alt="Jese Leos"
						/> -->
						<div>
							<a href="#" rel="author" class="text-xl font-bold text-gray-900 dark:text-white"
								>{data.author}</a
							>
							<p class="text-base font-light text-gray-500 dark:text-gray-400">
								<time
									datetime={dateTimeFormatted}
									title={dayjs(data._createdAt).format('MMM DD, YYYY')}
									>{dayjs(data._createdAt).format('YYYY-MM-DD')}</time
								>
							</p>
						</div>
					</div>
				</address>
				<h1
					class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white"
				>
					{data.title}
				</h1>
			</header>
			<section class="post">
				{#if data.mainImage}
					<img
						class="post__cover"
						src={urlFor(data.mainImage).url()}
						alt="Cover image for {data.title}"
					/>
				{:else}
					<div class="post__cover--none" />
				{/if}
				<div class="post__container">
					<h1 class="post__title">{data.title}</h1>
					<p class="post__excerpt">{data.excerpt}</p>
					<p class="post__date">
						{formatDate(data._createdAt)}
					</p>
					<div class="post__content">
						<PortableText value={data.body} />
					</div>
				</div>
			</section>
		</article>
	</div>
</main>
