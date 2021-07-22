var Discord = require(`discord.js`)
var ms = require(`ms`)
module.exports = {
  name : "ping",
  run : async(client , message) => {
    message.channel.send(new Discord.MessageEmbed().addField(`Ping`,ms(client.ws.ping)).setColor(`GREEN`))
  }
}