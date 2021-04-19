import valueParser from "postcss-value-parser";
import { utils } from "stylelint";
import { declarationValueIndex, namespace } from "../../utils";

const interpolationPrefix = /^#{\s*/;

const rules = {
  red: "color",
  blue: "color",
  green: "color",
  mix: "color",
  hue: "color",
  saturation: "color",
  lightness: "color",
  complement: "color",
  invert: "color",
  alpha: "color",
  "adjust-color": "color",
  "scale-color": "color",
  "change-color": "color",
  "ie-hex-str": "color",
  "map-get": "map",
  "map-merge": "map",
  "map-remove": "map",
  "map-keys": "map",
  "map-values": "map",
  "map-has-key": "map",
  unquote: "string",
  quote: "string",
  "str-length": "string",
  "str-insert": "string",
  "str-index": "string",
  "str-slice": "string",
  "to-upper-case": "string",
  "to-lower-case": "string",
  "unique-id": "string",
  percentage: "math",
  round: "math",
  ceil: "math",
  floor: "math",
  abs: "math",
  min: "math",
  max: "math",
  random: "math",
  unit: "math",
  unitless: "math",
  comparable: "math",
  length: "list",
  nth: "list",
  "set-nth": "list",
  join: "list",
  append: "list",
  zip: "list",
  index: "list",
  "list-separator": "list",
  "feature-exists": "meta",
  "variable-exists": "meta",
  "global-variable-exists": "meta",
  "function-exists": "meta",
  "mixin-exists": "meta",
  inspect: "meta",
  "get-function": "meta",
  "type-of": "meta",
  call: "meta",
  "content-exists": "meta",
  keywords: "meta",
  "selector-nest": "selector",
  "selector-append": "selector",
  "selector-replace": "selector",
  "selector-unify": "selector",
  "is-superselector": "selector",
  "simple-selectors": "selector",
  "selector-parse": "selector",
  "selector-extend": "selector"
};

const new_rule_names = {
  "adjust-color": "adjust",
  "scale-color": "scale",
  "change-color": "change",
  "map-get": "get",
  "map-merge": "merge",
  "map-remove": "remove",
  "map-keys": "keys",
  "map-values": "values",
  "map-has-key": "has-key",
  "str-length": "length",
  "str-insert": "insert",
  "str-index": "index",
  "str-slice": "slice",
  unitless: "is-unitless",
  comparable: "compatible",
  "list-separator": "separator",
  "selector-nest": "nest",
  "selector-append": "append",
  "selector-replace": "replace",
  "selector-unify": "unify",
  "selector-parse": "parse",
  "selector-extend": "extend"
};

export const ruleName = namespace("no-global-function-names");

export const messages = utils.ruleMessages(ruleName, {
  rejected: name => errorMessage(name)
});

function errorMessage(name) {
  const sass_package = rules[name];
  const rename = new_rule_names[name];

  if (rename) {
    return `Expected ${sass_package}.${rename} instead of ${name}`;
  } else {
    return `Expected ${sass_package}.${name} instead of ${name}`;
  }
}

export default function(value) {
  return (root, result) => {
    const validOptions = utils.validateOptions(result, ruleName, {
      actual: value
    });

    if (!validOptions) {
      return;
    }

    root.walkDecls(decl => {
      valueParser(decl.value).walk(node => {
        const cleanValue = node.value.replace(interpolationPrefix, "");

        // Verify that we're only looking at functions.
        if (node.type !== "function" || cleanValue === "") {
          return;
        }

        if (Object.keys(rules).includes(cleanValue)) {
          utils.report({
            message: messages.rejected(cleanValue),
            node: decl,
            index: declarationValueIndex(decl) + node.sourceIndex,
            result,
            ruleName
          });
        }
      });
    });
  };
}
