module.exports = function manageArgs(str, args) {
  var message = str;
  var matchArray = message.match(/{args[1-Infinity]}/gi);
  if (matchArray) {
    matchArray.forEach((constant) => {
      var regex = new RegExp(constant);
      var replace = args[parseInt(constant.match(/\d+/)[0]) - 1];
      if (replace == undefined) replace = "";
      message = message.replace(regex, replace);
    });
  }
  var argsAll = message.match(/{args.all}/gi);
  if (argsAll) {
    argsAll.forEach((constant) => {
      var regex = new RegExp(constant);
      var replace = args.join(" ");
      if (replace == undefined) replace = "";
      message = message.replace(regex, replace);
    });
  }
  var argsAllFrom = message.match(/{args.allFrom[1-Infinity]}/gi);
  if (argsAllFrom) {
    argsAllFrom.forEach((constant) => {
      var regex = new RegExp(constant);
      var replace = args
        .splice(parseInt(constant.match(/\d+/)[0]) - 1)
        .join(" ");
      if (replace == undefined) replace = "";
      message = message.replace(regex, replace);
    });
  }
  return message;
};
