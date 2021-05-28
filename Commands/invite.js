const Discord = require("discord.js");

exports.run = async (client, message, args) => {

let user = message.mentions.users.first();

const larsy = new Discord.MessageEmbed()

.setTitle(`Invite Pasko Bot In Your Server`)
.setColor("#323131")
.setFooter("Press For Invite")
.setURL("https://discord.com/oauth2/authorize?client_id=847517801417408522&scope=bot&permissions=8")
  
return message.channel.send(larsy)
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["invitepaskobot", "invitepasko", "invite-pasko"],
  permLevel: 0
};

exports.help = {
  name: 'invite',
  description: 'for invite pasko bot.',
  usage: 'invite'
}; 