const Discord = require('discord.js')
const express = require("express");
const app = express();
app.listen(() => console.log("."));
app.use('/ping', (req, res) => {
  res.send(new Date());
});
const client = new Discord.Client();
require('discord-reply')
const { Collection } = require('discord.js');
const prefix = require('./config/bot.json');
var db = require(`quick.db`)
var fs = require(`fs`)

fs.readdir('./events/', (err, files) => {
  if (err) return console.log(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split('.')[0];
    console.log(`Loading ${eventName}.js!`);
    client.on(eventName, event.bind(null, client));
  });
});
fs.readdir(`./commands/`, (error, files) => {
  if (error) { return console.log("error i can not find commands"); };
  files.forEach(file => {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
  })
});



client.config = require('./config/bot.json');
client.commands = new Discord.Collection();
client.login('BOT TOKEN')///tokennn!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                                