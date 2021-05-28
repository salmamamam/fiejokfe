const Discord = require("discord.js");

const moment = require("moment");
const talkedRecently = new Set();
const { parseZone } = require("moment");
const Settings = require('../Settings.json');
const prefix = Settings.prefix



module.exports.run = async(client, message, args)  => {

 if(!message.member.roles.cache.get("BAN_MEMBERS") && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("You Don't Have Permission To Use This Command.")

 if(!args[0]) return message.channel.send('**Give A Member ID!**')

let user = args[0]

message.guild.members.unban(user)

         const embed = new Discord.MessageEmbed()

        .setAuthor(message.author.username, message.author.avatarURL ({ dynamic : true }))

        .setColor(`#323131`)

        .setDescription(`<@${user}> (\`${user}\`) **UnBanned By** <@${message.author.id}> **From The Server.**

      **• UnBanned By:** <@${message.author.id}> (\`${message.author.id}\`)

      **• UnBanned Channel:** \`${message.channel.name}\`

        `)

        message.channel.send(embed)
        message.react('✅')


};

exports.conf = {
	enabled : true,
	guildOnly : true,
	aliases : ["unban", "unbanmember"],
	permLevel : 0
}

exports.help = {
	name : 'unban',
	description : "For UnBan A Member.",
	usage : 'unban @member'
}


