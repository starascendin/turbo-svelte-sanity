<script lang="ts">
	// import { urlForImage } from '$lib/config/sanity';
	import { Heading, P, A } from 'flowbite-svelte';
	export let portableText;
	console.log('#portableText', portableText);
</script>

{#if portableText.value.style === 'h1'}
	<h1
		class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white"
	>
		{portableText.value.children[0].text}
	</h1>
{:else if portableText.value.style === 'h2'}
	<h2
		class="mb-4 text-2xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white"
	>
		{portableText.value.children[0].text}
	</h2>
{/if}
