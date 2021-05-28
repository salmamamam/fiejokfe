const Discord = require('discord.js');

exports.run = async(client, message, args) => {
      if (!args[0])
      return message.channel.send(`
        To Set The Slow Mode, You Have To Give A Number!
      `);
  if (args[0] > 1000) return message.channel.send("SlowMode It Can Be Up To 1000.")
    if (isNaN(args[0])) return message.channel.send(`That is not a number!`);
    message.channel.setRateLimitPerUser(args[0]);

const slow = new Discord.MessageEmbed()
.setDescription(`SlowMode Has Been Set To **${args[0]}** Secondes.`)
.setColor("#323131")

   message.channel.send(slow);
};
  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["slow-mode", "slowmode", "set-slowmode"],
  permLevel: 0,
};

exports.help = {
 name: 'slowmode',
  description: 'For Set Channel A Channel SlowMode.',
  usage: 'slowmode [1/1000]',
};