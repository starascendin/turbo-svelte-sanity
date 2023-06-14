import type { PageLoad } from './$types';
import { createClient } from "@sanity/client";

const client = createClient({
	projectId: "9s9ectym",
	dataset: "production",
	apiVersion: "2022-09-09",
	useCdn: false
  });
  

export const load: PageLoad = async (event) => {
	// const data = await client.fetch(`*[_type == "pet"]`);
	// console.log("#data ",data);
	const posts = await client.fetch('*[_type == "post"]')
	// console.log("#posts ",posts);
	return {
		posts,
		cms: [{title: 'testing', body: "testing body"}, {title: 'testing2', body: "testing body2"}],
	};
};
