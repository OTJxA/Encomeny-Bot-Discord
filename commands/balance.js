var Discord = require(`discord.js`)
var db = require(`quick.db`)
const prefix = require('../config/bot.json');
module.exports = {
  name : "balance",
  cooldown : 5,
  run : async(client, message) => {
    var u = message.mentions.users.first()  || message.author
    if(u.bot) return message.reply(`Error - Bots doesn't have money!`)
if(!u) return message.channel.send(`Error - I can't find this user!`)
    var b = db.get(`bal_${u.id}`)
    if(b === null || undefined) return message.channel.send(`What about taking your daily by typing ${prefix.prefix}daily`)
    message.channel.send(`\`${u.username}\` Your Balance is **${b}**`)
  }
}