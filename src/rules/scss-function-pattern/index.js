import { isRegExp, isString } from "lodash"
import { utils } from "stylelint"

export const ruleName = "scss-function-pattern"

export const messages = utils.ruleMessages(ruleName, {
  expected: "Expected SCSS function name to match specified pattern",
})

export default function (pattern) {
  return (root, result) => {
    const validOptions = utils.validateOptions(result, ruleName, {
      actual: pattern,
      possible: [ isRegExp, isString ],
    })
    if (!validOptions) { return }

    const regexpPattern = (isString(pattern))
      ? new RegExp(pattern)
      : pattern

    root.walkAtRules(decl => {
      if (decl.name !== "function") { return }

      // Stripping the function of its arguments
      const funcName = decl.params.replace(/(\s*?)\(.*?\)/g, "")
      if (regexpPattern.test(funcName)) { return }

      utils.report({
        message: messages.expected,
        node: decl,
        result,
        ruleName,
      })
    })
  }
}
