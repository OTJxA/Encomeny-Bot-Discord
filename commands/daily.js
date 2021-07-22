var Discord = require(`discord.js`)
var db = require(`quick.db`)
var ms = require(`ms`)
module.exports = {
  name : "daily",
  cooldown : 86400,
  run : async(client, message) => {
var num = Math.floor(Math.random() * 3000)
db.add(`bal_${message.author.id}`,num)
message.channel.send(`You got ${num} as your daily`)
db.add(`d_${message.author.id}`,1)
  }
}