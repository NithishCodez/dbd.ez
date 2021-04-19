class argsError {
  constructor() {
    /**
     * Importing the logic class for argserror management
     * @type {require("./logic.js")}
     */

    this.argsErrorLogic = require("./logic.js");
  }

  manageError(args, errorsObj, msg) {
    return this.argsErrorLogic(args, errorsObj, msg);
  }
}

module.exports = argsError;
