import { rules, utils } from "stylelint";
import { namespace } from "../../utils";

const coreRuleName = "comment-no-empty";

export const ruleName = namespace(coreRuleName);

export const messages = utils.ruleMessages(ruleName, {
  rejected: (...args) => {
    return rules[coreRuleName].messages
      .rejected(...args)
      .replace(` (${coreRuleName})`, "");
  }
});

function rule(primary) {
  return (root, result) => {
    const validOptions = utils.validateOptions(result, ruleName, {
      actual: primary
    });

    if (!validOptions) {
      return;
    }

    root.walkComments(comment => {
      if (isEmptyComment(comment)) {
        utils.report({
          message: messages.rejected,
          node: comment,
          result,
          ruleName
        });
      }
    });
  };
}

function isEmptyComment(comment) {
  return comment.text === "";
}

export default rule;
