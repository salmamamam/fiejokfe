const { MessageEmbed } = require("discord.js");

exports.run = async(client, message, args) => {

  let embed = new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor('#323131').setTimestamp();
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(embed.setDescription("You Don't Have Permission To Use This Command.")).then(x => x.delete({timeout: 5000}));
  if(!args[0] || (args[0] && isNaN(args[0])) || Number(args[0]) < 1 || Number(args[0]) > 100) return message.channel.send(embed.setDescription("You Must Specify The Amount Of Messages To Be Deleted Between 1-100!")).then(x => x.delete({timeout: 5000}));
  await message.delete().catch();
  message.channel.bulkDelete(Number(args[0])).then(msjlar => message.channel.send(embed.setDescription(`**Channel Cleaned!**`)).then(x => x.delete({timeout: 5000}))).catch()
};
exports.conf = {
    aliases: ["clean", 'clear', 'chatclear', 'clearchat'],
    usage: "clear 1-100",
    description: "Deletes Messages Up To The Specified Number Of Messages."
}

exports.help = {
    name: "clear",
    cooldown: 5
};