import { utils } from "stylelint"
import { namespace, mathOperatorCharType } from "../../utils"

export const ruleName = namespace("media-feature-value-dollar-variable")

export const messages = utils.ruleMessages(ruleName, {
  rejected: "Unexpected dollar-variable as a media feature value",
  expected: "Expected a dollar-variable (e.g. $var) to be used as a media feature value",
})

export default function (expectation) {
  return function (root, result) {
    const validOptions = utils.validateOptions(result, ruleName, {
      actual: expectation,
      possible: [ "always", "never" ],
    })
    if (!validOptions) { return }

    const dashRegex = /[\w]-/g
    const valueRegex = /:(?:\s*?)(\S.+?)(:?\s*?)\)/
    // In `(max-width: 10px )` find `: 10px )`.
    // Got to go with that (the global search doesn't remember parens' insides)
    // and parse it again afterwards to remove trailing junk
    const valueRegexGlobal = new RegExp(valueRegex.source, "g")
    // `$var-name_sth`
    const variableRegex = /^\$[A-Za-z_0-9-]+$/
    // `#{$var-name_sth}`
    const interpolationVarRegex = /^#\{\s*?\$[A-Za-z_0-9-]+\s*?\}$/

    root.walkAtRules("media", atRule => {
      const found = atRule.params.match(valueRegexGlobal)
      // If there are no values
      if (!found || !found.length) { return }
      found.forEach(function (found) {
        // ... parse `: 10px )` to `10px`
        const valueParsed = found.match(valueRegex)[1]

        // Just a shorthand to stylelint.utils.report()
        function complain(message) {
          utils.report({
            ruleName,
            result,
            node: atRule,
            word: valueParsed,
            message,
          })
        }

        // A value should be a single variable
        // or it should be a single variable inside Sass interpolation

        if (expectation === "always") {
          // Check if the value contains hyphens.
          let match
          let isOperator = false

          // Check if the hyphen is an operator.
          do {
            match = dashRegex.exec(valueParsed)
            if (match) {
              isOperator = mathOperatorCharType(valueParsed, match.index + 1) === "op"
            }
          } while (match && !isOperator)

          if (isOperator) {
            complain(messages.expected)
          }

          if (!(valueParsed.search(variableRegex) !== -1 ||
            valueParsed.search(interpolationVarRegex) !== -1)) {
            complain(messages.expected)
          }
        }  else if (expectation === "never" && valueParsed.indexOf("$") !== -1) {
          // "Never" means no variables at all (functions allowed)
          complain(messages.rejected)
        }
      })
    })
  }
}
