
const Discord = require('discord.js');
const cooldowns = new Map();
var db = require(`quick.db`)
var ms = require(`ms`)
module.exports = (client, message, discord) => {

  if (message.author.bot) return;
  if (message.content.indexOf(client.config.prefix) !== 0) return;

  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase()
  const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd))
  if (!command) return
  if (!cooldowns.has(command.name)) {
    const coll = new Discord.Collection()
    cooldowns.set(command.name, coll)
  }
  const current_time = Date.now();
  const time_stamps = cooldowns.get(command.name);
  const cooldown_amount = (command.cooldown) * 1000
  if (time_stamps.has(message.author.id)) {
    const expiration_time = time_stamps.get(message.author.id) + cooldown_amount;
    if (current_time < expiration_time) {
      const time_left = (expiration_time - current_time) / 1000
      return message.reply(`**Cooldown ${ms(time_left.toFixed(1))}**`)
    }
  }

  time_stamps.set(message.author.id, current_time)
  setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);








  try {
    command.run(client, message, args);
  } catch (e) {
    console.log(e);
    message.channel.send(':x: | Something went wrong ```' + e + '```');
  }
}