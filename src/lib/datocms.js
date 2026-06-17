import { DATO_API_TOKEN } from '$env/static/private';

export async function datoQuery(query, variables = {}) {
	const response = await fetch('https://graphql.datocms.com/', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${DATO_API_TOKEN}`,
			'Content-Type': 'application/json',
			Accept: 'application/json'
		},
		body: JSON.stringify({ query, variables })
	});

	const json = await response.json();

	if (json.errors) {
		console.error(json.errors);
		throw new Error('DatoCMS query failed');
	}

	return json.data;
}