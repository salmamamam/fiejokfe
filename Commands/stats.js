const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
require("moment-duration-format");

exports.run = async (bot, message, args) => {
  const duration = moment.duration(bot.uptime).format(" D [d], H [h], m [m], s [s]");
  const msg = message

   const paskdevvv = moment.duration(bot.uptime).format(" D [d], H [h], m [m], s [s]");
   const PaskDev = new Discord.MessageEmbed()

  .setColor('#323131')
.setAuthor(`STATS AND INFORMATION`, bot.user.displayAvatarURL())
.setFooter(`My Ping: ${bot.ws.ping}ms`)
	.addFields(
		{ name: '** **', value: '**  **' },
		{ name: '**Number Of Servers**', value: `${bot.guilds.cache.size}`, inline: true },
		{ name: '**Number Of Members**', value: `${bot.users.cache.size}`, inline: true },
		{ name: '**Activity Duration**', value: `${paskdevvv}`, inline: true },
	)

	.addFields(
  	{ name: '** **', value: '**  **' },
		{ name: '**Discord.JS Version**', value: `v${Discord.version}`, inline: true },
		{ name: '**Node.JS Version**', value: `${process.version}`, inline: true },
		{ name: '**Host Platform**', value: `${os.platform()}`, inline: true },
	)

	.addFields(
	  { name: '** **', value: '**  **' },
		{ name: '**CPU**', value: `${os.cpus().map(i => `${i.model}`)[0]}`, inline: true },
		{ name: '**Bit**', value: `${os.arch()}`, inline: true },
		{ name: '**Memory Usage**', value: `${(process.memoryUsage().heapUsed / 512 / 512).toFixed(2)}MB`, inline: true },
	)
   
 return message.channel.send(PaskDev);
  };
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'stats', 'botstats', 'botstats', 'bot-stats '],
  permLevel: 0
};
 
exports.help = {
  name: "stats",
  description: "To Show Bot Stats And Information.",
  usage: "stats"
};