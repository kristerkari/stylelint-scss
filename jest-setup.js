const getTestRule = require("jest-preset-stylelint/getTestRule");
const stylelint = require("stylelint");

const testRule = getTestRule(stylelint, { plugins: ["./src"] });

global.testRule = (rule, schema) => {
  testRule(schema);
};
