import {
  isInlineComment,
  namespace,
  optionsHaveException,
  optionsHaveIgnored
} from "../../utils";
import { utils } from "stylelint";

export const ruleName = namespace("double-slash-comment-empty-line-before");

export const messages = utils.ruleMessages(ruleName, {
  expected: "Expected empty line before comment",
  rejected: "Unexpected empty line before comment"
});

const stylelintCommandPrefix = "stylelint-";

export default function(expectation, options, context) {
  return (root, result) => {
    const validOptions = utils.validateOptions(
      result,
      ruleName,
      {
        actual: expectation,
        possible: ["always", "never"]
      },
      {
        actual: options,
        possible: {
          except: ["first-nested"],
          ignore: ["stylelint-commands", "between-comments"]
        },
        optional: true
      }
    );
    if (!validOptions) {
      return;
    }

    root.walkComments(comment => {
      // Only process // comments
      if (!comment.raws.inline && !comment.inline) {
        return;
      }

      if (isInlineComment(comment)) {
        return;
      }

      // Ignore the first node
      if (comment === root.first) {
        return;
      }

      // Optionally ignore stylelint commands
      if (
        comment.text.indexOf(stylelintCommandPrefix) === 0 &&
        optionsHaveIgnored(options, "stylelint-commands")
      ) {
        return;
      }

      // Optionally ignore newlines between comments
      const prev = comment.prev();
      if (
        prev &&
        prev.type === "comment" &&
        optionsHaveIgnored(options, "between-comments")
      ) {
        return;
      }

      const before = comment.raw("before");

      const expectEmptyLineBefore = (() => {
        if (
          optionsHaveException(options, "first-nested") &&
          comment.parent !== root &&
          comment === comment.parent.first
        ) {
          return false;
        }
        return expectation === "always";
      })();

      const hasEmptyLineBefore = before.search(/\n\s*?\n/) !== -1;

      // Return if the expectation is met
      if (expectEmptyLineBefore === hasEmptyLineBefore) {
        return;
      }

      if (context.fix) {
        if (expectEmptyLineBefore && !hasEmptyLineBefore) {
          if (/^\n\s*?$/.test(before)) {
            comment.raws.before = before.replace(/^\n/, "\n\n");
          } else if (/^\r\n\s*?$/.test(before)) {
            comment.raws.before = before.replace(/^\r\n/, "\r\n\r\n");
          }
          return;
        }
        if (!expectEmptyLineBefore && hasEmptyLineBefore) {
          if (/^\n\n\s*?$/.test(before)) {
            comment.raws.before = before.replace(/^\n\n/, "\n");
          } else if (/^\r\n\r\n\s*?$/.test(before)) {
            comment.raws.before = before.replace(/^\r\n\r\n/, "\r\n");
          }
          return;
        }
      }

      const message = expectEmptyLineBefore
        ? messages.expected
        : messages.rejected;

      utils.report({
        message,
        node: comment,
        result,
        ruleName
      });
    });
  };
}
