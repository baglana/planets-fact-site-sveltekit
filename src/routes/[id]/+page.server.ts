import type { PageServerLoad } from './$types';
import { getPlanet } from '$lib/graphql/planet';

export const load: PageServerLoad = async ({ fetch, params }) => {
	// const res = await fetch(`${baseUrl}/${params.id}`);
	// if (!res.ok) throw error(404);
	//
	// const json = await res.json();
	//
	// return { planet: json };

	const data = await getPlanet(+params.id);
	console.log('+PAGE.SERVER.TS', data);
	return data.planets_by_pk;
};
