# List of rules

Here are stylelint-scss' rules, grouped by the [_thing_](http://apps.workflower.fi/vocabs/css/en) they apply to (just like in [stylelint](https://stylelint.io/user-guide/about-rules)).

Please also see the [example configs](https://github.com/kristerkari/stylelint-scss/tree/master/docs/examples) for special cases.

## `@`-each

- [`at-each-key-value-single-line`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-each-key-value-single-line/README.md): This is a rule that checks for situations where users have done a loop using map-keys and grabbed the value for that key inside of the loop.

## `@`-else

- [`at-else-closing-brace-newline-after`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-else-closing-brace-newline-after/README.md): Require or disallow a newline after the closing brace of `@else` statements (Autofixable).
- [`at-else-closing-brace-space-after`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-else-closing-brace-space-after/README.md): Require a single space or disallow whitespace after the closing brace of `@else` statements (Autofixable).
- [`at-else-empty-line-before`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-else-empty-line-before/README.md): Require an empty line or disallow empty lines before `@`-else (Autofixable).
- [`at-else-if-parentheses-space-before`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-else-if-parentheses-space-before/README.md): Require or disallow a space before `@else if` parentheses (Autofixable).

## `@`-extend

- [`at-extend-no-missing-placeholder`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-extend-no-missing-placeholder/README.md): Disallow at-extends (`@extend`) with missing placeholders.

## `@`-function

- [`at-function-named-arguments`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-function-named-arguments/README.md): Require named parameters in SCSS function call rule.
- [`at-function-parentheses-space-before`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-function-parentheses-space-before/README.md): Require or disallow a space before `@function` parentheses (Autofixable).
- [`at-function-pattern`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-function-pattern/README.md): Specify a pattern for Sass/SCSS-like function names.

## `@`-if

- [`at-if-closing-brace-newline-after`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-if-closing-brace-newline-after/README.md): Require or disallow a newline after the closing brace of `@if` statements (Autofixable).
- [`at-if-closing-brace-space-after`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-if-closing-brace-space-after/README.md): Require a single space or disallow whitespace after the closing brace of `@if` statements (Autofixable).
- [`at-if-no-null`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-if-no-null/README.md): Disallow `null` in `@if` statements.

## `@`-import

- [`at-import-no-partial-leading-underscore`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-import-no-partial-leading-underscore/README.md): Disallow leading underscore in partial names in `@import`.
- [`at-import-partial-extension`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-import-partial-extension/README.md): Require or disallow extension in `@import` commands.
- [`at-import-partial-extension-blacklist`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-import-partial-extension-blacklist/README.md): Specify blacklist of disallowed file extensions for partial names in `@import` commands.
- [`at-import-partial-extension-whitelist`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-import-partial-extension-whitelist/README.md): Specify whitelist of allowed file extensions for partial names in `@import` commands.

## `@`-mixin

- [`at-mixin-argumentless-call-parentheses`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-mixin-argumentless-call-parentheses/README.md): Require or disallow parentheses in argumentless `@mixin` calls (Autofixable).
- [`at-mixin-named-arguments`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-mixin-named-arguments/README.md): Require named parameters in at-mixin call rule.
- [`at-mixin-parentheses-space-before`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-mixin-parentheses-space-before/README.md): Require or disallow a space before `@mixin` parentheses (Autofixable).
- [`at-mixin-pattern`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-mixin-pattern/README.md): Specify a pattern for Sass/SCSS-like mixin names.

## `@`-rule

- [`at-rule-conditional-no-parentheses`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-rule-conditional-no-parentheses/README.md): Disallow parentheses in conditional @ rules (if, elsif, while) (Autofixable).
- [`at-rule-no-unknown`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-rule-no-unknown/README.md): Disallow unknown at-rules. Should be used **instead of** stylelint's [at-rule-no-unknown](https://stylelint.io/user-guide/rules/at-rule-no-unknown).

## `$`-variable

- [`dollar-variable-colon-newline-after`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-colon-newline-after/README.md): Require a newline after the colon in `$`-variable declarations (Autofixable).
- [`dollar-variable-colon-space-after`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-colon-space-after/README.md): Require or disallow whitespace after the colon in `$`-variable declarations (Autofixable).
- [`dollar-variable-colon-space-before`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-colon-space-before/README.md): Require a single space or disallow whitespace before the colon in `$`-variable declarations (Autofixable).
- [`dollar-variable-default`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-default/README.md): Require `!default` flag for `$`-variable declarations.
- [`dollar-variable-empty-line-after`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-empty-line-after/README.md): Require a single empty line or disallow empty lines after `$`-variable declarations (Autofixable).
- [`dollar-variable-empty-line-before`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-empty-line-before/README.md): Require a single empty line or disallow empty lines before `$`-variable declarations (Autofixable).
- [`dollar-variable-first-in-block`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-first-in-block/README.md): Require for variables to be put first in a block (a rule or in root).
- [`dollar-variable-no-missing-interpolation`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-no-missing-interpolation/README.md): Disallow Sass variables that are used without interpolation with CSS features that use custom identifiers.
- [`dollar-variable-pattern`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-pattern/README.md): Specify a pattern for Sass-like variables.

## `%`-placeholder

- [`percent-placeholder-pattern`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/percent-placeholder-pattern/README.md): Specify a pattern for `%`-placeholders.

## `//`-comment

- [`double-slash-comment-empty-line-before`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/double-slash-comment-empty-line-before/README.md): Require or disallow an empty line before `//`-comments (Autofixable).
- [`double-slash-comment-inline`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/double-slash-comment-inline/README.md): Require or disallow `//`-comments to be inline comments.
- [`double-slash-comment-whitespace-inside`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/double-slash-comment-whitespace-inside/README.md): Require or disallow whitespace after the `//` in `//`-comments

## Comment

- [`comment-no-empty`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/comment-no-empty/README.md): Disallow empty comments.
- [`comment-no-loud`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/comment-no-loud/README.md): Disallow `/*`-comments.

## Declaration

- [`declaration-nested-properties`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/declaration-nested-properties/README.md): Require or disallow properties with `-` in their names to be in a form of a nested group.
- [`declaration-nested-properties-no-divided-groups`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/declaration-nested-properties-no-divided-groups/README.md): Disallow nested properties of the same "namespace" be divided into multiple groups.

## Dimension

- [`dimension-no-non-numeric-values`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dimension-no-non-numeric-values/README.md): Disallow non-numeric values when interpolating a value with a unit.

## Function

- [`function-color-relative`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/function-color-relative/README.md): Encourage the use of the [scale-color](https://sass-lang.com/documentation/modules/color#scale-color) function over regular color functions.
- [`function-quote-no-quoted-strings-inside`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/function-quote-no-quoted-strings-inside/README.md): Disallow quoted strings inside the [quote function](https://sass-lang.com/documentation/modules/string#quote) (Autofixable).
- [`function-unquote-no-unquoted-strings-inside`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/function-unquote-no-unquoted-strings-inside/README.md): Disallow unquoted strings inside the [unquote function](https://sass-lang.com/documentation/modules/string#unquote) (Autofixable).

## Map

- [`map-keys-quotes`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/map-keys-quotes/README.md): Require quoted keys in Sass maps.

## Media feature

- [`media-feature-value-dollar-variable`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/media-feature-value-dollar-variable/README.md): Require a media feature value be a `$`-variable or disallow `$`-variables in media feature values.

## Operator

- [`operator-no-newline-after`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/operator-no-newline-after/README.md): Disallow linebreaks after Sass operators.
- [`operator-no-newline-before`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/operator-no-newline-before/README.md): Disallow linebreaks before Sass operators.
- [`operator-no-unspaced`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/operator-no-unspaced/README.md): Disallow unspaced operators in Sass operations.

## Partial

- [`partial-no-import`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/partial-no-import/README.md): Disallow non-CSS `@import`s in partial files.

## Selector

- [`selector-nest-combinators`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/selector-nest-combinators/README.md): Require or disallow nesting of combinators in selectors.
- [`selector-no-redundant-nesting-selector`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/selector-no-redundant-nesting-selector/README.md): Disallow redundant nesting selectors (`&`).
- [`selector-no-union-class-name`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/selector-no-union-class-name/README.md): Disallow union class names with the parent selector (`&`).

## General / Sheet

- [`no-dollar-variables`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/no-dollar-variables/README.md): Disallow dollar variables within a stylesheet.
- [`no-duplicate-dollar-variables`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/no-duplicate-dollar-variables/README.md): Disallow duplicate dollar variables within a stylesheet.
- [`no-duplicate-mixins`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/no-duplicate-mixins/README.md): Disallow duplicate mixins within a stylesheet.
- [`no-global-function-names`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/no-global-function-names/README.md): Disallows the use of global function names, as these global functions are now located inside built-in Sass modules.
