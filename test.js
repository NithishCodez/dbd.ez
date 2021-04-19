const discord = require("./src/index.js");
const client = new discord({
  token: "Nzc0NTA3ODkyNDE4MTUwNDMx.X6Yyrw.1SZskgA6WGR4GfytXLdaLmYJSgQ",
  prefix: "+",
});

client.on("alive", (bot) => {
  console.log(bot.user.tag);
});

client.on("command-ping", (msg) => {
  console.log("Command Ping is used");
});
client.command({
  name: "ping",
  reply: `🏓 API Latency is {ping}ms`,
  argsError: {
    1: "{author} fuck you send args one or gay",
    2: "ahhh",
  },
  kick: "{author.id}"
});

client.command({
  name: "yoyo",
  reply: "honeysingh",
});
