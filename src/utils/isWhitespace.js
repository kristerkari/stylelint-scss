/**
 * Check if a character is whitespace.
 *
 * @param {string} char
 * @returns {boolean}
 */
export default function(char) {
  return [" ", "\n", "\t", "\r", "\f"].includes(char);
}
