var Discord = require(`discord.js`)
module.exports = {
  name : "help",
  run : async(client , message) => {
    var commands = client.commands.map(c => c.name).join(`, `)
    message.channel.send(new Discord.MessageEmbed().setTitle(`\`${client.user.username}\` Commands `).setDescription(`**${commands}**`).setColor(message.member.hexColor).setTimestamp().setThumbnail(client.user.displayAvatarURL()))
  }
}