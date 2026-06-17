import { datoQuery } from '$lib/datocms';

export async function load() {
	const data = await datoQuery(`
		query {
			allHomepages {
				heroHeading
				heroText
				buttonText
			}
		}
	`);

	console.log('DATO DATA:', data);

	return {
		homepage: data.allHomepages[0]
	};
}