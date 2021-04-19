const constants = [
  {
    constant: "{author}",
    value: (msg) => {return "<@"+msg.author.id+">"}
  },
  {
    constant: "{author.tag}",
    value: (msg) => {return msg.author.tag}
  },
  {
    constant: "{ping}",
    value: (msg) => {return (msg.client.ws.ping)}
  },
  {
    constant: "{author.id}",
    value: (msg) => {return (msg.author.id)}
  }
]

module.exports = constants;