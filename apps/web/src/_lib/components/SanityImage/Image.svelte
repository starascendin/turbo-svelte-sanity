<script>
	import { urlFor } from '$lib/utils/image';

	export let portableText;
	console.log('#image portableText', portableText);
</script>

<!-- <img src={imageUrl(portableText.value).url()} alt="" /> -->
<img class="post__cover" src={urlFor(portableText.value).url()} alt="" />
