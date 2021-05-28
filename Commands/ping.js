const Discord = require("discord.js");

exports.run = async (client, message, args) => {

let user = message.mentions.users.first();

const larsy = new Discord.MessageEmbed()

.addField(`My Ping:` ,`${client.ws.ping} ms`)
.setColor("#323131")
  
return message.channel.send(larsy)
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Sade Ping Komutu işde mq',
  usage: 'ping'
}; 