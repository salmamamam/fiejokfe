const Discord = require("discord.js");

exports.run = async (client, message, args) => {

let user = message.mentions.users.first();

const larsy = new Discord.MessageEmbed()

.setTitle(`Join Pasko Bot Support Server`)
.setColor("#323131")
.setFooter("Press For Join")
.setURL("https://discord.gg/cPWfbXkFR4")
  
return message.channel.send(larsy)
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["supportserver", "server", "paskobotserver"],
  permLevel: 0
};

exports.help = {
  name: 'support-server',
  description: 'for get pasko bot support server invite link.',
  usage: 'support-server'
}; 