import client from '$lib/client';

export const getPlanets = async () => {
	const data = client.query({
		planets: {
			id: true,
			name: true
		}
	});

	return data;
};
