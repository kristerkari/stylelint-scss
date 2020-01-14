/**
 * Create configurationError from text and set CLI exit code
 * @param {string} text
 * @returns {Object}
 */
export default function(text) /* Object */ {
  /** @type {Error & {code?: number}} */
  const err = new Error(text);

  err.code = 78;

  return err;
}
