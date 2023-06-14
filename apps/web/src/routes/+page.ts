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
	const posts = await client.fetch(`
	*[_type == "post"]{
		...,
		"author": author->name,
		"categories": categories[]->title,
	} | order(_createdAt desc)
	`)
	// console.log("#posts ",posts);
	return {
		posts,
	};
};
