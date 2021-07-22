const Discord = require(`discord.js`)
var db = require(`quick.db`)
module.exports = {
  name : "leaderboard",
  run : async(client, message) => {
     let bal = db.all().filter(data => data.ID.startsWith(`bal_`)).sort((a, b) => b.data - a.data)
bal.length = 10;
    var b = "";
    var i = 0;
    for (i in bal) {
      b += `${bal.indexOf(bal[i]) + 1}# | ${client.users.cache.get(bal[i].ID.split('_')[1]) } | ${bal[i].data} \n`
    }  

    
    var embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username , message.author.displayAvatarURL({dynamic : true}))
.setColor(`BLACK`)
.setDescription(b)
    .setTimestamp()
    message.channel.send(embed)
  }
}