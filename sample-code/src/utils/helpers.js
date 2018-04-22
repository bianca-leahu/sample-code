/**
 * Capitalize a string
 * @param {String} str
 * @returns {String}
 */
export function capitalize(str) {
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}