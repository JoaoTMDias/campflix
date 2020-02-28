import { GENRES } from "../data/genres";

/**
 * Finds and returns the genre name
 *
 * @export
 * @param {number} id
 * @returns {string}
 */
export function getGenreName(id: number): string | undefined {
    const result = GENRES.find((genre) => genre.id === id);

    return result?.name;
}