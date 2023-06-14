<script lang="ts">
	import { Button } from 'flowbite-svelte';
	import { VideoCamera } from 'svelte-heros';
	import { Section, ContentWithImage } from '$lib';
	import { ExampleDiv, SectionHeader, SectionBlock } from '../utils';

	const breadcrumb_title = 'CTA Sections';
	const title = 'CTA';
	const dir = 'marketing';
	const description =
		'The CTA (call to action) website sections can be used anywhere on your website to encourage your users to take any action, such as creating a new account.';
</script>

<ExampleDiv>
	<Section name="contentwithimg">
		<ContentWithImage>
			<svelte:fragment slot="h2">We didn't reinvent the wheel</svelte:fragment>
			<p class="mb-4">
				We are strategists, designers and developers. Innovators and problem solvers. Small enough
				to be simple and quick, but big enough to deliver the scope you want at the pace you need.
				Small enough to be simple and quick, but big enough to deliver the scope you want at the
				pace you need.
			</p>
			<p>
				We are strategists, designers and developers. Innovators and problem solvers. Small enough
				to be simple and quick.
			</p>

			<svelte:fragment slot="image">
				<img
					class="w-full rounded-lg"
					src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
					alt="office content 1"
				/>
				<img
					class="mt-4 w-full lg:mt-10 rounded-lg"
					src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
					alt="office content 2"
				/>
			</svelte:fragment>
		</ContentWithImage>
	</Section>
</ExampleDiv>
