import testRule from "stylelint-test-rule-tape"
import rule, { ruleName, messages } from ".."

// Required ("always")
testRule(rule, {
  ruleName,
  config: ["always"],
  syntax: "scss",

  accept: [ {
    code: `
      @media screen and (max-width: $val) {
        a { display: none; }
      }
    `,
    description: "Always. Example: value is a var.",
  }, {
    code: `
      @media screen and (max-width: #{$val}) {
        a { display: none; }
      }
    `,
    description: "Always. Example: value is interpolation of a single var.",
  }, {
    code: `
      @media screen and (max-width: #{$val} ) {
        a { display: none; }
      }
    `,
    description: "Always. Example: value is interpolation of a single var; space after the interpolation.",
  }, {
    code: `
      @media screen and (max-width: #{ $val } ) {
        a { display: none; }
      }
    `,
    description: "Always. Example: value is interpolation of a single var spaces inside the interpolation.",
  }, {
    code: `
      @media screen and (max-width:  #{ $val }) {
        a { display: none; }
      }
    `,
    description: "Always. Example: value is interpolation of a single var; spaces before and after the interpolation.",
  }, {
    code: `
      @media screen and (max-width:  #{$val-name-hyphenated} ) {
        a { display: none; }
      }
    `,
    description: "Always. Example: value is interpolation of a single hyphenated var; spaces before and after the interpolation.",
  } ],

  reject: [ {
    code: `
      @media (max-width: 100px) {
        b { color: red; }
      }
    `,
    line: 2,
    column: 26,
    message: messages.expected,
    description: "Always. Example: value is not a var, space before.",
  }, {
    code: `
      @media (max-width:100px) {
        b { color: red; }
      }
    `,
    line: 2,
    column: 25,
    message: messages.expected,
    description: "Always. Example: value is not a var, no spaces.",
  }, {
    code: `
      @media screen and
      (max-width: 100px) {
        b { color: red; }
      }
    `,
    line: 3,
    column: 19,
    message: messages.expected,
    description: "Always. Example: value is not a var, newline before statement.",
  }, {
    code: `
      @media screen and (max-width:
        100px) {
        b { color: red; }
      }
    `,
    line: 3,
    column: 9,
    message: messages.expected,
    description: "Always. Example: value is not a var, newline before value.",
  }, {
    code: `
      @media screen and (max-width: 100px
      ) {
        b { color: red; }
      }
    `,
    line: 2,
    column: 37,
    message: messages.expected,
    description: "Always. Example: value is not a var, newline after value.",
  }, {
    code: `
      @media screen and
      (max-width: $var), or
      (min-width: 100px){
        b { color: red; }
      }
    `,
    line: 4,
    column: 19,
    message: messages.expected,
    description: "Always. Example: multiple statements, one has non-var.",
  }, {
    code: `
      @media screen and (max-width: #{$val} + 10px) {
        a { display: none; }
      }
    `,
    line: 2,
    column: 37,
    message: messages.expected,
    description: "Always. Example: value is a math op on an interpolation of a single var and a regular value.",
  }, {
    code: `
      @media screen and (max-width: #{$val + 10px} ) {
        a { display: none; }
      }
    `,
    line: 2,
    column: 37,
    message: messages.expected,
    description: "Always. Example: value is an interpolation of a math op on a var and a regular value.",
  }, {
    code: `
      @media screen and (max-width: #{$val + $x} ) {
        a { display: none; }
      }
    `,
    line: 2,
    column: 37,
    message: messages.expected,
    description: "Always. Example: value is an interpolation of a math op on a var and a var.",
  }, {
    code: `
      @media screen and (min-width: 100px + 10px){
        b { color: red; }
      }
    `,
    line: 2,
    column: 37,
    message: messages.expected,
    description: "Always. Example: math operation without a var as a value.",
  }, {
    code: `
      @media screen and (min-width: 100px + $var){
        b { color: red; }
      }
    `,
    line: 2,
    column: 37,
    message: messages.expected,
    description: "Always. Example: math operation with a var as a value.",
  }, {
    code: `
      @media screen and (min-width: $var + 100px){
        b { color: red; }
      }
    `,
    line: 2,
    column: 37,
    message: messages.expected,
    description: "Always. Example: math operation with a var as a value.",
  }, {
    code: `
      @media screen and (min-width: $var-100px){
        b { color: red; }
      }
    `,
    line: 2,
    column: 37,
    message: messages.expected,
    description: "Always. Example: math operation with a var as a value. No spaces between operators.",
  }, {
    code: `
      @media screen and (min-width: funcName($p)){
        b { color: red; }
      }
    `,
    line: 2,
    column: 37,
    message: messages.expected,
    description: "Always. Example: function call as a value.",
  } ],
})

// Not allowed ("never")
testRule(rule, {
  ruleName,
  config: ["never"],
  syntax: "scss",

  accept: [ {
    code: `
      @media screen and (min-width: 100px + 10px){
        b { color: red; }
      }
    `,
    description: "Never. Example: math operation without a var as a value.",
  }, {
    code: `
      @media screen and (max-width:
        100px) {
        b { color: red; }
      }
    `,
    description: "Never. Example: value is not a var, newline before value.",
  } ],

  reject: [ {
    code: `
      @media screen and (max-width: $val) {
        a { display: none; }
      }
    `,
    line: 2,
    column: 37,
    message: messages.rejected,
    description: "Never. Example: value is a var.",
  }, {
    code: `
      @media screen and
      (max-width: $var), or
      (min-width: 100px){
        b { color: red; }
      }
    `,
    line: 3,
    column: 19,
    message: messages.rejected,
    description: "Never. Example: multiple statements, one has non-var.",
  }, {
    code: `
      @media screen and (min-width: funcName($p)){
        b { color: red; }
      }
    `,
    line: 2,
    column: 37,
    message: messages.rejected,
    description: "Never. Example: function call and with a var as a parameter.",
  }, {
    code: `
      @media screen and (min-width: 100px + $var){
        b { color: red; }
      }
    `,
    description: "Never. Example: math operation with a var (not the 1st operand) as a value.",
  }, {
    code: `
      @media screen and (max-width: #{$val + 10px} ) {
        a { display: none; }
      }
    `,
    line: 2,
    column: 37,
    message: messages.rejected,
    description: "Never. Example: value is an interpolation of a math op on a var and a regular value.",
  }, {
    code: `
      @media screen and (max-width: #{$val+10px} ) {
        a { display: none; }
      }
    `,
    line: 2,
    column: 37,
    message: messages.rejected,
    description: "Never. Example: value is an interpolation of a math op on a var and a regular value.",
  }, {
    code: `
      @media screen and (max-width: #{$val-10px} ) {
        a { display: none; }
      }
    `,
    line: 2,
    column: 37,
    message: messages.rejected,
    description: "Never. Example: value is an interpolation of a math op on a var and a regular value.",
  } ],
})
