import { utils } from "stylelint";
import { namespace } from "../../utils";

export const ruleName = namespace("at-forward-before-use");

export const messages = utils.ruleMessages(ruleName, {
  rejected: "Unexpected @use at-rule before @forward at-rule"
});

function rule(primary) {
  return (root, result) => {
    const validOptions = utils.validateOptions(result, ruleName, {
      actual: primary
    });

    if (!validOptions) {
      return;
    }

    const useRules = [];

    root.walkAtRules(/forward|use/, decl => {
      if (
        decl.name === "forward" &&
        useRules.includes(decl.params.replace(/"/g, ""))
      ) {
        utils.report({
          message: messages.rejected,
          node: decl,
          result,
          ruleName
        });
      } else {
        useRules.push(decl.params.replace(/"/g, ""));
      }
    });
  };
}

export default rule;
