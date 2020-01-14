import { get } from "lodash";

/**
 * Get the index of a declaration's value
 *
 * @param {import('postcss').Declaration} decl
 *
 * @returns {number}
 */
export default function(decl) {
  return [
    get(decl, "raws.prop.prefix"),
    get(decl, "raws.prop.raw", decl.prop),
    get(decl, "raws.prop.suffix"),
    get(decl, "raws.between", ":"),
    get(decl, "raws.value.prefix")
  ].reduce((count, str) => (str ? count + str.length : count), 0);
}
