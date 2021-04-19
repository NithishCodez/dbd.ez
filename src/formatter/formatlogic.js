const functions = require("./constants.js");

module.exports = function logic(str, msg) {
  var message = str;
  functions.forEach((obj) => {
    var regex = new RegExp(obj.constant, "g");
    message = message.replace(regex, obj.value(msg));
  });
  return message;
};
