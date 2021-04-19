module.exports = class Formatter {
  constructor() {
    /**
     * @type {require("./formatlogic.js")}
     */

    this.format = require("./formatlogic.js");

    /**
     * @type {require("../argsManagement/logic.js")}
     */

    this.manageArgs = require("../argsManagement/logic.js");
  }

  /**
   *
   * @param {string} str - Reply to be sent (unformatted)
   * @param {object} msg - The message object from discord.js message event
   * @param {array} args - msg.content splitted (" ") into array
   * @returns Formatted string to be sent
   */

  formatReply(str, msg, args) {
    const constant_replaced = this.format(str, msg);
    const args_replace = this.manageArgs(constant_replaced, args);
    return args_replace;
  }
};
