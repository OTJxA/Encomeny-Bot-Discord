var Discord = require(`discord.js`)
var db = require(`quick.db`)
module.exports = {
  name : "remove",
  run : async(client, message, args) => {
if(!message.member.hasPermission(`ADMINITRASTOR`)) return message.channel.send(`Error - You Don't have Enough Permissions`)
var u = message.mentions.users.first()
if(!u) return message.channel.send(`Mention a user`)
var a = args[1]
if(!a) return message.channel.send(`Type the amount`)
db.subtract(`bal_${u.id}`,a)
message.channel.send(`Removed **${a}** From \`${u.username}\``)
  }
}