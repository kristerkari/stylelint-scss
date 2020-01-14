import postCssSelectorParser from "postcss-selector-parser";

/**
 * @param {string} selector
 * @param {import('stylelint').PostcssResult} result
 * @param {import('postcss').Node} node
 * @param {Function} cb
 */
export default function(selector, result, node, cb) {
  try {
    // @ts-ignore TODO TYPES wrong postcss-selector-parser types
    return postCssSelectorParser(cb).processSync(selector);
  } catch (e) {
    result.warn("Cannot parse selector", { node, stylelintType: "parseError" });
  }
}
