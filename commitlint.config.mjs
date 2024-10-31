/* eslint-disable import/no-anonymous-default-export */
// commitlint.config.js
export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // Custom rules
    "type-empty": [2, "never"], // Ensure the type is not empty
    "type-enum": [
      2,
      "always",
      [
        "feat", // new feature
        "fix", // bug fix
        "docs", // documentation only changes
        "style", // formatting, missing semicolons, etc
        "refactor", // code change that neither fixes a bug nor adds a feature
        "perf", // performance improvements
        "test", // adding missing tests
        "chore", // updating build tasks, package manager configs, etc
        "revert", // reverting a previous commit
      ],
    ],
    "header-max-length": [2, "always", 72], // Set max header length to 72 characters
    "scope-empty": [2, "never"], // Ensure scope is not empty
    "subject-case": [2, "always", ["sentence-case"]],
  },
};
/* 
example commit: feat(src): Add new feature
      * make sure to add gloabal scope for commit message (src) like in which folder you changed something
      * make sure to add type of commit (feat, fix, docs, style, refactor, perf, test, chore, revert)
      * make sure there is always a white space between colon and sentence like here e.g: feat(src):`whitespace` Add new feature
      * make sure your commit message always start from capital letter
*/
