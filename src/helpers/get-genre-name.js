import { GENRES } from "../data/genres";

/**
 * Finds and returns the genre name
 *
 * @param {number} id
 * @returns {string | undefined}
 */
export function getGenreName(id) {
	const result = GENRES.find(genre => genre.id === id);

	return result?.name;
}
