<script lang="ts">
	import type { Fields } from '$lib/utils/airtable';

	export let data;
	console.log('#data', data);

	let records = data.records?.map((record) => {
		let fields = record.fields as Fields;
		return {
			...fields
		};
	});
</script>

{#each records as record}
	<div>
		<span>{record.tweet_url}</span>

		<span>{record.tweet_full_text}</span>
		<!-- <p>{JSON.stringify(record)}</p> -->
	</div>
{/each}
