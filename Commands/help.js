const Discord = require('discord.js');
const Settings = require("../Settings.json");

var prefix = Settings.prefix;

exports.run = async(client, message, args) => {

        const help = new Discord.MessageEmbed()

             .setAuthor(`Pasko Help Menu`, "https://cdn.discordapp.com/avatars/846779942921306112/b21528f778df1ad075c76875014f70d6.png") 
             .addField(`Public Commands`, '`ping`, `avatar`, `stats`, `count`, `#`')
             .addField(`Admin Commands`, '`ban`, `unban`, `kick`, `clear`, `slowmode`')
             .addField(`Music Commands`, '`play`, `stop`, `playlist`, `skip`, `pause`, `shuffle`, `resume`, `loop`, `remove`, `volume`, `search`, `now-playing`, `queue`, `join`, `leave`')
             .addField(`Pasko Commands`, '`invite`, `donate`, `report`, `support-server`, `#`')
             .setColor("#323131")
        return message.channel.send(help);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ["help", "help"],
	permLevel : 0
}

exports.help = {
	name : 'help',
	description : "For Show The Help Menu.",
	usage : 'help'
}
