import beforeBlockString from "./beforeBlockString";
import hasBlock from "./hasBlock";
import rawNodeString from "./rawNodeString";

/** @typedef {import('postcss').Rule} Rule */
/** @typedef {import('postcss').AtRule} AtRule */

/**
 * Return a CSS statement's block -- the string that starts and `{` and ends with `}`.
 *
 * If the statement has no block (e.g. `@import url(foo.css);`),
 * return false.
 *
 * @param {Rule | AtRule} statement - postcss rule or at-rule node
 * @return {string | boolean}
 */
export default function(statement) {
  if (!hasBlock(statement)) {
    return false;
  }

  return rawNodeString(statement).slice(beforeBlockString(statement).length);
}
