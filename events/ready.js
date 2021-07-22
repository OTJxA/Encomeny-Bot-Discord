module.exports = async (client) => {

  console.log(`${client.user.tag} Online!`);
  console.log(`My Ping ${client.ws.ping}`)
console.log(client.commands.map(m => m.name + ".js Ready ✅"))
client.user.setActivity(`Encomeny Bot by JxA! `, {type: "WATCHING"})
};
