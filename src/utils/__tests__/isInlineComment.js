import { isInlineComment } from "../";
import postcss from "postcss";
import scss from "postcss-scss";

function logError(err) {
  console.log(err.stack); // eslint-disable-line no-console
}

test("Single-line comment, after ruleset.", () => {
  expect.assertions(1);

  postcss()
    .process(
      `
      a {} // comment
    `,
      { syntax: scss, from: undefined }
    )
    .then(result => {
      result.root.walkComments(comment => {
        expect(isInlineComment(comment)).toBe(true);
      });
    })
    .catch(logError);
});

test("CSS comment, after ruleset.", () => {
  expect.assertions(1);

  postcss()
    .process(
      `
      a {} /* comment */
    `,
      { syntax: scss, from: undefined }
    )
    .then(result => {
      result.root.walkComments(comment => {
        expect(isInlineComment(comment)).toBe(true);
      });
    })
    .catch(logError);
});

test("Single-line comment, after a decl.", () => {
  expect.assertions(1);

  postcss()
    .process(
      `
      a {
        width: 10px; // hmm
      }
    `,
      { syntax: scss, from: undefined }
    )
    .then(result => {
      result.root.walkComments(comment => {
        expect(isInlineComment(comment)).toBe(true);
      });
    })
    .catch(logError);
});

test("CSS comment, before a decl.", () => {
  expect.assertions(1);

  postcss()
    .process(
      `
      a {
        /* CSS comment, before a decl */ width: 10px;
      }
    `,
      { syntax: scss, from: undefined }
    )
    .then(result => {
      result.root.walkComments(comment => {
        expect(isInlineComment(comment)).toBe(true);
      });
    })
    .catch(logError);
});

test("Inline comment, after a {.", () => {
  expect.assertions(1);

  postcss()
    .process(
      `
      a { // Inline comment, after a {.
        width: 10px;
      }
    `,
      { syntax: scss, from: undefined }
    )
    .then(result => {
      result.root.walkComments(comment => {
        expect(isInlineComment(comment)).toBe(true);
      });
    })
    .catch(logError);
});

test("Inline comment, after a selector (in a list). IGNORED.", () => {
  expect.assertions(1);

  postcss()
    .process(
      `
      a, // comment
      b {
        width: 10px;
      }
    `,
      { syntax: scss, from: undefined }
    )
    .then(result => {
      let res = null;
      result.root.walkComments(comment => {
        res = isInlineComment(comment);
      });
      expect(res).toBe(null);
    })
    .catch(logError);
});

test("Inline comment, after a selector, comment prior. IGNORED.", () => {
  expect.assertions(1);

  postcss()
    .process(
      `
      a,
      b {
        width: /* comment inside decl */ 10px;
      }
    `,
      { syntax: scss, from: undefined }
    )
    .then(result => {
      let res = null;
      result.root.walkComments(comment => {
        res = isInlineComment(comment);
      });
      expect(res).toBe(null);
    })
    .catch(logError);
});

test("Multi-line comment, after a ruleset (new line).", () => {
  expect.assertions(1);

  postcss()
    .process(
      `
      a {}
      /* comment */
    `,
      { syntax: scss, from: undefined }
    )
    .then(result => {
      result.root.walkComments(comment => {
        expect(isInlineComment(comment)).toBe(false);
      });
    })
    .catch(logError);
});

test("Single-line comment, after a ruleset (new line).", () => {
  expect.assertions(1);

  postcss()
    .process(
      `
      a {}
      // comment
    `,
      { syntax: scss, from: undefined }
    )
    .then(result => {
      result.root.walkComments(comment => {
        expect(isInlineComment(comment)).toBe(false);
      });
    })
    .catch(logError);
});
