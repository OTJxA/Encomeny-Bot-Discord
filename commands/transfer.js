var Discord = require(`discord.js`)
var db = require(`quick.db`)
module.exports = {
  name : "transfer",
  run : async(client, message, args) => {

var user = message.mentions.users.first() 
if(!user)return message.channel.send(`Mention a user`)
if(u.bot) return message.reply(`Error - Bots doesn't have money!`)
if(user == message.author.id)return message.channel.send(`You cant' transfer to yourself 😂`)


var a = args[1]

var b = db.fetch(`bal_${message.author.id}`)
if(b < a )return message.channel.send(`You Don't Have Enough Money!`)
if(isNaN(a))return message.channel.send(`Only Numbers Bro!`)
if(a.includes('-') || a.includes('*') | a.includes('+')| a.includes('%'))return message.channel.send(`i think that i said Numbers!`)
if(a.includes('.'))return message.channel.send(`Numbers!!!`)
db.subtract(`bal_${message.author.id}`,a)
db.add(`bal_${user.id}`,a)
message.channel.send(`${message.author.username} has transferd ${a} to ${user.username}`)
  }
}