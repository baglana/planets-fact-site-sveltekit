import type { LayoutServerLoad } from './$types';
import { getPlanets } from '$lib/graphql/planets';
import { baseUrl } from '$lib/baseUrl';

export const load: LayoutServerLoad = async ({ fetch }) => {
	const res = await fetch(baseUrl);
	const json = await res.json();
	// return { planets: json.data };
	const data = await getPlanets();

	return data;
};
