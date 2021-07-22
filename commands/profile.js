var Discord = require(`discord.js`)
var db = require(`quick.db`)
var ms = require(`ms`)
module.exports = {
  name : "profile",
  run : async(client, message, args) => {
    var u = message.mentions.users.first() || message.author
var b = db.get(`bal_${u.id}`)
var l = db.get(`d_${u.id}`)
if(l === null || undefined) l = `Didn't Take`
message.channel.send(new Discord.MessageEmbed().setTitle(`Profile`).setColor(`GREEN`)
.setFooter(message.author.username , message.author.displayAvatarURL({dynamic : true}))
.addField(`Balance`,b,true)
.addField(`Daily Taken`,l,true)
.addField(`Created At`,u.createdAt,true).setTimestamp().setThumbnail(message.author.displayAvatarURL()))
  }
}