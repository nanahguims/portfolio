const path = require("path");

module.exports = {
  output: "export",
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
    prependData: `@import 'variables.scss';`,
  },
};
