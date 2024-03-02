import client from '$lib/client';

export const getPlanet = async (id: number) => {
	const data = client.query({
		planets_by_pk: {
			__args: {
				id
			},
			id: true,
			name: true,
			overview_content: true,
			overview_source: true,
			structure_content: true,
			structure_source: true,
			geology_content: true,
			geology_source: true,
			radius: true,
			revolution: true,
			rotation: true,
			temperature: true
		}
	});

	return data;
};
