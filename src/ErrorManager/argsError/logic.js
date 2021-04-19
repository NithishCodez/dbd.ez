const formatter = require("../../formatter/formatter.js");
const manageFormat = new formatter();

module.exports = function manageError(args, errorObj, msg) {
  for (const [key, value] of Object.entries(errorObj)) {
    if (isNaN(parseInt(key))) throw new Error("ArgsError key must be a number");
    if (!args[parseInt(key) - 1])
      return manageFormat.formatReply(value, msg, args);
  }
};
