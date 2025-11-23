var path = require("path");

function buildEsLintCommand(files) {
  return (
    "next lint --fix --file " +
    files
      .map(function (f) {
        return path.relative(process.cwd(), f);
      })
      .join(" --file ")
  );
}

module.exports = {
  "*.{js,jsx,ts,tsx}": ["prettier --write", buildEsLintCommand],
  // Run a full type-check once per commit (no file args appended)
  "*": () => "npx tsc --noEmit",
};
