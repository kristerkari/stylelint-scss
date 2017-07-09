import { namespace } from "../../utils";
import { utils } from "stylelint";
import { sassConditionalBraceSpaceAfterChecker } from "../at-if-closing-brace-space-after";

export const ruleName = namespace("at-else-closing-brace-space-after");

export const messages = utils.ruleMessages(ruleName, {
  expected: 'Expected single space after "}" of @else statement',
  rejected: 'Unexpected space after "}" of @else statement'
});

export default function(expectation) {
  return (root, result) => {
    const validOptions = utils.validateOptions(result, ruleName, {
      actual: expectation,
      possible: ["always-intermediate", "never-intermediate"]
    });
    if (!validOptions) {
      return;
    }

    sassConditionalBraceSpaceAfterChecker({
      root,
      result,
      ruleName,
      atRuleName: "else",
      expectation,
      messages
    });
  };
}
