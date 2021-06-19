import atEachKeyValue from "./at-each-key-value-single-line";
import atElseClosingBraceNewlineAfter from "./at-else-closing-brace-newline-after";
import atElseClosingBraceSpaceAfter from "./at-else-closing-brace-space-after";
import atElseEmptyLineBefore from "./at-else-empty-line-before";
import atElseIfParenthesesSpaceBefore from "./at-else-if-parentheses-space-before";
import atExtendNoMissingPlaceholder from "./at-extend-no-missing-placeholder";
import atForwardBeforeUse from "./at-forward-before-use";
import atFunctionNamedArguments from "./at-function-named-arguments";
import atFunctionParenthesesSpaceBefore from "./at-function-parentheses-space-before";
import atFunctionPattern from "./at-function-pattern";
import atIfClosingBraceNewlineAfter from "./at-if-closing-brace-newline-after";
import atIfClosingBraceSpaceAfter from "./at-if-closing-brace-space-after";
import atIfNoNull from "./at-if-no-null";
import atImportNoPartialLeadingUnderscore from "./at-import-no-partial-leading-underscore";
import atImportPartialExtension from "./at-import-partial-extension";
import atImportPartialExtensionBlacklist from "./at-import-partial-extension-blacklist";
import atImportPartialExtensionWhitelist from "./at-import-partial-extension-whitelist";
import atMixinArgumentlessCallParentheses from "./at-mixin-argumentless-call-parentheses";
import atMixinNamedArguments from "./at-mixin-named-arguments";
import atMixinParenthesesSpaceBefore from "./at-mixin-parentheses-space-before";
import atMixinPattern from "./at-mixin-pattern";
import atRuleConditionalNoParen from "./at-rule-conditional-no-parentheses";
import atRuleNoUnknown from "./at-rule-no-unknown";
import commentNoEmpty from "./comment-no-empty";
import commentNoLoud from "./comment-no-loud";
import declarationNestedProperties from "./declaration-nested-properties";
import declarationNestedPropertiesNoDividedGroups from "./declaration-nested-properties-no-divided-groups";
import dimensionNoNonNumeric from "./dimension-no-non-numeric-values";
import dollarVariableColonNewlineAfter from "./dollar-variable-colon-newline-after";
import dollarVariableColonSpaceAfter from "./dollar-variable-colon-space-after";
import dollarVariableColonSpaceBefore from "./dollar-variable-colon-space-before";
import dollarVariableDefault from "./dollar-variable-default";
import dollarVariableEmptyLineAfter from "./dollar-variable-empty-line-after";
import dollarVariableEmptyLineBefore from "./dollar-variable-empty-line-before";
import dollarVariableFirstInBlock from "./dollar-variable-first-in-block";
import dollarVariableNoMissingInterpolation from "./dollar-variable-no-missing-interpolation";
import dollarVariablePattern from "./dollar-variable-pattern";
import doubleSlashCommentEmptyLineBefore from "./double-slash-comment-empty-line-before";
import doubleSlashCommentInline from "./double-slash-comment-inline";
import doubleSlashCommentWhitespaceInside from "./double-slash-comment-whitespace-inside";
import functionColorRelative from "./function-color-relative";
import functionNoQuotedStrings from "./function-quote-no-quoted-strings-inside";
import functionNoUnquotedStrings from "./function-unquote-no-unquoted-strings-inside";
import mapKeysQuotes from "./map-keys-quotes";
import mediaFeatureValueDollarVariable from "./media-feature-value-dollar-variable";
import noDollarVariables from "./no-dollar-variables";
import noGlobalFunctionNames from "./no-global-function-names";
import noDuplicateDollarVariables from "./no-duplicate-dollar-variables";
import noDuplicateMixins from "./no-duplicate-mixins";
import operatorNoNewlineAfter from "./operator-no-newline-after";
import operatorNoNewlineBefore from "./operator-no-newline-before";
import operatorNoUnspaced from "./operator-no-unspaced";
import partialNoImport from "./partial-no-import";
import percentPlaceholderPattern from "./percent-placeholder-pattern";
import selectorNestCombinators from "./selector-nest-combinators";
import selectorNoRedundantNestingSelector from "./selector-no-redundant-nesting-selector";
import selectorNoUnionClassName from "./selector-no-union-class-name";

