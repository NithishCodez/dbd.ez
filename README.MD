  <br />
    <p align="center">
    <img width="100px" src="https://cdn.discordapp.com/attachments/807418712156012594/833745929537323008/20210419_221807.jpg" alt="dbd.js" />
  </p>

# DBD.EZ

<p align="center">DBD.EZ is an powerful wrapper over discord.js allowing you <br> to make discord bots in no time,No need to learn <br> coding but still make God level Discord bots!</p>

## Table Of Contents

- [About](#About)
  - [Setup](#setup)
  - [Constants](#constants)
  - [Per-Command-Events](#Per-Command-Events)
  - [Constants-list](#constants-list)
- [Development](#development)

### Dev Note: This is still in beta, Join support server for any support, Big updates are coming!

## Usage Example

### Setup

```js
const dbd = require("dbd.ez");

const client = new dbd({
  token: "TOKEN", //Your Discord Bot Token
  prefix: "-",
});

client.command({
  name: "say",
  reply: "{args.all}",
  argsError: {
    1: "You must send atleast one arg",
  }, //in dbd.ez args starts from 1
});
```

### Constants

Constants are to simplify your work, example:

```js
client.command({
  name: "ping",
  reply: "🏓 Pong, API latency is {ping}ms",
});
```

here `{ping}` gets converted to actual API ping when bot replies

### Per-Command-Events

What are events?

When you use dbd.ez you will register a command with .command({}), we cannot run anything we want when a command is executed, here comes per-cmd-events, this will help you do any task when a command is executed, example:

```js
client.on("command-ping", (message) => {
  console.log("Ping command has been used!");
}); //The event is emitted along with discord.js message object

client.command({
  name: "ping",
  reply: "🏓 Pong, API latency is {ping}ms",
}); //You must register the command like this for per-cmd-events to work
```

### Note: Since this package is very new, this is still in beta, we don't recommend you to use this until we release a stable release, stable release is v1 and above!

<br>

### constants-list

`{ping}` - Discord API latency<br>
`{author.tag}` - The command author's Tag<br>
`{author}` - Pinging The command author<br>
`{author.id}` - user id of the message author<br>
`{args<number>}` Example: args1 - args of the message<br>
`{args.all}` - The whole message after command
`{args.allFrom<number>}` Example: args.allFrom2 - Whole message after the mentioned args

More constants will be added everyday, Tnx for choosing us!
<br>

## Development

DBD.EZ is made by [Dynastic Studios](hhttps://discord.gg/m2G7YB3ttf)

- [Discord](https://discord.gg/m2G7YB3ttf)
