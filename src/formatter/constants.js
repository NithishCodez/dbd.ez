const constants = [
  {
    constant: "{author}",
    value: (msg) => {
      return "<@" + msg.author.id + ">";
    },
  },
  {
    constant: "{author.tag}",
    value: (msg) => {
      return msg.author.tag;
    },
  },
  {
    constant: "{ping}",
    value: (msg) => {
      return msg.client.ws.ping;
    },
  },
  {
    constant: "{author.id}",
    value: (msg) => {
      return msg.author.id;
    },
  },
  {
    constant: "{author.name}",
    value: (msg) => {
      return msg.author.username;
    },
  },
  {
    constant: "{randomnum}",
    value: (maxval) => {
      return Math.floor(Math.random() * Math.floor(maxval));
    },
  },
    {
    constant: "{messagecontent}",
    value: (msg) => {
      return msg.content;
    },
  },
];

module.exports = constants;