export default {
  "at-extend-no-missing-placeholder": atExtendNoMissingPlaceholder,
  "at-else-closing-brace-newline-after": atElseClosingBraceNewlineAfter,
  "at-else-closing-brace-space-after": atElseClosingBraceSpaceAfter,
  "at-else-empty-line-before": atElseEmptyLineBefore,
  "at-else-if-parentheses-space-before": atElseIfParenthesesSpaceBefore,
  "at-forward-before-use": atForwardBeforeUse,
  "at-function-named-arguments": atFunctionNamedArguments,
  "at-function-parentheses-space-before": atFunctionParenthesesSpaceBefore,
  "at-function-pattern": atFunctionPattern,
  "at-if-closing-brace-newline-after": atIfClosingBraceNewlineAfter,
  "at-if-closing-brace-space-after": atIfClosingBraceSpaceAfter,
  "at-if-no-null": atIfNoNull,
  "at-import-no-partial-leading-underscore": atImportNoPartialLeadingUnderscore,
  "at-import-partial-extension": atImportPartialExtension,
  "at-import-partial-extension-blacklist": atImportPartialExtensionBlacklist,
  "at-import-partial-extension-whitelist": atImportPartialExtensionWhitelist,
  "at-mixin-argumentless-call-parentheses": atMixinArgumentlessCallParentheses,
  "at-mixin-named-arguments": atMixinNamedArguments,
  "at-mixin-parentheses-space-before": atMixinParenthesesSpaceBefore,
  "at-mixin-pattern": atMixinPattern,
  "at-each-key-value-single-line": atEachKeyValue,
  "at-rule-conditional-no-parentheses": atRuleConditionalNoParen,
  "at-rule-no-unknown": atRuleNoUnknown,
  "comment-no-empty": commentNoEmpty,
  "comment-no-loud": commentNoLoud,
  "declaration-nested-properties": declarationNestedProperties,
  "declaration-nested-properties-no-divided-groups": declarationNestedPropertiesNoDividedGroups,
  "dimension-no-non-numeric-values": dimensionNoNonNumeric,
  "dollar-variable-colon-newline-after": dollarVariableColonNewlineAfter,
  "dollar-variable-colon-space-after": dollarVariableColonSpaceAfter,
  "dollar-variable-colon-space-before": dollarVariableColonSpaceBefore,
  "dollar-variable-default": dollarVariableDefault,
  "dollar-variable-empty-line-after": dollarVariableEmptyLineAfter,
  "dollar-variable-empty-line-before": dollarVariableEmptyLineBefore,
  "dollar-variable-first-in-block": dollarVariableFirstInBlock,
  "dollar-variable-no-missing-interpolation": dollarVariableNoMissingInterpolation,
  "dollar-variable-pattern": dollarVariablePattern,
  "double-slash-comment-empty-line-before": doubleSlashCommentEmptyLineBefore,
  "double-slash-comment-inline": doubleSlashCommentInline,
  "double-slash-comment-whitespace-inside": doubleSlashCommentWhitespaceInside,
  "function-quote-no-quoted-strings-inside": functionNoQuotedStrings,
  "function-unquote-no-unquoted-strings-inside": functionNoUnquotedStrings,
  "function-color-relative": functionColorRelative,
  "map-keys-quotes": mapKeysQuotes,
  "media-feature-value-dollar-variable": mediaFeatureValueDollarVariable,
  "no-dollar-variables": noDollarVariables,
  "no-duplicate-dollar-variables": noDuplicateDollarVariables,
  "no-duplicate-mixins": noDuplicateMixins,
  "no-global-function-names": noGlobalFunctionNames,
  "operator-no-newline-after": operatorNoNewlineAfter,
  "operator-no-newline-before": operatorNoNewlineBefore,
  "operator-no-unspaced": operatorNoUnspaced,
  "percent-placeholder-pattern": percentPlaceholderPattern,
  "partial-no-import": partialNoImport,
  "selector-nest-combinators": selectorNestCombinators,
  "selector-no-redundant-nesting-selector": selectorNoRedundantNestingSelector,
  "selector-no-union-class-name": selectorNoUnionClassName
};
