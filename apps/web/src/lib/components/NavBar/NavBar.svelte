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
		<NavLi href="/" active={true}>Home</NavLi>
		<NavLi href="/news">AI News</NavLi>
		<NavLi href="/yt">YT</NavLi>
		<NavLi href="/learn">Learn</NavLi>
		<NavLi id="nav-menu1" class="cursor-pointer"><Chevron aligned>Power Ups</Chevron></NavLi>
		<Dropdown triggeredBy="#nav-menu1" class="w-44 z-20">
			<DropdownItem>Code</DropdownItem>
			<DropdownItem>YT</DropdownItem>
			<DropdownItem>Tools</DropdownItem>
			<!-- <DropdownDivider /> -->
			<!-- <DropdownItem>Sign out</DropdownItem> -->
		</Dropdown>
	</NavUl>
</Navbar>

<!-- 
<Navbar let:hidden let:toggle>
	<NavBrand href="/">
		<img
			src="https://flowbite.com/docs/images/logo.svg"
			class="mr-3 h-6 sm:h-9"
			alt="Flowbite Logo"
		/>
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
			aiXPowerups!
		</span>
	</NavBrand>
	<NavHamburger on:click={toggle} />

	<NavUl {hidden} >
		<NavLi href="/" active={true}>Home</NavLi>
		<NavLi id="nav-menu1" class="cursor-pointer"><Chevron aligned>Dropdown</Chevron></NavLi>
		<NavLi href="/services">Services</NavLi>
		<NavLi href="/pricing">Pricing</NavLi>
		<NavLi href="/contact">Contact</NavLi>
		<Dropdown triggeredBy="#nav-menu1" class="w-44 z-20">
			<DropdownItem>Dashboard</DropdownItem>
			<DropdownItem>Settings</DropdownItem>
			<DropdownItem>Earnings</DropdownItem>
			<DropdownDivider />
			<DropdownItem>Sign out</DropdownItem>
		</Dropdown>
	</NavUl>
</Navbar> -->
