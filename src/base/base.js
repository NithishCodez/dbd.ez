const EventEmitter = require("events");
const { parse } = require("path");

class Base extends EventEmitter {
  constructor(obj) {
    if (!obj.token) throw new Error("[DISCORD API ERROR]: Token Cannot be empty");

    super();

    /**
     * The prefix of the bot [Changeable]
     * @type {String}
     */

    this.prefix = obj.prefix;

    /**
     * requiring discord.js package
     * @type {require("discord.js")}
     */

    this.discord = require("discord.js");

    /**
     * The client class
     * @type {discord.Client}
     */

    this.client = new this.discord.Client();

    /**
     * Loggin in the bot
     * @type {login}
     */

    this.client.login(obj.token);

    /**
     * requiring the message Interpreter
     * @type {require("../formatter/formatter.js")}
     */

    this.formatter = require("../formatter/formatter.js");

    /**
     * The formatter class
     * @type {formatter}
     */

    this.format = new this.formatter();

    /**
     * requiring the args error manager
     * @type {require("../ErrorManager/argsError/argsError.js")}
     */

    this.argsErrorManagement = require("../ErrorManager/argsError/argsError.js");

    /**
     * The argsError class
     * @type {logic}
     */

    this.manageArgsError = new this.argsErrorManagement();

    /**
     * Emitting alive event on ready event
     * @type {event}
     */

    this.client.on("ready", () => {
      this.emit("alive", this.client);
    });
  }

  /**
   * The command manager
   * @param {*} obj
   * @type {Object}
   */

  command(obj) {
    /**
     * Discord.js message event
     * @type {event}
     */

    this.client.on("message", (msg) => {
      //Splitting the message of the user into arguements array
      const args = msg.content.slice(this.prefix.length).trim().split(" ");

      //The command, args[1]
      const command = args.shift().toLowerCase();

      //Checking if the command sent by user is registered with dbd.ez
      if (command == obj.name) {
        //Emitting independent command event
        this.emit("command-" + obj.name, msg);

        //Managing args error
        if (obj.argsError) {
          if (typeof obj.argsError !== "object")
            throw new Error("[argsError]: type must be a object");

          var argerr;
          argerr = this.manageArgsError.manageError(args, obj.argsError, msg);

          if (argerr) return msg.channel.send(argerr);
          //Managing reply
          if (obj.reply) {
            var formatted = this.format.formatReply(obj.reply, msg, args);
            msg.channel.send(formatted);
          }

          if (obj.kick) {
            try {
              const toBeKicked = this.format.formatReply(obj.kick, msg, args);
              let user;
              if (!isNaN(parseInt(toBeKicked))) {
                user = msg.guild.members.cache.get(toBeKicked);
                user.kick();
              } else {
                user = msg.guild.members.cache.find(
                  (x) => x.user.name == toBeKicked
                );
                if (!user)
                  user = msg.guild.members.cache.find(
                    (x) => x.user.tag == toBeKicked
                  );
                user.kick();
              }
            } catch {
              console.error(
                "[dbd.ez  ERROR]: The parsed parameter is neighter user id nor tag or name"
              );
            }
          }

          if (obj.ban) {
            try {
              const toBeBanned = this.format.formatReply(obj.ban, msg, args);
              let user;
              if (!isNaN(parseInt(toBeKicked))) {
                user = msg.guild.members.cache.get(toBeBanned);
                user.ban();
              } else {
                user = msg.guild.members.cache.find(
                  (x) => x.user.name == toBeBanned
                );
                if (!user)
                  user = msg.guild.members.cache.find(
                    (x) => x.user.tag == toBeBanned
                  );
                user.ban();
              }
            } catch {
              console.error(
                "[dbd.ez ERROR]: The parsed parameter is neighter user id nor tag or name"
              );
            }
          }
        }
      }
    });
  }
}

module.exports = Base;
