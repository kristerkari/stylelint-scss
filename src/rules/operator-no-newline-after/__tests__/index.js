import rule, { ruleName, messages } from "..";

// ------------------------------------------------------------------------
// Testing +
// ------------------------------------------------------------------------

// +, before a number (with or without a unit)
testRule(rule, {
  ruleName,
  config: [undefined],
  syntax: "scss",
  skipBasicChecks: true,

  accept: [
    {
      code: "a { width: 1 +1; }",
      description: "List. width: 1 +1."
    },
    {
      code: "a { width: s1- +1; }",
      description: "List. width: s1- +1."
    },
    {
      code: `
      a {
        width: 10px
          + 1;
      }
    `,
      description: "Newline before the op: 10px\\n          + 1"
    },
    {
      code: `
      a {
        width: 10px /
          1;
      }
    `,
      description:
        "Newline after a character, that is not an operator: 10px /\\n  1"
    },
    {
      code: `
      a {
        width: 10px + 1
          + 1;
      }
    `,
      description: "Newline after the following op: 10px + 1\\n         + 1"
    }
  ],

  reject: [
    {
      code: `
      a {
        width: 10px +
         1;
      }
    `,
      description: "Newline-operator-indentation: 10px +\\n1px.",
      message: messages.rejected("+"),
      line: 3,
      column: 21
    },
    {
      code: `
      a {
        width: 10px +
1;
      }
    `,
      description: "Newline-operator-operand: 10px +\\n1px.",
      message: messages.rejected("+"),
      line: 3,
      column: 21
    }
  ]
});
