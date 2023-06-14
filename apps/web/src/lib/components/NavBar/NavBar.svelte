<script>
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Button,
		Dropdown,
		DropdownItem,
		Chevron,
		DropdownDivider
	} from 'flowbite-svelte';
	import { page } from '$app/stores';

	function getFirstRoutePath(routeName) {
		if (!routeName || routeName === '/') {
			return ''; // Empty route name or only '/'
		}

		// Remove leading and trailing slashes
		routeName = routeName.replace(/^\/|\/$/g, '');

		// Split the route name and extract the first route path
		var pathSegments = routeName.split('/');
		var firstRoutePath = pathSegments[0];

		return firstRoutePath;
	}

	const routes = [
		{ href: '/', title: 'Home' },
		{ href: '/ai-news', title: 'AI News' },
		{ href: '/twitter', title: 'Twitter' },
		{ href: '/yt', title: 'YT' },
		{ href: '/learn', title: 'Learn' }
	];
</script>

<Navbar let:hidden let:toggle>
	<NavBrand href="/">
		<img
			src="https://flowbite.com/docs/images/logo.svg"
			class="mr-3 h-6 sm:h-9"
			alt="Flowbite Logo"
		/>
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
			aiXpowerups!
		</span>
	</NavBrand>
	<div class="flex md:order-2">
		<!-- <Button size="sm">Get started</Button> -->
		<NavHamburger on:click={toggle} />
	</div>
	<NavUl {hidden} class="order-1">
		{#each routes as route (route.href)}
			<NavLi
				href={route.href}
				active={getFirstRoutePath($page.url.pathname) === getFirstRoutePath(route.href)}
			>
				{route.title}
			</NavLi>
		{/each}
		<NavLi id="nav-menu1" class="cursor-pointer"><Chevron aligned>Power Ups</Chevron></NavLi>
		<Dropdown triggeredBy="#nav-menu1" class="w-44 z-20">
			<DropdownItem>Code</DropdownItem>
			<DropdownItem>YT</DropdownItem>
			<DropdownItem>Tools</DropdownItem>
		</Dropdown>
	</NavUl>
</Navbar>
