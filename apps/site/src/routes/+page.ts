import type { PageLoad } from './$types';
import sanityClient from "@sanity/client";

const client = sanityClient({
	projectId: "9s9ectym",
	dataset: "production",
	apiVersion: "2022-09-09",
	useCdn: false
  });
  

export const load: PageLoad = async (event) => {
	const data = await client.fetch(`*[_type == "pet"]`);
	
	return {
		cms: [{title: 'testing', body: "testing body"}, {title: 'testing2', body: "testing body2"}],
	};
};
