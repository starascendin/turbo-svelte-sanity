<script lang="ts">
	import { navigating, page } from '$app/stores';
	import { Toast } from '$lib/components/Toast';
	import HomeHeaderBar from '$lib/components/home/HomeHeaderBar.svelte';
	import { onMount } from 'svelte';
	import { Jumper } from 'svelte-loading-spinners';
	import { themeChange } from 'theme-change';
	import '../app.postcss';

	// NOTE: the element that is using one of the theme attributes must be in the DOM on mount
	onMount(() => {
		themeChange(false);
		// 👆 false parameter is required for svelte
	});
</script>

<svelte:head>
	<title>{$page.url.hostname}</title>
	<link rel="icon" type="image/x-icon" href={`/${$page.url.hostname}/favicon.ico`} />

	<script async src="https://www.googletagmanager.com/gtag/js?id=G-J1TGFG0V29"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());
		gtag('config', 'G-J1TGFG0V29');
	</script>
</svelte:head>

<section id="body" class="flex flex-row h-screen">
	<!-- <DashboardMenu /> -->
	<Toast />

	<div class="flex flex-col w-full">
		<HomeHeaderBar />
		<!-- CONTENT -->
		<div class="w-full h-full p-5 overflow-auto">
			{#if $navigating}
				<div class="flex h-full items-center justify-center">
					<span>Paging is currently navigating....</span>
					<Jumper size="120" unit="px" duration="1s" color="#FFFFFF" />
				</div>
			{:else}
				<slot />
			{/if}
		</div>
	</div>
</section>

<!-- <slot /> -->
