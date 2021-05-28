const Discord = require("discord.js");

exports.run = async (client, message, args) => {

let user = message.mentions.users.first();

const larsy = new Discord.MessageEmbed()

.setTitle(`Donate Pasko Bot`)
.setColor("#323131")
.setFooter("Press For Donate")
.setURL("https://donatebot.io/checkout/847074601212051456")
  
return message.channel.send(larsy)
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["donatepaskobot", "donatepasko", "donate-pasko"],
  permLevel: 0
};

exports.help = {
  name: 'donate',
  description: 'for donate pasko bot.',
  usage: 'donate'
}; 