import type { PageLoad } from './$types';

export const load: PageLoad = async (event) => {

	return {
		cms: [{title: 'testing', body: "testing body"}, {title: 'testing2', body: "testing body2"}],
	};
};
